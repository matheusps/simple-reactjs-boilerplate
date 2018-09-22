import React, { Component } from 'react';
import { Router, Route, Switch, NavLink } from 'react-router-dom';

import history from './config/history';
import Home from './pages/Home';
import Any from './pages/Any';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

class App extends Component {
    render() {
        return (
            <Router history={ history }>
                <main>
                    
                    <Navbar theme='dark' logo={ `http://www.jquerypro.com/reactjs/images/react-logo.svg` }>
                        <NavLink className="navbar-item" to='/'>Home</NavLink>
                        <NavLink className="navbar-item" to='/any'>Any</NavLink>    
                    </Navbar>

                    <Switch>
                        <Route exact path='/' component={ Home }/>
                        <Route exact path='/any' component={ Any } />
                        <Route component={ NotFound } />
                    </Switch>
                </main>
            </Router>
        );
    }
}

export default App;