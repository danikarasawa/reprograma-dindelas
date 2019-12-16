const express = require("express");
const router = express.Router();
const investidoraAuthController = require("../controllers/sessionInvestidorasControllers");

/**
 * @api {post} /SI/:cpf Requisição via CNPJ da investidora para realizar login
 * @apiName accessToken
 * @apiGroup Session Investidoras
 * 
 * @apiParam (Request Body) {Number} cnpj Dado individual
 * 
 * @apiSuccessExample {Objeto} 
 *    user: {
 *       id,
 *       cnpj,
 *     }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 
 *     {
 *       "error": "Errado"
 *     }
 */
router.post("/investidoras", investidoraAuthController.accessToken);

module.exports = router;