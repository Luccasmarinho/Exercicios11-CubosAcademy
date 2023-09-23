const express = require("express");

const { vezDeJogar, removerJogador, adicionarJogador, removerTodosOsJogadores } = require("./controladores/rundControllerEvolution");

const rota = express();

rota.get("/", vezDeJogar);
rota.get("/remover", removerJogador);
rota.get("/adicionar", adicionarJogador);
rota.get("/removeall", removerTodosOsJogadores);

module.exports = rota