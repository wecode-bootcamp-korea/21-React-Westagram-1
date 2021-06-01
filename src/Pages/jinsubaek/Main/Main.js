import React from 'react';
import './Main.scss';
import Aside from './Aside/Aside';
import Nav from '../../../Components/Nav/Nav';
import CommentLists from './CommentLists/CommentLists';
import { createDate, createId } from '../utils/utils';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      feeds: [],
      comments: [],
      commentInputValue: '',
    };
  }

  componentDidMount() {
    this.fetchFeeds();
    this.fetchComments();
  }

  handleSubmitForm(e) {
    e.preventDefault();

    this.addComment();
  }

  handleChangeInput(e) {
    this.setState({
      commentInputValue: e.target.value,
    });
  }

  async fetchFeeds() {
    try {
      const res = await fetch(
        'http://localhost:3000/data/jinsubaek/feedsData.json',
        { method: 'GET' }
      );
      const feeds = await res.json();

      this.setState({
        feeds: [...this.state.feeds, ...feeds],
      });
    } catch (err) {
      console.error(err);
    }
  }

  async fetchComments() {
    try {
      const res = await fetch(
        'http://localhost:3000/data/jinsubaek/commentData.json',
        { method: 'GET' }
      );
      const comments = await res.json();

      this.setState({
        comments: [...this.state.comments, ...comments],
      });
    } catch (err) {
      console.error(err);
    }
  }

  addComment() {
    this.setState({
      comments: [
        ...this.state.comments,
        {
          userName: 'randomName',
          content: this.state.commentInputValue,
          id: createId(),
          date: createDate(),
        },
      ],
      commentInputValue: '',
    });
  }

  deleteComment(commentId) {
    this.setState({
      comments: this.state.comments.filter(comment => comment.id !== commentId),
    });
  }

  render() {
    return (
      <div className="Main">
        <Nav />
        <section>
          <ul>
            {this.state.feeds.map(feed => {
              return (
                <li className="feeds" key={feed.id}>
                  <div className="title">
                    <img
                      alt="canon-mj's profile"
                      src="/images/jinsubaek/profile1.jpeg"
                    />
                    <span className="feeds-title-id">{feed.userName}</span>
                    <i className="fas fa-ellipsis-h"></i>
                  </div>
                  <div className="image">
                    <img alt="baking" src={feed.imagePath} />
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
                    <span>{feed.userName}</span>
                    <div>
                      {feed.content}
                      <span>더 보기</span>
                    </div>
                  </div>
                  {this.state.comments.length > 0 && (
                    <CommentLists
                      comments={this.state.comments}
                      deleteComment={this.deleteComment.bind(this)}
                    />
                  )}
                  <form onSubmit={e => this.handleSubmitForm(e)}>
                    <input
                      type="text"
                      placeholder="댓글 달기..."
                      onChange={e => this.handleChangeInput(e)}
                      value={this.state.commentInputValue}
                    />
                    {this.state.commentInputValue.length > 0 ? (
                      <button
                        type="submit"
                        style={{ backgroundColor: 'dodgerblue' }}
                      >
                        게시
                      </button>
                    ) : (
                      <button
                        type="submit"
                        style={{ backgroundColor: '#c5e0fe' }}
                      >
                        게시
                      </button>
                    )}
                  </form>
                </li>
              );
            })}
          </ul>
        </section>
        <Aside />
      </div>
    );
  }
}

export default Main;
