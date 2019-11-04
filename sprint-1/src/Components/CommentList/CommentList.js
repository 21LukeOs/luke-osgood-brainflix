import React from 'react';
import './CommentList.scss';
import Comment from '../Comment/Comment';




class CommentList extends React.Component {

  render() {

    const comments = this.props.comments;

    const commentArray = comments.map((comment) => {
      return <Comment key={comment.id} name={comment.name} date={comment.timestamp} comment={comment.comment}/>
    });

    return (
      <ul className="comment-list">
        {commentArray}
      </ul>
    );
  }
}

export default CommentList;



