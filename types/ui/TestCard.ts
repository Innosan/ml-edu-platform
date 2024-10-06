export type TestCard = {
	id: string;
	title: string;
	question: number;
	length: number;
	isCompleted: boolean;
};

export const mockTests: TestCard[] = [
	{
		id: "1",
		title: "Test 1",
		question: 5,
		length: 10,
		isCompleted: true,
	},
	{
		id: "2",
		title: "Test 2",
		question: 10,
		length: 15,
		isCompleted: true,
	},
	{
		id: "3",
		title: "Test 3",
		question: 15,
		length: 20,
		isCompleted: false,
	},
	{
		id: "4",
		title: "Test 4",
		question: 20,
		length: 25,
		isCompleted: false,
	},
	{
		id: "5",
		title: "Test 5",
		question: 25,
		length: 30,
		isCompleted: false,
	},
	{
		id: "6",
		title: "Test 6",
		question: 30,
		length: 35,
		isCompleted: false,
	},
	{
		id: "7",
		title: "Test 7",
		question: 35,
		length: 40,
		isCompleted: false,
	},
	{
		id: "8",
		title: "Test 8",
		question: 40,
		length: 45,
		isCompleted: false,
	},
	{
		id: "9",
		title: "Test 9",
		question: 45,
		length: 50,
		isCompleted: false,
	},
	{
		id: "10",
		title: "Test 10",
		question: 50,
		length: 55,
		isCompleted: false,
	},
];
