const Cart = require('./cart.json')

var data = {
    total_price: 0,
    total_quantity: 0,
    products: []
}

Cart.items.forEach(element => {
    data.products.push({
        name: element.title,
        price: element.price,
        quantity: element.quantity
    })
    data.total_quantity += element.quantity
    data.total_price += element.price * element.quantity
})

module.exports = data
