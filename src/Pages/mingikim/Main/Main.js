import React from 'react';
import './Main.scss';
import Coments from '../Comments/Comments';
import Nav from '../../../Components/Nav/Nav';
import '../../../Styles/reset.scss';
import '../Styles/common.scss';

class Main extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <main className="main-container">
          <div className="feed-container">
            <article className="feed-article">
              <div className="header__component">
                <div className="header-info">
                  <img src="images/mingikim/003.png" alt="피드 아바타" />
                  <div className="header-info__name">MUYA_HO</div>
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
                  <span>피드본문입니다</span>
                </div>
                <Coments />
              </div>
            </article>
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
