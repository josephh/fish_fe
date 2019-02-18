import React from 'react';
import './NavigationCard.css';
// write a component as a bare function - mostly that's all it is - some rendering logic
const navigationCard = (props) => {
  // ES6 syntax here is advantageous, e.g. use of 'this' keyword
  return <div className="navigation-card">
    <h1>{props.title}</h1>
    <div>{props.children}</div>
  </div>
}

export default navigationCard;
