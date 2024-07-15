import { BookAvaiablityNotifier } from './../notifiers/BookAvailabilityNotifier';
import Book from "../book/book";
import BookAvailabilityHandler from "../handlers/bookAvailabilityHandler";
import LoanLimitHandler from "../handlers/loanLimitHandler";
import UserEligibilityHandler from "../handlers/userEligibilityHandler";
import { EligibilityCheckerInterface } from "../interfaces/eligibilityCheckerInterface";
import { LoanLimitCalculatorInterface } from "../interfaces/loanLimitCalculatorInterface";
import LoanRepo from "../interfaces/loanRepoInterface";
import LoanServiceInterface from "../interfaces/loanServiceInterface";
import Loan from "../loan/loan";
import User from "../user/user";

class LoanService implements LoanServiceInterface {
  private loanRepository: LoanRepo;
  private approvalChain: BookAvailabilityHandler | undefined;
  private bookAvaiablityNotifier: BookAvaiablityNotifier = new BookAvaiablityNotifier();

  constructor(loanRepository: LoanRepo) {
    this.loanRepository = loanRepository;
    this.setupApprovalChain();
  }

  setupApprovalChain(): void {
    const studentEligibilityChecker: EligibilityCheckerInterface = {
      isEligible: (user: User) => user.id.substring(0, 3) === "std",
    };
    const teacherEligibilityChecker: EligibilityCheckerInterface = {
      isEligible: (user: User) => user.id.substring(0, 3) === "tch",
    };
    const userEligibilityChecker: EligibilityCheckerInterface = {
      isEligible: (user: User) => user.id.substring(0, 3) === "usr"
    };

    const userEligibilityHandler = new UserEligibilityHandler(
      studentEligibilityChecker,
      teacherEligibilityChecker,
      userEligibilityChecker
    );

    const loanLimitCalculator: LoanLimitCalculatorInterface = {
      getLoanLimit: (user: User) => {
        if (user.id.substring(0, 3) === "std") {
          return 2;
        } else if (user.id.substring(0, 3) === "tch") {
          return 5;
        } else {
          return 1;
        }
      }

    };

    const loanLimitHandler = new LoanLimitHandler(this.loanRepository, loanLimitCalculator);

    const bookAvailabilityHandler = new BookAvailabilityHandler();
    bookAvailabilityHandler.setNext(userEligibilityHandler).setNext(loanLimitHandler);
    this.approvalChain = bookAvailabilityHandler;


  }
  
  loanBook(book: Book, user: User): string {
    if (!this.approvalChain) {
      return `Loan approval chain not set up.`;
    }
    //adicionar o registro de emprestimo no repositorio de emprestimos
    const loan = new Loan(book, user);
    this.loanRepository.add(loan);

    return this.approvalChain.handle(book, user);

  }



  returnBook(book: Book, user: User): string {
    const existingLoan = this.loanRepository.findLoan(book, user);
    if (!existingLoan) {
      return `No record of loan found for user ${user.name} with book ${book.getTitle()}.`;
    }

    book.incrementQuantity();

    this.bookAvaiablityNotifier.notify(book, user);

    return `Book ${book.getTitle()} successfully returned by user ${user.name}.`;
  }

  listLoans(): Loan[] {
    return this.loanRepository.list();
  }
}

export default LoanService;
