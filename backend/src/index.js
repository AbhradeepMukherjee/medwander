const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/userRoute")
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.use("/api/v1", userRoute);

app.listen(PORT, () => {
  console.log("Server running on port: ", PORT);
});
