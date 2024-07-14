import Book from "../book/book";
import handlerInterface from "../interfaces/handlerInterface";
import User from "../user/user";

class BookAvailabilityHandler implements handlerInterface {
  private nextHandler: handlerInterface | null = null;

  setNext(handler: handlerInterface): handlerInterface {
    this.nextHandler = handler;
    return handler;
  }

  handle(book: Book, user: User): string {
    if (book.quantity > 0) {
      if (this.nextHandler) {
        return this.nextHandler.handle(book, user);
      }
      return `Book ${book.getTitle()} is available.`;
    } else {
      return `Book ${book.getTitle()} is not available for loan.`;
    }
  }
}

export default BookAvailabilityHandler;
