import Book from "../book/book";
import compositeCategory from "../composite/categoryComposite";
import ExternalBook from "../interfaces/externalBookInterface";

class ExternalCatalogAdapter {
    private externalCatalogService: any; 

    constructor(externalCatalogService: any) {
        this.externalCatalogService = externalCatalogService;
    }

    fetchBooks(): Book[] {
        const externalBooks: ExternalBook[] = this.externalCatalogService.getBooks();
        const categoryMap: Map<string, compositeCategory> = new Map();

        return externalBooks.map(externalBook => {
            let category: compositeCategory;
            const categoryKey = String(externalBook.category); // Convert to string
            if (categoryMap.has(categoryKey)) {
                category = categoryMap.get(categoryKey)!;
            } else {
                category = new compositeCategory(categoryKey);
                categoryMap.set(categoryKey, category);
            }
        
            return new Book(externalBook.title, externalBook.author, externalBook.quantity, category);
        });
    }
}

export default ExternalCatalogAdapter;