import React from "react";

import { Cell } from "../cell/cell.component";
import { Player } from "../player/player.component";

import './board.styles.css';

export const Board = ({ board, handleClickOnCell, firstPlayer, secondPlayer, playerIdTurn }) => (
  <div
  className="ttt-board-container"
  >
    <Player
      id={firstPlayer.id}
      name={firstPlayer.name}
      playing={ firstPlayer.id === playerIdTurn }
      classNames='read-only'
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
      playing={ secondPlayer.id === playerIdTurn }
      classNames='read-only'
    />
  </div>
);