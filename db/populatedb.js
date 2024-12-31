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
  brand_id INTEGER REFERENCES brands(id),
  img_link text
 );

 INSERT INTO shoes (shoe,brand_id,img_link)
 VALUES ('Jordan 1 Bred', 1, '/images/Air-Jordan-1-Retro-High-OG-Bred-Patent-Product.avif'), ('Air Max 97 Gundam',2, '/images/air_max_98_gundam.webp'), ('New Balance 990 Burgandy',3,'/images/new-balance-990-burgundy-horween-leather-1.webp');
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
