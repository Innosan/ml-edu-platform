export type Test = {
	id: number;
	name: string;
	description: string;
	questions: Question[];
};

export type Question = {
	id: number;
	text: string;
	description: string;
};

export const questions = [
	{
		id: 1,
		text: "Вопрос 1",
		description:
			"Описание вопроса 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec libero ultricies ultricies. Nullam nec purus nec libero ultricies ultricies.",
	},
	{
		id: 2,
		text: "Вопрос 2",
		description:
			"Описание вопроса 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec libero ultricies ultricies. Nullam nec purus nec libero ultricies ultricies.",
	},
	{
		id: 3,
		text: "Вопрос 3",
		description:
			"Описание вопроса 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec libero ultricies ultricies. Nullam nec purus nec libero ultricies ultricies.",
	},
	{
		id: 4,
		text: "Вопрос 4",
		description:
			"Описание вопроса 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec libero ultricies ultricies. Nullam nec purus nec libero ultricies ultricies.",
	},
];

export const tests = [
	{
		id: 1,
		name: "Тест 1",
		description: "Описание теста 1",
		questions: [
			{
				id: 1,
				text: "Вопрос 1",
			},
			{
				id: 2,
				text: "Вопрос 2",
			},
		],
	},
	{
		id: 2,
		name: "Тест 2",
		description: "Описание теста 2",
		questions: [
			{
				id: 3,
				text: "Вопрос 3",
			},
			{
				id: 4,
				text: "Вопрос 4",
			},
		],
	},
];
