import { combineReducers } from "redux";
import BooksReducer from "./reducer_books";
import ActiveBook from "./reducer_active_book";
import HoverBook from "./reducer_hover_book";
import WriterBook from "./reducer_writer_book";

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,
  hoverBook: HoverBook,
  writerBook: WriterBook
});

export default rootReducer;
