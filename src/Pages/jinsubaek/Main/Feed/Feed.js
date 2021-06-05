import React from 'react';
import CommentLists from '../CommentsList/CommentsList';
import UploadForm from '../UploadForm/UploadForm';

import './Feed.scss';

class Feed extends React.Component {
  render() {
    const { id, userName, imagePath, content, comments } = this.props;

    return (
      <li className="feed" key={id}>
        <div className="title">
          <img alt="canon-mj's profile" src="/images/jinsubaek/profile1.jpeg" />
          <span className="feeds-title-id">{userName}</span>
          <i className="fas fa-ellipsis-h"></i>
        </div>
        <div className="image">
          <img alt="baking" src={imagePath} />
        </div>
        <div className="tab">
          <i className="fas fa-heart fa-lg"></i>
          <i className="far fa-comment fa-lg"></i>
          <div className="upload"></div>
          <i className="far fa-bookmark fa-lg"></i>
        </div>
        <div className="like">
          <img
            alt="aineworld's profile"
            src="/images/jinsubaek/profile2.jpeg"
          />
          <div>
            <span>aineworld</span>님 외 <span>10명</span>이 좋아합니다
          </div>
        </div>
        <div className="description">
          <span>{userName}</span>
          <div>
            {content}
            <span>더 보기</span>
          </div>
        </div>
        <div className="comment">
          <ul className="lists">
            {comments.length > 0 &&
              comments.map(comment => {
                return (
                  <CommentLists
                    key={comment.id}
                    comment={comment}
                    feedId={id}
                    deleteComment={this.props.deleteComment}
                  />
                );
              })}
          </ul>
        </div>
        <UploadForm feedId={id} addComment={this.props.addComment} />
      </li>
    );
  }
}

export default Feed;
