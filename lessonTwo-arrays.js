// 1.	Create a function that accepts two numbers, adds them and returns the result.
function addsTwo(a, b) {
	return a + b;
}

console.log(addsTwo(10, 20));

// 2.	Write a function with the following behaviour
//      -    takes an array as a parameter
//      -    reverses the order of the array
//      -    returns the reversed array
function reverseArray(array) {
	return array.reverse();
}
console.log(reverseArray([1, 2, 3, 4, 5]));

//  4. Create an array with 10 items
var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//  5. Update one of the items
myArray[4] = "Bob";

//  6. Delete half of the array
var halfArray = myArray.splice(Math.floor(myArray.length / 2), myArray.length);
console.log(myArray);

//  7. Write out each of the array methods so you become familiar with the syntax (use the array you made earlier)
//    Pop
var lastElement = myArray.pop();

//    Push
myArray.push(false);

//    Shift
var firstElement = myArray.shift;

//    Unshift
myArray.unshift("Jack");

//    Concatenating
myArray.concat(halfArray);

//    Splicing
var splicedElementes = myArray.splice(2, 2); // remove 2 elements, from the index 2 and return the removed elements

//    Slicing
var myArrayCopy = myArray.slice(3); // creates a copy of the first 3 elements

//    Reverse
myArray.reverse();

//    Join
myArray.join(" "); // make a string out of the array with spaces separated

//    forEach
myArray.forEach((element) => {
	console.log(element);
});

//    Includes
var item = "Jack";
myArray.includes(item);

//    indexOf
myArray.indexOf(item);

//    Every
// returns true if every element is truthy. false in this case as "false" is in the list
console.log(
	myArray.every((element) => {
		return element;
	})
);

//    Some
// returns true if some or any element is truthy. true in this case
console.log(
	myArray.some((element) => {
		return element;
	})
);
//    Filter
// only returns the numbers in the list
console.log(
	myArray.filter((element) => {
		return Number.isInteger(element);
	})
);

//    Find
console.log(
	myArray.find(function (element) {
		return element === 0;
	})
);

//    findIndex
console.log(
	myArray.findIndex(function (element) {
		return element === 0;
	})
);

//    Sort
// might not be as expected as there are multiple data types in the list
console.log(myArray.sort((a, b) => a + b)); // sort in ascending order
console.log(myArray.sort((a, b) => a - b)); // sort in descending order
