import React from 'react';
import Score from './Score';

const Head = (props) => {
  console.log(props);
  return (
    <div className="row z-depth-5">
      <div className="col s4">
        <h3><strong>Clicky Game</strong></h3>
      </div>
      <div className="col s4">
        <h3>{props.children}</h3>
      </div>
      <Score {...props} />
    </div>
  );
};

export default Head;