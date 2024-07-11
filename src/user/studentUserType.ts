import { UserInterface } from "../interfaces/userInterface";
import * as crypto from 'crypto';

class studentUser implements UserInterface {
    name: string;
    email: string;
    id: string;
    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
        this.id = "std-"+crypto.randomUUID();
    }
}

export default studentUser;