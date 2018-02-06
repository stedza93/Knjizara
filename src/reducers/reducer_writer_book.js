export default function(state = null, action) {
    switch (action.type) {
      case "BOOK_WRITER":
        return action.payload;
    }
  
    return state;
  }
  