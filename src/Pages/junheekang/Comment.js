import React from 'react';
// import './Main/Main.scss';

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      commentValue: '',
    };
  }

  handleCommentValue = e => {
    this.setState({
      commentValue: e.target.value,
    });
  };

  addComment = e => {
    e.preventDefault();
    const { commentList, commentValue } = this.state;
    this.setState({
      commentList: [
        ...commentList,
        {
          id: commentList.length + 1,
          userName: 'juneee_kang',
          content: commentValue,
          isLiked: false,
        },
      ],
    });
  };

  render() {
    const { commentValue } = this.state;
    const { handleCommentValue, addComment } = this;

    return (
      <div className="comments">
        <section className="writtenCommentsContainer">
          <div className="commentIconWrapper">
            <div className="leftIcon">
              <img
                src="/images/junheekang/icon/heart.svg"
                alt="heart-icon"
                className="iconSet"
              />
              <img
                src="/images/junheekang/icon/messenger.svg"
                alt="comment-icon2"
                className="iconSet"
              />
              <img
                src="/images/junheekang/icon/share.svg"
                alt="directmessage-icon"
                className="iconSet"
              />
            </div>
            <div>
              <img
                src="/images/junheekang/icon/bookmark.svg"
                alt="bookmark-icon"
                className="iconSet"
              />
            </div>
          </div>
          <div className="writtenInfo">
            <a href="/" className="otheruserId">
              july_thefirst
            </a>
            <span className="textContent">님 여러 명이 좋아합니다</span>
            <div className="userComment">
              <a href="/" id="userIdinComment">
                xeesoxee
              </a>
              <span className="textContent">다시 만난 소희🦋</span>
            </div>
            <p id="commentNum">댓글 1,706개 모두 보기</p>
          </div>
        </section>
        <section className="commentContainer">
          <img
            src="/images/junheekang/icon/smile.svg"
            alt="smile_emoji"
            className="iconSet"
          />
          <article className="commentInputWrapper">
            <form onSubmit={addComment}>
              <input
                name="commentInput"
                className="commentText"
                placeholder="댓글 달기..."
                value={commentValue}
                onChange={handleCommentValue}
              ></input>
              <button className="uploadButton" onClick={addComment}>
                게시
              </button>
            </form>
          </article>
        </section>
      </div>
    );
  }
}

export default Comment;
