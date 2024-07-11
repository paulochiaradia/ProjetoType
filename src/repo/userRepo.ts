import { UserRepoInterface } from "../interfaces/userRepoInterface";
import User from "../user/user";

class UserRepo implements UserRepoInterface {
    users: User[] = [];
    find(email: string): User {
        return this.users.find(user => user.email === email)!;
    }
    
    add(user: User): string {
        if (this.users.find(u => u.email === user.email)) {
            return "User already exists";
        }
        this.users.push(user);
        return user.id;
    }
    
    remove(email: string): void {
        const index = this.users.findIndex(user => user.email === email);
        if (index === -1) {
            console.log("User not found");
        } else {
            this.users.splice(index, 1);
        }
    }   
    list(): User[] {
        return this.users;
    }
}

export default UserRepo;