import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../components/HomePage';
import ShopPage from '../components/ShopPage';
import SingleItemPage from '../components/SingleItemPage';
import ShoppingCart from '../components/ShoppingCart';
import NotFoundPage from '../components/NotFoundPage';
import AdminPage from '../components/admin/AdminPage';
import AddProductPage from '../components/admin/AddProductPage';
import ViewProducts from '../components/admin/ViewProducts';
import EditProduct from '../components/admin/EditProduct';


const AppRouter = () => {
     return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={HomePage} exact={true} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/single/:id" component={SingleItemPage} />
                    <Route path="/cart" component={ShoppingCart} />
                    <Route path="/admin" component={AdminPage} />
                    <Route path="/create" component={AddProductPage} />
                    <Route path="/view" component={ViewProducts} />
                    <Route path="/edit/:id" component={EditProduct} />
                    <Route component={NotFoundPage} />
                </Switch>
                <Footer />
            </div>   
        </BrowserRouter>
    );
};

export default AppRouter;