import { Component } from "react";

import { Board } from "../board/board.component";
import { Player } from "../player/player.component";

import './game.styles.css';

export class Game extends Component {
  state = {
    board: Array(9).fill(null),
    players: []
  }

  handleClickOnCell = ({target}) => {
    const cellId = parseInt(target.id, 10);
    const board = this.state.board.slice();
    if (board[cellId] === null) {
      board[cellId] = 'x';
      this.setState({ board: [].concat(board) });
    }
  }

  render() {
    return (
      <div>
        <div
          className="ttt-player-list-container"
        >
          <ul className="ttt-player-list">
            <li>
              
            </li>
            <li>
              
            </li>
          </ul>
        </div>
        <div
          className="ttt-game-board"
        >
          <Player
            name="Bob"
            imagePath={'https://robohash.org/3?set=set4'}
          />
          <Board
            board={this.state.board}
            handleClickOnCell={this.handleClickOnCell}
          />
          <Player
            name="Alice"
            imagePath={'https://robohash.org/2?set=set4'}
          />
        </div>
      </div>
    );
  }
}