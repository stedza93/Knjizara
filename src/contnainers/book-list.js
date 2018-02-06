import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook, hoverBook, writerBook } from "../actions/index";
import { bindActionCreators } from "redux";
class Booklist extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          onMouseEnter={() => this.props.writerBook(book.writerName)}
          className="list-group-item"
        >
          {" "}
          {book.title}
        </li>
      );
    });
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}
function mapStateToProps(state) {
  return {
    //sta je to sadasdas
    books: state.books
  };
}
function mapDispatchToProps(dispatch) {
  //whenever selectedBook is called result should be passed to all reducers
  console.log("dispatch = " + dispatch);
  return bindActionCreators(
    { selectBook: selectBook, hoverBook: hoverBook, writerBook: writerBook },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Booklist);
