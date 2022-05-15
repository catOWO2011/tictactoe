import React from 'react';

import './player.styles.css';

export const Player = ({ id, name, handleClickOnPlayer, classNames }) => (
  <div
    className={`ttt-player-container ${classNames}`}
    id={id}
    onClick={ handleClickOnPlayer }
  >
    <div
      id={id}
      className='ttt-picture'
    >
      <img
        id={id}
        className='ttt-player'
        src={`https://robohash.org/${id}?set=set4`}
        alt='player_image'
      />
    </div>
    <div
      id={id}
    >
      <h3 id={id}>{ name }</h3>
    </div>
  </div>
);