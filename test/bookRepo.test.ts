//test all method of bookRepo

import bookRepo from "../src/repo/bookRepo";
import Book from "../src/book/book";
import Category from "../src/category/category";
import CategoryComposite from "../src/composite/categoryComposite";

let rootCategory: CategoryComposite;
let rootCategory2: CategoryComposite;
let bookRepoTeste = new bookRepo();

beforeEach(() => {
    bookRepoTeste = new bookRepo();
    rootCategory = new CategoryComposite("Conto de Fadas");
    rootCategory2 = new CategoryComposite("Aventura");
    rootCategory.add(new Category("Fantasia"));
    rootCategory2.add(new Category("Dinossauros"));
});

test('add book', () => {
    let book = new Book("Harry Potter", "J.K. Rowling", 2000, rootCategory);
    let book2 = new Book("Jurassic Park", "Michael Crichton", 1990, rootCategory2);
    expect(bookRepoTeste.add(book)).toBe("Harry Potter");
    expect(bookRepoTeste.add(book2)).toBe("Jurassic Park");
});

test('add book already exists', () => {
    let book = new Book("Harry Potter", "J.K. Rowling", 2000, rootCategory);
    let book2 = new Book("Jurassic Park", "Michael Crichton", 1990, rootCategory2);
    bookRepoTeste.add(book);
    bookRepoTeste.add(book2);
    expect(bookRepoTeste.add(book)).toBe("Book already exists");
});

test('remove book', () => {
    let book = new Book("Harry Potter", "J.K. Rowling", 2000, rootCategory);
    let book2 = new Book("Jurassic Park", "Michael Crichton", 1990, rootCategory2);
    bookRepoTeste.add(book);
    bookRepoTeste.add(book2);
    bookRepoTeste.remove("Harry Potter");
    expect(bookRepoTeste.list().length).toBe(1);
});

test('remove book not found', () => {
    let book = new Book("Harry Potter", "J.K. Rowling", 2000, rootCategory);
    let book2 = new Book("Jurassic Park", "Michael Crichton", 1990, rootCategory2);
    bookRepoTeste.add(book);
    bookRepoTeste.add(book2);
    bookRepoTeste.remove("Harry Potter");
    bookRepoTeste.remove("Harry Potter");
    expect(bookRepoTeste.list().length).toBe(1);
});

test('find book', () => {
    let book = new Book("Harry Potter", "J.K. Rowling", 2000, rootCategory);
    let book2 = new Book("Jurassic Park", "Michael Crichton", 1990, rootCategory2);
    bookRepoTeste.add(book);
    bookRepoTeste.add(book2);
    expect(bookRepoTeste.find("Harry Potter")).toBe(book);
});

test('find book not found', () => {
    let book = new Book("Harry Potter", "J.K. Rowling", 2000, rootCategory);
    let book2 = new Book("Jurassic Park", "Michael Crichton", 1990, rootCategory2);
    bookRepoTeste.add(book);
    bookRepoTeste.add(book2);
    expect(bookRepoTeste.find("Jurassic Park")).toBe(book2);
});

test('list book', () => {
    let book = new Book("Harry Potter", "J.K. Rowling", 2000, rootCategory);
    let book2 = new Book("Jurassic Park", "Michael Crichton", 1990, rootCategory2);
    bookRepoTeste.add(book);
    bookRepoTeste.add(book2);
    expect(bookRepoTeste.list()).toStrictEqual([book, book2]);
});

test('list book empty', () => {
    expect(bookRepoTeste.list()).toStrictEqual([]);
});


