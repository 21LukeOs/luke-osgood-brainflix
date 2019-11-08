import React from 'react';
import './Main.scss';
import axios from 'axios';
import Header from '../Header/Header.js';
import MainVideo from '../MainVideo/MainVideo';
import Article from '../Article/Article';
import CommentInput from '../CommentInput/CommentInput.js'; 
import CommentList from '../CommentList/CommentList.js';
import SideVideos from '../SideVideos/SideVideos';
import { mainVideo } from '../../Data/Videos';


const apiKey = `?api_key=<e5af90e0-f7b6-4ffc-8cb6-35c51386cc6c>`;
const url = `https://project-2-api.herokuapp.com/videos${apiKey}`;

class Main extends React.Component {

  state = {
    mainVideo: mainVideo,
    sideVideo: []
  }

  componentDidMount() {
    axios.get(url).then((videos) => {
      console.log(videos.data);
      this.setState({
        sideVideo: videos.data
      });
    });
  }

  render() {

    const {id, image, duration, title, channel, timestamp, views, likes, comments} = this.state.mainVideo

    const sideVideo = this.state.sideVideo.filter((video) => video.id !== id);

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