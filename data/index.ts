export type SetType = {
	id: number;
	question: string;
	answer: string;
	image: string;
	isFavorite: boolean;
}[];

export type DeckType = {
	id: number;
	title: string;
	description: string;
	isExpanded: boolean;
	sets: SetType[];
	childrens: DeckType[];
};

export const DECKS_DATA: DeckType[] = [
	{
		id: 1,
		title: "React Native",
		description:
			"This is a javascript library used to build hybrid mobile apps.",
		childrens: [],
		sets: [
			{
				id: 1,
				question: "What is computer science.",
				answer: "Computer science is a field of computer studies.",
				image: "https://avatars.githubusercontent.com/u/71868299?v=4",
				isFavorite: true,
			},
			{
				id: 2,
				question: "Explain the needs of an operating system",
				answer:
					"An operating system is needed  as it provides the user with a platform  to interact with the hardware.",
				image: "https://avatars.githubusercontent.com/u/71868299?v=4",
				isFavorite: true,
			},
		],
		isExpanded: false,
	},
	{
		id: 2,
		title: "Computer Science",
		description: "This is related to computer science.",
		childrens: [
			{
				id: 1,
				title: "Data Structures & Algorithms",
				description: "This is related to computer science.",
				childrens: [],
				sets: [
					{
						id: 1,
						question:
							"What is the Big O notation used for in computer science?",
						answer:
							"Big O notation is used to describe the upper bound of the time complexity or space complexity of an algorithm, helping to classify algorithms according to their worst-case performance.",
						image: "https://avatars.githubusercontent.com/u/71868299?v=4",
						isFavorite: true,
					},
					{
						id: 2,
						question: "Explain the difference between a stack and a queue.",
						answer:
							"A stack is a data structure that follows the Last In, First Out (LIFO) principle, whereas a queue follows the First In, First Out (FIFO) principle.",
						image: "https://avatars.githubusercontent.com/u/71868299?v=4",
						isFavorite: true,
					},
					{
						id: 3,
						question: "What is a binary search tree (BST)?",
						answer:
							"A binary search tree is a binary tree in which each node has at most two children, and for each node, the left subtree contains only nodes with values less than the node's value, while the right subtree contains only nodes with values greater than the node's value.",
						image: "https://avatars.githubusercontent.com/u/71868299?v=4",
						isFavorite: true,
					},
					{
						id: 4,
						question:
							"Describe the purpose of a hash function in a hash table.",
						answer:
							"A hash function maps input data of arbitrary size to fixed-size values (hash codes), which are used to index into a hash table to store and retrieve data efficiently.",
						image: "https://avatars.githubusercontent.com/u/71868299?v=4",
						isFavorite: true,
					},
				],
				isExpanded: false,
			},
			{
				id: 2,
				title: "Programming Concepts",
				description: "Core programming concepts in computer science.",
				childrens: [],
				sets: [
					{
						id: 1,
						question:
							"What is the difference between synchronous and asynchronous programming?",
						answer:
							"Synchronous programming executes tasks sequentially, where each task waits for the previous one to complete, while asynchronous programming allows tasks to run concurrently, enabling more efficient use of resources and improved performance.",
						image: "https://avatars.githubusercontent.com/u/71868299?v=4",
						isFavorite: true,
					},
					{
						id: 2,
						question:
							"What are the main characteristics of object-oriented programming (OOP)?",
						answer:
							"The main characteristics of OOP are encapsulation, inheritance, polymorphism, and abstraction.",
						image: "https://avatars.githubusercontent.com/u/71868299?v=4",
						isFavorite: true,
					},
					{
						id: 3,
						question: "What is a deadlock in the context of operating systems?",
						answer:
							"A deadlock is a situation in which a set of processes are unable to proceed because each process is waiting for a resource that is held by another process in the set, creating a cycle of dependencies that prevents any of the processes from continuing.",
						image: "https://avatars.githubusercontent.com/u/71868299?v=4",
						isFavorite: true,
					},
					{
						id: 4,
						question:
							"Explain the concept of normalization in database design.",
						answer:
							"Normalization is the process of organizing the fields and tables of a relational database to minimize redundancy and dependency by dividing the data into different related tables.",
						image: "https://avatars.githubusercontent.com/u/71868299?v=4",
						isFavorite: true,
					},
				],
				isExpanded: false,
			},
		],
		sets: [
			{
				id: 1,
				question: "What is computer science.",
				answer: "Computer science is a field of computer studies.",
				image: "https://avatars.githubusercontent.com/u/71868299?v=4",
				isFavorite: true,
			},
			{
				id: 2,
				question: "Explain the needs of an operating system",
				answer:
					"An operating system is needed  as it provides the user with a platform  to interact with the hardware.",
				image: "https://avatars.githubusercontent.com/u/71868299?v=4",
				isFavorite: true,
			},
			{
				id: 3,
				question:
					"What is a compiler, and how does it differ from an interpreter?",
				answer:
					"A compiler translates the entire source code of a program into machine code before execution, while an interpreter translates and executes the source code line by line at runtime.",
				image: "https://avatars.githubusercontent.com/u/71868299?v=4",
				isFavorite: true,
			},
			{
				id: 4,
				question: "What is the purpose of the TCP/IP protocol in networking?",
				answer:
					"The TCP/IP protocol suite is used for communication over the internet, where TCP ensures reliable data transmission between devices by establishing a connection and managing data packets, and IP handles addressing and routing the packets to their destination.",
				image: "https://avatars.githubusercontent.com/u/71868299?v=4",
				isFavorite: true,
			},
		],
		isExpanded: false,
	},
	{
		id: 3,
		title: "Javascript",
		description: "This is related to Javascript programming.",
		childrens: [],
		sets: [
			{
				id: 1,
				question: "What is a variable?",
				answer:
					"A variable is a container which holds reference to the memory address where we have stored our data.",
				image: "https://avatars.githubusercontent.com/u/71868299?v=4",
				isFavorite: true,
			},
		],
		isExpanded: false,
	},
];

export const APPLICATION_DATA = [
	{
		id: 1,
		title: "Computer Science",
		description: "This is related to computer science.",
		cards: [
			{
				id: 1,
				question: "What is computer science.",
				answer: "Computer science is a field of computer studies.",
				image: "https://avatars.githubusercontent.com/u/71868299?v=4",
				isFavorite: true,
			},
			{
				id: 2,
				question: "Explain the needs of an operating system",
				answer:
					"An operating system is needed  as it provides the user with a platform  to interact with the hardware.",
				image: "https://avatars.githubusercontent.com/u/71868299?v=4",
				isFavorite: true,
			},
		],
		isExpanded: false,
	},
	{
		id: 2,
		title: "Javascript",
		description: "This is related to Javascript programing.",
		cards: [
			{
				id: 1,
				question: "What is variable.",
				answer:
					"A variable is a container which holds reference to the memory address where we have stored our data.",
				image: "https://avatars.githubusercontent.com/u/71868299?v=4",
				isFavorite: true,
			},
		],
		isExpanded: false,
	},
];
