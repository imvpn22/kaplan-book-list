import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const NewBook = () => {
  const [title, setTitle] = useState('');
  const [authors, setAuthors] = useState('');
  const [publisher, setPublisher] = useState('');

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    const id = Date.now();
    const dt = new Date(id);
    // Published date as current date
    const publishedDate = `${dt.getFullYear()}-${
      dt.getMonth() + 1
    }-${dt.getDate()}`;
    const bookData = {
      id,
      volumeInfo: { title, authors: [authors], publisher, publishedDate }
    };

    // Dispatch action
    dispatch({ type: 'CREATE_BOOK', data: bookData });
    dispatch({ type: 'TOGGLE_CREATE_BOOK', data: false });

    // Reset form fields
    setTitle('');
    setAuthors('');
    setPublisher('');
  }

  return (
    <form className="new-book-form" onSubmit={e => handleSubmit(e)}>
      <div className="form-item">
        <label>Title :</label>
        <input
          value={title}
          placeholder="Enter book Title"
          onChange={e => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-item">
        <label>Author :</label>
        <input
          value={authors}
          placeholder="Enter book Author"
          onChange={e => setAuthors(e.target.value)}
          required
        />
      </div>
      <div className="form-item">
        <label>Publisher :</label>
        <input
          value={publisher}
          placeholder="Enter book Publisher"
          onChange={e => setPublisher(e.target.value)}
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
};

export default NewBook;
