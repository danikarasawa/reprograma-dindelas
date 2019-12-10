const app = require("./src/app");
const port = 3001;

app.listen(port, (err) => {
  if (err) {
    console.log('Servidor não encontrado. Corrige, amiga!');
  } else {
    console.log(`Tá um tudo na porta ${port} ♥`)
  };
});