const { Router } = require("express");
const appController = require("../controllers/appController");
const appRouter = Router();

appRouter.get("/", appController.getAllBrands);
appRouter.get("/:shoeBrand", appController.getOneBrand);

module.exports = appRouter;
