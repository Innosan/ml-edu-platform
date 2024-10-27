export type User = {
	edClasses: number[];
	testings: number[];
	email: string;
	password: string;
	isTeacher: boolean;
	nameOfUser: string;
	surnameOfUser: string;
};

export const noUser: User = {
	edClasses: [],
	testings: [],
	email: "",
	isTeacher: false,
	password: "",
	nameOfUser: "",
	surnameOfUser: "",
};

export const fullName = (user: User) =>
	`${user.nameOfUser} ${user.surnameOfUser}`;

export enum UserRoles {
	USER,
	TEACHER,
}

export const users = [
	{
		edClasses: [],
		testings: [],
		email: "user@gmail.com",
		password: "user",
		isTeacher: false,
		nameOfUser: "John",
		surnameOfUser: "Doe",
	},
	{
		edClasses: [],
		testings: [],
		email: "teacher@gmail.com",
		password: "teacher",
		isTeacher: true,
		nameOfUser: "Jane",
		surnameOfUser: "Doe",
	},
];
