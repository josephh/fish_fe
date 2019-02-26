import React from 'react';
import './NavigationCard.scss';

const style = {
  backgroundColor: 'white', // since this is javascript we camel case it,
  // but it could also be 'background-color'
  font: 'inherit',
  border: '12px solid red',
  padding: '28px', // it's js so strings!
  cursor: 'pointer'
}

// write a component as a bare function - mostly that's all it is - some rendering logic
const navigationCard = (props) => {
  // ES6 syntax here is advantageous, e.g. use of 'this' keyword
  return <div className="navigation-card">
  <button style={style}>abc</button>
    <div>
      <input type="text" onChange = { props.changed } value = { props.title } />
    </div>
    <h1>{props.title}</h1>
    <a href={props.link}>Navigate</a>
    <div>{props.children}</div>
  </div>
}

export default navigationCard;
