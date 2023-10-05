// Create two JS files
// Add a variable, object and function (use fat arrow)
// Export all three
// Add a fourth variable and make it the default export
// Import all the items from one file to the other (remember type="module")
import multiply, { addTwo, person, username } from "./lesson4b.js";
console.log(multiply(10, 2));
console.log(username);
console.log(person);
console.log(addTwo(2, 5));

// Create a function with default parameters
const defautParam = (a = 0, b = 0) => a + b;

// Create a template literal string
const template = `${person.name} who is ${person.age} years old, lives in the ${person.location}.`;
console.log(template);

// Use Trim
console.log(username.trim());

// Use a function to create an object
const dog = (dogName, age) => {
	return { name: dogName, age: age };
};

const dog1 = dog("Sally", 3);
console.log(`Dog name: ${dog1.name}\nDog age: ${dog1.age}`);

// Create a constructor function
function Car(model, colour) {
	this.model = model;
	this.colour = colour;
	this.driving = false;
}

// Create an instance of the function
const bmw = new Car("bmw", "blue");
console.log(bmw);

// Extend the prototype with a new function
Car.prototype.drive = function () {
	this.driving = true;
};
bmw.drive();
console.log(bmw);

// Create an object with a method
const p = {
	fName: "Bob",
	lName: "Smith",
	fullName: function (param) {
		return `${this.fName} ${this.lName}. ${param}`;
	},
};

// Invoke the method using Call, Apply and Bind
console.log(p.fullName());
console.log(
	p.fullName.call({ fName: "Josh", lName: "JSON" }, "passing an argument")
);
console.log(
	p.fullName.apply({ fName: "Josh", lName: "JSON" }, ["passing an argument"])
);

const SallyFName = p.fullName.bind({ fName: "Sally", lName: "Mary" });
console.log(SallyFName("passing an argument"));
