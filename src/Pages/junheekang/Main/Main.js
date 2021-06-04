import React from 'react';
import Nav from '../../../Components/Nav/Nav';
import Feed from '../Feed';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      feedList: [],
      commentValue: '',
    };
  }

  addComment = (e, feedId, commentValue, reset) => {
    e.preventDefault();
    const { feedList } = this.state;

    const list = feedList.map(feed => {
      if (feed.feedId === feedId) {
        feed.commentList = [
          ...feed.commentList,
          {
            id: feed.commentList.length + 1,
            userName: 'juneee_kang',
            content: commentValue,
            isLiked: false,
          },
        ];
      }
      return feed;
    });

    this.setState({ feedList: list }, reset);
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feedList: data,
        });
      });
  }

  render() {
    const { feedList, commentValue } = this.state;
    return (
      <div className="main">
        <Nav />
        <main>
          <div className="feed">
            {feedList.map(feed => {
              return (
                <Feed
                  key={feed.feedId}
                  feedId={feed.feedId}
                  feedUserName={feed.feedUserName}
                  feedUserProfile={feed.feedUserProfile}
                  feedPhoto={feed.feedPhoto}
                  feedUserText={feed.feedUserText}
                  commentList={feed.commentList}
                  handleCommentValue={this.handleCommentValue}
                  addComment={this.addComment}
                  commentValue={commentValue}
                />
              );
            })}
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
