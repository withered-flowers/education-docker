const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://mongodb:mongodb@127.0.0.1:27017";
const DATABASE_NAME = process.env.DATABASE_NAME || "development";

const cors = require("cors");
const express = require("express");

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const app = express();
const port = process.env.PORT || 10001;

(async () => {
  await mongoose.connect(DATABASE_URL, {
    dbName: DATABASE_NAME,
  });
})();

const LoremIpsum = mongoose.model(
  "LoremIpsum",
  new mongoose.Schema(
    {
      name: String,
      quantity: Number,
    },
    {
      collection: "LoremIpsum",
    }
  )
);

app.use(cors());

app.get("/api", async (req, res) => {
  try {
    const loremIpsums = await LoremIpsum.find({});
    res.status(200).json({ data: loremIpsums });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, (_) => console.log(`Apps is working at :${port}/api`));
