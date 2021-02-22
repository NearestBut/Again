import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Profile, Portfolio, Board } from '../pages/controller';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/profile" component={Profile} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/board" component={Board} />
            </div>
        );
    }
}

export default App;