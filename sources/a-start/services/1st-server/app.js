const cors = require("cors");
const express = require("express");

const { Task } = require("./models");

const app = express();
const port = process.env.PORT || 10000;

app.use(cors());

app.get("/api", async (_, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json({ data: tasks });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, (_) => console.log(`Apps is working at :${port}/api`));
