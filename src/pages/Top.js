import React from 'react';
import { NavLink } from 'react-router-dom';

class Top extends React.Component {
	constructor() {
    	super();
        this.state = {
        	scrollTop: 0
        }
    }
    
    componentDidMount = () => {
    	window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnMount = () => {
    	window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll = (e) => {
    	const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);
      this.setState({
        scrollTop
      })
    }

    render() {
    	return(
        <div className={(this.state.scrollTop > 800 ? 'top on':'top')} onScroll={this.handleScroll}>
          <p className="logo"></p>
          <ul className="menu">
              <li><NavLink to="/Again/">Home</NavLink></li>
              <li><NavLink to="/Again/portfolio">Portfolio</NavLink></li>
              <li><NavLink to="/Again/profile">Profile</NavLink></li>
              <li><NavLink to="/Again/board">Board</NavLink></li>
              <li><NavLink to="/Again/Home2">home2</NavLink></li>
              <li><NavLink to="/Again/Board2">board2</NavLink></li>
              <li><NavLink to="/Again/portfolio2">Portfolio2</NavLink></li>
          </ul>
        </div>
      );
    }
}

export default Top;