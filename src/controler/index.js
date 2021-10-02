const inquirer = require('inquirer')

function Show(data) {
    const options = [
        {
            id: 1,
            name: 'Valor total da compra'
        },
        {
            id: 2,
            name: 'Quantidade total de Produtos'
        },
        {
            id: 3,
            name: 'Quais são os Produtos do carrinho?'
        },
    ]
    return inquirer.prompt([
        {
            type: 'list',
            name: 'question',
            message: 'O que você deseja saber ?',
            choices: options
        }
    ]).then(response => {
        if(response.question == options[0].name) {
            console.log(data.total_price)
        } else if (response.question == options[1].name) {
            console.log(data.total_quantity)
        } else {
            console.log(data.products)
        }
        
    })
}

module.exports = Show