import { BookInterface } from "../interfaces/bookInterface";
import { CategoryInterface } from "../interfaces/categoryInterface";

class Book implements BookInterface{
    private title: string;
    private author: string;
    quantity: number;
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

    isAvailable(): boolean {
        return this.quantity > 0;
      }
    
      decrementQuantity(): void {
        if (this.isAvailable()) {
          this.quantity -= 1;
        }
      }
    
      incrementQuantity(): void {
        this.quantity += 1;
      }
    

    toString(): string {
        return `Book {
          title: ${this.title},
          author: ${this.author},
          quantity: ${this.quantity},
          category: ${this.category.toString()}
        }`;
}
}

export default Book;