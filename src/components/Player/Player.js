import React from 'react';
import './Player.css';

const Player = (props) => (
  <li className="Player">
    <span className="Player_name">{props.name}</span>
    <span className="Player_score">{props.score}</span>
    <span className="Player_button" onClick={() => props.onPlayerScoreChange(1)} >+</span>
    <span className="Player_button_minus" onClick={() => props.onPlayerScoreChange(-1)} >-</span>
    <span className="Player_button_remove" onClick={() => props.onPlayerRemove()}>DELETE</span>
  </li>
);

export default Player;