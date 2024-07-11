import { CategoryInterface } from "./categoryInterface";

interface BookInterface {
    getTitle(): string;
    getAuthor(): string;
    getQuantity(): number;
    getCategory(): CategoryInterface[];
}

export { BookInterface };