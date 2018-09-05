import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import productsReducer from '../reducers/products';
import cartReducer from '../reducers/cart';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store creation
const configureStore = () => {
    const store = createStore(
        combineReducers({
            products: productsReducer,
            cart: cartReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    
    return store;
}

export default configureStore;
