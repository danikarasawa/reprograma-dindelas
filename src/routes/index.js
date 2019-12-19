const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
  res.status(200).send({
    title: "MELI + {Reprograma} | Projeto Final | Dani Karasawa",
    text: "Só vem 2020 ♥",
    version: "1.0.0"
  });
});

module.exports = router;
