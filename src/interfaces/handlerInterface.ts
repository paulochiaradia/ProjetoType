import Book from "../book/book";
import User from "../user/user";

interface handlerInterface {
  setNext(handler: handlerInterface): handlerInterface;
  handle(book: Book, user: User): string;
}

export default handlerInterface;