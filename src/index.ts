import { LibraryFacade } from './facade/LibraryFacade';
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
import { configurationManager } from './managers/ConfigurationManager';


// set all the the repos and facade onto configuration manager
configurationManager.getInstance().setConfiguration({
  loanRepo: new LoanRepo(),
  bookRepo: new bookRepo(),
  userRepo: new userRepo(),
});

const config = configurationManager.getInstance().getConfiguration();

let LibraryFacadeTeste = new LibraryFacade(config.loanRepo, config.bookRepo);


let user = new User("João", "teste@gmail.com")
let student = new studentUser("Maria", "student@gmail.com", );
let teacher = new teacherUser("Carlos", "teacher@gmail.com");

config.userRepo.add(user);
config.userRepo.add(student);
config.userRepo.add(teacher);

const mockExternalCatalogService = {
    getBooks: () => [
      { title: "External Book 1", author: "External Author 1", quantity: 10, category: "Sci-Fi" },
      { title: "External Book 2", author: "External Author 2", quantity: 5, category: "Fantasy" }
    ]
  };

let externalAdapter = new ExternalCatalogAdapter(mockExternalCatalogService);
let externalBooks = externalAdapter.fetchBooks();
externalBooks.forEach(book => config.bookRepo.add(book));

let rootCategory: CategoryComposite;
let rootCategory2: CategoryComposite;

rootCategory = new CategoryComposite("Conto de Fadas");
rootCategory2 = new CategoryComposite("Aventura");
rootCategory.add(new Category("Fantasia"));
rootCategory.add(new Category("Dinossauros"));



let book = new Book("Harry Potter", "J.K. Rowling", 2000, rootCategory);
let book2 = new Book("Jurassic Park", "Michael Crichton", 1990, rootCategory2);

config.bookRepo.add(book);
config.bookRepo.add(book2);

// Realizando empréstimos
console.log(LibraryFacadeTeste.loanBook(book, student));
console.log(LibraryFacadeTeste.loanBook(book2, teacher));

//impriindo os livros emprestados
console.log(LibraryFacadeTeste.listLoans());