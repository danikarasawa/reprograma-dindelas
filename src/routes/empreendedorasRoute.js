const express = require("express");
const router = express.Router();
const controller = require("../controllers/empreendedorasControllers");
const authMiddleware = require("../middlewares/auth");

/**
 * @api {get} /e/empreendedoras Lista completa de empreendedoras
 * @apiName get
 * @apiGroup Empreendedoras
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *   "cpf": Number,
 *   "nome": "String",
 *   "telefone": "String",
 *   "idade": Number,
 *   "genero": "String",
 *   "estadoCivil": "String",
 *   "escolaridade": "String",
 *   "tipoNegocio": "String",
 *   "tempoNegocio": Number
 *     }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 
 *     {
 *       "error": "Internal Server Error"
 *     }
 */
router.get("/empreendedoras", controller.get);

/**
 * @api {post} /e/empreendedoras Cadastro inicial da empreendedora
 * @apiName post
 * @apiGroup Empreendedoras
 *
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 201 CREATED
 * {
 *       status: true, 
 *       message: "♥ Empreendedora incluída com sucesso ♥"
 *    }
 *     
 * @apiParam (Request Body) {Number} cpf CPF como id
 * @apiParam (Request Body) {String} nome Nome completo
 * @apiParam (Request Body) {String} telefone Contato primário
 * @apiParam (Request Body) {Number} idade Dado individual
 * @apiParam (Request Body) {String} genero Dado individual
 * @apiParam (Request Body) {String} estadoCivil Dado individual
 * @apiParam (Request Body) {String} escolaridade Dado individual
 * @apiParam (Request Body) {String} tipoNegocio Dado sensível
 * @apiParam (Request Body) {Number} tempoNegocio Dado sensível 
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 
 *     {
 *       "error": "Internal Server Error"
 *     }
 */

router.post("/register", controller.postHashPass)
//router.use(authMiddleware);

router.post("/empreendedoras", controller.post);

/**
 * @api {get} /e/:cpf Requisição via CPF da empreendedora
 * @apiName getByCPF
 * @apiGroup Empreendedoras
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *   "cpf": Number,
 *   "nome": "String",
 *   "telefone": "String",
 *   "idade": Number,
 *   "genero": "String",
 *   "estadoCivil": "String",
 *   "escolaridade": "String",
 *   "tipoNegocio": "String",
 *   "tempoNegocio": Number
 *     }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 
 *     {
 *       "error": "Infelizmente não localizamos essa empreendedora com ${cpf}"
 *     }
 */
router.get("/:cpf", controller.getByCPF);

/**
 * @api {put} /e/:cpf Requisição via CPF da empreendedora para atualizar telefone
 * @apiName updatePhone
 * @apiGroup Empreendedoras
 * 
 * @apiParam (Request Body) {String} telefone Dado individual
 * 
 * @apiSuccessExample {Objeto} 
 *    HTTP/1.1 200 OK
 *    { 
 *       "message": "Telefone atualizado com sucesso!" 
 *    }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 
 *     {
 *       "error": "Internal Server Error"
 *     }
 */
router.put("/:cpf", controller.updatePhone);

/**
 * @api {delete} /e/:nome Requisição via cpf da empreendedora para deletar cadastro
 * @apiName deleteEntrepreneur
 * @apiGroup Empreendedoras
 * 
 * @apiParam (Request Body) {Number} cpf CPF como id
 * 
 * @apiSuccessExample {Objeto} 
 *    HTTP/1.1 200 OK
 *    { 
 *       "message": "Empreendedora removida com sucesso..." 
 *    }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 200 
 *     {
 *       "message": "Infelizmente não localizamos essa investidora"
 *     }
 */
router.delete("/:cpf", controller.deleteEntrepreneur);

//router.use(authMiddleware);
//router.get("/escolherFuncao", controller.getEscolherFuncao);

module.exports = router;