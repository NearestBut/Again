import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import 'controller/ctrl_resources';
import { Top, Footer, Home, Profile, Portfolio, Board, Home2, Board2 } from 'controller/ctrl_pages';

function isElementUnderBottom(elem, triggerDiff) {
    const { top } = elem.getBoundingClientRect();
    const { innerHeight } = window;
    return top > innerHeight + (triggerDiff || 0);
}

function handleScroll() {
    const elems = document.querySelectorAll('.up-on-scroll');
    elems.forEach(elem => {
        if (isElementUnderBottom(elem, -30)) {
            elem.style.opacity = "0";
            elem.style.transform = 'translateY(70px)';
        } else {
            elem.style.opacity = "1";
            elem.style.transform = 'translateY(0px)';
        }
    })
    const elemsL = document.querySelectorAll('.left-on-scroll');
    elemsL.forEach(elem => {
        if (isElementUnderBottom(elem, -30)) {
            elem.style.opacity = "0";
            elem.style.transform = 'translateX(-70px)';
        } else {
            elem.style.opacity = "1";
            elem.style.transform = 'translateX(0px)';
        }
    })
    const elemsR = document.querySelectorAll('.right-on-scroll');
    elemsR.forEach(elem => {
        if (isElementUnderBottom(elem, -30)) {
            elem.style.opacity = "0";
            elem.style.transform = 'translateX(70px)';
        } else {
            elem.style.opacity = "1";
            elem.style.transform = 'translateX(0px)';
        }
    })
}
  
window.addEventListener('scroll', handleScroll);
class App extends Component {    
    render() {
        return (
            <div className="pages">
                <Top/>             
                <Route exact path="/Again/" component={Home} />
                <Route path="/Again/profile" component={Profile} />
                <Route path="/Again/portfolio" component={Portfolio} />
                <Route path="/Again/board" component={Board} />
                <Route exact path="/Again/Home2" component={Home2} />
                <Route exact path="/Again/Board2" component={Board2} />
                <Footer/>
            </div>
        );
    }
}

export default App;