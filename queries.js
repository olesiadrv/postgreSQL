const Pool = require("pg").Pool;
const pool = new Pool({
  user: "student",
  host: "localhost",
  database: "ukd-students",
  password: "4321",
  port: 5432,
});
module.exports = pool;
