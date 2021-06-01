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
    return (
      <li className="Feed" key={this.props.id}>
        <div className="title">
          <img alt="canon-mj's profile" src="/images/jinsubaek/profile1.jpeg" />
          <span className="feeds-title-id">{this.props.userName}</span>
          <i className="fas fa-ellipsis-h"></i>
        </div>
        <div className="image">
          <img alt="baking" src={this.props.imagePath} />
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
          <span>{this.props.userName}</span>
          <div>
            {this.props.content}
            <span>더 보기</span>
          </div>
        </div>
        {this.state.comments.length > 0 && (
          <CommentLists
            key={this.props.id}
            comments={this.state.comments}
            deleteComment={commentId => this.deleteComment(commentId)}
          />
        )}
        <UploadForm addComment={comment => this.addComment(comment)} />
      </li>
    );
  }
}

export default Feed;
