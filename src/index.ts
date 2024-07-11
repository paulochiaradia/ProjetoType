import studentUser from "./model/studentUserType";
import teacherUser from "./model/teacherUserType";
import { User } from "./model/user";

let user = new User('John Doe', "teste@gmail.com");
let student = new studentUser('John Student', "teste@student.com"); 
let teacher = new teacherUser('John Teacher', "teste@teacher.com");	

console.log(user);
console.log(student);
console.log(teacher);