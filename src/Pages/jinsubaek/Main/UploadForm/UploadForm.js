import React from 'react';
import './UploadForm.scss';

class UploadForm extends React.Component {
  constructor() {
    super();

    this.state = {
      commentInputValue: '',
    };
  }

  handleSubmitForm = e => {
    e.preventDefault();

    this.props.addComment(this.state.commentInputValue, this.props.feedId);
    this.setState({
      commentInputValue: '',
    });
  };

  handleChangeInput = e => {
    this.setState({
      commentInputValue: e.target.value,
    });
  };

  render() {
    const { commentInputValue } = this.state;
    return (
      <form className="uploadForm" onSubmit={this.handleSubmitForm}>
        <input
          type="text"
          placeholder="댓글 달기..."
          onChange={this.handleChangeInput}
          value={commentInputValue}
        />
        <button
          type="submit"
          style={
            commentInputValue.length > 0
              ? { backgroundColor: 'dodgerblue' }
              : { backgroundColor: '#c5e0fe' }
          }
        >
          게시
        </button>
      </form>
    );
  }
}

export default UploadForm;
