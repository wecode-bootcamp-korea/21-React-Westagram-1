import React, { Component } from 'react';
import Comments from './Comments';

class Feeds extends Component {
  render() {
    const {
      commentList,
      commentValue,
      profileImage,
      postImage,
      postWriteuserName,
      postComment,
      addComment,
      handleCommentValue,
    } = this.props;

    return (
      <article className="borderBox">
        <div className="postHeader">
          <div className="user">
            <div className="smallprofile">
              <img
                className="smallprofilephoto"
                alt="smallprofile"
                src={profileImage}
              />
            </div>
            <div className="bolduserid">{postWriteuserName}</div>
          </div>
          <img
            className="viewMore"
            alt="viewMoreButton"
            src="/images/yujungjung/more.png"
          />
        </div>
        <img className="postPhoto" alt="postPhoto" src={postImage} />
        <div className="postComments">
          <div className="postSetting">
            <ul className="icons">
              <li className="icon">
                <img alt="likes" src="/images/yujungjung/heart.png" />
              </li>
              <li className="icon">
                <img alt="comments" src="/images/yujungjung/chat.png" />
              </li>
              <li className="icon">
                <img alt="share" src="/images/yujungjung/send.png" />
              </li>
            </ul>
            <div className="postPhotoDots"></div>
            <div className="icon bookmark">
              <img src="/images/yujungjung/bookmark_white.png" alt="bookmark" />
            </div>
          </div>
          <div className="likeCount">좋아요 100개</div>
          <div className="comment">
            <span className="bolduserid">{postWriteuserName}</span>
            <span>{postComment}</span>
          </div>
          <div className="commentsCount">댓글 5개 모두 보기</div>

          <ul className="comments">
            {commentList.map(comment => {
              return (
                <Comments
                  key={comment.id}
                  // onClick={this.changeColor}
                  name={comment.userName}
                  comment={comment.content}
                />
              );
            })}
          </ul>
          <div className="postingDate">1시간 전</div>
          <div className="line"></div>
          <div className="newCommentBox">
            <div className="emoji">
              <img alt="emojiBox" src="/images/yujungjung/smile.png" />
            </div>
            <form onSubmit={addComment}>
              <input
                onChange={handleCommentValue}
                type="text"
                className="newComment"
                placeholder="댓글달기..."
                value={commentValue}
              ></input>
            </form>
            <button
              className={commentValue ? 'blue' : 'blueNone'}
              onClick={commentValue ? addComment : ''}
            >
              게시
            </button>
          </div>
        </div>
      </article>
    );
  }
}

export default Feeds;
