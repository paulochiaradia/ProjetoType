"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class category {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    add(category) {
        throw new Error("Cannot add to a leaf category");
    }
    remove(category) {
        throw new Error("Cannot remove from a leaf category");
    }
    getCategories() {
        return [];
    }
}
exports.default = category;
