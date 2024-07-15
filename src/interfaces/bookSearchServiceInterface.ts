import { BookInterface } from "./bookInterface";

export interface BookSearchServiceInterface {
    searchByTitle(title: string): BookInterface;
    searchByAuthor(author: string): BookInterface[];
    searchByCategory(category: string): BookInterface[];
    searchByQuantity(quantity: number): BookInterface[];
}