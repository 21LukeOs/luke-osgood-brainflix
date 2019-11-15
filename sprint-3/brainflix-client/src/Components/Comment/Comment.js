import React from 'react';
import './Comment.scss';
import moment from 'moment';
import UserImage from '../UserImage/UserImage';




class Comment extends React.Component {
  render() {
    return (
      <li className="list-item">
        <div className="list-item__usr-img">
          <UserImage />
        </div>
        <div className="list-item__n-d-c">
          <div className="list-item__name-date">
            <h3 className="list-item__name">{this.props.name}</h3>
            <p className="list-item__date">{moment(this.props.date).fromNow()}</p>
          </div>
          <p className="list-item__comment">{this.props.comment}</p>
        </div>
      </li>
    )
  }
}

export default Comment;