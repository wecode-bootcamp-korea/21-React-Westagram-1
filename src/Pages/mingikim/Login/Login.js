import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: '', pw: '' };
  }
  handleChange = event => {
    const inputedName = event.target.name;
    const inputedValue = event.target.value;
    this.setState({ [inputedName]: inputedValue });
    console.log(event.target.value);
    console.log(this.state.id);
  };
  goToMain = () => {
    this.props.history.push('/main-kim');
  };
  render() {
    return (
      <main className="login-container">
        <div className="login-wrapper">
          <div className="login-box">
            <h1 className="logo">Westagram</h1>
            <form className="login-box__form">
              <input
                type="text"
                className="id input"
                name="id"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={this.handleChange}
              />
              <input
                type="password"
                className="password input"
                name="pw"
                placeholder="비밀번호"
                onChange={this.handleChange}
              />
              <button
                type="submit"
                className="login-box__button"
                disabled={
                  !(this.state.id.includes('@') && this.state.pw.length > 5)
                }
                onClick={this.goToMain}
              >
                로그인
              </button>
            </form>
          </div>
          <div className="forgot-box">
            <Link to="/signup" className="forgot-box__message">
              비밀번호를 잊으셨나요?
            </Link>
          </div>
        </div>
      </main>
    );
  }
}

export default withRouter(Login);
