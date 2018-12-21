import React from 'react';

const Directions = () => {
  
  var directionMargin = {
    marginBottom: 25
  }
  return (
    <div style={ directionMargin } className="teal">
      <div className="row center-align">
        <div className="col s12">
          <h1>Clicky Game!</h1>
        </div>
      </div>

      <div className="row center-align">
        <div className="col s12">
          <h5>Click on an image to earn points, but don't click on any more than once!</h5>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default Directions;
 