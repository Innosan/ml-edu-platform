export type User = {
	id: number;
	name: string;
	email: string;
	password: string;
	role: number;
};

export enum UserRoles {
	GUEST = -1,
	USER,
	TEACHER,
}

export const noUser = {
	id: 0,
	name: "",
	email: "",
	password: "",
	role: UserRoles.GUEST,
};

export const users: User[] = [
	{
		id: 1,
		name: "John Doe",
		email: "user@gmail.com",
		password: "password",
		role: UserRoles.USER,
	},
	{
		id: 2,
		name: "Jane Doe",
		email: "teacher@gmail.com",
		password: "password1",
		role: UserRoles.TEACHER,
	},
];
