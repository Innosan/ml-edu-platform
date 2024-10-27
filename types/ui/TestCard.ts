import type { Question } from "~/types/data/Test";
import { questions } from "~/types/data/Test";

export type TestCard = {
	id: string;
	title: string;
	question: number;
	date: string;
	length: number;
	isCompleted: boolean;
	questions: Question[];
};

const returnDate = (day: number, month: number) => {
	const date = new Date();
	date.setMonth(month);
	date.setDate(day);
	return date.toISOString(); // Adjust the locale as needed
};

export const mockTests: TestCard[] = [
	{
		id: "1",
		title: "Test 1",
		question: 5,
		length: 10,
		date: returnDate(1, 9).toString(),
		isCompleted: true,
		questions: [questions[0], questions[1]],
	},
	{
		id: "2",
		title: "Test 2",
		question: 10,
		length: 15,
		date: returnDate(4, 9).toString(),
		isCompleted: true,
		questions: [questions[2], questions[3]],
	},
	{
		id: "3",
		title: "Test 3",
		question: 15,
		length: 20,
		date: returnDate(4, 9).toString(),
		isCompleted: false,
		questions: [questions[0], questions[1]],
	},
	{
		id: "4",
		title: "Test 4",
		question: 20,
		length: 25,
		date: returnDate(4, 9).toString(),
		isCompleted: false,
		questions: [questions[2], questions[3]],
	},
	{
		id: "5",
		title: "Test 5",
		question: 25,
		length: 30,
		date: returnDate(7, 9).toString(),
		isCompleted: false,
		questions: [questions[0], questions[1]],
	},
	{
		id: "6",
		title: "Test 6",
		question: 30,
		length: 35,
		date: returnDate(7, 9).toString(),
		isCompleted: false,
		questions: [questions[2], questions[3]],
	},
	{
		id: "7",
		title: "Test 7",
		question: 35,
		length: 40,
		date: returnDate(10, 9).toString(),
		isCompleted: false,
		questions: [questions[0], questions[1]],
	},
	{
		id: "8",
		title: "Test 8",
		question: 40,
		length: 45,
		date: returnDate(15, 9).toString(),
		isCompleted: false,
		questions: [questions[2], questions[3]],
	},
	{
		id: "9",
		title: "Test 9",
		question: 45,
		length: 50,
		date: returnDate(15, 9).toString(),
		isCompleted: false,
		questions: [questions[0], questions[1]],
	},
	{
		id: "10",
		title: "Test 10",
		question: 50,
		length: 55,
		date: returnDate(21, 9).toString(),
		isCompleted: false,
		questions: [questions[2], questions[3]],
	},
];
