import React, { Component } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Chart from 'chart.js'

const Home = () => {
    
    return (
        <div>
            <h1>홈</h1>
            <div className="skillBar">
                <h2>SKILL</h2>
                <h3>LANGUAGE</h3>
                Java <progress value="70" max="100"></progress><br/>
                Javascript <progress value="50" max="100"></progress><br/>
                <h3>FRAMEWORK</h3>
                Spring <progress value="70" max="100"></progress><br/>
                Node.js <progress value="50" max="100"></progress><br/>
                React.js <progress value="50" max="100"></progress><br/>
                <h3>DATABASE</h3>
                MyBatis <progress value="70" max="100"></progress><br/>
                <h3>etc.</h3>
                Git <progress value="70" max="100"></progress><br/>
            </div>
            <div className="pfPreview">
                <h2>PORTFOLIO PREVIEW</h2>
                <Chart/>
            </div>
            <div className="contact">
                <h2>CONTACT</h2>
                <ul>
                    <li><b>email</b> &nbsp; yshuh718@gmail.com</li>
                    <li>
                        <b>github</b> &nbsp; <a href="http://github.com/yoonseohuh">github.com/yoonseohuh</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Home;