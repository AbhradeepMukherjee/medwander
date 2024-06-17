const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/userRoute")
const app = express();
const PORT = process.env.PORT || 8000;

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST",
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(express.json());
app.use(cors(corsOptions));

app.use("/api/v1", userRoute);

app.listen(PORT, () => {
  console.log("Server running on port: ", PORT);
});
