import React from 'react';
import './SideVid.scss';


class SideVid extends React.Component {

  render() { 
    return (
      <li className="video">
        <img className="video__tile" src={this.props.image} alt="" ></img>
        <div className="video__title-author">
          <h3 className="video__title">{this.props.title}</h3>
          <p className="video__author">{this.props.author}</p>
        </div>
      </li>
    );
  }
}

export default SideVid;