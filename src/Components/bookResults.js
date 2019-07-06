import React, { Component } from 'react';
import '../Style/bookResults.css';

class BookResults extends Component {
  render() {
    return (
      <div className='bookResults'>
        <h2 className='bookTitle' value={this.props.volumeInfo.title}>
          Harry Potter and the Sorcerer's Stone
        </h2>
        <div className='bookInfo'>
          <h3 className='author' value={this.props.volumeInfo.author}>
            Author: JK Rowling
          </h3>
          <h3 className='price' value={this.props.saleInfo.listPrice.amount}>
            Price: $25.00
          </h3>
          <p className='description' value={this.props.description}>
            Harry takes on the wild world of wizarding in this debut novel.
          </p>
          <img className='bookCover' src='findsource' />
        </div>
        <hr width='70%' />
      </div>
    );
  }
}

export default BookResults;
