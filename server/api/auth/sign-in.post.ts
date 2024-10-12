import { ResponseInfo, success } from "~/types/server/ResponseInfo";

export default defineEventHandler(async (event) => {
	const { email, password } = (await readBody(event)) as {
		email: string;
		password: string;
	};

	console.log(`Sign in attempt with email: ${email}`);

	return {
		info: success("Вы успешно вошли в систему!"),
		data: {
			token: "1234567890",
		},
	};
});
