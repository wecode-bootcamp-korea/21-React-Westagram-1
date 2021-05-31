import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../junheekang/Login/Login.scss';

class Login extends React.Component {
  goToMain = () => {
    this.props.history.push('/main-kang');
  };

  constructor() {
    super();

    this.state = {
      userId: '',
      userPassword: '',
    };
  }

  handleIdInput = e => {
    this.setState({
      userId: e.target.value,
    });
  };

  handlePasswordInput = e => {
    this.setState({
      userPassword: e.target.value,
    });
  };

  render() {
    const { userId, userPassword } = this.state;
    const { handleIdInput, handlePasswordInput } = this;
    const disabled = userId.includes('@') && userPassword.length > 5;

    return (
      <div className="login">
        <main>
          <article>
            <div>
              <images src="" alt="" />
            </div>
            <div className="loginContainer">
              <div className="loginLogo">
                <h1>Westagram</h1>
              </div>
              <div className="userIdWrapper">
                <input
                  type="text"
                  name="idInput"
                  className="userId"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  value={userId}
                  onChange={handleIdInput}
                />
              </div>
              <div className="userPasswordWrapper">
                <input
                  type="password"
                  name="passwordInput"
                  className="userPassword"
                  placeholder="비밀번호"
                  value={userPassword}
                  onChange={handlePasswordInput}
                />
              </div>
              <button
                className="loginButton"
                onClick={this.goToMain}
                disabled={!disabled}
              >
                로그인
              </button>
              <div className="orContainer">
                <span className="leftLine"></span>
                <span id="orText">또는</span>
                <span className="rightLine"></span>
              </div>
              <a className="facebookLoginWrapper">
                <img
                  src="/images/junheekang/icon/facebook_logo.svg"
                  alt="facebook-logo"
                  id="facebookLogo"
                />
                <span className="facebookText">Facebook으로 로그인</span>
              </a>
              <a className="forgetPasswordText">비밀번호를 잊으셨나요?</a>
            </div>
            <div className="joinContainer">
              <p className="noAccountText">계정이 없으신가요?</p>
              <a className="SignUpLink">가입하기</a>
            </div>
            <p className="downloadAppText">앱을 다운로드하세요.</p>
            <div className="downloadButtonWrapper">
              <a className="downloadButton">
                <img
                  src="/images/junheekang/appstore_btn.png"
                  alt="appstore_button"
                  id="appstoreButton"
                />
              </a>
              <a className="downloadButton">
                <img
                  src="/images/junheekang/google_btn.png"
                  alt="google_play_button"
                  id="googlePlayButton"
                />
              </a>
            </div>
          </article>
        </main>
        <div className="footerContainer">
          <footer className="footerinLogin">
            <p className="footerTextinLogin">
              소개 &nbsp;&nbsp;&nbsp; 블로그 &nbsp;&nbsp;&nbsp; 채용
              &nbsp;&nbsp;&nbsp; 정보 &nbsp;&nbsp;&nbsp; 도움말
              &nbsp;&nbsp;&nbsp; API &nbsp;&nbsp;&nbsp; 개인정보처리방침
              &nbsp;&nbsp;&nbsp; 약관 &nbsp;&nbsp;&nbsp; 인기 계정
              &nbsp;&nbsp;&nbsp; 해시태그 &nbsp;&nbsp;&nbsp; 위치
            </p>
            <p className="footerTextinLogin">© 2021 Instagram from Facebook</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
