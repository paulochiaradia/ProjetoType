import { UserInterface } from "./userInterface";

export interface LoanLimitCalculatorInterface {
  getLoanLimit(user: UserInterface): number;
}
