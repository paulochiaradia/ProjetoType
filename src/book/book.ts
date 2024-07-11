import { BookInterface } from "../interfaces/bookInterface";
import { CategoryInterface } from "../interfaces/categoryInterface";

//book implements BookInterface with title, author, quantity, and category(categoryComposite/category)

class Book implements BookInterface{
    private title: string;
    private author: string;
    private quantity: number;
    private category: CategoryInterface;
    
    constructor(title: string, author: string, quantity: number, category: CategoryInterface){
        this.title = title;
        this.author = author;   
        this.quantity = quantity;
        this.category = category;
    }
    getTitle(): string{
        return this.title;
    }
    getAuthor(): string{
        return this.author;
    }
    getQuantity(): number{
        return this.quantity;
    }
    getCategory(): CategoryInterface[]{
        return [this.category];
    }
}