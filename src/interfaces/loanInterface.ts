import Book from "../book/book";
import User from "../user/user";

interface LoanInterface {
  book: Book;
  user: User;
  loanDate: Date;
  toString(): string;
}

export default LoanInterface;