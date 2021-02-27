import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Profile, Portfolio, Board } from '../pages/controller';

import Top from './Top';
import Footer from './Footer';
import "../css/reset.css";
import "../css/shared.css";

class App extends Component {
    render() {
        return (
            <div>
                <Top/>                
                <Route exact path="/Again/" component={Home} />
                <Route path="/Again/profile" component={Profile} />
                <Route path="/Again/portfolio" component={Portfolio} />
                <Route path="/Again/board" component={Board} />
                <Footer/>
            </div>
        );
    }
}

export default App;