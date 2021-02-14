import React, { Component } from 'react';
import BookCard from './BookCard';
import Popup from './Popup';
import NewBook from './NewBook';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

class BookList extends Component {
  state = {
    bookList: [],
    isLoading: true,
    isFailed: false,
    searchQur: '',
    isPopupShow: false
  };

  componentDidMount() {
    // Don't make API call if data is present in localstorage
    if (this.props.items && this.props.items.length) {
      this.setState({ bookList: this.props.items });
    } else {
      this.getBookList();
    }
  }

  getBookList = () => {
    // Set initial state for showing loading
    this.setState({ isLoading: true, isFailed: false });

    this.props.actions.getBookList().then(() => {
      if (this.props.items && this.props.items.length) {
        this.setState({
          bookList: this.props.items,
          isLoading: false,
          isFailed: false
        });

        // Set new data is localstorage to persist
        localStorage.setItem('bookList', JSON.stringify(this.props.items));
      } else {
        this.setState({ bookList: [], isLoading: false, isFailed: true });
      }
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

  openPopup = () => {
    this.setState({ isPopupShow: true });
  };

  closePopup = () => {
    this.setState({ isPopupShow: false });
  };

  createBook = book => {
    const { bookList } = this.state;
    bookList.push(book);
    this.setState(bookList);
    localStorage.setItem('bookList', JSON.stringify(bookList));
    this.closePopup();
  };

  render() {
    const { isLoading, isFailed, isPopupShow } = this.state;
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
            <button onClick={this.openPopup}>Create New Book</button>
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

        <Popup
          title="Create New Book"
          isPopupShow={isPopupShow}
          closePopup={this.closePopup}
        >
          <NewBook createBook={this.createBook} />
        </Popup>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.books.items
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
