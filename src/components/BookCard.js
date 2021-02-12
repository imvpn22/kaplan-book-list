import React from 'react';

const BookCard = props => {
  return (
    <div className="book-card">
      <div className="book-img">
        <img
          src={props.book.volumeInfo.imageLinks.thumbnail}
          alt={props.book.volumeInfo.title + ' image'}
        />
      </div>
      <div className="book-data">
        <div className="book-title"> {props.book.volumeInfo.title} </div>
        <div className="book-author">
          {props.book.volumeInfo.authors.reduce((a, c) => a + ' ' + c, '')}{' '}
        </div>
        <div className="book-other">
          <div>Publisher: {props.book.volumeInfo.publisher}</div>
          <div>Published Date: {props.book.volumeInfo.publishedDate}</div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
