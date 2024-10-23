import { teacherNavigation, userNavigation } from "~/utils/navigation";

// should be both user and teacher routes
const authProtectedRoutes = userNavigation.map((nav) => nav.to);
authProtectedRoutes.push(...teacherNavigation.map((nav) => nav.to));

export default defineNuxtRouteMiddleware(async (to, from) => {
	const userStore = useUserStore();
	userStore.$subscribe((cb) => {
		console.log(cb);
	});

	const user = computed(() => userStore.user);

	if (authProtectedRoutes.includes(to.path) && user.value.id === 0) {
		return navigateTo("/sign-in");
	}

	if (to.path === "/sign-in" && user.value.id !== 0) {
		return navigateTo("/");
	}
});
