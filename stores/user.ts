import { noUser, type User, users } from "~/types/data/User";

import { persistOptions } from "~/utils/persistence";
import { defineStore } from "pinia";

export const useUserStore = defineStore(
	"user-store",
	() => {
		const authStore = useAuthStore();
		const runtimeConfig = useRuntimeConfig();
		const toast = useToast();

		const user = useState("current-user", () => noUser as User);

		const fetchUser = async () => {
			user.value =
				users.find((u) => u.email === authStore.accessToken) || noUser;
			// user.value = await authStore.fetchWithAuth(
			// 	runtimeConfig.public.apiUrl + "/auth/user/",
			// 	{
			// 		method: "GET",
			// 	},
			// );
		};

		return {
			user,
			fetchUser,
		};
	},
	{
		persist: persistOptions.cookieDefault,
	},
);
