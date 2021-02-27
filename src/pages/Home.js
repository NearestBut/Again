import React, { Component } from 'react';
import '../css/reset.css';

const Home = () => {
    return (
        <div>
            <h1>홈</h1>
            <div className="skillBar">
                <h2>LANGUAGE</h2>
                Java <progress value="70" max="100"></progress><br/>
                Javascript <progress value="50" max="100"></progress><br/>
                <h2>FRAMEWORK</h2>
                Spring <progress value="70" max="100"></progress><br/>
                Node.js <progress value="50" max="100"></progress><br/>
                React.js <progress value="50" max="100"></progress><br/>
                <h2>DATABASE</h2>
                MyBatis <progress value="70" max="100"></progress><br/>
                <h2>etc.</h2>
                Git <progress value="70" max="100"></progress><br/>
            </div>
            <div className="pfPreview">
                <h2></h2>
            </div>
            <div className="contact">
            </div>
        </div>
    );
}

export default Home;