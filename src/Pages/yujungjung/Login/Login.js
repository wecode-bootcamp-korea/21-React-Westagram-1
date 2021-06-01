import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      passwordValue: '',
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { idValue, passwordValue } = this.state;
    return (
      <div className="Login">
        <div className="wrap">
          <div className="iphoneImage">
            <img alt="iphonePhoto" src="/images/yujungjung/iphone.png" />
          </div>
          <section>
            <article className="loginSection grayBorder">
              <h1 id="logo">Westagram</h1>
              <div className="loginBox">
                <div className="loginCotentsBox">
                  <span className="placeholderText"></span>
                  <input
                    onChange={this.handleInput}
                    type="text"
                    className="id"
                    name="idValue"
                    placeholder="전화번호, 사용자 이름 또는 이메일"
                  />
                </div>
                <div className="loginCotentsBox">
                  <span className="placeholderText"></span>
                  <input
                    onChange={this.handleInput}
                    type="password"
                    className="password"
                    name="passwordValue"
                    placeholder="비밀번호"
                  />
                  <button className="passwordViewButton">비밀번호 표시</button>
                </div>
                <button
                  className="loginButton"
                  disabled={
                    idValue.includes('@') && passwordValue.length > 4
                      ? false
                      : true
                  }
                >
                  로그인
                </button>
                <div className="or">
                  <div className="orBorder"></div>
                  <div className="orText">또는</div>
                  <div className="orBorder"></div>
                </div>
                <div className="facebookLogin">
                  <span className="facebookIcon"></span>
                  <span>Facebook으로 로그인</span>
                </div>
                <Link href="" className="forgotPassword">
                  비밀번호를 잊으셨나요?
                </Link>
              </div>
            </article>

            <article className="findAccont grayBorder">
              <div>계정이 없으신가요?</div>
              <Link className="sign" href="">
                가입하기
              </Link>
            </article>

            <article className="downloadApp">
              <div>앱을 다운로드하세요.</div>
              <div className="appButtons">
                <Link href="">
                  <img
                    alt="applestoreButton"
                    src="./images/yujungjung/appstore-button.png"
                  />
                </Link>
                <Link href="">
                  <img
                    alt="androidstoreButton"
                    src="./images/yujungjung/googleplay-button.png"
                  />
                </Link>
              </div>
            </article>
          </section>
        </div>

        <footer>
          <div className="Link">
            <ul>
              <li>
                <Link href="">소개</Link>
              </li>
              <li>
                <Link href="">블로그</Link>
              </li>
              <li>
                <Link href="">채용 정보</Link>
              </li>
              <li>
                <Link href="">도움말</Link>
              </li>
              <li>
                <Link href="">API</Link>
              </li>
              <li>
                <Link href="">개인정보처리방침</Link>
              </li>
              <li>
                <Link href="">약관</Link>
              </li>
              <li>
                <Link href="">인기 계정</Link>
              </li>
              <li>
                <Link href="">해시태그</Link>
              </li>
              <li>
                <Link href="">위치</Link>
              </li>
            </ul>
          </div>
          <div className="detail">
            <ul>
              <li>
                <Link href="">한국어</Link>
              </li>
              <li>
                <Link href="">© 2021 Instagram from Facebook</Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default Login;
