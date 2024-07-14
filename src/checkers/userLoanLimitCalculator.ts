import { LoanLimitCalculatorInterface } from "../interfaces/loanLimitCalculatorInterface";
import { UserInterface } from "../interfaces/userInterface";

class UserLoanLimitCalculator implements LoanLimitCalculatorInterface {
  getLoanLimit(user: UserInterface): number {
    return 1;
  }
}

export default UserLoanLimitCalculator;
