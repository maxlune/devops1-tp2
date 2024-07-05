const { Pool } = require("pg");

const dbConfig = {
  user: "devops1",
  password: "admin",
  host: "db",
  port: 5432,
  database: "devops1",
};

const pool = new Pool(dbConfig);

const createTable = `
  DROP TABLE IF EXISTS users;
  CREATE TABLE users(
    id serial PRIMARY KEY,
    name VARCHAR(255)
  );
`;

pool.query(createTable, (err, result) => {
  if (err) {
    console.error("Error creating table", err);
  } else {
    console.log("Table created successfully");
  }
});

module.exports = pool;
