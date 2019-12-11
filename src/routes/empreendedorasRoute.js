const express = require("express");
const router = express.Router();
const controller = require("../controllers/empreendedorasControllers");
//const authMiddleware = require("../middlewares/auth");

router.get("/empreendedoras", controller.get);
//router.post("/empreendedoras", controller.post);
//router.use(authMiddleware);
//router.get("/escolherFuncao", controller.getEscolherFuncao);
//INCLUIR O CRUD COMPLETO

module.exports = router;