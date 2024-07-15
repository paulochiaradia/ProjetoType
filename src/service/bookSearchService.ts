
//bookSearchService class - search for books by title, author, category, or quantity

import { BookInterface } from "../interfaces/bookInterface";
import { BookRepoInterface } from "../interfaces/bookRepoInterface";
import { BookSearchServiceInterface } from "../interfaces/bookSearchServiceInterface";

class bookSearchService implements BookSearchServiceInterface {
    private bookRepo: BookRepoInterface;

    constructor(bookRepo: BookRepoInterface) {
        this.bookRepo = bookRepo;
    }

    searchByTitle(title: string): BookInterface {
        return this.bookRepo.find(title);
    }

    searchByAuthor(author: string): BookInterface[] {
        return this.bookRepo.list().filter(book => book.getAuthor() === author);
    }

    searchByCategory(category: string): BookInterface[] {
        return this.bookRepo.list().filter(book => book.getCategory().toString() === category);
    }

    searchByQuantity(quantity: number): BookInterface[] {
        return this.bookRepo.list().filter(book => book.getQuantity() === quantity);
    }
}

export default bookSearchService;