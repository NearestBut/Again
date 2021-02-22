import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <table>
                <tr border="0">
                    <td><NavLink to="/portfolio">포트폴리오</NavLink></td>
                    <td><NavLink to="/profile">프로필</NavLink></td>
                    <td><NavLink to="/board">방명록</NavLink></td>
                </tr>
            </table>
        </div>
    );
}

export default Home;