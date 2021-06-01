import React from 'react';
import './UploadForm.scss';

class UploadForm extends React.Component {
  constructor() {
    super();

    this.state = {
      commentInputValue: '',
    };
  }

  handleSubmitForm(e) {
    e.preventDefault();

    this.props.addComment(this.state.commentInputValue);
    this.setState({
      commentInputValue: '',
    });
  }

  handleChangeInput(e) {
    this.setState({
      commentInputValue: e.target.value,
    });
  }

  render() {
    const { commentInputValue } = this.state;
    return (
      <form className="UploadForm" onSubmit={e => this.handleSubmitForm(e)}>
        <input
          type="text"
          placeholder="댓글 달기..."
          onChange={e => this.handleChangeInput(e)}
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
