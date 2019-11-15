import React from 'react';
import './UserImage.scss';
import UserImg from '../../Assets/Images/Mohan-muruge.jpg';

class UserImage extends React.Component {
  render() { 
    return (
      <img className="user-image" src={UserImg} alt="user profile"/>
    );
  }
}

export default UserImage;