const { Router } = require("express");
const appController = require("../controllers/appController");
const appRouter = Router();

appRouter.get("/", appController.getAllBrands);

//this is for the form we are trying to create
appRouter.get("/create", appController.getForm);
appRouter.post("/create", appController.addShoe);

appRouter.get("/:shoeBrand", appController.getOneBrand);

module.exports = appRouter;
