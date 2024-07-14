import Book from "../book/book";
import LoanInterface from "../interfaces/loanInterface";
import User from "../user/user";


class Loan implements LoanInterface {
  book: Book;
  user: User;
  loanDate: Date;

  constructor(book: Book, user: User) {
    this.book = book;
    this.user = user;
    this.loanDate = new Date();
  }

  toString(): string {
    return `Loan {
      book: ${this.book.getTitle()},
      user: ${this.user.name},
      loanDate: ${this.loanDate.toISOString()}
    }`;
  }
}

export default Loan;