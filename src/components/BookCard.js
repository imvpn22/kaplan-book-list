import React from 'react';

const BookCard = props => {
  const { book } = props;
  return (
    <div className="book-card">
      <div className="book-img">
        {/* Show thumbnail if book image is not available */}
        {book.volumeInfo.imageLinks ? (
          <img
            src={book.volumeInfo.imageLinks.thumbnail}
            alt={book.volumeInfo.title + ' image'}
          />
        ) : (
          <i className="fas fa-book"></i>
        )}
      </div>
      <div className="book-data">
        <div className="book-title"> {book.volumeInfo.title} </div>
        <div className="book-author">
          {book.volumeInfo.authors.reduce((a, c) => a + ' ' + c, '')}{' '}
        </div>
        <div className="book-other">
          <div>Publisher: {book.volumeInfo.publisher}</div>
          <div>Published Date: {book.volumeInfo.publishedDate}</div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
