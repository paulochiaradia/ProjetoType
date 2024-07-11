import { CategoryInterface } from "../interfaces/categoryInterface";

class category implements CategoryInterface{
    private name: string;
    constructor(name: string){
        this.name = name;
    }
    getName(): string{
        return this.name;
    }
    add(category: CategoryInterface): void {
        throw new Error("Cannot add to a leaf category");
    }
    remove(category: CategoryInterface): void {
        throw new Error("Cannot remove from a leaf category");
    }
    getCategories(): CategoryInterface[] {
        return [];
    }
}

export default category;