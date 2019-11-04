import React from 'react';
import './MainVideo.scss';
import Play from '../../Assets/Icons/Icon-play.svg';
import FullScreen from '../../Assets/Icons/Icon-fullscreen.svg';
import Volume from '../../Assets/Icons/Icon-volume.svg';


class MainVideo extends React.Component {
  render() {
    return (
      <section className="hero">
        <div className="hero__video-wrap">
          <video className="hero__video" src="" poster={this.props.image}></video>
          <div className="hero__video-controls">
            <div className="hero__play hero__vid-con">
              <img src={Play} alt=""/>
            </div>
            <div className="hero__progress-bar hero__vid-con">
              <div className="hero__prog-line"></div>
              <p className="hero__duration">{this.props.duration}</p>
            </div>
            <div className="hero__fullscn-vol hero__vid-con">
              <img className="hero__fullscn" src={FullScreen} alt=""/>
              <img className="hero__vol" src={Volume} alt=""/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MainVideo;