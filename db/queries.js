const pool = require("./pool");

async function getAllBrands() {
  const { rows } = await pool.query("SELECT * FROM shoes");
  //console.log("its outputting the brands:", rows);
  return rows;
}

async function getOneBrand(brand) {
  let idNum = 0;
  if (brand === "jordan") {
    idNum = 1;
  } else if (brand === "nike") {
    idNum = 2;
  } else if (brand === "newbalance") {
    idNum = 3;
  }
  const { rows } = await pool.query(
    `SELECT shoe, img_link FROM shoes WHERE brand_id = ${idNum}`
  );
  return rows;
}

async function addShoe(value, name) {
  const parseVal = Number(value);
  await pool.query("INSERT INTO shoes (shoe, brand_id) VALUES ($1,$2)", [
    name,
    parseVal,
  ]);
}

async function updateShoe(shoe_name, shoe) {
  //add query that updates db later
  await pool.query("UPDATE shoes SET shoe = ($1) WHERE shoe = ($2)", [
    shoe,
    shoe_name,
  ]);
}
module.exports = {
  getAllBrands,
  getOneBrand,
  addShoe,
  updateShoe,
};
