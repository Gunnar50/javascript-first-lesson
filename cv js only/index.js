const title = "Gustavo Passarella";
const navTemplate = {
	tag: "li",
	className: "",
	id: "",
	childNodes: [
		{
			tag: "a",
			className: "",
			id: "",
			href: 0,
			childNodes: 1,
		},
	],
};

const navItemsContent = [
	["#hero", "Home"],
	["#about", "About"],
	["#edu-work", "Experience"],
	["#projects", "Projects"],
	["#contact", "Contact"],
];

const skillsTemplate = {
	tag: "li",
	className: "",
	id: "",
	childNodes: 0,
};

const skills = [
	["HTML"],
	["CSS"],
	["Javascript"],
	["NodeJS"],
	["ExpressJS"],
	["MySQL"],
	["MongoDB"],
	["Python"],
	["GitHub"],
	["Object-Oriented"],
	["Game Development"],
	["Cryptography"],
	["Network Protocols"],
	["Cisco Devices"],
];

const projectsTemplate = {
	tag: "div",
	className: "card",
	id: 0,
	childNodes: [
		{
			tag: "img",
			className: "",
			id: "",
			src: 1,
			alt: 2,
			childNodes: "",
		},
		{
			tag: "div",
			className: "card-text",
			id: "",
			childNodes: [
				{
					tag: "h4",
					className: "",
					id: "",
					childNodes: 3,
				},
				{
					tag: "p",
					className: "",
					id: "",
					childNodes: 4,
				},
				{
					tag: "a",
					className: "",
					id: "",
					href: 5,
					childNodes: "Live",
				},
				{
					tag: "a",
					className: "",
					id: "",
					href: 6,
					childNodes: "GitHub",
				},
			],
		},
	],
};

const projects = [
	[
		"project1",
		"images/gentile-thumb.jpg",
		"Gentile Etiquetas",
		"Website Development",
		"Website in Wordpress",
		"#",
		"#",
	],
	[
		"project2",
		"images/aurora-thumb.png",
		"Aurora Byte",
		"Encryption Algorithm",
		"Encryption Algorithm in Python",
		"#",
		"#",
	],
	[
		"project3",
		"images/linesc-thumb.png",
		"LinEsc Privilege Escalation",
		"Privilege Escalation Toolkit",
		"Vulnerability Discover Toll in Python",
		"#",
		"#",
	],
];

const contactTemplate = {
	tag: "li",
	className: "",
	id: "",
	childNodes: [
		{
			tag: "a",
			className: "",
			id: "",
			href: 1,
			childNodes: 0,
		},
	],
};

const contacts = [
	["Call", "tel:+447555000111"],
	["Email", "mailto:gustavo@me.com"],
	["WhatsApp", "https://wa.me/+447580577781"],
];

