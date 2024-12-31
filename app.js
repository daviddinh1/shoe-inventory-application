const express = require("express");
const path = require("path");
const app = express();
//add a route
const appRouter = require("./routes/appRouter");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//put route right here
app.use("/", appRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));
