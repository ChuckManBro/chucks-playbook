// CLASSES - Promineo Week-5
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

class Person {
	awards = [];
	currentMember = true;

	constructor(newFirstName, newLastName, newEmail) {
		this.firstName = newFirstName;
		this.lastName = newLastName;
		this.email = newEmail;
	}

	displayProfile() {
		alert(`PERSON PROFILE
===============
Name: ${this.firstName} ${this.lastName}
Email: ${this.email}
Current Member: ${this.currentMember}`);
	}

	completeProfile() {
		return `PERSON PROFILE
===============
Name: ${this.firstName} ${this.lastName}
Email: ${this.email}
Current Member: ${this.currentMember}`;
	}
}

/*

The 'Person' class will create object with name, title, and email constructors.
It also creates an empty 'awards' array (line9).

It will have a 'method' of displayProfile(), which will make an alert window listing all profile info.

completeProfile() will return the compiled profile, but does not execute the alert window.

Below, 'Student' class extends the 'Person' class (inheritance):

*/

class Student extends Person {
	constructor(newStudFName, newStudLName, newStudEmail, yearEntry, tuitionPaidEntry) {
		super(newStudFName, newStudLName, newStudEmail);
		this.year = yearEntry;
		this.tuitionPaid = tuitionPaidEntry;
	}
	grades = [];

	gradeAverage() {
		if (this.grades.length != 0) {
			let sum = 0;
			for (let i = 0; i < this.grades.length; i++) {
				sum += this.grades[i];
			}
			return `Average: ${Math.round(sum / this.grades.length)}%`;
		} else {
			return `(No grades received yet.)`;
		}
	}
}

const student001 = new Student('Lucy', 'Smith', 'lsmith@gmail.com', 'Freshman', false);
student001.grades.push(100, 80, 95, 78);
console.table(student001);
console.log(student001.gradeAverage());

let student002 = new Student('John', 'Doe', 'jdoe@gmail.com', 'Senior', true);
console.table(student002);
console.log(student002.completeProfile());
