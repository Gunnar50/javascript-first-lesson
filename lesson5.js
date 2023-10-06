// Destructure an array
const colours = ["red", "green", "blue", "yellow"];
const [colour1, colour2, colour3, colour4] = colours;

// Destructure an object
// Change the name of one of the item you pull out of the object
// Add a default value to the name above
const person = {
	name: "Josh",
	age: 20,
};
const { name: firstName = "No Name", age: userAge = "No Age" } = person;
