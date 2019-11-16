import React from 'react';
import './Button.scss';


class Button extends React.Component {
  render() { 
    return (
      <button className="button" type={this.props.type} form={this.props.form} >{this.props.img}{this.props.name}</button>
    );
  }
}

export default Button;