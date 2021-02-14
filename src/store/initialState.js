const bookList = localStorage.getItem('bookList');
let items;
try {
  items = JSON.parse(bookList);
} catch (e) {
  items = {};
}

const initialState = {
  books: { items },
  showNewBookPopup: false
};

export default initialState;
