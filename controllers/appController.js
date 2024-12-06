const db = require("../db/queries");

async function getAllBrands(req, res) {
  const brands = await db.getAllBrands();
  console.log("controller outputs brands: ", brands);
  res.render("home", { brands: brands });
}

async function getOneBrand(req, res) {
  const { shoeBrand } = req.params;
  const brand = await db.getOneBrand(shoeBrand);
  res.render("brandPage", { brand: brand, shoeBrand: shoeBrand });
}
module.exports = {
  getAllBrands,
  getOneBrand,
};
