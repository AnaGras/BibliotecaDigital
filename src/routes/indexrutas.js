const {Router} = require('express');
const router = Router();

router.get("/", (req, res) => {
  console.log("Alguien ha accedido al servidor");
  res.send("Bienvenido a la biblioteca virtual");
});

router.get("/libros", (req, res) => {
  console.log("Consulta de libros");
  res.send("Explora nuestra colección de libros digitales");
});

router.get("/autores", (req, res) => {
  console.log("Consulta de autores");
  res.send("Consulta de autores");
});

router.get("/categorias", (req, res) => {
  console.log("Consulta de categorías");
  res.send("Encuentra libros organizados por categorías");
});

router.get("/ayuda", (req, res) => {
  console.log("Solicitud de ayuda");
  res.send("¿Necesitas ayuda? La biblioteca virtual está para ayudarte");
});


module.exports = router;