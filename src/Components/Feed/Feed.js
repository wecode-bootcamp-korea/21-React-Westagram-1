import React from 'react';
import Comments from '../../Pages/mingikim/Comments/Comments';

class Feed extends React.Component {
  render() {
    const {
      currentUser,
      feedContent,
      feedId,
      index,
      comments,
      handleInput,
      handlePost,
      defaultInput,
      addComment,
      removeComment,
      handleLike,
    } = this.props;
    return (
      <div className="feed-container" key={index}>
        <article className="feed-article">
          <div className="header__component">
            <div className="header-info">
              <img src="images/mingikim/003.png" alt="피드 아바타" />
              <div className="header-info__name">{currentUser}</div>
            </div>
            <div className="header__more">
              <i className="fas fa-ellipsis-h"></i>
            </div>
          </div>
          <div className="feed-images">
            <img
              className="feed-image"
              src="images/mingikim/006.jpg"
              alt="피드 이미지"
            />
          </div>
          <div className="feed-icons">
            <div className="feed-icon">
              <i className="fas fa-heart"></i>
              <i className="far fa-comment"></i>
              <i className="fas fa-external-link-alt"></i>
            </div>
            <div className="feed-icon__bookmark">
              <i className="far fa-bookmark"></i>
            </div>
          </div>
          <div className="feed-like">
            <img src="images\mingikim/002.png" alt="피드 본문 아바타" />
            <span className="feed-like__message">
              <span className="feed-like__name">누구누구</span>님외
              <span className="feed-like__number">10</span>명이 좋아합니다
            </span>
          </div>
          <div className="feed-article__main">
            <div className="main-article">
              <span>{feedContent}</span>
            </div>
            <Comments
              comments={comments}
              feedId={feedId}
              handleInput={handleInput}
              handlePost={handlePost}
              addComment={addComment}
              removeComment={removeComment}
              defaultInput={defaultInput}
              handleLike={handleLike}
            />
          </div>
        </article>
      </div>
    );
  }
}

export default Feed;
