const imoveis = require("../dados/imoveis");

function get(req, res) {
    return res.send(imoveis)
}

function getPorld(req, res) {
    let result
    const { id } = req.params

    if (id) {
        result = imoveis.find((elemento) => {
            return elemento.id == id
        })
    }

    if (id > imoveis.length || id == 0) {
        return res.send(`O id ${id} não foi encontrado, pois ele não existe.`)
    }

    res.send(result)
}

module.exports = {
    get,
    getPorld
}