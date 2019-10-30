import React from 'react';
// import logo from './assets/Logo/Logo-brainflix.svg';
// import videoImg from './assets/Images/video-list-0.jpg';
// import uploadPlus from './assets/Icons/Icon-upload.svg';
// import uploadImg from './assets/Images/Mohan-muruge.jpg'
import './App.scss';

function App() {
  return (
    <>
    <header className="header">
      <div className="header__img-wrap">
        <img className="header__img" src="" alt=""/>
      </div>
      <input className="header__search-bar" type="text"/>
      <div className="header__upload">
        <button className="header__upload-button"><img src="" alt="plus"/>UPLOAD</button>
        <img className="header__upload-pic" src="" alt="mohan muruge face, profile"/>
      </div>
    </header>

    <section className="hero">
      <video className="hero__video" poster="" controls src=""></video>
    </section>

    </>
  );
}

export default App;
