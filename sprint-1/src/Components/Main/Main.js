import React from 'react';
import './Main.scss';
import Header from '../Header/Header.js';
import MainVideo from '../MainVideo/MainVideo';
import Article from '../Article/Article';
import CommentInput from '../CommentInput/CommentInput.js'; 
import CommentList from '../CommentList/CommentList.js';
import SideVideos from '../SideVideos/SideVideos';
import Videos from '../../Data/Videos';


class Main extends React.Component {

  render() {

    const sideVideo = Videos.sideVideo.filter((video) => video.id !== Videos.mainVideo.id);

    return (
      <>
      <Header />
      <MainVideo image={Videos.mainVideo.image} duration={Videos.mainVideo.duration} />
      <div className="main__article-video">
        <div className="main__article-comment">
          <Article title={Videos.mainVideo.title} author={Videos.mainVideo.channel} date={Videos.mainVideo.timestamp} 
          views={Videos.mainVideo.views} likes={Videos.mainVideo.likes} />
          <CommentInput />
          <CommentList comments={Videos.mainVideo.comments} />
        </div>
        <SideVideos videos={sideVideo} />
      </div>
      </>
    );
  }
}

export default Main;