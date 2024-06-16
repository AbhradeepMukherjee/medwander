const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000;
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST",
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log("Server running on port: ", PORT);
});
