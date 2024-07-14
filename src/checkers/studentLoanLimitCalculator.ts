import { LoanLimitCalculatorInterface } from "../interfaces/loanLimitCalculatorInterface";
import { UserInterface } from "../interfaces/userInterface";

class StudentLoanLimitCalculator implements LoanLimitCalculatorInterface {
  getLoanLimit(user: UserInterface): number {
    return 2;
  }
}

export default StudentLoanLimitCalculator;
