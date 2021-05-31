import React from 'react';

class Comment extends React.Component {
  constructor() {
    super();
    this.state = { active: true };
  }

  activateButton = event => {
    this.state.active
      ? (event.target.style.color = 'red')
      : (event.target.style.color = '');
    this.setState({ active: !this.state.active });
  };

  commentRemove = event => {
    this.props.removeComment(event);
  };

  render() {
    const { id, index, text } = this.props;
    return text !== '' ? (
      <div className="comment-box">
        <li key={index}>{text}</li>
        <div className="botton-box">
          <button
            id={id}
            className="delete-button"
            onClick={this.commentRemove}
          >
            ✖
          </button>
          <button className="like-button" onClick={this.activateButton}>
            ❤
          </button>
        </div>
      </div>
    ) : null;
  }
}

export default Comment;
