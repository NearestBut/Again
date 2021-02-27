import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <ul>
                <li><NavLink to="/portfolio">포트폴리오</NavLink></li>
                <li><NavLink to="/profile">프로필</NavLink></li>
                <li><NavLink to="/board">방명록</NavLink></li>
            </ul>
            <div class="skillBar">
                <h2>LANGUAGE</h2>
                Java <progress value="70" max="100"></progress><br/>
                Javascript <progress value="50" max="100"></progress><br/>
                <h2>FRAMEWORK</h2>
                Spring <progress value="70" max="100"></progress><br/>
                Node.js <progress value="50" max="100"></progress><br/>
                React.js <progress value="50" max="100"></progress><br/>
                <h2>DATABASE</h2>
                Java <progress value="70" max="100"></progress><br/>
                Javascript <progress value="50" max="100"></progress><br/>
                <h2>etc.</h2>
                Git <progress value="70" max="100"></progress><br/>
            </div>
            <div class="pfPreview">
                <h2></h2>
            </div>
            <div class="contact">
                <table>
                    <tr>
                        <td>email</td>
                    </tr>
                    <tr>
                        <td>@gmail.com</td>
                    </tr>
                    <tr>
                        <td>github</td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Home;