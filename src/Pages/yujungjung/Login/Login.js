import React from 'react';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      passwordValue: '',
      // focusActive: '.focusActive',
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // inputFocus = e => {
  //   console.log(e.target);
  //   console.log(e.target.previousElementSibling);
  //   console.log(e.target.parentNode);
  //   this.setState({});
  // };

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
                    onFocus={this.inputFocus}
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
                <a href="" className="forgotPassword">
                  비밀번호를 잊으셨나요?
                </a>
              </div>
            </article>

            <article className="findAccont grayBorder">
              <div>계정이 없으신가요?</div>
              <a className="sign" href="">
                가입하기
              </a>
            </article>

            <article className="downloadApp">
              <div>앱을 다운로드하세요.</div>
              <div className="appButtons">
                <a href="">
                  <img
                    alt="applestoreButton"
                    src="./images/yujungjung/appstore-button.png"
                  />
                </a>
                <a href="">
                  <img
                    alt="androidstoreButton"
                    src="./images/yujungjung/googleplay-button.png"
                  />
                </a>
              </div>
            </article>
          </section>
        </div>

        <footer>
          <div className="link">
            <ul>
              <li>
                <a href="">소개</a>
              </li>
              <li>
                <a href="">블로그</a>
              </li>
              <li>
                <a href="">채용 정보</a>
              </li>
              <li>
                <a href="">도움말</a>
              </li>
              <li>
                <a href="">API</a>
              </li>
              <li>
                <a href="">개인정보처리방침</a>
              </li>
              <li>
                <a href="">약관</a>
              </li>
              <li>
                <a href="">인기 계정</a>
              </li>
              <li>
                <a href="">해시태그</a>
              </li>
              <li>
                <a href="">위치</a>
              </li>
            </ul>
          </div>
          <div className="detail">
            <ul>
              <li>
                <a href="">한국어</a>
              </li>
              <li>
                <a href="">© 2021 Instagram from Facebook</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default Login;
