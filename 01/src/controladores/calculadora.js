function somar(req, res) {
    const { num1, num2 } = req.query

    if (!isNaN(Number(num1)) && !isNaN(Number(num2)))  {
        return res.send(`${Number(num1) + Number(num2)}`)
    }
}

function subtrair(req, res) {
    const { num1, num2 } = req.query

    if (!isNaN(Number(num1)) && !isNaN(Number(num2)))  {
        return res.send(`${num1 - num2}`)
    }
}

function multiplicar(req, res) {
    const { num1, num2 } = req.query

    if (!isNaN(Number(num1)) && !isNaN(Number(num2)))  {
        return res.send(`${num1 * num2}`)
    }
}

function dividir(req, res) {
    const { num1, num2 } = req.query

    if (!isNaN(Number(num1)) && !isNaN(Number(num2)))  {
        return res.send(`${num1 / num2}`)
    }
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}