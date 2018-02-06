export default function(state = null, action) {
    switch (action.type) {
      case "BOOK_HOVER":
        return action.payload;
    }
  
    return state;
  }
  