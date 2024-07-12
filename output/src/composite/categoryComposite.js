"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class compositeCategory {
    constructor(name) {
        this.categories = [];
        this.name = name;
    }
    getName() {
        return this.name;
    }
    add(category) {
        this.categories.push(category);
    }
    remove(category) {
        const index = this.categories.indexOf(category);
        if (index === -1) {
            console.log("Category not found");
        }
        else {
            this.categories.splice(index, 1);
        }
    }
    getCategories() {
        return this.categories;
    }
}
exports.default = compositeCategory;
