import React, { useState, useEffect, Component } from 'react';
import { NavLink } from 'react-router-dom';

const useScroll = () => {
    const [state, setState] = useState({
      x: 0, // x와 y의 초기값을 0으로 지정
      y: 0
    });
    const onScroll = () => {
      setState({ x: window.scrollX, y: window.scrollY });
    };
    useEffect(() => {
      window.addEventListener("scroll", onScroll); // scorll할 때 onScroll 이벤트 핸들러 지정
      return () => window.removeEventListener("scroll", onScroll); // clean up
    }, []);
    return state;
};

const Top = () => {
    const { y } = useScroll();
    return(
        <div className="top">
            <p className="logo"></p>
            <ul className="menu">
                <li><NavLink to="/Again/">Home</NavLink></li>
                <li><NavLink to="/Again/portfolio">Portfolio</NavLink></li>
                <li><NavLink to="/Again/profile">Profile</NavLink></li>
                <li><NavLink to="/Again/board">Board</NavLink></li>
                <li><NavLink to="/Again/Home2">ddddddddddd</NavLink></li>
            </ul>
        </div>
    );
}

export default Top;