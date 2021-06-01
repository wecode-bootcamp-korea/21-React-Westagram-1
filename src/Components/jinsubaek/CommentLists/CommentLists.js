import React from 'react';
import './CommentLists.scss';

class CommentsList extends React.Component {
  handleClickDeleteButton(commentId) {
    this.props.deleteComment(commentId);
  }

  render() {
    const { comment } = this.props;
    return (
      <li>
        <div>
          <span className="name">{comment.userName}</span>
          <span>{comment.content}</span>
          <button
            className="delete"
            onClick={() => this.handleClickDeleteButton(comment.id)}
          >
            <span>X</span>
          </button>
          <button className="heart">
            <i className="far fa-heart fa-sm"></i>
          </button>
        </div>
        <div>
          <span className="time">{comment.date}</span>
        </div>
      </li>
    );
  }
}

export default CommentsList;
