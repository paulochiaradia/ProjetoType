import studentUser from "./user/studentUserType";
import teacherUser from "./user/teacherUserType";
import { User } from "./user/user";
import userRepo from "./repo/userRepo"; // Import the userRepo class

let userRepoTeste = new userRepo();
let user = new User('John Doe', "teste@gmail.com");
let student = new studentUser('John Student', "teste@student.com"); 
let teacher = new teacherUser('John Teacher', "teste@teacher.com");	


userRepoTeste.add(user);
userRepoTeste.add(student);
userRepoTeste.add(teacher);
console.log(userRepoTeste.list());
userRepoTeste.remove(user.email);
userRepoTeste.remove(student.email);
userRepoTeste.remove(teacher.email);
console.log(userRepoTeste.list());
console.log(userRepoTeste.list().length);