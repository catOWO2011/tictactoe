import React from 'react';

import { Player } from '../player/player.component';

import './player-list.styles.css';
import vs from '../../assets/versus.png';
import emptyPlace from '../../assets/empty_place.png';

export const PlayerList = ({ players, handleClickOnPlayer, firstPlayer, secondPlayer }) => (
  <div
    className="ttt-player-list-container"
  >
    <h2>Choose your player</h2>
    <div
      className='player-oponents'
    >
      {
        firstPlayer !== null ?
        <Player
          id={firstPlayer.id}
          key={firstPlayer.id}
          name={firstPlayer.name}
          classNames='read-only'
        />
        :
        <div> <img className='emptyPlace' src={ emptyPlace } alt='empty-place'/> </div>
      }
      { (!firstPlayer || !secondPlayer) && <div> <img className='vs-class' src={vs} alt='vs'/> </div>  }
      { firstPlayer && secondPlayer &&
        <div className="sk-cube-grid">
          <div className="sk-cube sk-cube1"></div>
          <div className="sk-cube sk-cube2"></div>
          <div className="sk-cube sk-cube3"></div>
          <div className="sk-cube sk-cube4"></div>
          <div className="sk-cube sk-cube5"></div>
          <div className="sk-cube sk-cube6"></div>
          <div className="sk-cube sk-cube7"></div>
          <div className="sk-cube sk-cube8"></div>
          <div className="sk-cube sk-cube9"></div>
        </div>
      }
      {
        secondPlayer ?
        <Player
          id={secondPlayer.id}
          key={secondPlayer.id}
          name={secondPlayer.name}
          classNames='read-only'
        />
        :
        <div><img className='emptyPlace' src={ emptyPlace } alt='empty-place'/></div>
      }
    </div>
    <ul className="ttt-player-list">
      {
        players.map(player =>
        <Player
          id={player.id}
          key={player.id}
          name={player.name}
          handleClickOnPlayer={handleClickOnPlayer}
          classNames='active-option'
        />)
      }
    </ul>
  </div>
);