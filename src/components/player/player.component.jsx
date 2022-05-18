import React from 'react';

import './player.styles.css';

export const Player = ({ id, name, handleClickOnPlayer, classNames, playing }) => (
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
      <h3
        id={id}
        className={`${classNames}`}
      >
        { name }
      </h3>
      {
        playing === true &&
        <img
          className='ttt-player-timer'
          src={`https://cdn.dribbble.com/users/633652/screenshots/3509458/stopwatch-2---dribbble-hq.gif`}
          alt="time"
        />
      }
      {
        playing === true &&
        <h1> turn on </h1>
      }
    </div>
  </div>
);