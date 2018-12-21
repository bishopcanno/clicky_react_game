import React from 'react';

const Imgbuttons = (props) => {
  
  const imageStyle = {
    height: 150,
    width: 150
  }
  
  const divStyle = {
    marginBottom: 25
  }
  
  return (
   
    <div style={ divStyle } className="col s3 center-align">
      <button onClick={() => props.clickCount(props.id)} className="z-depth-3"><img src={props.image} alt={props.name} className="responsive-img" style={ imageStyle }></img></button>
      <br/>
    </div>
  );
};

export default Imgbuttons;