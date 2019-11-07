import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import Plus from '../../Assets/Icons/Icon-upload.svg';
import Logo from '../../Assets/Logo/Logo-brainflix.svg';
import Search from '../../Assets/Icons/Icon-search.svg';
import Button from '../Button/Button';
import UserImage from '../UserImage/UserImage';

const Img = <img className="header__button-img" src={Plus} alt=""/>;

class Header extends React.Component {

  render() {
    return (
      <header className="header">
        <div className="header__logo-wrap">
          <Link to='/'>
            <img className="header__logo" src={Logo} alt=""/>
          </Link>
        </div>
        <form className="header__form" action="">
          <div className="header__search-wrap">
            <input className="header__search-bar" type="text" placeholder="Search" />
            <div className="header__search">
              <img src={Search} alt=""/>
            </div>
          </div>
          <div className="header__upload">
            <div className="header__button">
            <Link to='/uploadVideo'><Button img={Img} name="UPLOAD" /></Link>
            </div>
            <div className="header__upload-pic">
              <UserImage />
            </div>
          </div>
        </form>
      </header>
    )
  }
}

export default Header;