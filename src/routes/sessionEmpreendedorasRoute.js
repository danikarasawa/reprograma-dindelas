const express = require("express");
const router = express.Router();
const EmpreendedoraAuthController = require("../controllers/sessionEmpreendedorasControllers");

router.post("/login", EmpreendedoraAuthController.accessToken);

module.exports = router;