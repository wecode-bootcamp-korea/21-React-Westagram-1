import React from 'react';
import Feed from '../../../Components/Feed/Feed';
import Nav from '../../../Components/Nav/Nav';
import MainRight from '../Main/MainRight';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = { isLoading: true, userData: [], defaultInput: [] };
  }

  handleLike = (feedId, commentItem) => {
    const { userData } = this.state;
    const newLike = userData.map((feeds, index) => {
      return feedId !== index + 1
        ? feeds
        : {
            ...feeds,
            comments: feeds.comments.map((comment, index) => {
              return commentItem.id !== index + 1
                ? comment
                : { ...comment, isLiked: !comment.isLiked };
            }),
          };
    });
    this.setState({ userData: newLike });
  };

  removeComment = (feedId, commentItem) => {
    const { userData } = this.state;
    const newData = userData.map((feeds, index) => {
      return feedId !== index + 1
        ? feeds
        : {
            ...feeds,
            comments: feeds.comments.filter(feed => {
              return commentItem.id !== feed.id;
            }),
          };
    });
    this.setState({ userData: newData });
  };

  addComment = feedId => {
    const { userData, defaultInput } = this.state;
    const newComment = {
      id: userData[feedId - 1].comments.length + 1,
      userName: 'asdf',
      text: defaultInput[feedId - 1],
      isLiked: false,
    };
    const newFeedData = userData.map((feeds, index) => {
      return feedId !== index + 1
        ? feeds
        : { ...feeds, comments: feeds.comments.concat(newComment) };
    });
    this.setState({
      userData: newFeedData,
      defaultInput: Array(newFeedData.length).fill(''),
    });
  };

  handleInput = event => {
    const { defaultInput } = this.state;
    const inputValue = event.target.value;
    const inputId = parseInt(event.target.id);

    const newInput = [...defaultInput];
    newInput[inputId - 1] = inputValue;
    this.setState({ defaultInput: newInput });
  };

  handlePost = event => {
    const { defaultInput } = this.state;
    const id = parseInt(event.target.id);
    if (event.key === 'Enter') {
      const newInput = [...defaultInput];
      newInput[id - 1] = '';
      this.addComment(id);
    }
  };

  componentDidMount = () => {
    fetch(`http://localhost:3000/data/mingikim/comment.json`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          userData: data,
          isLoading: false,
          defaultInput: Array(data.length).fill(''),
        });
      });
  };

  render() {
    const { isLoading, userData, defaultInput } = this.state;
    return (
      !isLoading && (
        <>
          <Nav />
          <main className="main-container">
            <div className="main-wrapper">
              {userData.map((feedData, index) => (
                <Feed
                  currentUser={feedData.currentUser}
                  feedId={feedData.feedId}
                  key={index}
                  feedContent={feedData.feedContent}
                  comments={feedData.comments}
                  handleInput={this.handleInput}
                  defaultInput={defaultInput}
                  handlePost={this.handlePost}
                  addComment={this.addComment}
                  removeComment={this.removeComment}
                  handleLike={this.handleLike}
                />
              ))}
            </div>
            <MainRight />
          </main>
        </>
      )
    );
  }
}

export default Main;
