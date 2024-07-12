"use strict";
// test all methods in userRepo.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const studentUserType_1 = __importDefault(require("../src/user/studentUserType"));
const teacherUserType_1 = __importDefault(require("../src/user/teacherUserType"));
const user_1 = require("../src/user/user");
const userRepo_1 = __importDefault(require("../src/repo/userRepo"));
let userRepoTeste = new userRepo_1.default();
beforeEach(() => {
    userRepoTeste = new userRepo_1.default();
});
test('Test add method', () => {
    let user = new user_1.User('John Doe', "mail@teste.com");
    expect(userRepoTeste.add(user)).toBe(user.id);
    let student = new studentUserType_1.default('John Travolta', "mail2@teste.com");
    expect(userRepoTeste.add(student)).toBe(student.id);
    let teacher = new teacherUserType_1.default('John Teacher', "mail3@teste.com");
    expect(userRepoTeste.add(teacher)).toBe(teacher.id);
    expect(userRepoTeste.list().length).toBe(3);
});
test('Test find method', () => {
    let user = new user_1.User('John Doe', "mail@gamil.com");
    userRepoTeste.add(user);
    expect(userRepoTeste.find(user.email)).toBe(user);
});
test('Test remove method', () => {
    let teacher = new teacherUserType_1.default('John Teacher', "teste@teacher.com");
    userRepoTeste.add(teacher);
    userRepoTeste.remove(teacher.email);
    expect(userRepoTeste.list().length).toBe(0);
});
test('Test list method', () => {
    let studente = new studentUserType_1.default('John Doe', "mail@mail.com");
    userRepoTeste.add(studente);
    let teacher = new teacherUserType_1.default('John Teacher', "mail2@gmail.com");
    userRepoTeste.add(teacher);
    expect(userRepoTeste.list().length).toBe(2);
});
