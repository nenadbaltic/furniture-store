import uuid from 'uuid';
import database from '../firebase/firebase';

// AddProduct
export const addProduct = (product) => {
    return {
        type: 'ADD_PRODUCT',
        product: product
    }
}

export const startAddProduct = (productData) => {
    return (dispatch) => {
        const { title = '', price = '', description = '', image = '', quantity = 1 } = productData;
        const product = { title, price, description, image, quantity };

        database.ref('products').push(product).then((ref) => {
            dispatch(addProduct({
                id: ref.key,
                ...product
            }))
        })
    }
}

// removeProduct
export const removeProduct = (id) => {
    return {
        type: 'REMOVE_PRODUCT',
        id: id
    }
}

export const startRemoveProduct = (id) => {
    return (dispatch) => {
        database.ref(`products/${id}`).remove().then(() => {
            dispatch(removeProduct(id));
        })
    }
}


// editProduct
export const editProduct = (id, updates) => {
    return {
        type: 'EDIT_PRODUCT',
        id: id,
        updates: updates
    }
}

export const startEditProduct = (id, updates) => {
    return (dispatch) => {
        database.ref(`products/${id}`).update(updates).then(() => {
            dispatch(editProduct(id, updates));
        })
    }
}


// setProducts
export const setProducts = (products) => {
    return {
        type: 'SET_PRODUCTS',
        products: products
    }
}

export const startSetProducts = () => {
    return (dispatch) => {
        database.ref('products').once('value').then((snapshot) => {
            const products = [];
            snapshot.forEach((childSnaphost) => {
                products.push({
                    id: childSnaphost.key,
                    ...childSnaphost.val()
                })
            })

            dispatch(setProducts(products));
        }); 
    }
}
