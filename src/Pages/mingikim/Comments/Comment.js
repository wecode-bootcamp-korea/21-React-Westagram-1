import React from 'react';

class Comment extends React.Component {
  constructor() {
    super();
  }

  // commentRemove = () => {
  //   this.props.removeComment;
  // };

  render() {
    const { id, index, text, isLiked, removeComment, handleLike } = this.props;
    return text !== '' ? (
      <div className="comment-box">
        <li key={index}>{text}</li>
        <div className="botton-box">
          <button
            id={id}
            key={index}
            index={index}
            className="delete-button"
            onClick={removeComment}
          >
            ✖
          </button>
          <button
            id={id}
            className="like-button"
            onClick={handleLike}
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
