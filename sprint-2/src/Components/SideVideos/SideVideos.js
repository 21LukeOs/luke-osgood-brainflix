import React from 'react';
import './SideVideos.scss';
import SideVid from '../SideVid/SideVid';


class SideVideos extends React.Component {

  render() {
    
    const videos = this.props.videos;

    const videoArray = videos.map((video) => {
      return (
      <SideVid key={video.id} image={video.image} title={video.title} author={video.channel} video={video} />
      )
    });

    return (
      <div className="video-list">
        <h3 className="video-list__title">NEXT VIDEO</h3>
        <ul className="video-list__list">
          {videoArray}
        </ul>
      </div>
    );
  }
}

export default SideVideos;