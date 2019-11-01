import React from 'react';
import './CommentInput.scss';
import UserImg from '../../Assets/Images/Mohan-muruge.jpg';


class CommenInput extends React.Component {
  render() { 
    return (
      <section className="join-conv">
        <h3 className="join-conv__title">3 Comments</h3>
        <form className="join-conv__form" action="">
          <img className="join-conv__input-pic" src={UserImg} alt="mohan muruge face, profile"/>
          <div className="join-conv__lab-in">
            <label className="join-conv__sub-title">JOIN THE CONVERSATION</label>
            <textarea className="join-conv__input" type="text"/>
            <button className="join-conv__comment-button">COMMENT</button>
          </div>
        </form>

      </section>
    );
  }
}

export default CommenInput;
