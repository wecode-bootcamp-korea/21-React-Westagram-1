import React, { Component } from 'react';

class Comments extends Component {
  render() {
    const { name, comment } = this.props;

    return (
      <>
        <li className="comment">
          <span className="bolduserid">{name}</span>
          <span className="comment">{comment}</span>
          <img
            className="likeWhiteHeart"
            alt="likeheart"
            src="/images/yujungjung/heart.png"
          ></img>
        </li>
      </>
    );
  }
}

export default Comments;
