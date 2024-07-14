import Book from "../book/book";
import LoanRepo from "../interfaces/loanRepoInterface";
import LoanServiceInterface from "../interfaces/loanServiceInterface";
import Loan from "../loan/loan";
import User from "../user/user";

class LoanService implements LoanServiceInterface {
  private loanRepository: LoanRepo;

  constructor(loanRepository: LoanRepo) {
    this.loanRepository = loanRepository;
  }

  loanBook(book: Book, user: User): string {
    if (book.quantity < 1) {
      return `Book ${book.getTitle()} is not available for loan.`;
    }

    const existingLoan = this.loanRepository.findLoan(book, user);
    if (existingLoan) {
      return `User ${user.name} has already borrowed the book ${book.getTitle()}.`;
    }

    book.decrementQuantity();
    const loan = new Loan(book, user);
    this.loanRepository.add(loan);
    return `Book ${book.getTitle()} successfully loaned to user ${user.name}.`;
  }

  returnBook(book: Book, user: User): string {
    const existingLoan = this.loanRepository.findLoan(book, user);
    if (!existingLoan) {
      return `No record of loan found for user ${user.name} with book ${book.getTitle()}.`;
    }

    book.incrementQuantity();
    return `Book ${book.getTitle()} successfully returned by user ${user.name}.`;
  }

  listLoans(): Loan[] {
    return this.loanRepository.list();
  }
}

export default LoanService;
