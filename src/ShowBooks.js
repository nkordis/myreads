import React from "react";
import Book from "./Book";

/**
 * Displays the list of books for a given shelf
 * @param {} props
 */
function ShowBooks(props) {
  const { books, updateBookShelf } = props;

  return (
    <ol className="books-grid">
      {books.map(book => (
        <li key={book.title + Math.random()}>
          <Book book={book} updateBookShelf={updateBookShelf} />
        </li>
      ))}
    </ol>
  );
}

export default ShowBooks;
