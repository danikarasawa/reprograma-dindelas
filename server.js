//const express = require("express");
const app = require("./src/app");
const PORT = process.env.PORT || 3001; //PROCESS.ENV.PORT é padrão do Heroku

app.listen(PORT, (err) => {
  if (err) {
    console.log('Servidor não encontrado. Corrige, amiga!');
  } else {
    console.log(`BORA MENINA ${PORT} ♥ ♥ ♥`)
  };
});