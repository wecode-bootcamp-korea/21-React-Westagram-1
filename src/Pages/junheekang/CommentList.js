import React from 'react';

class CommentList extends React.Component {
  render() {
    return (
      <li className="commentContent">
        <span className="myCommentId">{this.props.userName}</span>
        <span className="commentText">{this.props.comment}</span>
        <button></button>
      </li>
    );
  }
}

export default CommentList;
