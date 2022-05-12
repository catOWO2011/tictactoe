import React from "react";

import './cell.styles.css';
import squareMark from '../../assets/square.png'
import oMark from '../../assets/o_mark.png';
import xMark from '../../assets/x_mark.png';

const IMAGE_MAP = {
  null: squareMark,
  'o': oMark,
  'x': xMark
};

export const Cell = ({id, value, onClick }) => (
  <div onClick={onClick} >
    <img id={id} className="ttt-cell" src={IMAGE_MAP[value]} alt="oMark"/>
  </div>
);