const authProtectedRoutes = navigation.map((link) => link.to);

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
