import React from 'react';
import './Aside.scss';

class Aside extends React.Component {
  render() {
    return (
      <div className="Aside">
        <div className="wecode">
          <div className="profile">
            <img
              alt="wecode's profile"
              src="https://media.vlpt.us/images/inyong_pang/post/f0ea605d-c2d9-460c-aedc-a0ec77e6759f/wecode.png"
            />
          </div>
          <div className="description">
            <span>wecode_bootcamp</span>
            <span>WeCode | 위코드</span>
          </div>
        </div>
        <div className="story">
          <div className="header">
            <span>스토리</span>
            <span>모두 보기</span>
          </div>
          <ul>
            <li>
              <div className="profile">
                <img
                  alt="_yum_s's profile"
                  src="/images/jinsubaek/profile3.jpeg"
                />
              </div>
              <div className="description">
                <span>_yum_s</span>
                <span>16분 전</span>
              </div>
            </li>
            <li>
              <div className="profile">
                <img
                  alt="drink_eat_drink's profile"
                  src="/images/jinsubaek/profile4.jpeg"
                />
              </div>
              <div className="description">
                <span>drink_eat_drink</span>
                <span>3시간 전</span>
              </div>
            </li>
            <li>
              <div className="profile">
                <img
                  alt="hyukyc's profile"
                  src="/images/jinsubaek/profile5.jpeg"
                />
              </div>
              <div className="description">
                <span>hyukyc</span>
                <span>20시간 전</span>
              </div>
            </li>
            <li>
              <div className="profile">
                <img
                  alt="jminkeek's profile"
                  src="/images/jinsubaek/profile6.jpeg"
                />
              </div>
              <div className="description">
                <span>jminkeek</span>
                <span>2일 전</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="recommend">
          <div className="header">
            <span>회원님을 위한 추천</span>
            <span>모두 보기</span>
          </div>
          <ul>
            <li>
              <div className="profile">
                <img
                  alt="joaaaaahye's profile"
                  src="/images/jinsubaek/profile7.jpeg"
                />
              </div>
              <div className="description">
                <span>joaaaaahye</span>
                <span>_legend_a님 외 2명이...</span>
              </div>
              <div className="follow">
                <span>팔로우</span>
              </div>
            </li>
            <li>
              <div className="profile">
                <img
                  alt="rampart81's profile"
                  src="/images/jinsubaek/profile4.jpeg"
                />
              </div>
              <div className="description">
                <span>rampart81</span>
                <span>ringo.in.seoul님 외 12...</span>
              </div>
              <div className="follow">
                <span>팔로우</span>
              </div>
            </li>
            <li>
              <div className="profile">
                <img
                  alt="shawnjjoo's profile"
                  src="/images/jinsubaek/profile5.jpeg"
                />
              </div>
              <div className="description">
                <span>shawnjjoo</span>
                <span>jimmylee1220님 외 1...</span>
              </div>
              <div className="follow">
                <span>팔로우</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="info">
          instagram 정보 · 지원 · 홍보 센터 · API · 채용 정보 · 개인정보처리방침
          · 약관 · 디렉터리 · 프로필 · 해시태그 · 언어 <br /> © 2019 INSTAGRAM
        </div>
      </div>
    );
  }
}

export default Aside;
