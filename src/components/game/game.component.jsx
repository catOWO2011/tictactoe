import { Component } from "react";

import { Board } from "../board/board.component";
import { PlayerList } from "../player-list/player-list.component";

import './game.styles.css';

export class Game extends Component {
  state = {
    board: Array(9).fill(null),
    players: [],
    showPlayerList: true,
    showBoard: false,
    firstPlayer: null,
    secondPlayer: null,
  }

  handleClickOnCell = ({ target }) => {
    const cellId = parseInt(target.id, 10);
    const board = this.state.board.slice();
    if (board[cellId] === null) {
      board[cellId] = 'x';
      this.setState({ board: [].concat(board) });
    }
  }

  loaderAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  }

  handleClickOnPlayer = ({ target }) => {
    const cellId = parseInt(target.id, 10);

    const { firstPlayer, secondPlayer, players } = this.state;
    
    if (firstPlayer === null) {
      this.setState( { firstPlayer: players[cellId - 1] } );
    } else {
      if (secondPlayer === null) {
        this.setState( {
          secondPlayer: players[cellId - 1]
        } );
        this.loaderAsyncCall().then(() => {
          this.setState({
            showPlayerList: false,
            showBoard: true
          });
        });
      }
    }
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        const players = await response.json();
        this.setState({ players: [].concat(players) });
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { board, players, showPlayerList, showBoard, firstPlayer, secondPlayer } = this.state;

    return (
      <div className="game-container">
        {
          showPlayerList === true?
            <PlayerList
              players={players}
              handleClickOnPlayer={this.handleClickOnPlayer}
              firstPlayer={ firstPlayer }
              secondPlayer={ secondPlayer }
            />
          : null
        }
        {
          showBoard === true ?
            <Board
              board={board}
              firstPlayer={ firstPlayer }
              secondPlayer={ secondPlayer }
              handleClickOnCell={this.handleClickOnCell}
            />
           : null
        }
      </div>
    );
  }
}