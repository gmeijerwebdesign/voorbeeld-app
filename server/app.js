const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const dataRoutes = require("./routes/DataRoute");
app.use("/data", dataRoutes);

app.listen(3000, () => {
  console.log("Server draait op http://localhost:3000");
});
