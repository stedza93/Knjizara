export function selectBook(book) {
  //ovo je actioncreator tako da treba da vrati akciju: objekat sa
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}
export function hoverBook(book) {
  console.log(book);
  return {
    type: "BOOK_HOVER",
    payload: book
  };
}
export function writerBook(book) {
  console.log(book);
  return {
    type: "WRITER_BOOK",
    payload: book
  };
}