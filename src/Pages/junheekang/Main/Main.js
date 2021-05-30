import React from 'react';
import '../../junheekang/Main/Main.scss';
import Nav from '../../../Components/Nav/Nav';

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Nav />
        {/* <nav>
          <div className="navContainer">
            <a href="#" id="logo">
              Westagram
            </a>
            <div className="searchWrapper">
              <input
                type="text"
                name="input1"
                id="searchInput"
                placeholder="검색"
              />
            </div>
            <div className="iconWrapper">
              <img
                src="/images/junheekang/icon/Home.svg"
                alt="home_icon"
                className="iconSet"
              />
              <img
                src="/images/junheekang/icon/share.svg"
                alt="directmessage-icon"
                className="iconSet"
              />
              <img
                src="/images/junheekang/icon/nav.svg"
                alt="explore-icon"
                className="iconSet"
              />
              <img
                src="/images/junheekang/icon/heart.svg"
                alt="heart-icon"
                className="iconSet"
              />
              <img
                src="/images/junheekang/my_profile.png"
                alt="my-Profile"
                className="iconSet"
              />
            </div>
          </div>
        </nav> */}
        <main>
          <div className="feeds">
            <article className="feedsWrapper">
              <div>
                <header>
                  <div className="feedProfileWrapper">
                    <img
                      src="/images/junheekang/sohee_profile.png"
                      alt="Profile"
                      className="feedProfile"
                    />
                  </div>
                  <div className="articleHeaderWrapper">
                    <a href="#" className="userId">
                      xeesoxee
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
                    src="/images/junheekang/한소희.png"
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
                      <a href="#" className="otheruserId">
                        july_thefirst
                      </a>
                      <span className="textContent">
                        님 여러 명이 좋아합니다
                      </span>
                      <div className="userComment">
                        <a href="#" id="userIdinComment">
                          xeesoxee
                        </a>
                        <span className="textContent">다시 만난 소희🦋</span>
                      </div>
                      <p id="commentNum">댓글 1,706개 모두 보기</p>
                      <article className="addComment">
                        <ul className="listContainer">
                          <li className="commentContent"></li>
                        </ul>
                      </article>
                    </div>
                  </section>
                  <section className="commentContainer">
                    <img
                      src="/images/junheekang/icon/smile.svg"
                      alt="smile_emoji"
                      className="iconSet"
                    />
                    <article className="commentInputWrapper">
                      <input
                        name=""
                        className="commentText"
                        placeholder="댓글 달기..."
                      ></input>
                      <button className="uploadButton">게시</button>
                    </article>
                  </section>
                </div>
              </div>
            </article>
          </div>
          <aside className="aside">
            <div className="myProfileContanier">
              <a href="#" id="myProfileWrapper">
                <img
                  src="/images/junheekang/my_profile.png"
                  alt="my_profile_img"
                  className="myProfileImg"
                />
              </a>
              <a href="#" className="myNameText" id="myNameId">
                juneee__kang
              </a>
              <button className="switchButton">전환</button>
            </div>
            <div className="recommendTextWrapper">
              <p id="recommendText">회원님을 위한 추천</p>
              <a href="#" id="seeAll">
                모두 보기
              </a>
            </div>
            <ul className="userRecommend">
              <li className="userList">
                <img
                  src="/images/junheekang/user1_profile.png"
                  alt="user1-profile"
                  id="user1Profile"
                />
                <div className="recommendListWrapper">
                  <a href="#" className="recommendId">
                    liz_doooo
                  </a>
                  <p className="followerInfo">
                    hye_kim님 외 9명이 팔로우합니다
                  </p>
                </div>
                <button className="followButton">팔로우</button>
              </li>
              <li className="userList">
                <img
                  src="/images/junheekang/user2_profile.png"
                  alt="user1-profile"
                  id="user1Profile"
                />
                <div className="recommendListWrapper">
                  <a href="#" className="recommendId">
                    hwdpm
                  </a>
                  <p className="followerInfo">
                    guyoung_n님 외 51명이 팔로우합니다
                  </p>
                </div>
                <button className="followButton">팔로우</button>
              </li>
              <li className="userList">
                <img
                  src="/images/junheekang/user3_profile.png"
                  alt="user2-profile"
                  id="user1Profile"
                />
                <div className="recommendListWrapper">
                  <a href="#" className="recommendId">
                    horim_you
                  </a>
                  <p className="followerInfo">
                    j_vely_님 외 12명이 팔로우합니다
                  </p>
                </div>
                <button className="followButton">팔로우</button>
              </li>
              <li className="userList">
                <img
                  src="/images/junheekang/user5_profile.png"
                  alt="user3-profile"
                  id="user1Profile"
                />
                <div className="recommendListWrapper">
                  <a href="#" className="recommendId">
                    ore_vintage
                  </a>
                  <p className="followerInfo">
                    ae_morning님 외 6명이 팔로우합니다
                  </p>
                </div>
                <button className="followButton">팔로우</button>
              </li>
              <li className="userList">
                <img
                  src="/images/junheekang/user4_profile.png"
                  alt="user4-profile"
                  id="user1Profile"
                />
                <div className="recommendListWrapper">
                  <a href="#" className="recommendId">
                    premtoj
                  </a>
                  <p className="followerInfo">
                    orange__님 외 38명이 팔로우합니다
                  </p>
                </div>
                <button className="followButton">팔로우</button>
              </li>
            </ul>
            <footer className="footerInAside">
              <p>
                소개ㆍ도움말ㆍ홍보 센터ㆍAPIㆍ채용 정보ㆍ개인정보처리방침ㆍ
                <br /> 약관ㆍ위치ㆍ인기 계정ㆍ해시태그ㆍ언어
              </p>
              <p>© 2021 INSTAGRAM FROM FACEBOOK</p>
            </footer>
          </aside>
        </main>
      </div>
    );
  }
}

export default Main;
