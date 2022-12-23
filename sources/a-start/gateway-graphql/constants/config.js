const FIRST_SERVER_URL =
  process.env.FIRST_SERVER_URL || "http://localhost:10000/api";
const SECOND_SERVER_URL =
  process.env.SECOND_SERVER_URL || "http://localhost:10001/api";

module.exports = { FIRST_SERVER_URL, SECOND_SERVER_URL };
