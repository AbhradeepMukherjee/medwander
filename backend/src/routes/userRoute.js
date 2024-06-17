const express = require("express");
const router = express.Router();
const {google} = require("googleapis"); 
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
require('dotenv').config();

const spreadsheetId = process.env.SPREADSHEET_ID;

router.get("/", async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();

  const googleSheets = google.sheets({ version: "v4", auth: client });
  try{

    const getRows = await googleSheets.spreadsheets.values.get({
      auth, 
      spreadsheetId,
      range: "Sheet1"
    })
  
    return res.status(200).json(getRows.data.values);
  }catch(err){
    return res.status(500).json(err)
  }
});

router.post("/submit", async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();
  const googleSheets = google.sheets({ version: "v4", auth: client });
  const { formType, name, countryCode, phoneNumber } = req.body;
  
  if (!formType || !name || !countryCode || !phoneNumber) {
    res.status(400).send("Invalid Input");
  }
  try {
    const newEntry = await prisma.user.create({
      data: { formType, name, countryCode, phoneNumber },
    });
    await googleSheets.spreadsheets.values.append({
      auth, 
      spreadsheetId, 
      range: "Sheet1",
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [
          [id , formType, name, countryCode, phoneNumber]
        ]
      }
    })
    res.status(201).json(newEntry);
  } catch (error) {
    if (error.code === "P2002") {
      return res.status(409).send("Conflict: Duplicate entry");
    }
    res.status(500).json(error.message);
  }
});

module.exports = router;
