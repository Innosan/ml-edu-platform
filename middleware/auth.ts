import { teacherNavigation, userNavigation } from "~/utils/navigation";

// should be both user and teacher routes
const authProtectedRoutes = userNavigation.map((nav) => nav.to);
authProtectedRoutes.push(...teacherNavigation.map((nav) => nav.to));

export default defineNuxtRouteMiddleware(async (to, from) => {
	const authStore = useAuthStore();
	authStore.$subscribe((cb) => {
		console.log(cb);
	});

	const user = computed(() => authStore.refreshToken);

	if (authProtectedRoutes.includes(to.path) && user.value === "") {
		return navigateTo("/sign-in");
	}

	if (to.path === "/sign-in" && user.value !== "") {
		return navigateTo("/");
	}
});
