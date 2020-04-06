import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import ShowBooks from "./ShowBooks";
import { Route, Link } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,

    currentlyReading: [],

    wantToRead: [],

    read: [],

    none: [],

    query: "",

    search: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      books.forEach(book => {
        this.setState(currentState => ({
          [book.shelf]: currentState[book.shelf].concat([book])
        }));
      });
    });
  }

  updateQuery = query => {
    const newQuery = query.trim();
    this.setState(() => ({
      query: newQuery
    }));
    if (newQuery !== "") {
      BooksAPI.search(newQuery).then(books => {
        if (books.error === undefined) {
          books.forEach(book => {
            if (this.state.currentlyReading.some(b => b.id === book.id)) {
              book.shelf = "currentlyReading";
            } else if (this.state.wantToRead.some(b => b.id === book.id)) {
              book.shelf = "wantToRead";
            } else if (this.state.read.some(b => b.id === book.id)) {
              book.shelf = "read";
            } else {
              this.setState(currentState => ({
                none: currentState.none.concat([book])
              }));
            }
          });

          this.setState({
            search: books
          });
        } else {
          this.setState({
            search: []
          });
        }
      });
    } else {
      this.setState({
        search: []
      });
    }
  };

  updateBookShelf = (oldbookShelf, newBookShelf, book) => {
    if (
      oldbookShelf !== "currentlyReading" &&
      oldbookShelf !== "wantToRead" &&
      oldbookShelf !== "read"
    ) {
      this.setState(currentState => ({
        [newBookShelf]: currentState[newBookShelf].concat([book])
      }));
    } else {
      this.setState(currentState => ({
        [newBookShelf]: currentState[newBookShelf].concat([book]),
        [oldbookShelf]: currentState[oldbookShelf].filter(b => {
          return b.title !== book.title;
        })
      }));
    }
    BooksAPI.update(book, newBookShelf);
  };

  render() {
    const { search, query } = this.state;

    const bookShelfs = [
      { id: "currentlyReading", name: "Currently Reading" },
      { id: "wantToRead", name: "Want to Read" },
      { id: "read", name: "Read" }
    ];

    return (
      <div className="app">
        <Route
          exact
          path="/search"
          render={() => (
            <div className="search-books">
              <div className="search-books-bar">
                <Link to="/" className="list-books">
                  <button
                    className="close-search"
                    onClick={() => this.setState({ showSearchPage: false })}
                  >
                    Close
                  </button>
                </Link>
                <div className="search-books-input-wrapper">
                  <input
                    type="text"
                    placeholder="Search by title or author"
                    value={query}
                    onChange={event => {
                      this.updateQuery(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="search-books-results">
                <ShowBooks
                  books={search}
                  updateBookShelf={this.updateBookShelf}
                />
              </div>
            </div>
          )}
        />

        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>My Reads</h1>
              </div>
              <div className="list-books-content">
                {bookShelfs.map(bookshelf => (
                  <div className="bookshelf" key={bookshelf.id + Math.random()}>
                    <h2 className="bookshelf-title">{bookshelf.name}</h2>
                    <div className="bookshelf-books">
                      <ShowBooks
                        books={this.state[bookshelf.id]}
                        updateBookShelf={this.updateBookShelf}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="open-search">
                <Link to="/search" className="search-book">
                  <button
                    onClick={() => this.setState({ showSearchPage: true })}
                  >
                    Add a book
                  </button>
                </Link>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
