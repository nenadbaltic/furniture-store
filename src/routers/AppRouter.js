import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import HomePage from '../components/HomePage';
import ShopPage from '../components/ShopPage';
import SingleItemPage from '../components/SingleItemPage';
import ShoppingCart from '../components/ShoppingCart';
import NotFoundPage from '../components/NotFoundPage';
import AdminPage from '../components/admin/AdminPage';
import AddProductPage from '../components/admin/AddProductPage';
import ViewProducts from '../components/admin/ViewProducts';
import EditProduct from '../components/admin/EditProduct';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


export const history = createHistory();

const AppRouter = () => {
     return (
        <Router history={history}>
            <div>
                <Switch>
                    <PublicRoute path="/" component={LoginPage} exact={true} />
                    <PrivateRoute path="/home" component={HomePage} />
                    <PrivateRoute path="/shop" component={ShopPage} />
                    <PrivateRoute path="/single/:id" component={SingleItemPage} />
                    <PrivateRoute path="/cart" component={ShoppingCart} />
                    <PrivateRoute path="/admin" component={AdminPage} />
                    <PrivateRoute path="/create" component={AddProductPage} />
                    <PrivateRoute path="/view" component={ViewProducts} />
                    <PrivateRoute path="/edit/:id" component={EditProduct} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>   
        </Router>
    );
};

export default AppRouter;