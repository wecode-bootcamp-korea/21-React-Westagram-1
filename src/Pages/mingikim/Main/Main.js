import React from 'react';
import Feed from '../../../Components/Feed/Feed';
import Nav from '../../../Components/Nav/Nav';

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
    return isLoading ? null : (
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
          <div className="main-right__container">
            <div className="main-right__profile">
              <img src="images\mingikim/003.png" alt="메인 프로필 아바타" />
              <div className="main-profile__column">
                <span className="main-profile__name">MUYA_HO</span>
                <span className="main-profile__info">
                  MUHAN
                  <div className="profile-divider"></div>
                  Challenge
                </span>
              </div>
            </div>
            <div className="story-container">
              <div className="story-info">
                <div className="story-name">스토리</div>
                <div className="story-more">모두보기</div>
              </div>
              <div className="story-profile">
                <div className="story-profile__info">
                  <img src="images\mingikim/004.jpg" alt="스토리 아바타" />
                  <div className="story-profile__column">
                    <span className="story-profile__name"> 캐릭터 </span>
                    <span className="story-profile__time"> 20분전 </span>
                  </div>
                </div>
                <div className="story-profile__info">
                  <img src="images\mingikim/004.jpg" alt="스토리 아바타" />
                  <div className="story-profile__column">
                    <span className="story-profile__name"> 캐릭터 </span>
                    <span className="story-profile__time"> 20분전 </span>
                  </div>
                </div>
                <div className="story-profile__info">
                  <img src="images\mingikim/004.jpg" alt="스토리 아바타" />
                  <div className="story-profile__column">
                    <span className="story-profile__name"> 캐릭터 </span>
                    <span className="story-profile__time"> 20분전 </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="recommend-container">
              <div className="recommend-info">
                <div className="recommend-name">당신을 위한 추천</div>
                <div className="recommend-more">모두보기</div>
              </div>
              <div className="recommend-profile">
                <div className="recommend-profile__info">
                  <img src="images\mingikim/004.jpg" alt="추천 계정 아바타" />
                  <div className="recommend-profile__column">
                    <span className="recommend-profile__name"> 캐릭터 </span>
                    <span className="recommend-profile__time">
                      유산슬님 외 2명이...
                    </span>
                  </div>
                </div>
                <span className="follow">팔로우</span>
              </div>
              <div className="recommend-profile">
                <div className="recommend-profile__info">
                  <img src="images\mingikim/004.jpg" alt="추천 계정 아바타" />
                  <div className="recommend-profile__column">
                    <span className="recommend-profile__name"> 캐릭터 </span>
                    <span className="recommend-profile__time">
                      유산슬님 외 2명이...
                    </span>
                  </div>
                </div>
                <span className="follow">팔로우</span>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Main;
