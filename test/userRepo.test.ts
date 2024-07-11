// test all methods in userRepo.ts

import studentUser from "../src/model/studentUserType";
import teacherUser from "../src/model/teacherUserType";
import { User } from "../src/model/user";
import UserRepo from "../src/repo/userRepo";

let userRepoTeste = new UserRepo();
beforeEach(() => {
  userRepoTeste = new UserRepo();
});

test('Test add method', () => {
    let user = new User('John Doe', "mail@teste.com");
    expect(userRepoTeste.add(user)).toBe(user.id);

    let student = new studentUser('John Travolta', "mail2@teste.com");
    expect(userRepoTeste.add(student)).toBe(student.id);

    let teacher = new teacherUser('John Teacher', "mail3@teste.com");
    expect(userRepoTeste.add(teacher)).toBe(teacher.id);

    expect(userRepoTeste.list().length).toBe(3);

});

test('Test find method', () => {
    let user = new User('John Doe', "mail@gamil.com");
    userRepoTeste.add(user);
    expect(userRepoTeste.find(user.email)).toBe(user);
});

test('Test remove method', () => {
    let teacher = new teacherUser('John Teacher', "teste@teacher.com");	
    userRepoTeste.add(teacher);
    userRepoTeste.remove(teacher.email);
    expect(userRepoTeste.list().length).toBe(0);
});	

test('Test list method', () => {
    let studente = new studentUser('John Doe', "mail@mail.com");
    userRepoTeste.add(studente);
    let teacher = new teacherUser('John Teacher', "mail2@gmail.com");
    userRepoTeste.add(teacher);

    expect(userRepoTeste.list().length).toBe(2);
});