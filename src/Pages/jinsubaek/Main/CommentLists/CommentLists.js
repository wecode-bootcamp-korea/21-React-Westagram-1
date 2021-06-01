import React from 'react';
import './CommentLists.scss';

class CommentsLists extends React.Component {
  handleClickDeleteButton(commentId) {
    this.props.deleteComment(commentId);
  }

  render() {
    return (
      <div className="comment">
        <ul className="lists">
          {this.props.comments.map(comment => {
            return (
              <li key={comment.id}>
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
          })}
        </ul>
      </div>
    );
  }
}

export default CommentsLists;
