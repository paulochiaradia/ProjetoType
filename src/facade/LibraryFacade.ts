import { LibraryMediator } from "../mediator/LibraryMediator";
import LoanRepo from "../repo/loanRepo";
import bookRepo from "../repo/bookRepo";

export class LibraryFacade {
  private static instance: LibraryFacade;
  private Mediator: LibraryMediator;

  constructor(loanRepo: LoanRepo, bookRepo: bookRepo) {
    this.Mediator = new LibraryMediator(loanRepo, bookRepo);
  }

  loanBook(book: any, user: any) {
    return this.Mediator.loanBook(book, user);
  }

  returnBook(book: any, user: any) {
    return this.Mediator.returnBook(book, user);
  }

  listLoans() {
    return this.Mediator.listLoans();
  }

  searchByTitle(title: string) {
    return this.Mediator.searchByTitle(title);
  }

  searchByAuthor(author: string) {
    return this.Mediator.searchByAuthor(author);
  }

  searchByCategory(category: string) {
    return this.Mediator.searchByCategory(category);
  }

  searchByQuantity(quantity: number) {
    return this.Mediator.searchByQuantity(quantity);
  }
}