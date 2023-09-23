const express = require("express");

const app = express();

const rota = require("./roteadores")

const porta = 3000;

app.use(rota);
app.listen(porta, () => console.log("Servidor rodando na porta", porta));