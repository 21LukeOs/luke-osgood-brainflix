import React from 'react';
import './UploadVideo.scss';
import Header from '../Header/Header';
import Button from '../Button/Button';
import VidPre from '../../Assets/Images/Upload-video-preview.jpg';


class UploadVideo extends React.Component {

  render() { 
    return (
      <>
      <Header />
      <section className="upld-vid">
        <h1 className="upld-vid__title">Upload Video</h1>
        <div className="upld-vid__flex">
          <div className="upld-vid__vid-preview">
            <label className="upld-vid__vid-thumb">VIDEO THUMBNAIL</label>
            <img className="upld-vid__vid-pre" src={VidPre} alt="blue bicycle handlebars from rider's perspective"/>
          </div>
          <form className="upld-vid__form" action="">
            <label className="upld-vid__vid-title">TITLE YOUR VIDEO</label>
            <input className="upld-vid__add-title" type="text" placeholder="Add a title to your video" />
            <label className="upld-vid__vid-desc">ADD A VIDEO DESCRIPTION</label>
            <textarea className="upld-vid__add-desc" name="" placeholder="Add a description of your video" ></textarea>
          </form>
        </div>
        <div className="upld-vid__pub-cncl">
          <div className="upld-vid__pub-butt">
            <Button name="PUBLISH" />
          </div>
          <h3 className="upld-vid__cancel">CANCEL</h3>
        </div>
      </section>
      </>
    );
  }
}

export default UploadVideo;