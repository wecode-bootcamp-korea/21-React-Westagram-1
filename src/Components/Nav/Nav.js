import React from 'react';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <div className="Nav">
        <div className="home">
          <a href="#" className="icon" />
          <div className="bar">|</div>
          <a href="#" className="title">
            Westagram
          </a>
        </div>
        <form className="search-form">
          <input type="text" />
          <button type="reset">
            <span>X</span>
          </button>
          <i className="fas fa-search"></i>
          <div className="search-form-result"></div>
        </form>
        <div className="menu-icon">
          <div className="navigation"></div>
          <div className="liked"></div>
          <div className="profile"></div>
          <div className="profile-image">
            <img src="/images/navImages/profile6.jpeg" alt="my profile" />
          </div>
          <ul className="menu-box" style={{ display: 'none' }}>
            <li>
              <i className="far fa-user-circle"></i>
              <span>프로필</span>
            </li>
            <li>
              <i className="far fa-bookmark"></i>
              <span>저장됨</span>
            </li>
            <li>
              <i className="fas fa-cog"></i>
              <span>설정</span>
            </li>
            <li>
              <span>로그아웃</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
