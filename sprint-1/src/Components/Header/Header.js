import React from 'react';
import './Header.scss';
import Plus from '../../Assets/Icons/Icon-upload.svg';
import UserImg from '../../Assets/Images/Mohan-muruge.jpg';
import Logo from '../../Assets/Logo/Logo-brainflix.svg';
import Search from '../../Assets/Icons/Icon-search.svg';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo-wrap">
          <img className="header__logo" src={Logo} alt=""/>
        </div>
        <div className="header__search-wrap">
          <input className="header__search-bar" type="text" placeholder="Search" />
          <div className="header__search">
            <img src={Search} alt=""/>
          </div>
        </div>
        <div className="header__upload">
          <button className="header__upload-button"><img className="header__plus" src={Plus} alt="plus"/>UPLOAD</button>
          <img className="header__upload-pic" src={UserImg} alt="mohan muruge face, profile"/>
        </div>
      </header>
    )
  }
}

export default Header;