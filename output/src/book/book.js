"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(title, author, quantity, category) {
        this.title = title;
        this.author = author;
        this.quantity = quantity;
        this.category = category;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getQuantity() {
        return this.quantity;
    }
    getCategory() {
        return [this.category];
    }
}
exports.default = Book;
