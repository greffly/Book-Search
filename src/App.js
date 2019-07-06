import React, { Component } from 'react';
import Header from './Components/header';
import './App.css';
import SearchBar from './Components/searchBar';
import BookSearchApp from './Components/bookSearchApp';

const myAPIKey = 'AIzaSyBUdgKegFMyiIto1DTVMrRotGTUkKM-YYM';
const baseURL = 'https://www.googleapis.com/auth/books';
const searchTerm = 'enter here';

function formatQueryParams(params) {
  const queryItems = Object.keys(params).map(
    key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
  );
  return queryItems.join('&');
}
class App extends Component {
  componentDidMount() {
    const options = {
      method: 'GET',
      headers: {
        key: myAPIKey
      }
    };
    const params = {
      q: searchTerm
      // filter: {free-ebooks, paid-ebooks},
      // printType: {all, books, magazinges}
    };
    const queryParams = formatQueryParams(params);
    const url = baseURL + '?' + queryParams;

    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          books: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          erorr: err.message
        });
      });
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <SearchBar />
        <BookSearchApp />
      </div>
    );
  }
}

export default App;
