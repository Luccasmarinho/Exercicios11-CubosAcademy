const express = require("express");

const { get, getPorld} = require("./controladores/imoveis")

const rota = express();

rota.get("/imoveis", get);
rota.get("/imoveis/:id", getPorld);

module.exports = rota