"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class bookRepo {
    constructor() {
        this.books = [];
    }
    find(title) {
        return this.books.find(book => book.getTitle() === title);
    }
    add(book) {
        if (this.books.find(b => b.getTitle() === book.getTitle())) {
            return "Book already exists";
        }
        this.books.push(book);
        return book.getTitle();
    }
    remove(title) {
        const index = this.books.findIndex(book => book.getTitle() === title);
        if (index === -1) {
            console.log("Book not found");
        }
        else {
            this.books.splice(index, 1);
        }
    }
    list() {
        return this.books;
    }
}
exports.default = bookRepo;
