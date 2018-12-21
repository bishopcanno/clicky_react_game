import React from 'react';

const Score = (props) => {

  return (
    <div className="col s4">
      <h3>Score: {props.score} | Highscore: {props.highscore}</h3>
    </div>
  );
};


export default Score;