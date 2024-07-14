import { EligibilityCheckerInterface } from "../interfaces/eligibilityCheckerInterface";
import { UserInterface } from "../interfaces/userInterface";


class UserEligibilityCheck implements EligibilityCheckerInterface {
  isEligible(user: UserInterface): boolean {
    if (user.id.startsWith("usr-")) {
      return true;
    }
    return false;
  }
}

export default UserEligibilityCheck;
