import React from 'react';
import './Button.scss';


class Button extends React.Component {
  render() { 
    return (
      <button className="button">{this.props.img}{this.props.name}</button>
    );
  }
}

export default Button;