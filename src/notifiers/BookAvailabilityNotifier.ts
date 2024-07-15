import BookAvailabilityHandler from "../handlers/bookAvailabilityHandler";

export class BookAvaiablityNotifier {
  private handler: BookAvailabilityHandler;

  constructor() {
    this.handler = new BookAvailabilityHandler();
  }

  setHandler(handler: BookAvailabilityHandler) {
    this.handler = handler;
  }

  notify(book: any, user: any) {
    return this.handler.handle(book, user);
  }

  notifyBooks(books: any[], user: any) {
    return books.map((book) => this.notify(book, user));
  }

  notifyAvailable(books: any[], user: any) {
    return books.filter((book) => book.quantity > 0).map((book) => this.notify(book, user));
  }

  notifyUnavailable(books: any[], user: any) {
    return books.filter((book) => book.quantity === 0).map((book) => this.notify(book, user));
  }
}