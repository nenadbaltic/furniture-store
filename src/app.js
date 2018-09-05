import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { startSetProducts } from './actions/products';
import 'normalize.css/normalize.css';
import './styles/styles.css';
import { firebase } from './firebase/firebase';

const store = configureStore();

const app = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
)


store.dispatch(startSetProducts())
ReactDOM.render(app, document.getElementById('app'));






