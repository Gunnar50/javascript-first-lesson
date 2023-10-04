// 1.	Create a defensive check inside a function that handles if the inputs to the function are invalid/non existent.
function double(num) {
	if (typeof num !== "number") {
		return "Input should be a number";
	}
	return 2 * num;
}

// 2.	Create a timer than console.logs a message after 5 seconds
setTimeout(() => console.log("This message is logged after 5 seconds"), 5000);

// 3.	Create a timer than consoles.logs a message every 5 seconds
// setInterval(() => console.log("This message is logged every 5 seconds"), 5000);

// 4.	Create a function, inside the function add a second function, and again add a third function into the second function
// 5.	Create 3 variable, then define 3 the variables in the correct place so that:
function first() {
	// 6.	The first variable is accessible inside every function
	const var1 = "Variable 1";

	function second() {
		// 7.	The second variable is accessible inside the second and third function only
		const var2 = "Variable 2";

		function third() {
			// 8.	The third variable is accessible inside the third function only
			const var3 = "Variable 3";

			// 9.	Define a 4th variable inside the 3rd function. This variable should be accessible by every function
			var4 = "Variable 4"; // was i suppouse to use the global variable?

			// 10.	Create a scope inside the 3rd function, place a variable inside it that is only accessible inside that scope
			{
				const var5 = "Variable 5";
			}
		}
		third();
	}
	second();

	console.log(var4);
}
first();

// 11.  Write out a try catch block with finally
try {
	// try to run this non existing funciton
	nonExistingFunction();
} catch (error) {
	console.log(error);
} finally {
	console.log("This will log either way");
}

// 12.  Duplicate an object so mutating the original does not mutate the copy
obj = { name: "Name", age: 30, height: 180 };
const deepCopy = JSON.parse(JSON.stringify(obj));
obj.name = "Bob";
console.log(obj, deepCopy);
