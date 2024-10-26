import { noUser, type User, users } from "~/types/data/User";
import { getToast, Toasts } from "~/types/ui/Notification";

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
			const response = await authStore.fetchWithAuth(
				runtimeConfig.public.apiUrl + "/auth/user/",
				{
					method: "GET",
				},
			);

			console.log(response);
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
