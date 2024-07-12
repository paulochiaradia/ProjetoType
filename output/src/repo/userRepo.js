"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserRepo {
    constructor() {
        this.users = [];
    }
    find(email) {
        return this.users.find(user => user.email === email);
    }
    add(user) {
        if (this.users.find(u => u.email === user.email)) {
            return "User already exists";
        }
        this.users.push(user);
        return user.id;
    }
    remove(email) {
        const index = this.users.findIndex(user => user.email === email);
        if (index === -1) {
            console.log("User not found");
        }
        else {
            this.users.splice(index, 1);
        }
    }
    list() {
        return this.users;
    }
}
exports.default = UserRepo;
