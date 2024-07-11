
import Book from "../book/book";
import { BookInterface } from "./bookInterface";

interface BookRepoInterface {
    find(title: string): BookInterface;
    add(book: Book): string;
    remove(title: string): void;
    list(): BookInterface[];
}

export { BookRepoInterface }