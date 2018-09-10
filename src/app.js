import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { startSetProducts } from './actions/products';
import { startSetItem } from './actions/cart';
import { login, logout, adminLogin } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

const store = configureStore();

const app = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
)

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(app, document.getElementById('app'));
        hasRendered = true;
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'));


firebase.auth().onAuthStateChanged((user) => {
    if(user && user.email === 'baltic.nenad@gmail.com') {
        store.dispatch(adminLogin(user.email));
        store.dispatch(startSetProducts()).then(() => {
                renderApp();
                if(history.location.pathname === '/') {
                    history.push('/admin');
                } 
        });
    }
    else if(user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetProducts()).then(() => {
            store.dispatch(startSetItem()).then(() => {
                renderApp();
                if(history.location.pathname === '/') {
                    history.push('/home');
                }
            })
        });          
    }
    else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});




