const express = require("express");
const router = express.Router();
const empreendedoraAuthController = require("../controllers/sessionEmpreendedorasControllers");

/**
 * @api {post} /SE/:cpf Requisição via CPF da empreendedora para realizar login
 * @apiName accessToken
 * @apiGroup Session Empreendedoras
 *
 * @apiParam (Request Body) {Number} cpf Dado individual
 *
 * @apiSuccessExample {Objeto}
 *    user: {
 *       id,
 *       cpf,
 *     }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401
 *     {
 *       "error": "Errado"
 *     }
 */
router.post("/login", empreendedoraAuthController.accessToken);

module.exports = router;
