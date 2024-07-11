import { UserInterface } from '../interfaces/userInterface';	
import * as crypto from 'crypto';

export class User implements UserInterface {
    name: string;
    email: string;
    id: string;
    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
        this.id = "usr-"+crypto.randomUUID();
    }
}

export default User;