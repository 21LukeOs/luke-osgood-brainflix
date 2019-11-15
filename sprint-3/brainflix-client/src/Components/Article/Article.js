import React from 'react';
import './Article.scss';
import moment from 'moment';
import Likes from '../../Assets/Icons/Icon-likes.svg';
import Views from '../../Assets/Icons/Icon-views.svg';


class Article extends React.Component {
  render() {
    return (
      <article className="article">
        <h1 className="article__header">{this.props.title}</h1>
          <div className="article__heading">
          <div className="article__auth-date">
            <h3 className="article__author">By {this.props.author}</h3>
            <h4 className="article__date">{moment(this.props.date).fromNow()}</h4>
          </div>
          <div className="article__views-likes">
            <p className="article__views"><img className="article__icons" src={Views} alt=""/>{this.props.views}</p>
            <p className="article__likes"><img className="article__icons" src={Likes} alt=""/>{this.props.likes}</p>
          </div>
          </div>
        <p className="article__body">
        {this.props.description}
        </p>
      </article>
    );
  }
}

export default Article;