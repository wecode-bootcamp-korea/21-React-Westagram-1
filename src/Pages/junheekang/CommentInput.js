import React from 'react';

class CommentInput extends React.Component {
  constructor() {
    super();
    this.state = {
      commentValue: '',
    };
  }

  handleCommentValue = e => {
    this.setState({
      commentValue: e.target.value,
    });
  };

  reset = () => {
    this.setState({
      commentValue: '',
    });
  };

  render() {
    const { addComment, feedId } = this.props;
    const { commentValue } = this.state;
    console.log(commentValue);

    return (
      <article className="commentInputWrapper">
        <form>
          <input
            className="inputText"
            placeholder="댓글 달기..."
            value={commentValue}
            onChange={this.handleCommentValue}
            // onKeyDown={addComment}
          ></input>
          <button
            className="uploadButton"
            onClick={e => addComment(e, feedId, commentValue, this.reset)}
          >
            게시
          </button>
        </form>
      </article>
    );
  }
}

export default CommentInput;
