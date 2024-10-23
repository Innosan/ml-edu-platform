import { teacherNavigation } from "~/utils/navigation";
import { UserRoles } from "~/types/data/User";

// should be both user and teacher routes
const teacherProtectedRoutes = teacherNavigation.map((nav) => nav.to);
const userProtectedRoutes = userNavigation.map((nav) => nav.to);

export default defineNuxtRouteMiddleware(async (to, from) => {
	const userStore = useUserStore();
	userStore.$subscribe((cb) => {
		console.log(cb);
	});

	const user = computed(() => userStore.user);

	if (
		teacherProtectedRoutes.includes(to.path) &&
		user.value.role === UserRoles.USER
	) {
		return navigateTo("/");
	}

	if (
		userProtectedRoutes.includes(to.path) &&
		user.value.role === UserRoles.TEACHER
	) {
		return navigateTo("/");
	}
});
