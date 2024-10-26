import { type NitroFetchOptions } from "nitropack";

import { persistOptions } from "~/utils/persistence";
import { errored, success } from "~/types/server/ResponseInfo";
import { noUser } from "~/types/data/User";

export const useAuthStore = defineStore(
	"auth-store",
	() => {
		const toast = useToast();
		const config = useRuntimeConfig();

		const accessToken = useState("access-token", () => "");
		const refreshToken = useState("refresh-token", () => "");

		const fetchWithAuth = async (
			url: string,
			options: NitroFetchOptions<any> = {},
		) => {
			// Ensure Authorization header has access token
			options.headers = {
				...options.headers,
				Authorization: `Bearer ${accessToken.value}`,
			};

			// Make the request and handle 401 errors
			try {
				return await $fetch(url, {
					...options,
					headers: {
						...options.headers,
						Authorization: `Bearer ${accessToken.value}`,
					},
				});
			} catch (error: any) {
				await refreshAccessToken();

				options.headers.Authorization = `Bearer ${accessToken.value}`;
				return await $fetch(url, options);
			}
		};

		const login = async (email: string, password: string) => {
			try {
				const response = await $fetch(
					config.public.apiUrl + "/auth/login",
					{
						method: "POST",
						body: {
							email,
							password,
						},
					},
				);

				toast.add(success("Вы успешно вошли в систему!").notification);

				accessToken.value = response.accessToken;
				refreshToken.value = response.refreshToken;

				await navigateTo("/");
			} catch (error: any) {
				toast.add(errored("Вход не удался").notification);
			}
		};

		const refreshAccessToken = async () => {
			try {
				const response = await $fetch(
					config.public.apiUrl + "/auth/refresh",
					{
						method: "POST",
						body: refreshToken.value,
					},
				);

				accessToken.value = response.accessToken;
			} catch (error) {
				toast.add(errored("Пожалуйста, войдите еше раз!").notification);

				await logout();
			}
		};

		const logout = async () => {
			accessToken.value = "";
			refreshToken.value = "";

			toast.add(success("Вы успешно вышли из системы!").notification);

			await navigateTo("/sign-in");
		};

		return {
			accessToken,
			refreshToken,

			refreshAccessToken,
			login,
			logout,
			fetchWithAuth,
		};
	},
	{
		persist: persistOptions.cookieDefault,
	},
);
