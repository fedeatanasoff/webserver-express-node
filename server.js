const express = require("express");
const app = express();

app.get("/", (req, res) => {
  //   res.send("hellooooo");
  let fede = {
    nombre: "fede",
    alias: "thexdecline",
    url: req.url
  };

  res.send(fede);
});

app.listen(3000, () => console.log("escuchando peticiones en el puerto 3000"));
