const FIRST_SERVER_URL =
  process.env.FIRST_SERVER_URL || "http://localhost:10000/api";
const SECOND_SERVER_URL =
  process.env.SECOND_SERVER_URL || "http://localhost:10001/api";

const express = require("express");
const app = express();

const port = process.env.PORT || 9999;

app.get("/", async (_, res) => {
  try {
    const data1stServer = await (await fetch(FIRST_SERVER_URL)).json();
    const data2ndServer = await (await fetch(SECOND_SERVER_URL)).json();

    res.status(200).json({
      data: {
        firstServer: data1stServer,
        secondServer: data2ndServer,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Something Wicked Happened" });
  }
});

app.listen(port, (_) => console.log(`Apps is working at :${port}/api`));
