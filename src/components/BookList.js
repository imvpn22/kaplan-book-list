import React, { Component } from 'react';
// import Pagination from './Pagination';

import axios from 'axios';
import BookCard from './BookCard';

class BookList extends Component {
  state = {
    bookList: [],
    isLoading: true,
    isFailed: false,
    searchQur: ''
  };

  componentDidMount() {
    this.getBookList();
  }

  getBookList = () => {
    // Set initial state for showing loading
    this.setState({ isLoading: true, isFailed: false });

    axios
      .get('https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep')
      .then(res => {
        // console.log(res.data);
        const { items } = res.data;
        this.setState({ bookList: items, isLoading: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({ bookList: [], isLoading: false, isFailed: true });
      });
  };

  handleQuery = e => {
    let searchQur = e.target.value;
    searchQur = searchQur.replace(/[-\\/\\^$*+?.()|[\]{}]/g, '\\$&'); // Remove escape characters

    this.setState({ searchQur });
  };

  filterBooks = () => {
    const { bookList, searchQur } = this.state;
    const searchRe = new RegExp(searchQur, 'ig');

    const filteredList = bookList.filter(book => {
      if (
        (book.volumeInfo.title && !!book.volumeInfo.title.match(searchRe)) ||
        (book.volumeInfo.publisher &&
          !!book.volumeInfo.publisher.match(searchRe)) ||
        (book.volumeInfo.authors &&
          book.volumeInfo.authors.length &&
          !!book.volumeInfo.authors
            .reduce((a, c) => a + ' ' + c, '')
            .match(searchRe))
      ) {
        return true;
      }
      return false;
    });

    return filteredList;
  };

  render() {
    const { isLoading, isFailed } = this.state;
    const filteredBookList = this.filterBooks();

    return (
      <div className="main">
        <div className="header">Kaplan Book List</div>
        <div className="sub-header">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search by title, author, publisher"
              value={this.state.queryText}
              onChange={e => this.handleQuery(e)}
              required={true}
              autoFocus={true}
            />
            <button value="Search">
              <i
                className={
                  this.props.isSearching
                    ? 'fas fa-circle-notch fa-spin'
                    : 'fas fa-search'
                }
              ></i>
            </button>
          </div>
          <div className="new-btn-box">
            <button>Create New Book</button>
          </div>
        </div>

        <div className="book-list">
          {filteredBookList.length
            ? filteredBookList.map(book => (
                <BookCard key={book.id} book={book} />
              ))
            : isLoading
            ? 'Loading'
            : isFailed
            ? 'Failed'
            : 'No data'}
        </div>
        {}
      </div>
    );
  }
}

export default BookList;
