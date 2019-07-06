import React, { Component } from 'react';
import BookResults from './bookResults';
import App from '../App';

class BookSearchApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showResults: false
    };
  }
  render() {
    const page = this.state.showResults ? <BookResults /> : <App />;
    return (
      <div className='bookSearch'>
        <BookResults books={this.state.books} />
      </div>
    );
  }
}

export default BookSearchApp;
