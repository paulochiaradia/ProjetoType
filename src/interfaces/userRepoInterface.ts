import User from "../model/user";

interface UserRepoInterface {
    find(email: string): User;
    add(user: User): string;
    remove(email: string): void;
    list(): User[];
}

export { UserRepoInterface }