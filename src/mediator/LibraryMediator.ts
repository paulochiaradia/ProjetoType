import LoanService from "../service/loanService";
import BookSearchService from "../service/bookSearchService";
import LoanRepo from "../repo/loanRepo";
import bookRepo from "../repo/bookRepo";
import Book from "../book/book";
import User from "../user/user";


export class LibraryMediator{
    private loanService: LoanService;
    private bookSearchService: BookSearchService;
  
    constructor(loanRepository: LoanRepo, bookRepository: bookRepo) {
        this.loanService = new LoanService(loanRepository);
        this.bookSearchService = new BookSearchService(bookRepository);
    }
    loanBook(book: Book, user: User) {
        return this.loanService.loanBook(book, user);
    }
    returnBook(book: Book, user: User) {
        return this.loanService.returnBook(book, user);
    }
    listLoans() {
        return this.loanService.listLoans();
    }
    searchByTitle(title: string) {
        return this.bookSearchService.searchByTitle(title);
    }
    searchByAuthor(author: string) {
        return this.bookSearchService.searchByAuthor(author);
    }
    searchByCategory(category: string) {
        return this.bookSearchService.searchByCategory(category);
    }
    searchByQuantity(quantity: number) {
        return this.bookSearchService.searchByQuantity(quantity);
    }
}