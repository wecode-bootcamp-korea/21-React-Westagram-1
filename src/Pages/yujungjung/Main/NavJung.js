import React from 'react';

class NavJung extends React.Component {
  render() {
    return (
      <>
        <nav>
          <div className="mainWrap">
            <h1 id="logo">Westagram</h1>
            <div className="searchBox">
              <img alt="searchIcon" src="/images/yujungjung/serach.png" />
              <input className="searchText" type="text" placeholder="검색" />
            </div>
            <ul className="icons">
              <li className="icon">
                <img alt="main" src="/images/yujungjung/home_black.png" />
              </li>
              <li className="icon">
                <img alt="DM" src="images/yujungjung/send.png" />
              </li>
              <li className="icon">
                <img alt="explore" src="/images/yujungjung/compass.png" />
              </li>
              <li className="icon">
                <img alt="likes" src="/images/yujungjung/heart.png" />
              </li>
              <li className="myAccount">
                <img alt="myproflie" src="/images/yujungjung/mingky.jpg" />
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default NavJung;
