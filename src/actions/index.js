export function selectBook(book){
//ovo je actioncreator tako da treba da vrati akciju: objekat sa 
return {
type: "BOOK_SELECTED",
payload: book

};
}