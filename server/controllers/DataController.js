const fs = require("fs/promises");
const path = require("path");

const getData = async (req, res) => {
  try {
    const filePath = path.join(
      __dirname,
      "..",
      "data",
      `${req.params.filename}.json`
    );

    const data = await fs.readFile(filePath, "utf8");
    res.json(JSON.parse(data));
  } catch (err) {
    res.status(404).json({ error: "File niet gevonden" });
  }
};

module.exports = { getData };
