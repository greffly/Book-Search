import React, { Component } from 'react';
import '../Style/searchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWord: '',
      printType: 'all',
      filter: 'null'
    };
  }
  searchWordChange(searchWord) {
    this.setState({
      searchWord
    });
  }
  searchPrintType(printType) {
    this.setState({
      printType
    });
  }
  searchBookType(bookType) {
    this.setState({
      bookType
    });
  }
  render() {
    // handleChange(value) {
    //   this.setState({

    //   })
    // }
    return (
      <div className='searchBar'>
        <form className='searchForm'>
          <div className='searchWord'>
            <h3 className='searchKeyword'>Search:</h3>
            <input
              type='text'
              placeholder='harry'
              value={this.state.searchWord}
            />
            <button type='submit'>Search</button>
          </div>
          <div className='filters'>
            <h4 className='printType'>Print Type:</h4>
            <select value={this.state.printType} onChange={this.handleChange}>
              <option value='all'>All</option>
              <option value='books'>Books</option>
              <option value='magazines'>Magazines</option>
            </select>
            <h4 className='bookType'>Book Type:</h4>
            <select value={this.state.filter} onChange={this.handleChange}>
              <option value='null'>Any</option>
              <option value='free-ebooks'>Free Ebook</option>
              <option value='paid-ebooks'>Paid Ebook</option>
            </select>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
