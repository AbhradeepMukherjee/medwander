const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
router.post("/submit", async (req, res) => {
  const { formType, name, countryCode, phoneNumber } = req.body;
  
  if (!formType || !name || !countryCode || !phoneNumber) {
    res.status(400).send("Invalid Input");
  }
  try {
    const newEntry = await prisma.user.create({
      data: { formType, name, countryCode, phoneNumber },
    });
    res.status(201).json(newEntry);
  } catch (error) {
    if (error.code === "P2002") {
      return res.status(409).send("Conflict: Duplicate entry");
    }
    res.status(500).json(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const entries = await prisma.user.findMany();
    return res.json(entries);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
