import React, { Component } from 'react';

class NewBook extends Component {
  state = {
    title: '',
    authors: '',
    publisher: ''
  };

  componentDidMount() {}

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleAuthorChange = e => {
    this.setState({ authors: e.target.value });
  };

  handlePublisherChange = e => {
    this.setState({ publisher: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, authors, publisher } = this.state;
    // Generate a random id, date EPOCH for now
    const id = Date.now();
    this.props.createBook({
      id,
      volumeInfo: { title, authors: [authors], publisher }
    });

    // reset form fields
    this.setState({ title: '', authors: '', publisher: '' });
  };

  render() {
    const { title, authors, publisher } = this.state;

    return (
      <form className="new-book-form" onSubmit={this.handleSubmit}>
        <div className="form-item">
          <label>Title :</label>
          <input
            value={title}
            placeholder="Enter book Title"
            onChange={this.handleTitleChange}
            required
          />
        </div>
        <div className="form-item">
          <label>Author :</label>
          <input
            value={authors}
            placeholder="Enter book Author"
            onChange={this.handleAuthorChange}
            required
          />
        </div>
        <div className="form-item">
          <label>Publisher :</label>
          <input
            value={publisher}
            placeholder="Enter book Publisher"
            onChange={this.handlePublisherChange}
            required
          />
        </div>
        <div className="form-item new-btn-box">
          <button
            type="submit"
            className="submit-btn"
            // onClick={this.handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default NewBook;
