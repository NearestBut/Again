import React, { Component } from 'react';
import 'resources/css/board.css';

const Board = () => {
    return (
        <div className="pages" style={{'background':'#ccc','padding-top':'95px'}}>
            <div className="container">
                <ul className="visitor">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li>
                        <div className="imgWrap">
                                <img className="bal" src="ballon_c.png" alt="" />
                                <img className="cy" src="cycle_c.png" alt="" />
                                <textarea id="visit"></textarea>
                                <p className="btn_write">글 작성</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Board;