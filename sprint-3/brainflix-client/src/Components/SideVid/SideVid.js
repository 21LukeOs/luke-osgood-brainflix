import React from 'react';
import './SideVid.scss';
import { Link } from 'react-router-dom';


class SideVid extends React.Component {

  render() {
    
    const video = this.props.video;

    return (
      <li className="video">
        <Link to={video.id}>
        <img className="video__tile" src={this.props.image} alt="" ></img>
        </Link>
        <div className="video__title-author">
          <h3 className="video__title">{this.props.title}</h3>
          <p className="video__author">{this.props.author}</p>
        </div>
      </li>
    );
  }
}

export default SideVid;