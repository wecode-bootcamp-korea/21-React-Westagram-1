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
    };
  }

  goToMain = () => {
    this.props.history.push('/main-baek');
  };

  handleSubmitForm = e => {
    e.preventDefault();

    if (!validateInputValue(this.state.id, this.state.password)) {
      this.setState({
        id: '',
        password: '',
      });
    } else {
      this.goToMain();
    }
  };

  handleChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="login">
        <header>
          <h1>Westagram</h1>
        </header>
        <main>
          <form onSubmit={this.handleSubmitForm}>
            <input
              name="id"
              type="text"
              className="input-id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={this.handleChangeInput}
              value={this.state.id}
            />
            <input
              name="password"
              type="password"
              className="input-password"
              placeholder="비밀번호"
              onChange={this.handleChangeInput}
              value={this.state.password}
            />
            <button
              type="submit"
              style={
                this.state.id && this.state.password
                  ? { backgroundColor: 'dodgerblue' }
                  : { backgroundColor: '#c5e0fe' }
              }
            >
              로그인
            </button>
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
