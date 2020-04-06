import React from "react";
import BookShelfChanger from "./BookShelfChanger";

/** Handles book display */
function Book(props) {
  //Check if the book has an back-ground image
  const url = props.book.hasOwnProperty("imageLinks")
    ? props.book.imageLinks.thumbnail
    : "";

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 188,
            backgroundImage: `url(${url})`
          }}
        ></div>
        <BookShelfChanger
          book={props.book}
          updateBookShelf={props.updateBookShelf}
        />
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">{props.book.authors}</div>
    </div>
  );
}

export default Book;
