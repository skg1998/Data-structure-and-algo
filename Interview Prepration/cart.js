//shoping feature
const user = {
    name: 'kim',
    active: true,
    cart: [],
    purchase: []
}

//compose
const compose = (f, g) => (...args) => f(g(...args));

function purchaseItem(...fns) {
    return fns.reduce(compose);
}

purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItem,
    itemToCart
)(user, { name: 'laptop', price: 200 })


function itemToCart(user, item) {
    let updateCart = user.cart.concat(item);
    return Object.assign({}, user, { cart: updateCart })
}

function applyTaxToItem(user) {
    let { cart } = user;
    let tax = 1.3;
    const updatedCart = cart.map(item => {
        return {
            name: item.name,
            price: item.price * tax
        }
    })
    return Object.assign({}, user, { cart: updatedCart })
}

function buyItem(user) {
    return Object.assign({}, user, { purchase: user.cart })
}

function emptyCart(user) {
    return Object.assign({}, user, { cart: [] })
}

//Implementing a cart
//Add a cart
//Add 3% text to item in cart
// Buy item : purchase
// Empty cart

//Bonus:
//aqccept refunds
//Track user history