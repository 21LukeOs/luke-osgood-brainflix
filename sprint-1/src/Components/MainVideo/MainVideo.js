import React from 'react';
import './MainVideo.scss';
import VideoImg from '../../Assets/Images/video-list-0.jpg';
import Play from '../../Assets/Icons/Icon-play.svg';
import FullScreen from '../../Assets/Icons/Icon-fullscreen.svg';
import Volume from '../../Assets/Icons/Icon-volume.svg';
import Likes from '../../Assets/Icons/Icon-likes.svg';
import Views from '../../Assets/Icons/Icon-views.svg';


class MainVideo extends React.Component {
  render() {
    return (
      <>
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
      <article className="article">
        <div className="article__heading">
          <h1 className="article__header">BMX Rampage: 2018 Highlights</h1>
          <div className="article__auth-date">
            <h3 className="article__author">By Red Cow</h3>
            <h4 className="article__date">12/18/2018</h4>
          </div>
          <div className="article__views-likes">
            <p className="article__views"><img className="article__icons" src={Views} alt=""/>1,001,023</p>
            <p className="article__likes"><img className="article__icons" src={Likes} alt=""/>110,985</p>
          </div>
        </div>
        <p className="article__body">
        On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his ﬁrst Red Cow Rampage title
        </p>
      </article>
      </>
    );
  }
}

export default MainVideo;