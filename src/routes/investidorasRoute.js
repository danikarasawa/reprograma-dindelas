const express = require("express");
const router = express.Router();
const controller = require("../controllers/investidorasControllers");
const authMiddleware = require("../middlewares/auth");

/**
 * @api {get} /i/investidoras Lista completa de investidoras
 * @apiName get
 * @apiGroup Investidoras
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *   "cnpj": Number,
 *   "nome": "String",
 *   "telefone": "String",
 *   "genero": "String",
 *   "ticket": Number,
 *   "tipoNegocio": ["String"],
 *   "taxaJuros": Number,
 *   "parcelasMaximas": Number,
 *   "investimentoTotal": Number
 *     }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 
 *     {
 *       "error": "Internal Server Error"
 *     }
 */
router.get("/investidoras", controller.get);

/**
 * @api {post} /i/register Registro de login e senha com encriptação JWT e Bcrypt da investidora 
 * @apiName post
 * @apiGroup Investidoras
 *
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 201 CREATED
 * {
 *       status: true, 
 *       message: "Investidora cadastrada com sucesso!"
 *    }
 *     
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 
 *     {
 *       "error": "Internal Server Error"
 *     }
 */
router.post("/register", controller.postHashPass)
/**
 * @api {post} /i/investidoras Cadastro inicial da investidora
 * @apiName post
 * @apiGroup Investidoras
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *        status: true,
 *        message: "♫ Investidora incluída com sucesso ♫"
 *      }
 *       
 * @apiParam (Request Body) {Number} cnpj CNPJ como id
 * @apiParam (Request Body) {String} nome Nome completo
 * @apiParam (Request Body) {String} telefone Contato primário
 * @apiParam (Request Body) {String} genero Dado individual
 * 
 * @apiParam (Request Body) {Number} ticket valor máximo de empréstimo individual
 * @apiParam (Request Body) {String} tipoNegócio tipo de negócios elegíveis por essa investidora
 * @apiParam (Request Body) {Number} taxaJuros taxa de juros mensal
 * @apiParam (Request Body) {Number} parcelasMaximas quantidade de parcelas máxima
 * @apiParam (Request Body) {Number} investimentoTotal valor total disponível para investimento 
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 
 *     {
 *       "error": "Internal Server Error"
 *     }
 */
router.post("/investidoras", controller.post);

/**
 * @api {get} /i/:cnpj Requisição via CNPJ da investidora
 * @apiName get
 * @apiGroup Investidoras
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *       
 *     {
 *   "cnpj": Number,
 *   "nome": "String",
 *   "telefone": "String",
 *   "genero": "String",
 *   "ticket": Number,
 *   "tipoNegocio": ["String"],
 *   "taxaJuros": Number,
 *   "parcelasMaximas": Number,
 *   "investimentoTotal": Number
 *     }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 
 *     {
 *       message: `Infelizmente não localizamos essa investidora com ${cnpj}`
 *     }
 */
router.get("/:cnpj", controller.getByCNPJ);

/**
 * @api {put} /i/:cnpj Requisição via CNPJ da empreendedora para atualizar tipo de negócio
 * @apiName put
 * @apiGroup Investidoras
 * 
 * @apiParam (Request Body) {String} tipoNegocio Dado sensível
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *       
 *     { message: "Tipo de Negócio atualizado com sucesso!" }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 
 *     {
 *       "error": "Internal Server Error"
 *     }
 */
router.put("/:cnpj", controller.updateBusiness);

/**
 * @api {delete} /i/:nome Requisição via nome da investidora para deletar cadastro
 * @apiName delete
 * @apiGroup Investidoras
 * 
 * @apiParam (Request Body) {String} nome Nome como id
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *       
 *     { message: "Investidora removida com sucesso..." }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 
 *     {
 *       message: "Infelizmente não localizamos essa investidora"
 *     }
 */
router.delete("/:nome", controller.deleteInvestor);

router.use(authMiddleware);

module.exports = router;