
interface CategoryInterface {
    getName(): string;
    add(category: CategoryInterface): void;
    remove(category: CategoryInterface): void;
    getCategories(): CategoryInterface[];
}

export { CategoryInterface };
 
