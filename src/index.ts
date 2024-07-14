import studentUser from "./user/studentUserType";
import teacherUser from "./user/teacherUserType";
import { User } from "./user/user";
import userRepo from "./repo/userRepo"; 
import bookRepo from "./repo/bookRepo"; 
import Book from "./book/book";
import Category from "./category/category";
import CategoryComposite from "./composite/categoryComposite";
import ExternalCatalogAdapter from "./adapter/catalogExternalAdapter";
import LoanService from "./service/loanService";
import LoanRepo from "./repo/loanRepo";


let bookRepoTeste = new bookRepo();
let loanRepoTeste = new LoanRepo();
let userRepoTeste = new userRepo();


let user = new User("João", "teste@gmail.com")
let student = new studentUser("Maria", "student@gmail.com", );
let teacher = new teacherUser("Carlos", "teacher@gmail.com");

userRepoTeste.add(user);
userRepoTeste.add(student);
userRepoTeste.add(teacher);

const mockExternalCatalogService = {
    getBooks: () => [
      { title: "External Book 1", author: "External Author 1", quantity: 10, category: "Sci-Fi" },
      { title: "External Book 2", author: "External Author 2", quantity: 5, category: "Fantasy" }
    ]
  };

let externalAdapter = new ExternalCatalogAdapter(mockExternalCatalogService);
let externalBooks = externalAdapter.fetchBooks();
externalBooks.forEach(book => bookRepoTeste.add(book));

let rootCategory: CategoryComposite;
let rootCategory2: CategoryComposite;

rootCategory = new CategoryComposite("Conto de Fadas");
rootCategory2 = new CategoryComposite("Aventura");
rootCategory.add(new Category("Fantasia"));
rootCategory.add(new Category("Dinossauros"));



let book = new Book("Harry Potter", "J.K. Rowling", 2000, rootCategory);
let book2 = new Book("Jurassic Park", "Michael Crichton", 1990, rootCategory2);

bookRepoTeste.add(book);
bookRepoTeste.add(book2);
bookRepoTeste.list().forEach(book => console.log(book.toString()));
console.log(rootCategory.toString());

let loanService = new LoanService(loanRepoTeste);

// Realizando empréstimos
console.log(loanService.loanBook(book, student));
console.log(loanService.loanBook(book, teacher)); // Deve falhar, pois o livro já foi emprestado ao aluno
console.log(loanService.loanBook(book2, teacher));

// Listando empréstimos
loanService.listLoans().forEach(loan => console.log(loan.toString()));

// Devolvendo livros
console.log(loanService.returnBook(book, student));
console.log(loanService.returnBook(book, teacher)); // Deve falhar, pois o livro não foi emprestado ao professor
console.log(loanService.returnBook(book2, teacher));

// Listando empréstimos após devolução
loanService.listLoans().forEach(loan => console.log(loan.toString()));

