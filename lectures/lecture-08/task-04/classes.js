class Person {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  greet() {
    console.log(`Grettings! This is ${this.name}!`);
  }
}

class Student extends Person {
  constructor(name, age, email, studentID) {
    super(name, age, email);
    this.studentID = studentID;
  }

  student() {
    console.log(`I am a student with student-ID ${this.studentID}.`);
    console.log(`I am ${this.age} years old and my email is ${this.email}.`);
  }
}

const mrMarcus = new Student("Marcus", 40, "marcus.pettersson@dtms.se", "0651");
const personTwo = new Person("Alve", 4, "alve@dtms.se");

mrMarcus.greet();
mrMarcus.student();
