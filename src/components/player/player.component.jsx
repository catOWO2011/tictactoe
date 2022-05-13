import React from 'react';

import './player.styles.css';

export const Player = ({name, imagePath}) => (
  <div>
    <div
      className='ttt-picture'
    >
      <img
        className='ttt-player'
        src={imagePath}
        alt='player_image'
      />
    </div>
    <div>
      <h3>{ name }</h3>
    </div>
  </div>
);