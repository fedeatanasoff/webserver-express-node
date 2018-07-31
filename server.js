const express = require("express");
const app = express();
const hbs = require("hbs");

// MIDDLEWARES
app.use(express.static(__dirname + "/public"));

// HANDLEBARS
hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home", {
    saludo: "helloooooo",
    anio: new Date().getFullYear()
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    anio: new Date().getFullYear()
  });
});

app.listen(3000, () => console.log("escuchando peticiones en el puerto 3000"));
