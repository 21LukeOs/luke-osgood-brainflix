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

    state = {
      Videos
    }

  render() {

    const {id, image, duration, title, channel, timestamp, views, likes, comments} = this.state.Videos.mainVideo

    const sideVideo = this.state.Videos.sideVideo.filter((video) => video.id !== id);

    return (
      <>
      <Header />
      <MainVideo image={image} duration={`0:00 / ${duration}`} />
      <div className="main__article-video">
        <div className="main__article-comment">
          <Article title={title} author={channel} date={timestamp} 
          views={views} likes={likes} />
          <CommentInput />
          <CommentList comments={comments} />
        </div>
        <SideVideos videos={sideVideo} />
      </div>
      
      </>
    );
  }
}

export default Main;