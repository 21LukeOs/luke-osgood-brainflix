import React from 'react';
import Header from '../Header/Header.js';
import MainVideo from '../MainVideo/MainVideo';
import CommentInput from '../CommentInput/CommentInput.js'; 
import CommentList from '../CommentList/CommentList.js';
import SideVideos from '../SideVideos/SideVideos';
import Videos from '../../Data/Videos';


class Main extends React.Component {

  render() {
    return (
      <>
      <Header />
      <MainVideo />
      <CommentInput />
      <CommentList comments={Videos.mainVideo.comments} />
      <SideVideos videos={Videos.sideVideo} />
      </>
    );
  }
}

export default Main;