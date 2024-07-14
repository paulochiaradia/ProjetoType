
import Book from '../book/book';
import Loan from '../loan/loan';
import User from '../user/user';


interface LoanRepo {
  add(loan: Loan): void;
  list(): Loan[];
  findLoan(book: Book, user: User): Loan | undefined;
}

export default LoanRepo;
