import React from 'react';
import './Main.scss';
import Axios from 'axios';
import Header from '../Header/Header.js';
import MainVideo from '../MainVideo/MainVideo';
import Article from '../Article/Article';
import CommentInput from '../CommentInput/CommentInput.js'; 
import CommentList from '../CommentList/CommentList.js';
import SideVideos from '../SideVideos/SideVideos';


// const apiKey = `?api_key=<e5af90e0-f7b6-4ffc-8cb6-35c51386cc6c>`;
// const url = `https://project-2-api.herokuapp.com/videos`;
// const videoId = `/1af0jruup5gu`;
const url = `http://localhost:8080/`;


class Main extends React.Component {

  
  state = {
    mainVideo: { comments: [] },
    sideVideo: []
  }

  componentDidMount() {
    Axios.get(url).then((videos) => {
      this.setState({
        mainVideo: videos.data[0],
        sideVideo: videos.data
      });
    });

    // Axios.get(url + videoId + apiKey).then((video) => {
    //   this.setState({
    //     mainVideo: video.data
    //   });
    // });
  }

  componentDidUpdate() {
    if (this.state.mainVideo.id !== this.props.match.params.id && this.props.match.params.id) {
      const Id = `/${this.props.match.params.id}`;
      Axios.get(url + Id).then((video) => {
        this.setState({
          mainVideo: video.data
        });
      }).catch((error) => {
        console.log(error);
        
      });
    }
  }

  render() {

    const {id, description, image, duration, title, channel, timestamp, views, likes, comments} = this.state.mainVideo

    const sideVideo = this.state.sideVideo.filter((video) => video.id !== id);

    return (
      <>
      <Header />
      <MainVideo image={image} duration={`0:00 / ${duration}`} />
      <div className="main__article-video">
        <div className="main__article-comment">
          <Article title={title} author={channel} date={timestamp} 
          views={views} likes={likes} description={description} />
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