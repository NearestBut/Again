import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Home, Profile, Portfolio, Board } from '../pages/controller';

class App extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><NavLink to="/">홈</NavLink></li>
                    <li><NavLink to="/portfolio">포트폴리오</NavLink></li>
                    <li><NavLink to="/profile">프로필</NavLink></li>
                    <li><NavLink to="/board">방명록</NavLink></li>
                </ul>
                <Route exact path="/" component={Home} />
                <Route path="/profile" component={Profile} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/board" component={Board} />
            </div>
        );
    }
}

export default App;