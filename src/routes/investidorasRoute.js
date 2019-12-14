const express = require("express");
const router = express.Router();
const controller = require("../controllers/investidorasControllers");
//const authMiddleware = require("../middlewares/auth");

router.get("/investidoras", controller.get);
router.post("/investidoras", controller.post);

router.get("/:cnpj", controller.getByCNPJ);
router.put("/:cnpj", controller.updateBusiness);

router.delete("/:nome", controller.deleteInvestor);

//router.use(authMiddleware);
//router.get("/escolherFuncao", controller.getEscolherFuncao);
//INCLUIR O CRUD COMPLETO

module.exports = router;

