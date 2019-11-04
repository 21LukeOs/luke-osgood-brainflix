import React from 'react';
import './CommentInput.scss';
import Button from '../Button/Button';
import UserImage from '../UserImage/UserImage';


class CommentInput extends React.Component {
  render() { 
    return (
      <section className="join-conv">
        <h3 className="join-conv__title">3 Comments</h3>
        <form className="join-conv__form" action="">
          <div className="join-conv__input-pic">
            <UserImage />
          </div>
          <div className="join-conv__lab-in">
            <label className="join-conv__sub-title">JOIN THE CONVERSATION</label>
            <div className="join-conv__text-butt">
              <textarea className="join-conv__input" type="text"/>
              <div className="join-conv__button-wrap">
                <Button name="COMMENT" />
              </div>
            </div>
          </div>
        </form>
      </section>
    );
  }
}

export default CommentInput;
