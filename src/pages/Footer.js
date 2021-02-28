import React, { Component,Fragment } from 'react';
import '../resources/css/reset.css';
import '../resources/css/shared.css';

class Footer extends Component{
    render(){
        return(
            <Fragment>
                    <ul className="footer">
                        <li>
                            <div className="icon"></div>
                            <div className="info">
                                <p>삼화페인트공업(주) 대표이사: 오진수, 김장연</p>
                                <p>서울본사: 서울 종로구 돈화문로 58 (묘동)</p>
                                <p>안산공장: 경기도 안산시 단원구 별망로 178 (성곡동)</p>
                            </div>
                        </li>
                        <li>
                            <div className="num">
                                <p>Technical Service Center</p>
                                <p>1544-5357</p>
                            </div>
                        </li>
                        <li>
                            <div className="select">333333333333333</div>
                        </li>
                        <li>
                            <p>ⓒ 2020 Samhwa Paint Industrial Co., Ltd. All Rights Reserved.</p>
                        </li>
                    </ul>
            </Fragment>
        );
    }

}

export default Footer;