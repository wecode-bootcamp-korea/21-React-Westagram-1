import React from 'react';
import Feed from '../../../Components/Feed/Feed';
import Nav from '../../../Components/Nav/Nav';

class Main extends React.Component {
  constructor() {
    super();
    this.state = { isLoading: true, userData: [] };
  }

  componentDidMount = () => {
    fetch(`http://localhost:3000/data/mingikim/comment.json`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ userData: data, isLoading: false });
      });
  };

  render() {
    const { isLoading, userData } = this.state;
    return isLoading ? null : (
      <>
        <Nav />
        <main className="main-container">
          <div className="main-wrapper">
            {userData.map((feedData, index) => (
              <Feed
                currentUser={feedData.currentUser}
                key={index}
                feedContent={feedData.feedContent}
                comment={feedData.comment}
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
