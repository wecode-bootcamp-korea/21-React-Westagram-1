import React from 'react';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <nav>
          <div className="mainWrap">
            <h1 id="logo">Westagram</h1>
            <div className="searchBox">
              <img alt="searchIcon" src="/images/yujungjung/serach.png" />
              <input className="searchText" type="text" placeholder="검색" />
            </div>
            <ul className="icons">
              <li className="icon">
                <img alt="main" src="/images/yujungjung/home_black.png" />
              </li>
              <li className="icon">
                <img alt="DM" src="images/yujungjung/send.png" />
              </li>
              <li className="icon">
                <img alt="explore" src="/images/yujungjung/compass.png" />
              </li>
              <li className="icon">
                <img alt="likes" src="/images/yujungjung/heart.png" />
              </li>
              <li className="myAccount">
                <img alt="myproflie" src="/images/yujungjung/mingky.jpg" />
              </li>
            </ul>
          </div>
        </nav>
        <section>
          <div className="separateWrap">
            <div className="mainContents">
              <div className="storiesBox borderBox">
                <div className="story">
                  <div className="colorfulCircle">
                    <img
                      className="profilePhoto"
                      alt="profilePhoto"
                      src="/images/yujungjung/cafe.jpg"
                    />
                  </div>
                  <div className="userid">Yujung</div>
                </div>
              </div>
              <article className="borderBox">
                <div className="postHeader">
                  <div className="user">
                    <div className="smallprofile">
                      <img
                        className="smallprofilephoto"
                        alt="smallprofile"
                        src="/images/yujungjung/mingky.jpg"
                      />
                    </div>
                    <div className="bolduserid">Yujung</div>
                  </div>
                  <img
                    className="viewMore"
                    alt="viewMoreButton"
                    src="/images/yujungjung/more.png"
                  />
                </div>
                <img
                  className="postPhoto"
                  alt="postPhoto"
                  src="/images/yujungjung/cafe.jpg"
                />
                <div className="postComments">
                  <div className="postSetting">
                    <ul className="icons">
                      <li className="icon">
                        <img alt="likes" src="/images/yujungjung/heart.png" />
                      </li>
                      <li className="icon">
                        <img alt="comments" src="/images/yujungjung/chat.png" />
                      </li>
                      <li className="icon">
                        <img alt="share" src="/images/yujungjung/send.png" />
                      </li>
                    </ul>
                    <div className="postPhotoDots"></div>
                    <div className="icon bookmark">
                      <img
                        src="/images/yujungjung/bookmark_white.png"
                        alt="bookmark"
                      />
                    </div>
                  </div>
                  <div className="likeCount">좋아요 100개</div>
                  <div className="comment">
                    <span className="bolduserid">Yujung</span>
                    <span>카페에 가서 여유를 즐기고싶어😂😂</span>
                  </div>
                  <div className="commentsCount">댓글 5개 모두 보기</div>
                  <div className="comments">
                    <div className="comment">
                      <span className="bolduserid">wecode</span>
                      <span className="tagePeople">@Yujung</span>
                      코딩 왜 이렇게 힘들까요?
                    </div>
                    <div className="comment">
                      <span className="bolduserid">Yujung</span>
                      그러게요 언제 완성 시킬 수 있을까요?
                    </div>
                  </div>
                  <div className="postingDate">1시간 전</div>
                </div>
                <div className="newCommentBox">
                  <div className="emoji">
                    <img alt="emojiBox" src="/images/yujungjung/smile.png" />
                  </div>
                  <textarea
                    className="newComment"
                    cols="30"
                    placeholder="댓글달기..."
                  ></textarea>
                  <button className="blue">게시</button>
                </div>
              </article>
            </div>
            <div className="profile">
              <div className="myProfile">
                <div className="colorfulCircle">
                  <img
                    className="profilePhoto"
                    alt="profilePhoto"
                    src="/images/yujungjung/mingky.jpg"
                  />
                </div>
                <div className="bolduserid">Yujung</div>
                <div className="accountChage blue">전환</div>
              </div>
              <div className="recommedUserBox">
                <div className="recommedTitle">
                  <div className="recommedText">회원님을 위한 추천</div>
                  <div className="allView">모두 보기</div>
                </div>
                <ul>
                  <li>
                    <div className="smallprofile">
                      <img
                        className="smallprofilephoto"
                        alt="smallprofile"
                        src="/images/yujungjung/newboys.jpg"
                      />
                    </div>
                    <div>
                      <a className="bolduserid" href="">
                        새소년
                      </a>
                      <div className="followInfo">
                        u_soyeonn님 외 4명이 팔로우합니다
                      </div>
                    </div>
                    <div className="follow blue">팔로우</div>
                  </li>
                </ul>
              </div>
              <footer>
                <ul>
                  <li>
                    <a href="">소개</a>
                  </li>
                  <li>
                    <a href="">도움말</a>
                  </li>
                  <li>
                    <a href="">홍보 센터</a>
                  </li>
                  <li>
                    <a href="">API</a>
                  </li>
                  <li>
                    <a href="">채용 정보</a>
                  </li>
                  <li>
                    <a href="">개인정보처리방침</a>
                  </li>
                  <li>
                    <a href="">약관</a>
                  </li>
                  <li>
                    <a href="">위치</a>
                  </li>
                  <li>
                    <a href="">인기 계정</a>
                  </li>
                  <li>
                    <a href="">해시태크</a>
                  </li>
                  <li>
                    <a href="">언어</a>
                  </li>
                </ul>
                <div className="mainInfo">© 2021 Instagram from Facebook</div>
              </footer>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
