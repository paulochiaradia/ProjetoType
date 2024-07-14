import { LoanLimitCalculatorInterface } from "../interfaces/loanLimitCalculatorInterface";
import { UserInterface } from "../interfaces/userInterface";

class TeacherLoanLimitCalculator implements LoanLimitCalculatorInterface {
  getLoanLimit(user: UserInterface): number {
    return 4;
  }
}

export default TeacherLoanLimitCalculator;
