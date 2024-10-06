import { noUser, User, users } from "~/types/data/User";
import { getToast, Toasts } from "~/types/ui/Notification";

import { persistOptions } from "~/utils/persistence";
import { defineStore } from "pinia";

export const useEduUserStore = defineStore(
	"edu-user-store",
	() => {
		const toast = useToast();
		const user = useState("current-user", () => noUser as User);

		const login = (email: string, password: string) => {
			const foundUser = users.find(
				(u) => u.email === email && u.password === password,
			);

			if (foundUser) {
				user.value = foundUser;
				toast.add(
					getToast(Toasts.SUCCESS, "Вы успешно вошли в систему"),
				);

				navigateTo("/");

				return true;
			}

			toast.add(getToast(Toasts.ERROR, "Неверный логин или пароль"));
			return false;
		};

		const logout = () => {
			user.value = noUser;
			navigateTo("/sign-in");
			toast.add(getToast(Toasts.INFO, "Вы вышли из системы"));
		};

		return {
			user,
			login,
			logout,
		};
	},
	{
		persist: persistOptions.cookieDefault,
	},
);
