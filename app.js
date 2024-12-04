const express = require("express");
const app = express();
//add a route

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
//put route right here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));
