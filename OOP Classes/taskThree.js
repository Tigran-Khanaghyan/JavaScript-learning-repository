"use strict";

/*Write classes: Person class and Student class. Person should have:
fields

firstName
lastName
gender
age

methods
getters for fields
setters for fields
toString() */

class Person {
  constructor(firstName, lastName, gender, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    if (typeof value !== "string") {
      throw new Error("Enter string please");
    }
    this._firstName = value;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    if (typeof value !== "string") {
      throw new Error("Enter string please");
    }
    this._lastName = value;
  }
  get gender() {
    return this._gender;
  }
  set gender(value) {
    if (value === "male" || value === "female") {
      this._gender = value;
      return;
    }
    throw new Error("There is no such a gender");
  }
  get age() {
    return this._age;
  }
  set age(value) {
    if (typeof value !== "number") {
      throw new Error("The age must be a number");
    }
    this._age = value;
  }
  toString() {
    return `First Name: ${this.firstName}
Last Name: ${this.lastName}
Gender: ${this.gender}
Age: ${this.age}`;
  }
}

/*Student is inherited from Person. It should have
fields

year
fee
program(array of { programName, grade })

methods
getters for fields
setters for fields
passExam(programName, grade)
isAllPassed()
toString()

Student should contain the data about its programs and exams.
passExam will update that data, so if student passed all the exams(grade is great or equal to
50), its year should be increased by one.
It should have a method isAllPassed(). */

class Student extends Person {
  static passedExams = 0;
  constructor(firstName, lastName, gender, age, year, fee) {
    super(firstName, lastName, gender, age);
    this.year = year;
    this.fee = fee;
    this.program = [];
  }
  get year() {
    return this._year;
  }
  set year(value) {
    if (typeof value !== "number") {
      throw new Error("Enter a number please");
    }
    this._year = value;
  }
  get fee() {
    return this._fee;
  }
  set fee(value) {
    if (typeof value !== "number") {
      throw new Error("Enter a number please");
    }
    this._fee = value;
  }

  static isAllPassed() {
    let isNotPassedExam = this.program.some((item) => item.grade < 50);
    if (isNotPassedExam) {
      console.log("Please learn this course again!");
      return;
    }
    ++this.year;
    console.log("Congratulations! you passed all exams");
    return;
  }
  passExam(programName, grade) {
    ++Student.passedExams;
    let subject = this.program.find((item) => item.programName === programName);
    subject.grade = grade;
    if (Student.passedExams === this.program.length) {
      Student.isAllPassed.call(this);
    }
  }
}

let user1 = new Person("Name", "Surname", "female", 23);
//console.log(user1.toString()); // Name Surname, 23 years old.
let student = new Student("Tigran", "Khanaghyan", "male", 30, 1, 1000000);
student.program = [
  { programName: "Math", grade: 0 },
  { programName: "English", grade: 0 },
  { programName: "JavaScript", grade: 0 },
];
student.passExam("Math", 100);
student.passExam("English", 100);
student.passExam("JavaScript", 100);

//console.log(student);
//console.log(student)
