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
    playerIdTurn: -1,
    winner: null
  }

  handleClickOnCell = ({ target }) => {
    if (this.getWinner() || this.isDraw()) {
      return;
    }

    const cellId = parseInt(target.id, 10);
    const board = this.state.board.slice();
    const { firstPlayer, secondPlayer, playerIdTurn } = this.state;
    let nextPlayerId = -1;

    if (board[cellId] === null) {
      if (firstPlayer.id === playerIdTurn) {
        board[cellId] = 'x';
        nextPlayerId = secondPlayer.id;
      } else {
        board[cellId] = 'o';
        nextPlayerId = firstPlayer.id;
      }

      this.setState({ 
        board: [].concat(board),
        playerIdTurn: nextPlayerId
      }, () => {
        const winner = this.getWinner();

        if (winner !== null) {
          this.setState({
            playerIdTurn: -1,
            winner: winner
          });
        }
      });
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
            showBoard: true,
            playerIdTurn: this.state.firstPlayer.id,
            winner: null
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

  getWinner () {
    const winnerConfig = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    const { board, firstPlayer, secondPlayer } = this.state;

    let winner = null;
    let indexConfig = 0;
    while (winner === null && indexConfig < winnerConfig.length) {
      const [c1, c2, c3] = winnerConfig[indexConfig];
      if (board[c1] && board[c1] === board[c2] && board[c2] === board[c3]) {
        winner = board[c2] === 'x' ? firstPlayer : secondPlayer;
      }
      indexConfig++;
    }

    return winner;
  }

  isDraw() {
    const { board } = this.state;
    return board.every(value => value !== null);
  }

  render() {
    const {
      board,
      players,
      showPlayerList,
      showBoard,
      firstPlayer,
      secondPlayer,
      playerIdTurn,
      winner
    } = this.state;

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
              playerIdTurn={playerIdTurn}
            />
           : null
        }
        {
          winner ? <h1> The winner is {winner.name}! </h1> : null
        }
      </div>
    );
  }
}