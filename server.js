const express = require("express");
const app = express();

// MIDDLEWARES
app.use(express.static(__dirname + "/public"));

// HANDLEBARS
app.set("view engine", "hbs");

app.get("/", (requestAnimationFrame, res) => {
  res.render("home", {
    saludo: "helloooooo",
    anio: new Date().getFullYear()
  });
});

app.listen(3000, () => console.log("escuchando peticiones en el puerto 3000"));
