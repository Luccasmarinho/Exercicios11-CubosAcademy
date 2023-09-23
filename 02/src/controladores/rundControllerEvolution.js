const jogadores = require("../banco-de-dados");

let i = 0
function vezDeJogar(req, res) {
    res.send(`É a vez de ${jogadores[i]} jogar`)
    i++
    if (i > jogadores.length - 1) {
        i = 0
    }
    
}

function removerJogador(req, res) {
    const { indice } = req.query
    if (indice) {
        jogadores.splice(indice, 1)
    }

    if (indice > jogadores.length - 1) {
        return res.send(`Não existe jogador no índice informado ${indice} para ser removido.`)
    }
    return res.send(jogadores)
}

function adicionarJogador(req, res) {
    const { nome, indice } = req.query;

    if (indice > jogadores.length) {
        return res.send(`O índice informado ${indice} não existe no array. Novo jogador não adicionado.`);
    } else if (nome && indice) {
        jogadores.splice(indice, 0, nome)
    } else if (nome) {
        jogadores.push(nome)
    }

    res.send(jogadores)
}

function removerTodosOsJogadores(req, res) {
    jogadores.splice(0, jogadores.length)
    res.send(jogadores)
}

module.exports = {
    vezDeJogar,
    removerJogador,
    adicionarJogador,
    removerTodosOsJogadores
}