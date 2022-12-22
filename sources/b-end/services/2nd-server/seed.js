const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://mongodb:mongodb@127.0.0.1:27017";
const DATABASE_NAME = process.env.DATABASE_NAME || "development";

const { faker } = require("@faker-js/faker");

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

(async () => {
  const loremIpsums = [];

  for (let i = 0; i < 100; i++) {
    loremIpsums.push({
      name: faker.lorem.words(3),
      quantity: faker.datatype.number({
        max: 100,
      }),
    });
  }

  await mongoose.connect(DATABASE_URL, {
    dbName: DATABASE_NAME,
  });

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

  // bulkWirte the loremIpsums
  await LoremIpsum.bulkWrite(
    loremIpsums.map((loremIpsum) => ({
      insertOne: {
        document: loremIpsum,
      },
    }))
  );

  console.log("Done");

  await mongoose.disconnect();

  console.log("Connection closed");
})();
