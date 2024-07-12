import studentUser from "./user/studentUserType";
import teacherUser from "./user/teacherUserType";
import { User } from "./user/user";
import userRepo from "./repo/userRepo"; 
import bookRepo from "./repo/bookRepo"; 
import Book from "./book/book";
import Category from "./category/category";
import CategoryComposite from "./composite/categoryComposite";

//let userRepoTeste = new userRepo();
let bookRepoTeste = new bookRepo();

let rootCategory: CategoryComposite;
let rootCategory2: CategoryComposite;

rootCategory = new CategoryComposite("Conto de Fadas");
rootCategory2 = new CategoryComposite("Aventura");
rootCategory.add(new Category("Fantasia"));
rootCategory2.add(new Category("Dinossauros"));



let book = new Book("Harry Potter", "J.K. Rowling", 2000, rootCategory);
let book2 = new Book("Jurassic Park", "Michael Crichton", 1990, rootCategory2);

bookRepoTeste.add(book);
bookRepoTeste.add(book2);
bookRepoTeste.list().forEach(book => console.log(book.toString()));
console.log(rootCategory.toString());


//userRepoTeste.add(user);
//userRepoTeste.add(student);
//userRepoTeste.add(teacher);
//console.log(userRepoTeste.list());
//userRepoTeste.remove(user.email);
//userRepoTeste.remove(student.email);
//userRepoTeste.remove(teacher.email);
//console.log(userRepoTeste.list());
//console.log(userRepoTeste.list().length);