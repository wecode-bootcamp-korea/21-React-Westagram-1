import React from 'react';

class Comment extends React.Component {
  constructor() {
    super();
  }

  commentRemove = event => {
    this.props.removeComment(event);
  };

  render() {
    const { id, index, text, isLiked } = this.props;
    return text !== '' ? (
      <div className="comment-box">
        <li key={index}>{text}</li>
        <div className="botton-box">
          <button
            id={id}
            className="delete-button"
            onClick={this.commentRemove}
          >
            ✖
          </button>
          <button
            className="like-button"
            style={isLiked ? { color: 'red' } : { color: '' }}
          >
            ❤
          </button>
        </div>
      </div>
    ) : null;
  }
}

export default Comment;
