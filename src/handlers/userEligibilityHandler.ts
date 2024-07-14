import Book from "../book/book";
import { EligibilityCheckerInterface } from "../interfaces/eligibilityCheckerInterface";
import handlerInterface from "../interfaces/handlerInterface";
import User from "../user/user";

class UserEligibilityHandler implements handlerInterface {
  private nextHandler: handlerInterface | null = null;
  private studentEligibilityChecker: EligibilityCheckerInterface;
  private teacherEligibilityChecker: EligibilityCheckerInterface;
  private userEligibilityChecker: EligibilityCheckerInterface;

  constructor(
    studentEligibilityChecker: EligibilityCheckerInterface,
    teacherEligibilityChecker: EligibilityCheckerInterface,
    userEligibilityChecker: EligibilityCheckerInterface
  ) {
    this.studentEligibilityChecker = studentEligibilityChecker;
    this.teacherEligibilityChecker = teacherEligibilityChecker;
    this.userEligibilityChecker = userEligibilityChecker;
  }

  setNext(handler: handlerInterface): handlerInterface {
    this.nextHandler = handler;
    return handler;
  }

  handle(book: Book, user: User): string {
    if (this.studentEligibilityChecker.isEligible(user)) {
      if (this.nextHandler) {
        return this.nextHandler.handle(book, user);
      }
      return `Student ${user.name} is eligible to borrow ${book.getTitle()}.`;
    } else if (this.teacherEligibilityChecker.isEligible(user)) {
      if (this.nextHandler) {
        return this.nextHandler.handle(book, user);
      }
      return `Teacher ${user.name} is eligible to borrow ${book.getTitle()}.`;
    } else if (this.userEligibilityChecker.isEligible(user)) {
      if (this.nextHandler) {
        return this.nextHandler.handle(book, user);
      }
      return `User ${user.name} is eligible to borrow ${book.getTitle()}.`;
    } else {
      return `User ${user.name} is not eligible to borrow ${book.getTitle()}.`;
    }
  }
}

export default UserEligibilityHandler;
