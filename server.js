//const express = require("express");
const app = require("./src/app");
const PORT = process.env.PORT || 3001; 

app.listen(PORT, err => {
  if (err) {
    console.log("Servidor não encontrado. Corrige, amiga!");
  } else {
    console.log(`BORA MENINA ${PORT} ♥ ♥ ♥`);
  }
});
