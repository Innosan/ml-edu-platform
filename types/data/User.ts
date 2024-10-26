export type User = {
	edClasses: [];
	testings: [];
	email: string;
	isTeacher: boolean;
	nameOfUser: string;
	surnameOfUser: string;
};

export const noUser: User = {
	edClasses: [],
	testings: [],
	email: "",
	isTeacher: false,
	nameOfUser: "",
	surnameOfUser: "",
};

export const fullName = (user: User) =>
	`${user.nameOfUser} ${user.surnameOfUser}`;

export enum UserRoles {
	USER,
	TEACHER,
}
