const express = require("express");
const app = express();
const hbs = require("hbs");
const puerto = process.env.PORT || 3000;
require("./hbs/helpers"); // importando helpers

// MIDDLEWARES
app.use(express.static(__dirname + "/public"));

// HANDLEBARS
hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home", {
    saludo: "ejemplo de texto CAPITALIZADO"
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(puerto, () =>
  console.log(`Escuchando peticiones desde el puerto ${puerto}`)
);
