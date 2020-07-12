import React from 'react';
import {Switch, Route, Redirect, BrowserRouter as Router} from 'react-router-dom';
import CardMaker from './components/CreateCard';
import ProductPage from './components/ProductPage/ProductPage';
import NotFound from './components/NotFound';

export default class Routes extends React.Component {
    render() {
        return(
            <Router>
            <Switch>
                <Route exact path="/" component={CardMaker}  />
                <Route path="/product-page/:id" component={ProductPage}  />
                <Route  path="/not-found" component={NotFound} />
                <Redirect to={'not-found'}/>
            </Switch>
            </Router>
        )
    }
}
