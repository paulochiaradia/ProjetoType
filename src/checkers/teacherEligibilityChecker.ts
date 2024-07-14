import { EligibilityCheckerInterface } from "../interfaces/eligibilityCheckerInterface";
import { UserInterface } from "../interfaces/userInterface";


class TeacherEligibilityChecker implements EligibilityCheckerInterface {
  isEligible(user: UserInterface): boolean {
    if (user.id.startsWith("tch-")) {
      return true
  }
    return false;
    }
}

export default TeacherEligibilityChecker;
