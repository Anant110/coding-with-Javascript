//Before ES6 function

// function Student(name, rollNumber, age, subject) {
//     this.name = name;
//     this.rollNumber = rollNumber;
//     this.age = age;
//     this.subject = subject;
// }

// Student.prototype.getDetails = function () {
//     console.log( `Name:${this.name},RollNumber:${this.rollNumber},Age:${this.age},Subject:${this.subject}`);
// }

// let st=new Student("Anant",789,90,"Maths");
// st.getDetails();

// After ES6
class Student{
    constructor(name, rollNumber, age, subject) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.age = age;
        this.subject = subject;
    }

    getDetails(){
        console.log( `Name:${this.name},RollNumber:${this.rollNumber},Age:${this.age},Subject:${this.subject}`);
    }
}

let student1=new Student("Anant",789,90,"Maths");
student1.getDetails();