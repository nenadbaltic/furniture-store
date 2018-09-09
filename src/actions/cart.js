import database from '../firebase/firebase';

// addItem
export const addItem = (item) => {
    return {
        type: 'ADD_ITEM',
        item: item
    }
}

export const startAddItem = (itemData) => {
    return (dispatch) => {
        const { id, title = '', price = '', description = '', image = '', quantity = 1 } = itemData;
        const item = { id, title, price, description, image, quantity };

        return database.ref('users').push(item).then((ref) => {
            dispatch(addItem({
                ...item,
                dbId: ref.key,
            }))
        })
    }
}


// addQuantity
export const addQuantity = (dbId, quantity) => {
    return {
        type: 'ADD_QUANTITY',
        dbId: dbId,
        quantity: quantity
    }
}

export const startAddQuantity = (dbId, quantity) => {
    return (dispatch) => {
        return database.ref(`users/${dbId}`).update({
            quantity: quantity
        }).then(() => {
            dispatch(addQuantity(dbId, quantity));
        })
    }
}


// removeQuantity
export const removeQuantity = (dbId, quantity) => {
    return {
        type: 'REMOVE_QUANTITY',
        dbId: dbId,
        quantity: quantity
    }
}

export const startRemoveQuantity = (dbId, quantity) => {
    return (dispatch) => {
        return database.ref(`users/${dbId}`).update({
            quantity: quantity
        }).then(() => {
            dispatch(removeQuantity(dbId, quantity));
        })
    }
}


// removeItem
export const removeItem = (dbId) => {
    return {
        type: 'REMOVE_ITEM',
        dbId: dbId
    }
}

export const startRemoveItem = (dbId) => {
    return (dispatch) => {
        return database.ref(`users/${dbId}`).remove().then(() => {
            dispatch(removeItem(dbId));
        })
    }
}


// setItem
export const setItem = (items) => {
    return {
        type: 'SET_ITEM',
        items: items
    }
}

export const startSetItem = () => {
    return (dispatch) => {
        return database.ref('users').once('value').then((snapshot) => {
            const items = [];
            snapshot.forEach((childSnaphost) => {
                items.push({
                    dbId: childSnaphost.key,
                    ...childSnaphost.val()
                })
            })
            dispatch(setItem(items));
        }); 
    }
}