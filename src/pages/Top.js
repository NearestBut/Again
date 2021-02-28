import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Top = () => {
    return(
        <div className="top">
            <p className="logo"></p>
            <ul className="menu">
                <li><NavLink to="/Again/">Home</NavLink></li>
                <li><NavLink to="/Again/portfolio">Portfolio</NavLink></li>
                <li><NavLink to="/Again/profile">Profile</NavLink></li>
                <li><NavLink to="/Again/board">Board</NavLink></li>
                <li><NavLink to="/Again/Home2">Home2</NavLink></li>
            </ul>
        </div>
    );
}

export default Top;