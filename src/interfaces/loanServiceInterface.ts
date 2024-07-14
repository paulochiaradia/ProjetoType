import Book from "../book/book";
import Loan from "../loan/loan";
import User from "../user/user";

interface LoanServiceInterface {
  loanBook(book: Book, user: User): string;
  returnBook(book: Book, user: User): string;
  listLoans(): Loan[];
}

export default LoanServiceInterface;