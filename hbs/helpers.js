const hbs = require("hbs");

hbs.registerHelper("getAnio", () => {
  return new Date().getFullYear();
});
hbs.registerHelper("capitalizar", texto => {
  let array = texto.split(" ");
  array.forEach((palabra, index) => {
    array[index] =
      palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
  });

  return array.join(" ");
});
