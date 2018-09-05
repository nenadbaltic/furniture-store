export const totalItems = (cart) => {
    let sum = 0;
    for(let i = 0; i < cart.length; i++) {
        sum += cart[i].quantity;
    }
    return sum;
}

export const itemOrQuantity = (id, cart) => {
    for(let i = 0; i < cart.length; i++) {
        if(cart[i].id === id) {
            return true;
        }
    }
}

export const subTotal = (cart, id) => {
    for(let i = 0; i < cart.length; i++) {
        if(cart[i].id === id) {
            const sub = cart[i].price * cart[i].quantity;
            return sub;
        }
    }
}

export const totalPrice = (cart) => {
    let total = 0;
    for(let i = 0; i < cart.length; i++) {
        const price = cart[i].price * cart[i].quantity;
        total += price;
    }

    return total;
}