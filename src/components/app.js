import React, { Component } from "react";
import Booklist from "../contnainers/book-list.js";
import BookDetail from "../contnainers/book-detail";
export default class App extends Component {
  render() {
    return (
      <div>
        <Booklist />
        <BookDetail />
      </div>
    );
  }
}
