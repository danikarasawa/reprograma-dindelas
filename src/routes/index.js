const express = require("express");
const router = express.Router();

router.get("/", function(req, res){
    res.status(200).send({
        title: "Reprograma Projeto Final",
        text: "Só vem 2020 ♥",
        version: "1.0.0"
      })
}); 

module.exports = router;