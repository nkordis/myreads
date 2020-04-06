import React from "react";

function handleChange(props, oldListName, newListName, book) {
  book.shelf = newListName;
  props.updateBookShelf(oldListName, newListName, book);
}
/**Handles the selection of bookshelf */
function BookShelfChanger(props) {
  return (
    <div className="book-shelf-changer">
      <select
        onChange={event =>
          handleChange(props, props.book.shelf, event.target.value, props.book)
        }
        value={props.book.hasOwnProperty("shelf") ? props.book.shelf : "none"}
      >
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

export default BookShelfChanger;
