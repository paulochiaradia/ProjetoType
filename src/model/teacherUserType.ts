import { UserInterface } from "../interfaces/userInterface";
import * as crypto from 'crypto';

class teacherUser implements UserInterface {
    name: string;
    email: string;
    id: string;
    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
        this.id = "tch-"+crypto.randomUUID();
    }
}

export default teacherUser;