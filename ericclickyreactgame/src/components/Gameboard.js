import React from 'react';
import Directions from './Directions';
import Imgbuttons from './Imgbuttons';

const Gameboard = (props) => {
  return (
    <div>
      <Directions />
      <div className="container">
        <div className="row">
          {props.buttonImages.map((friend) => (
            <Imgbuttons 
              clickCount={props.clickCount}
              id={friend.id}
              key={friend.id}
              image={friend.image} 
            />
          ))}
        </div>      
      </div>
    </div>
  );
};

export default Gameboard;