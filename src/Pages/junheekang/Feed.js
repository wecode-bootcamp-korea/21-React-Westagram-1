import React from 'react';
import CommentList from './CommentList';
import CommentInput from './CommentInput';

class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentList: data,
        });
      });
  }

  render() {
    const { addComment, feedId, commentList } = this.props;

    return (
      <div className="feeds">
        <article className="feedsWrapper">
          <div>
            <header>
              <div className="feedProfileWrapper">
                <img
                  src={this.props.feedUserProfile}
                  alt="Profile"
                  className="feedProfile"
                />
              </div>
              <div className="articleHeaderWrapper">
                <a href="#" className="userId">
                  {this.props.feedUserName}
                </a>
                <img
                  src="/images/junheekang/icon/more.svg"
                  alt="more-icon"
                  className="iconSet"
                />
              </div>
            </header>
            <div className="photoWrapper">
              <img
                src={this.props.feedPhoto}
                alt="article-photo"
                className="articlePhoto"
              />
            </div>
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
                      {this.props.feedUserName}
                    </a>
                    <span className="textContent">
                      {this.props.feedUserText}
                    </span>
                  </div>
                  <p id="commentNum">댓글 1,706개 모두 보기</p>
                </div>
                <ul>
                  {commentList.map(comment => {
                    return (
                      <CommentList
                        key={comment.id}
                        userName={comment.userName}
                        comment={comment.content}
                      />
                    );
                  })}
                </ul>
              </section>
              <section className="commentContainer">
                <img
                  src="/images/junheekang/icon/smile.svg"
                  alt="smile_emoji"
                  className="iconSet"
                />
                <CommentInput addComment={addComment} feedId={feedId} />
              </section>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Feed;
