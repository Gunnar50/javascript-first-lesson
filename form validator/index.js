const inputs = {};
const formRef = document.getElementById("myForm");
const errorRef = document.getElementsByClassName("error");

const formData = [
	{
		tag: "input",
		name: "name",
		schema: Joi.string().min(3).max(15),
		type: "text",
		label: "Name:",
	},
	{
		tag: "input",
		name: "email",
		schema: Joi.string().email(),
		type: "email",
		label: "Email:",
	},
	{
		tag: "textarea",
		name: "message",
		schema: Joi.string().min(5).max(250),
		type: "text",
		label: "Message:",
	},
];

const validatorSchema = {};

function createData() {
	for (const data of formData) {
		validatorSchema[data.name] = data.schema;

		const p = document.createElement("p");
		p.classList.add("error");
		p.setAttribute("id", data.name + "Error");

		const label = document.createElement("label");
		label.setAttribute("for", data.name);
		label.textContent = data.label;

		const input = document.createElement(data.tag);
		input.setAttribute("type", data.type);
		input.setAttribute("name", data.name);
		input.setAttribute("id", data.name);

		formRef.append(p);
		formRef.append(label);
		formRef.append(input);
	}

	const button = document.createElement("button");
	button.setAttribute("type", "submit");
	button.textContent = "Submit";
	formRef.append(button);
}

// create the form
createData();

function clearErrors() {
	const errorTags = document.getElementsByClassName("error");
	const inputTags = document.getElementsByTagName("input");
	for (const error of errorTags) {
		error.classList.remove("show");
	}
	for (const input of inputTags) {
		input.classList.remove("input-error");
	}
}

function validateInputs() {
	Joi.validate(inputs, validatorSchema, { abortEarly: false }, (errors) => {
		if (!errors) return;
		displayErrors(errors);
	});
}

function displayErrors(errors) {
	for (const error of errors.details) {
		const errorKey = error.context.key;
		const errorMessage = error.message;
		const errorTag = document.getElementById(`${errorKey}Error`);
		errorTag.innerHTML = errorMessage;
		document.getElementById(errorKey).classList.add("input-error");
		errorTag.classList.add("show");
	}
}

formRef.addEventListener("input", (e) => {
	inputs[e.target.id] = e.target.value;
});

formRef.addEventListener("submit", (e) => {
	e.preventDefault();
	clearErrors();
	validateInputs();
});
