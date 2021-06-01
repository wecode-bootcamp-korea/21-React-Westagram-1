import React from 'react';
import './Feed.scss';
import CommentLists from '../CommentLists/CommentLists';
import UploadForm from '../UploadForm/UploadForm';
import { createDate, createId } from '../../../Pages/jinsubaek/utils/utils';

class Feed extends React.Component {
  constructor() {
    super();

    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    this.setState({
      comments: this.props.comments,
    });
  }

  addComment(comment) {
    this.setState({
      comments: [
        ...this.state.comments,
        {
          userName: 'randomName',
          content: comment,
          id: createId(),
          date: createDate(),
        },
      ],
    });
  }

  deleteComment(commentId) {
    this.setState({
      comments: this.state.comments.filter(comment => comment.id !== commentId),
    });
  }

  render() {
    const { id, userName, imagePath, content } = this.props;
    const { comments } = this.state;
    return (
      <li className="Feed" key={id}>
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
              this.state.comments.map(comment => {
                return (
                  <CommentLists
                    key={comment.id}
                    comment={comment}
                    deleteComment={commentId => this.deleteComment(commentId)}
                  />
                );
              })}
          </ul>
        </div>
        <UploadForm addComment={comment => this.addComment(comment)} />
      </li>
    );
  }
}

export default Feed;
