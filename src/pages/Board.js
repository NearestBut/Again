import React, { Component } from 'react';
import './reset.css';
import './board.css';

const Board = () => {
    return (
       <div className="container">
           <ul className="visitor">
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li>
                   <div className="imgWrap">
                        <img className="bal" src="ballon_c.png" alt="" />
                        <img className="cy" src="cycle_c.png" alt="" />
                   </div>
               </li>
           </ul>
       </div>
    );
}

export default Board;