
import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';

import HomePage from './Home/HomePage.js';
import Header from './Header/Header.js';
import DetailsPage from './Details/DetailsPage.js';
import CreatePage from './Create/CreatePage.js';
import ListPage from './List/ListPage.js';


export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                  <Header />
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <HomePage {...routerProps} />} 
                        />
                        <Route 
                            path="/fruits" 
                            exact
                            render={(routerProps) => <ListPage {...routerProps} />} 
                        />
                        <Route 
                            path="/fruits/:fruitId" 
                            exact
                            render={(routerProps) => <DetailsPage {...routerProps} />} 
                        />
                        <Route 
                            path="/create" 
                            exact
                            render={(routerProps) => <CreatePage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}