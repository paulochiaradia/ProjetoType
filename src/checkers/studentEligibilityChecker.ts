import { EligibilityCheckerInterface } from "../interfaces/eligibilityCheckerInterface";
import { UserInterface } from "../interfaces/userInterface";


class StudentEligibilityChecker implements EligibilityCheckerInterface {
  isEligible(user: UserInterface): boolean {
    if (user.id.startsWith("std-")) {
      return true;
    }
    return false;
  }
}

export default StudentEligibilityChecker;
