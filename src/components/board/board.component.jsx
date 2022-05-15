import React from "react";

import { Cell } from "../cell/cell.component";
import { Player } from "../player/player.component";

import './board.styles.css';

export const Board = ({ board, handleClickOnCell, firstPlayer, secondPlayer }) => (
  <div
  className="ttt-board-container"
  >
    <Player
      id={firstPlayer.id}
      name={firstPlayer.name}
    />
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
    <Player
      id={secondPlayer.id}
      name={secondPlayer.name}
    />
  </div>
);