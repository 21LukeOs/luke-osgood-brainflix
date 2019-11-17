import React from 'react';
import './UploadVideo.scss';
import Header from '../Header/Header';
import Button from '../Button/Button';
import VidPre from '../../Assets/Images/Upload-video-preview.jpg';
import Axios from 'axios';


class UploadVideo extends React.Component {

  handleSubmit(title, description) {

    const request = {
      "title": title,
      "description": description,
      "image": "https://i.imgur.com/l2Xfgpl.jpg"
    }

    Axios.post('http://localhost:8080/uploadVideo', request).then(response => {
      console.log(response);
      
    }).catch(err => {
      console.error('Post error', err);
    })
  }

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
          <form className="upld-vid__form" id="uploadForm" onSubmit={(event) => {
            event.preventDefault();

            if (event.target.title.value === '' || event.target.description.value === '') {
              return;
            }

            this.handleSubmit(event.target.title.value, event.target.description.value);

            event.target.title.value = '';
            event.target.description.value = '';
          }}>
            <label className="upld-vid__vid-title">TITLE YOUR VIDEO</label>
            <input className="upld-vid__add-title" type="text" name="title" placeholder="Add a title to your video" />
            <label className="upld-vid__vid-desc">ADD A VIDEO DESCRIPTION</label>
            <textarea className="upld-vid__add-desc" name="description" placeholder="Add a description of your video" ></textarea>
          </form>
        </div>
        <div className="upld-vid__pub-cncl">
          <div className="upld-vid__pub-butt">
            <Button type="submit" form="uploadForm" name="PUBLISH" />
          </div>
          <h3 className="upld-vid__cancel">CANCEL</h3>
        </div>
      </section>
      </>
    );
  }
}

export default UploadVideo;