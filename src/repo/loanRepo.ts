import Book from "../book/book";
import loanRepoInterface from "../interfaces/loanRepoInterface";
import Loan from "../loan/loan";
import User from "../user/user";

class LoanRepo implements loanRepoInterface {
  private loans: Loan[] = [];

  add(loan: Loan): void {
    this.loans.push(loan);
  }

  findLoan(book: Book, user: User): Loan | undefined {
    return this.loans.find((loan) => loan.book === book && loan.user === user);
  }

  list(): Loan[] {
    return this.loans;
  }
}

export default LoanRepo;