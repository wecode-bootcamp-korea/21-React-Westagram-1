import React from 'react';
import { Link } from 'react-router-dom';
import NavJung from './NavJung';
import Comments from './Comments';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      commentValue: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentList: data,
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
    const { commentList, commentValue } = this.state;

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

                  <ul className="comments">
                    {commentList.map(comment => {
                      return (
                        <Comments
                          key={comment.id}
                          onClick={this.changeColor}
                          name={comment.userName}
                          comment={comment.content}
                        />
                      );
                    })}
                  </ul>
                  <div className="postingDate">1시간 전</div>
                  <div className="line"></div>
                  <div className="newCommentBox">
                    <div className="emoji">
                      <img alt="emojiBox" src="/images/yujungjung/smile.png" />
                    </div>
                    <form onSubmit={this.addComment}>
                      <input
                        onChange={this.handleCommentValue}
                        type="text"
                        className="newComment"
                        placeholder="댓글달기..."
                        value={commentValue}
                      ></input>
                    </form>
                    <button
                      className={commentValue ? 'blue' : 'bluenone'}
                      onClick={commentValue ? this.addComment : ''}
                    >
                      게시
                    </button>
                  </div>
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
                      <Link className="bolduserid" href="">
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
                    <Link href="">소개</Link>
                  </li>
                  <li>
                    <Link href="">도움말</Link>
                  </li>
                  <li>
                    <Link href="">홍보 센터</Link>
                  </li>
                  <li>
                    <Link href="">API</Link>
                  </li>
                  <li>
                    <Link href="">채용 정보</Link>
                  </li>
                  <li>
                    <Link href="">개인정보처리방침</Link>
                  </li>
                  <li>
                    <Link href="">약관</Link>
                  </li>
                  <li>
                    <Link href="">위치</Link>
                  </li>
                  <li>
                    <Link href="">인기 계정</Link>
                  </li>
                  <li>
                    <Link href="">해시태크</Link>
                  </li>
                  <li>
                    <Link href="">언어</Link>
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
