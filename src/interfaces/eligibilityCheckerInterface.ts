import { UserInterface } from "./userInterface";

export interface EligibilityCheckerInterface {
  isEligible(user: UserInterface): boolean;
}

