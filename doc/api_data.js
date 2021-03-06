define({ "api": [
  {
    "type": "delete",
    "url": "/e/:nome",
    "title": "Requisição via cpf da empreendedora para deletar cadastro",
    "name": "deleteEntrepreneur",
    "group": "Empreendedoras",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "cpf",
            "description": "<p>CPF como id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Empreendedora removida com sucesso...\"\n}",
          "type": "Objeto"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200\n{\n  \"message\": \"Infelizmente não localizamos essa investidora\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/empreendedorasRoute.js",
    "groupTitle": "Empreendedoras"
  },
  {
    "type": "get",
    "url": "/e/empreendedoras",
    "title": "Lista completa de empreendedoras",
    "name": "get",
    "group": "Empreendedoras",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n\"cpf\": Number,\n\"nome\": \"String\",\n\"telefone\": \"String\",\n\"idade\": Number,\n\"genero\": \"String\",\n\"estadoCivil\": \"String\",\n\"escolaridade\": \"String\",\n\"tipoNegocio\": \"String\",\n\"tempoNegocio\": Number\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500\n{\n  \"error\": \"Internal Server Error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/empreendedorasRoute.js",
    "groupTitle": "Empreendedoras"
  },
  {
    "type": "get",
    "url": "/e/:cpf",
    "title": "Requisição via CPF da empreendedora",
    "name": "getByCPF",
    "group": "Empreendedoras",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n\"cpf\": Number,\n\"nome\": \"String\",\n\"telefone\": \"String\",\n\"idade\": Number,\n\"genero\": \"String\",\n\"estadoCivil\": \"String\",\n\"escolaridade\": \"String\",\n\"tipoNegocio\": \"String\",\n\"tempoNegocio\": Number\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500\n{\n  \"error\": \"Infelizmente não localizamos essa empreendedora com ${cpf}\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/empreendedorasRoute.js",
    "groupTitle": "Empreendedoras"
  },
  {
    "type": "post",
    "url": "/e/register",
    "title": "Registro de login e senha com encriptação JWT e Bcrypt da empreendedora",
    "name": "post",
    "group": "Empreendedoras",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 201 CREATED\n{\n      status: true,\n      message: \"Empreendedora cadastrada com sucesso!\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500\n{\n  \"error\": \"Internal Server Error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/empreendedorasRoute.js",
    "groupTitle": "Empreendedoras"
  },
  {
    "type": "post",
    "url": "/e/empreendedoras",
    "title": "Cadastro inicial da empreendedora",
    "name": "post",
    "group": "Empreendedoras",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 201 CREATED\n{\n      status: true,\n      message: \"♥ Empreendedora incluída com sucesso ♥\"\n   }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "cpf",
            "description": "<p>CPF como id</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome completo</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "telefone",
            "description": "<p>Contato primário</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "idade",
            "description": "<p>Dado individual</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "genero",
            "description": "<p>Dado individual</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "estadoCivil",
            "description": "<p>Dado individual</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "escolaridade",
            "description": "<p>Dado individual</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "tipoNegocio",
            "description": "<p>Dado sensível</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "tempoNegocio",
            "description": "<p>Dado sensível</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500\n{\n  \"error\": \"Internal Server Error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/empreendedorasRoute.js",
    "groupTitle": "Empreendedoras"
  },
  {
    "type": "put",
    "url": "/e/:cpf",
    "title": "Requisição via CPF da empreendedora para atualizar telefone",
    "name": "updatePhone",
    "group": "Empreendedoras",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "telefone",
            "description": "<p>Dado individual</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Telefone atualizado com sucesso!\"\n}",
          "type": "Objeto"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500\n{\n  \"error\": \"Internal Server Error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/empreendedorasRoute.js",
    "groupTitle": "Empreendedoras"
  },
  {
    "type": "delete",
    "url": "/i/:nome",
    "title": "Requisição via nome da investidora para deletar cadastro",
    "name": "delete",
    "group": "Investidoras",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome como id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{ message: \"Investidora removida com sucesso...\" }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500\n{\n  message: \"Infelizmente não localizamos essa investidora\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/investidorasRoute.js",
    "groupTitle": "Investidoras"
  },
  {
    "type": "get",
    "url": "/i/investidoras",
    "title": "Lista completa de investidoras",
    "name": "get",
    "group": "Investidoras",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n\"cnpj\": Number,\n\"nome\": \"String\",\n\"telefone\": \"String\",\n\"genero\": \"String\",\n\"ticket\": Number,\n\"tipoNegocio\": [\"String\"],\n\"taxaJuros\": Number,\n\"parcelasMaximas\": Number,\n\"investimentoTotal\": Number\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500\n{\n  \"error\": \"Internal Server Error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/investidorasRoute.js",
    "groupTitle": "Investidoras"
  },
  {
    "type": "get",
    "url": "/i/:cnpj",
    "title": "Requisição via CNPJ da investidora",
    "name": "get",
    "group": "Investidoras",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n\n  {\n\"cnpj\": Number,\n\"nome\": \"String\",\n\"telefone\": \"String\",\n\"genero\": \"String\",\n\"ticket\": Number,\n\"tipoNegocio\": [\"String\"],\n\"taxaJuros\": Number,\n\"parcelasMaximas\": Number,\n\"investimentoTotal\": Number\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500\n{\n  message: `Infelizmente não localizamos essa investidora com ${cnpj}`\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/investidorasRoute.js",
    "groupTitle": "Investidoras"
  },
  {
    "type": "post",
    "url": "/i/register",
    "title": "Registro de login e senha com encriptação JWT e Bcrypt da investidora",
    "name": "post",
    "group": "Investidoras",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 201 CREATED\n{\n      status: true,\n      message: \"Investidora cadastrada com sucesso!\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500\n{\n  \"error\": \"Internal Server Error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/investidorasRoute.js",
    "groupTitle": "Investidoras"
  },
  {
    "type": "post",
    "url": "/i/investidoras",
    "title": "Cadastro inicial da investidora",
    "name": "post",
    "group": "Investidoras",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n   status: true,\n   message: \"♫ Investidora incluída com sucesso ♫\"\n }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "cnpj",
            "description": "<p>CNPJ como id</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome completo</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "telefone",
            "description": "<p>Contato primário</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "genero",
            "description": "<p>Dado individual</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "ticket",
            "description": "<p>valor máximo de empréstimo individual</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "tipoNeg",
            "description": "<p>ócio tipo de negócios elegíveis por essa investidora</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "taxaJuros",
            "description": "<p>taxa de juros mensal</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "parcelasMaximas",
            "description": "<p>quantidade de parcelas máxima</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "investimentoTotal",
            "description": "<p>valor total disponível para investimento</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500\n{\n  \"error\": \"Internal Server Error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/investidorasRoute.js",
    "groupTitle": "Investidoras"
  },
  {
    "type": "put",
    "url": "/i/:cnpj",
    "title": "Requisição via CNPJ da empreendedora para atualizar tipo de negócio",
    "name": "put",
    "group": "Investidoras",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "tipoNegocio",
            "description": "<p>Dado sensível</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{ message: \"Tipo de Negócio atualizado com sucesso!\" }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500\n{\n  \"error\": \"Internal Server Error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/investidorasRoute.js",
    "groupTitle": "Investidoras"
  },
  {
    "type": "post",
    "url": "/SE/:cpf",
    "title": "Requisição via CPF da empreendedora para realizar login",
    "name": "accessToken",
    "group": "Session_Empreendedoras",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "cpf",
            "description": "<p>Dado individual</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "user: {",
          "content": "user: {\n   id,\n   cpf,\n }",
          "type": "Objeto"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401\n{\n  \"error\": \"Errado\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/sessionEmpreendedorasRoute.js",
    "groupTitle": "Session_Empreendedoras"
  },
  {
    "type": "post",
    "url": "/SI/:cpf",
    "title": "Requisição via CNPJ da investidora para realizar login",
    "name": "accessToken",
    "group": "Session_Investidoras",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "cnpj",
            "description": "<p>Dado individual</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "user: {",
          "content": "user: {\n   id,\n   cnpj,\n }",
          "type": "Objeto"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401\n{\n  \"error\": \"Errado\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/sessionInvestidorasRoute.js",
    "groupTitle": "Session_Investidoras"
  }
] });
