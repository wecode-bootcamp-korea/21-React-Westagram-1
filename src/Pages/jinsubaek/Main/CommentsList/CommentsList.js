import React from 'react';
import './CommentsList.scss';

class CommentsList extends React.Component {
  render() {
    const { comment, feedId } = this.props;
    return (
      <li className="commentsList">
        <div>
          <span className="name">{comment.userName}</span>
          <span>{comment.content}</span>
          <button
            className="delete"
            onClick={() => this.props.deleteComment(comment.id, feedId)}
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
