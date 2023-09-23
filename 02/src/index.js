const express = require("express");
const app = express();
const rota = require("./roteadores");

app.use(rota);

app.listen(8000, () => console.log("Servidor rodando"));