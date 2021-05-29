import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { validateInputValue } from '../utils/utils';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      password: '',
      isActivatedBtn: false,
    };
  }

  goToMain() {
    this.props.history.push('/main');
  }

  handleSubmitForm(e) {
    e.preventDefault();

    if (!validateInputValue(this.state.id, this.state.password)) {
      this.setState({
        id: '',
        password: '',
      });
    } else {
      this.goToMain();
    }
  }

  handleChangeIdInput(e) {
    this.setState({
      id: e.target.value,
    });
  }

  handleChangePasswordInput(e) {
    if (this.state.id && e.target.value) {
      this.setState({
        password: e.target.value,
        isActivatedBtn: true,
      });
    } else {
      this.setState({
        password: e.target.value,
        isActivatedBtn: false,
      });
    }
  }

  render() {
    return (
      <div className="Login">
        <header>
          <h1>Westagram</h1>
        </header>
        <main>
          <form onSubmit={e => this.handleSubmitForm(e)}>
            <input
              type="text"
              className="input-id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={e => this.handleChangeIdInput(e)}
              value={this.state.id}
            />
            <input
              type="password"
              className="input-password"
              placeholder="비밀번호"
              onChange={e => this.handleChangePasswordInput(e)}
              value={this.state.password}
            />
            {this.state.isActivatedBtn ? (
              <button type="submit" style={{ backgroundColor: 'dodgerblue' }}>
                로그인
              </button>
            ) : (
              <button type="submit" style={{ backgroundColor: '#c5e0fe' }}>
                로그인
              </button>
            )}
          </form>
        </main>
        <footer>
          <Link to="/#">비밀번호를 잊으셨나요?</Link>
        </footer>
      </div>
    );
  }
}

export default withRouter(Login);
