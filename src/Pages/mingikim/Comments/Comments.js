import React from 'react';
import Comment from './Comment';

class Comments extends React.Component {
  constructor() {
    super();
    this.state = { defaultInput: '', commentList: [{ text: '' }] };
  }

  handleInput = event => {
    this.setState({ defaultInput: event.target.value });
  };

  removeComment = event => {
    let removeArr = this.state.commentList;
    const arr1 = removeArr.filter((_, index) => {
      return index !== parseInt(event.target.id);
    });
    this.setState({ commentList: arr1 });
  };

  addComment = () => {
    let commentArr = this.state.commentList;
    commentArr.push({ text: this.state.defaultInput });
    this.setState({
      defaultInput: '',
      commentList: commentArr,
    });
  };

  handleEnter = event => {
    if (event.key === 'Enter') {
      this.setState({ defaultInput: event.target.value });
      this.addComment();
    }
  };

  render() {
    const { defaultInput, commentList } = this.state;
    // const commentText = commentList.map((el, index) => (
    //   <li key={index}>{el.text}</li>
    // ));
    return (
      <>
        <div className="comment-wrapper">
          <div className="comment-container">
            <ul className="comment-list">
              {commentList.map((commentItem, index) => (
                <Comment
                  id={index}
                  key={index}
                  text={commentItem.text}
                  removeComment={this.removeComment}
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
            onChange={this.handleInput}
            onKeyPress={this.handleEnter}
            value={defaultInput}
          />
          <button className="article-input__button" onClick={this.addComment}>
            게시
          </button>
        </div>
      </>
    );
  }
}

export default Comments;
