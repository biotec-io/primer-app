import React from 'react';

const ButtonDos = (props) => (
  <button
    style={{
      backgroundColor: props.color,
      borderRadius: props.radius,
      textAlign: props.position,
      padding: props.padding,
    }}
    className={'uk-button ' + 'uk-button-' + props.type}
  >
    {props.text}
  </button>
);

export default ButtonDos;
