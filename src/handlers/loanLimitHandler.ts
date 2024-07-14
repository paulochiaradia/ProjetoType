import Book from "../book/book";
import handlerInterface from "../interfaces/handlerInterface";
import { LoanLimitCalculatorInterface } from "../interfaces/loanLimitCalculatorInterface";
import LoanRepo from "../interfaces/loanRepoInterface";
import User from "../user/user";

class LoanLimitHandler implements handlerInterface {
  private nextHandler: handlerInterface | null = null;
  private loanRepository: LoanRepo;
  private loanLimitCalculator: LoanLimitCalculatorInterface;

  constructor(loanRepository: LoanRepo, loanLimitCalculator: LoanLimitCalculatorInterface) {
    this.loanRepository = loanRepository;
    this.loanLimitCalculator = loanLimitCalculator;
  }

  setNext(handler: handlerInterface): handlerInterface {
    this.nextHandler = handler;
    return handler;
  }

  handle(book: Book, user: User): string {
    const userLoans = this.loanRepository.list().filter(loan => loan.user.email === user.email);
    const loanLimit = this.loanLimitCalculator.getLoanLimit(user);
    
    if (userLoans.length >= loanLimit) {
      return `User ${user.name} has reached the loan limit of ${loanLimit} books.`;
    }

    if (this.nextHandler) {
      return this.nextHandler.handle(book, user);
    }

    return `User ${user.name} has not reached the loan limit.`;
  }
}

export default LoanLimitHandler;
