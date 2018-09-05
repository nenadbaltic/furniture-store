// addItem
export const addItem = (item) => {
    return {
        type: 'ADD_ITEM',
        item: item
    }
}

// addQuantity
export const addQuantity = (id) => {
    return {
        type: 'ADD_QUANTITY',
        id: id
    }
}

// removeQuantity
export const removeQuantity = (id) => {
    return {
        type: 'REMOVE_QUANTITY',
        id: id
    }
}

// removeItem
export const removeItem = (id) => {
    return {
        type: 'REMOVE_ITEM',
        id: id
    }
}