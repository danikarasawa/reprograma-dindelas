const app = require("./src/app");
const port = process.env.port || 3001; //PROCESS.ENV.PORT é padrão do Heroku

app.listen(port, (err) => {
  if (err) {
    console.log('Servidor não encontrado. Corrige, amiga!');
  } else {
    console.log(`Tá um tudo na porta ${port} ♥`)
  };
});