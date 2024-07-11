import { UserInterface } from "../interfaces/userInterface";
import { UserRepoInterface } from "../interfaces/userRepoInterface";
import User from "../model/user";

class UserRepo implements UserRepoInterface {
    users: User[] = [];
    find(email: string): User {
        return this.users.find(user => user.email === email)!;
    }
    add(user: User): string {
        this.users.push(user);
        return user.id;
    }
    remove(email: string): void {
        this.users = this.users.filter(user => user.email !== email);
    }
    list(): User[] {
        return this.users;
    }
}

export default UserRepo;