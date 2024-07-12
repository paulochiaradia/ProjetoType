import { BookInterface } from "../interfaces/bookInterface";
import { BookRepoInterface } from "../interfaces/bookRepoInterface";
import { CategoryInterface } from "../interfaces/categoryInterface";

class bookRepo implements BookRepoInterface{
    private books: BookInterface[] = [];
    
    find(title: string): BookInterface {
        return this.books.find(book => book.getTitle() === title)!;
    }

    add(book: BookInterface): string {
        if (this.books.find(b => b.getTitle() === book.getTitle())) {
            return "Book already exists";
        }
        this.books.push(book);
        return book.getTitle();
    }

    remove(title: string): void {
        const index = this.books.findIndex(book => book.getTitle() === title);
        if (index === -1) {
            console.log("Book not found");
        } else {
            this.books.splice(index, 1);
        }
    }

    list(): BookInterface[] {
        return this.books;
    }

}

export default bookRepo;