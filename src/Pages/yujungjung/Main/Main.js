import React from 'react';
import { Link } from 'react-router-dom';
import NavJung from './NavJung';
import Feeds from './Feeds';
// import Comments from './Comments';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      commentValue: '',
      feedList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/feeds.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feedList: data,
          commentList: data[0].comment,
        });
      });
  }

  handleCommentValue = e => {
    this.setState({
      commentValue: e.target.value,
    });
  };

  addComment = e => {
    e.preventDefault();
    console.log(e.target);
    const { commentList, commentValue } = this.state;
    this.setState({
      commentList: [
        ...commentList,
        {
          id: commentList.lenght + 1,
          userName: 'Yujung',
          content: commentValue,
          isLiked: false,
        },
      ],
      commentValue: '',
    });
  };

  render() {
    const { commentList, commentValue, feedList } = this.state;
    const { handleCommentValue, addComment } = this;

    return (
      <div className="Main">
        <NavJung />
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
              {feedList.map(feed => {
                return (
                  <Feeds
                    id={feed.id}
                    profileImage={feed.profileImage}
                    postImage={feed.postImage}
                    postComment={feed.postComment}
                    postWriteuserName={feed.postWriteuserName}
                    commentList={commentList}
                    commentValue={commentValue}
                    handleCommentValue={handleCommentValue}
                    addComment={addComment}
                  />
                );
              })}
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
                      <Link className="bolduserid" href="#">
                        새소년
                      </Link>
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
                    <Link href="#">소개</Link>
                  </li>
                  <li>
                    <Link href="#">도움말</Link>
                  </li>
                  <li>
                    <Link href="#">홍보 센터</Link>
                  </li>
                  <li>
                    <Link href="#">API</Link>
                  </li>
                  <li>
                    <Link href="#">채용 정보</Link>
                  </li>
                  <li>
                    <Link href="#">개인정보처리방침</Link>
                  </li>
                  <li>
                    <Link href="#">약관</Link>
                  </li>
                  <li>
                    <Link href="#">위치</Link>
                  </li>
                  <li>
                    <Link href="#">인기 계정</Link>
                  </li>
                  <li>
                    <Link href="#">해시태크</Link>
                  </li>
                  <li>
                    <Link href="#">언어</Link>
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
