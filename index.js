// 1. In a series of variables store:
// a.       A string
// b.       A number
// c.       A Boolean
var firstName = "Gustavo";
var surname = "Passarella";

var dayOfBirth = 1;
var monthOfBirth = 12;
var yearOfBirth = 1992;

var isProgrammer = true;

// 2. Add two numbers
var num1 = 10;
var num2 = 20;
var result = num1 + num2;
console.log(`The result of ${num1} + ${num2} is ${result}`);

// 3. Concatenate two string
var fullName = firstName + " " + surname;
console.log(fullName);
var dateOfBirth = dayOfBirth + "/" + monthOfBirth + "/" + yearOfBirth;
console.log(dateOfBirth);

// 4. Create an IF statement which checks if a variable matches another variable, if so it should console log a message
// 5. Extend the IF statement to have an ELSE IF to show an alternative message if the first comparison fails
// 6. Extend one of the IF statements to check if two things are true, if so show a message
var appleCount = 10;
var bananaCount = 7;

if (appleCount == bananaCount) {
	console.log("You have the same amount of fruits!");
} else if (appleCount > bananaCount) {
	console.log("You have more apples than bananas");
} else {
	console.log("You have more bananas than apples");
}

if (appleCount > 5 && bananaCount > 5) {
	console.log("You have more than 5 of each fruit!");
}

// 7. Convert the IF statement to a Switch statement
var wheater = "sunny";
switch (wheater) {
	case "sunny":
		console.log("It's a great day!");
		break;
	case "cold":
		console.log("It's cold outside");
		break;
	case "rainy":
		console.log("You must be in London!");
		break;

	default:
		console.log(`I don't recognize the wheater ${wheater}`);
		break;
}
// 8.  Store name, age and height in an Object
var Person = {
	name: "John",
	age: 99,
	height: 6, // feet
};
// 9. Create a FOR loop that shows a message 10 times
for (let i = 0; i < 10; i++) {
	console.log('"Message to be displayed"', i);
}
