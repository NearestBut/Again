import React, { Component } from 'react';
const Board = () => {
    return (
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
    );
}

export default Board;