import React from 'react';
import Comment from './Comment';

class Comments extends React.Component {
  constructor() {
    super();
  }

  textInput = event => {
    this.props.handleInput(event);
  };

  commentAdd = () => {
    const { feedId, addComment } = this.props;
    addComment(feedId);
  };

  handleEnter = event => {
    this.props.handlePost(event);
  };

  render() {
    const { comments, defaultInput, feedId, removeComment, handleLike } =
      this.props;
    return (
      <>
        <div className="comment-wrapper">
          <div className="comment-container">
            <ul className="comment-list">
              {comments.map((commentItem, index) => (
                <Comment
                  id={feedId}
                  key={index}
                  text={commentItem.text}
                  removeComment={() => {
                    removeComment(feedId, commentItem);
                  }}
                  isLiked={commentItem.isLiked}
                  handleLike={() => {
                    handleLike(feedId, commentItem);
                  }}
                />
              ))}
            </ul>
          </div>
          <span className="time-stamp">42분전</span>
        </div>
        <div className="feed-article__input">
          <input
            type="text"
            className="input-comment"
            placeholder="댓글달기..."
            onChange={this.textInput}
            onKeyPress={this.handleEnter}
            id={feedId}
            value={defaultInput[feedId - 1]}
          />
          <button className="article-input__button" onClick={this.commentAdd}>
            게시
          </button>
        </div>
      </>
    );
  }
}

export default Comments;
