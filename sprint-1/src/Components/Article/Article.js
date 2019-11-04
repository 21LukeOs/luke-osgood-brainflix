import React from 'react';
import './Article.scss';
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
            <h4 className="article__date">{this.props.date}</h4>
          </div>
          <div className="article__views-likes">
            <p className="article__views"><img className="article__icons" src={Views} alt=""/>{this.props.views}</p>
            <p className="article__likes"><img className="article__icons" src={Likes} alt=""/>{this.props.likes}</p>
          </div>
          </div>
        <p className="article__body">
        On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his ﬁrst Red Cow Rampage title
        </p>
      </article>
    );
  }
}

export default Article;