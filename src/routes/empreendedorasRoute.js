const express = require("express");
const router = express.Router();
const controller = require("../controllers/empreendedorasControllers");
//const authMiddleware = require("../middlewares/auth");

router.get("/empreendedoras", controller.get);

// FAZER AS ROTAS VIA HEROKU E NÃO LOCALHOST

/**
 * @api {get} /empreendedoras Apresenta todas as empreendedoras
 * @apiName Get Empreendedoras
 * @apiGroup Empreendedoras
 *
 * @apiParam {String} Método geral de apresentação
 *
 * @apiSuccess {String} Todos os objetos 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
    "cpf": 16151815041,
    "nome": "Geovana Almeida",
    "telefone": "(83) 79703-6332",
    "idade": 30,
    "genero": "Feminino",
    "estadoCivil": "Divorciada",
    "escolaridade": "Ensino Superior",
    "tipoNegocio": "Tecnologia",
    "tempoNegocio": 2,
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

router.post("/empreendedoras", controller.post);

router.get("/:cpf", controller.getByCPF);
router.put("/:cpf", controller.updatePhone);

router.delete("/:nome", controller.deleteEntrepreneur);

//router.use(authMiddleware);
//router.get("/escolherFuncao", controller.getEscolherFuncao);


//INCLUIR O CRUD COMPLETO

module.exports = router;