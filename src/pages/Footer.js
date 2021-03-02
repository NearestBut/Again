import React, { Component } from 'react';

const Footer = () => {
    return(            
        <ul className="footer">
            <li>
                <ul className="icon">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div className="info">
                    <p>삼화페인트공업(주) 대표이사: 오진수, 김장연</p>
                    <p>서울본사: 서울 종로구 돈화문로 58 (묘동)</p>
                    <p>안산공장: 경기도 안산시 단원구 별망로 178 (성곡동)</p>
                </div>
            </li>
            <li>
                <p className="sub">Technical Service Center</p>
                <p className="ph">1544-5357</p>
            </li>
            <li>
                <select className="sel_portfolio">
                    <option defaultValue="Family Site">Family Site</option>
                    <option value="포폴1">포폴1</option>
                    <option value="포폴2">포폴2</option>
                </select>
            </li>
            <li>
                <p>ⓒ 2020 Samhwa Paint Industrial Co., Ltd. All Rights Reserved.</p>
            </li>
        </ul>
    );
}

export default Footer;