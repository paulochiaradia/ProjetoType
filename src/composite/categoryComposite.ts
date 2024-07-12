import { CategoryInterface } from "../interfaces/categoryInterface";

class compositeCategory implements CategoryInterface{
    private name: string;
    private categories: CategoryInterface[] = [];
    
    constructor(name: string){
        this.name = name;
    }
    getName(): string{
        return this.name;
    }
    add(category: CategoryInterface): void {
        this.categories.push(category);
    }
    remove(category: CategoryInterface): void {
        const index = this.categories.indexOf(category);
        if(index === -1){
            console.log("Category not found");
        }else{
            this.categories.splice(index, 1);
        }
    }
    getCategories(): CategoryInterface[] {
        return this.categories;
    }

    toString(): string {
        let result = this.name;
        for (let category of this.categories) {
            result += "->"+category.toString();
        }
        return result;
    }
}

export default compositeCategory;