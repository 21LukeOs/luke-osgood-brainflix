import React from 'react';
import './Hero.scss';
import VideoImg from '../../Assets/Images/video-list-0.jpg';
import Play from '../../Assets/Icons/Icon-play.svg';
import FullScreen from '../../Assets/Icons/Icon-fullscreen.svg';
import Volume from '../../Assets/Icons/Icon-volume.svg';


class Hero extends React.Component {
  render() {
    return (
      <section className="hero">
        <video className="hero__video" src="" poster={VideoImg}></video>
        <div className="hero__video-controls">
          <div className="hero__play hero__vid-con">
            <img src={Play} alt=""/>
          </div>
          <div className="hero__progress-bar hero__vid-con">
            <div className="hero__prog-line"></div>
            <img src="" alt=""/>
          </div>
          <div className="hero__fullscn-vol hero__vid-con">
            <img className="hero__fullscn" src={FullScreen} alt=""/>
            <img className="hero__vol" src={Volume} alt=""/>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;