import { Component } from "react";

import { Board } from "../board/board.component";

const X_MARK = 'x';
const O_MARK = 'o';

export class Game extends Component {
  state = {
    board: Array(9).fill(null),
    prevPlayerName: ''
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
        Game Component
        <Board
          board={this.state.board}
          handleClickOnCell={this.handleClickOnCell}
        />
      </div>
    );
  }
}