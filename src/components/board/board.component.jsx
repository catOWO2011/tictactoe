import React from "react";

import { Cell } from "../cell/cell.component";

import './board.styles.css';

export const Board = ({ board, handleClickOnCell }) => (
  <div
    className="ttt-board"
  >
    {
      board.map((cellValue, index) => 
        <Cell
          key={index}
          id={index}
          value={cellValue}
          onClick={handleClickOnCell}
        />
      )
    }
  </div>
);