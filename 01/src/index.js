const express = require("express");
const app = express();
const porta = 3000;

const rotas = require("./roteadores");

app.use(rotas);

app.listen(porta, () => console.log(`Servidor iniciado na porta ${porta}`));