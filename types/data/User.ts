export type User = {
	id: number;
	name: string;
	email: string;
	password: string;
	role: number;
};

export const noUser = {
	id: 0,
	name: "",
	email: "",
	password: "",
	role: -1,
};

export const users: User[] = [
	{
		id: 1,
		name: "John Doe",
		email: "user@gmail.com",
		password: "password",
		role: 0,
	},
	{
		id: 2,
		name: "Jane Doe",
		email: "teacher@gmail.com",
		password: "password1",
		role: 1,
	},
];
