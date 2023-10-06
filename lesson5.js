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
// Use the array method Flat
const matrix = [
	[0, 0, 0],
	[1, 1, 1],
	[2, 2, 2],
];
console.log(matrix.flat());

// Use Array.from
const arrayFromName = Array.from(firstName);
console.log(arrayFromName);

// Use Array.isArray
Array.isArray(arrayFromName);

// Use the object property shorthand

const createBook = (title, author, noPages) => {
	return {
		title,
		author,
		noPages,
		// Use the function shorthand in an object
		details() {
			return `Book title: ${title}\nAuthor: ${author}\nNumber of pages: ${noPages}`;
		},
	};
};
const harryPotter = createBook("Harry Potter", "JK Rowling", 200);
console.log(harryPotter.details());
// Use Rest on an array
const [red, ...restOfColours] = colours;

// Use Rest on an object
const { title: bookTitle, ...restOfBook } = harryPotter;
console.log(bookTitle);

// Use Spread on an array
// using array destruction to create the 2 arrays.
const [arr1, arr2] = [
	[1, 2, 3],
	[4, 5, 6],
];
const addArr = [...arr1, ...arr2];

// Use Spread on an Object
harryPotterWithYear = { ...harryPotter, year: 1997 };
console.log(harryPotterWithYear);

// Create a class (any concept you like)
class Furniture {
	constructor(type, material) {
		this.type = type;
		this.material = material;
	}

	getDetails() {
		return `${this.type} of the material ${this.material}`;
	}
}
