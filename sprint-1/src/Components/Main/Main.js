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

  constructor() {
    super()
    this.state = {
      Videos
    }
  }

  render() {

    const sideVideo = this.state.Videos.sideVideo.filter((video) => video.id !== this.state.Videos.mainVideo.id);

    return (
      <>
      <Header />
      <MainVideo image={this.state.Videos.mainVideo.image} duration={this.state.Videos.mainVideo.duration} />
      <div className="main__article-video">
        <div className="main__article-comment">
          <Article title={this.state.Videos.mainVideo.title} author={this.state.Videos.mainVideo.channel} date={this.state.Videos.mainVideo.timestamp} 
          views={this.state.Videos.mainVideo.views} likes={this.state.Videos.mainVideo.likes} />
          <CommentInput />
          <CommentList comments={this.state.Videos.mainVideo.comments} />
        </div>
        <SideVideos videos={sideVideo} />
      </div>
      </>
    );
  }
}

export default Main;