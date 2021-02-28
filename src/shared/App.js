import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import 'controller/ctrl_resources';
import { Top, Footer, Home, Profile, Portfolio, Board, Home2 } from 'controller/ctrl_pages';

class App extends Component {
    render() {
        return (
            <div>
                <Top/>             
                <Route exact path="/Again/" component={Home} />
                <Route path="/Again/profile" component={Profile} />
                <Route path="/Again/portfolio" component={Portfolio} />
                <Route path="/Again/board" component={Board} />
                <Route exact path="/Again/" component={Home2} />
                <Footer/>
            </div>
        );
    }
}

export default App;