import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import ShopPage from '../components/ShopPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => {
     return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={HomePage} exact={true} />
                    <Route path="/shop" component={ShopPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>   
        </BrowserRouter>
    );
};

export default AppRouter;