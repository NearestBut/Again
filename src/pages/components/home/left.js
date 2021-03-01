import React from 'react';
import { NavLink } from 'react-router-dom';

class Left extends React.Component {
	constructor() {
    	super();
        this.state = {
        	scrollTop: 0,
          isOn : false
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
            <div
                className={
                    "issueLeft" +
                    ((this.state.scrollTop > 900)&&(this.state.scrollTop < 3500) ? ' on':'')
                }
                onScroll={
                    this.handleScroll
                }
            >
                <img src="images/hL.jpg"/>
                <p className="tit">2020 summer</p>
                <a href="#"><p className="link1">PDF 보기<span></span></p></a>
                <a href="#"><p className="link2">사보 전체보기</p></a>
            </div>
      );
    }
}

export default Left;