const nodes = [
	{
		tag: "header",
		className: "",
		id: "",
		childNodes: [
			{
				tag: "div",
				className: "nav-container",
				id: "",
				childNodes: [
					{
						tag: "div",
						className: "nav-title",
						id: "",
						childNodes: [
							{
								tag: "h2",
								className: "",
								id: "",
								childNodes: "Gustavo Passarella",
							},
						],
					},
					{
						tag: "nav",
						className: "",
						id: "",
						childNodes: [
							{
								tag: "ul",
								className: "",
								id: "",
								childNodes: generateDynamicNodes(navTemplate, navItemsContent),
							},
						],
					},
				],
			},
		],
	},
	{
		tag: "section",
		className: "hero-section",
		id: "",
		childNodes: [
			{
				tag: "div",
				className: "hero",
				id: "",
				childNodes: [
					{
						tag: "div",
						className: "hero-img",
						id: "",
						childNodes: [
							{
								tag: "img",
								className: "hero-section",
								id: "",
								src: "images/Photo-Profile-ready-sq.png",
								alt: "Profile Image",
								childNodes: "",
							},
						],
					},
					{
						tag: "div",
						className: "hero-text",
						id: "",
						childNodes: [
							{
								tag: "h2",
								className: "",
								id: "",
								childNodes: "Hi, I am Gustavo!",
							},
							{
								tag: "p",
								className: "",
								id: "",
								childNodes: "I am a Software Engineer based in London",
							},
						],
					},
				],
			},
		],
	},
	{
		tag: "main",
		className: "",
		id: "",
		childNodes: [
			{
				tag: "section",
				className: "about-section",
				id: "about",
				childNodes: [
					{ tag: "h2", className: "title", id: "", childNodes: "About Me" },
					{
						tag: "div",
						className: "about",
						id: "",
						childNodes: [
							{
								tag: "div",
								className: "about-me",
								id: "",
								childNodes: [
									{
										tag: "h3",
										className: "",
										id: "",
										childNodes: "Get to know me!",
									},
									{
										tag: "div",
										className: "",
										id: "",
										childNodes: [
											{
												tag: "p",
												className: "",
												id: "",
												childNodes:
													"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
											},
											{
												tag: "p",
												className: "",
												id: "",
												childNodes:
													"Culpa voluptas atque, impedit laborum quis numquam quod repellat architecto placeat alias similique. Voluptatem ex nemo excepturi obcaecati reiciendis nostrum vel. Dolore?",
											},
											{
												tag: "p",
												className: "",
												id: "",
												childNodes:
													"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error iusto vero, voluptatibus recusandae accusamus non doloribus magni ipsam nesciunt quos cumque odio dolor quae asperiores molestias, dolores tempore at provident?",
											},
										],
									},
								],
							},
							{
								tag: "div",
								className: "skills",
								id: "",
								childNodes: [
									{ tag: "h3", className: "", id: "", childNodes: "My Skills" },
									{
										tag: "div",
										className: "",
										id: "",
										childNodes: [
											{
												tag: "ul",
												className: "",
												id: "",
												childNodes: generateDynamicNodes(
													skillsTemplate,
													skills
												),
											},
										],
									},
								],
							},
						],
					},
				],
			},
			{
				tag: "section",
				className: "projects-section",
				id: "projects",
				childNodes: [
					{ tag: "h2", className: "title", id: "", childNodes: "Projects" },
					{
						tag: "div",
						className: "projects",
						id: "",
						childNodes: generateDynamicNodes(projectsTemplate, projects),
					},
				],
			},
			{
				tag: "section",
				className: "contact",
				id: "contact",
				childNodes: [
					{ tag: "h2", className: "", id: "", childNodes: "Contact" },
					{
						tag: "ul",
						className: "",
						id: "",
						childNodes: generateDynamicNodes(contactTemplate, contacts),
					},
				],
			},
		],
	},
	{
		tag: "footer",
		className: "",
		id: "",
		childNodes: [
			{
				tag: "div",
				className: "footer-section",
				id: "",
				childNodes: [
					{
						tag: "p",
						className: "",
						id: "",
						childNodes: `© ${new Date().getFullYear()} ${title}`,
					},
				],
			},
		],
	},
];

// generates dynamic nodes from a template. this is useful when repeating
// content like the projects or skills which are many li's or div's with a different content.
// it returns part of the main nodes template inside it self.
function generateDynamicNodes(nodesListTemplate, contentList) {
	const result = [];

	for (const content of contentList) {
		const nodesListClone = JSON.parse(JSON.stringify(nodesListTemplate));
		populateNode(nodesListClone, content);
		result.push(nodesListClone);
	}
	return result;
}
// goes together with generateDynamicNodes function to populate a single node.
// it also calls it self recursively for each child.
function populateNode(node, content) {
	if (Array.isArray(node)) {
		for (let i = 0; i < node.length; i++) {
			populateNode(node[i], content);
		}
	} else if (typeof node === "object") {
		for (const key in node) {
			if (typeof node[key] === "number") {
				node[key] = content[node[key]];
			} else {
				populateNode(node[key], content);
			}
		}
	}
}

// get the reference for the body
const bodyRef = document.getElementsByTagName("body")[0];

// here is where everything starts.
// loop through the nodes and adds them to the body.
function createHTML() {
	for (const node of nodes.reverse()) {
		bodyRef.prepend(createSingleTag(node));
	}
}

// this function takes a single node, build the html tag and return it.
// this function also call it self for every child of the node.
function createSingleTag(node) {
	let tag = document.createElement(node.tag);

	// check if has a class
	if (node.className) tag.classList.add(node.className);

	// check if has an id
	if (node.id) tag.id = node.id;

	// check if node is an image element
	if (node.tag == "img") {
		tag.setAttribute("src", node.src);
		tag.setAttribute("alt", node.alt);
	}

	// check if node is a anchor element
	if (node.tag == "a") tag.setAttribute("href", node.href);

	// check if has more nodes and recursively call it self.
	if (typeof node.childNodes !== "string") {
		for (const childNode of node.childNodes) {
			let childTag = createSingleTag(childNode);
			tag.append(childTag);
		}
		// otherwise just add the text
	} else {
		tag.append(document.createTextNode(node.childNodes));
	}

	return tag;
}

createHTML();
