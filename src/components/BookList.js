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
    this.getBookList();
  }

  getBookList = () => {
    // Set initial state for showing loading
    this.setState({ isLoading: true, isFailed: false });

    this.props.actions.getBookList().then(() => {
      if (this.props.items && this.props.items.length) {
        this.setState({ isLoading: false, isFailed: false });
      } else {
        this.setState({ isLoading: false, isFailed: true });
      }
    });
  };

  handleQuery = e => {
    let searchQur = e.target.value;
    // modify to remove escape characters
    searchQur = searchQur.replace(/[-\\/\\^$*+?.()|[\]{}]/g, '\\$&');
    this.setState({ searchQur });
  };

  filterBooks = (bookList, searchQur) => {
    const searchRe = new RegExp(searchQur, 'ig');
    return bookList.filter(book => {
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
  };

  toggleCreatePopup = () => {
    const { showNewBookPopup } = this.props;
    this.props.actions.toggleNewBookPopup(!showNewBookPopup);
  };

  render() {
    const { isLoading, isFailed, searchQur } = this.state;
    const { items, showNewBookPopup } = this.props;
    const filteredBookList = this.filterBooks(items, searchQur);

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
            <button onClick={this.toggleCreatePopup}>Create New Book</button>
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
          isPopupShow={showNewBookPopup}
          closePopup={this.toggleCreatePopup}
        >
          <NewBook />
        </Popup>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.books.items,
  showNewBookPopup: state.configs.showNewBookPopup
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
