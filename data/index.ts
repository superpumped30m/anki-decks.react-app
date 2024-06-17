export interface Set {
	cards: number;
	description: string;
	creator: string;
	id: string;
	title: string;
	image?: any;
}

export interface Card {
	answer: string;
	id: string;
	question: string;
	image?: any;
	set: string;
}

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
			},
			{
				id: 2,
				question: "Explain the needs of an operating system",
				answer:
					"An operating system is needed  as it provides the user with a platform  to interact with the hardware.",
				image: "https://avatars.githubusercontent.com/u/71868299?v=4",
			},
		],
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
			},
		],
	},
];
