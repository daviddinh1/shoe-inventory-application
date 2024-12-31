const db = require("../db/queries");

async function getAllBrands(req, res) {
  const brands = await db.getAllBrands();
  // console.log("controller outputs brands: ", brands);
  res.render("home", { brands: brands });
}

async function getOneBrand(req, res) {
  const { shoeBrand } = req.params;
  const brand = await db.getOneBrand(shoeBrand);
  console.log("brand:", brand);
  res.render("brandPage", { brand: brand, shoeBrand: shoeBrand });
}

async function getForm(req, res) {
  // console.log("get form params", req.params);
  res.render("createShoe");
}

async function addShoe(req, res) {
  const { brand_id, shoe } = req.body;
  await db.addShoe(brand_id, shoe);
  res.redirect("/");
}

async function getUpdateForm(req, res) {
  res.render("updateShoe");
}

async function updateShoe(req, res) {
  const { shoe_name, shoe } = req.body;
  await db.updateShoe(shoe_name, shoe);
  res.redirect("/");
}

module.exports = {
  getAllBrands,
  getOneBrand,
  getForm,
  addShoe,
  getUpdateForm,
  updateShoe,
};
