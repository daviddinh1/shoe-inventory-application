require("dotenv").config();
const { Client } = require("pg");

const SQL = `
 CREATE TABLE IF NOT EXISTS brands (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  brand VARCHAR(20)
 );

 INSERT INTO brands (brand)
 VALUES ('Jordan'), ('Nike'), ('New Balance');

 CREATE TABLE IF NOT EXISTS shoes (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  shoe VARCHAR(30),
  brand_id INTEGER REFERENCES brands(id)
 );

 INSERT INTO shoes (shoe,brand_id)
 VALUES ('Jordan 1', 1), ('Air Max 90',2), ('New Balance 990',3);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.ROLE_NAME}:${process.env.ROLE_PASS}@localhost:5432/shoe_application`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();

//add img link later or way to get image for shoe
