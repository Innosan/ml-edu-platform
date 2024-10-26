<script setup lang="ts">
import { computed } from "vue";
import { UserRoles } from "~/types/data/User";

import { teacherNavigation, userNavigation } from "~/utils/navigation";
import { Sidebars } from "~/components/utility/sidebars/Sidebars";

const userStore = useUserStore();
const authStore = useAuthStore();
const role = computed(() => userStore.user.role);

const sidebarComponent = computed(() => {
	switch (role.value) {
		case UserRoles.TEACHER:
			return Sidebars.TEACHER;
		case UserRoles.USER:
			return Sidebars.USER;
	}
});

const navigation = computed(() => {
	switch (role.value) {
		case UserRoles.TEACHER:
			return teacherNavigation;
		case UserRoles.USER:
			return userNavigation;
	}
});
</script>

<template>
	<header
		v-if="authStore.refreshToken"
		class="flex w-full text-nowrap items-center"
	>
		<div class="flex flex-col w-full gap-6 items-center">
			<UVerticalNavigation :links="navigation" class="w-full" />
			<UButton @click="userStore.fetchUser()" label="Fetch user" />
			<UButton
				label="Выйти"
				icon="i-heroicons-arrow-right-start-on-rectangle-solid"
				color="red"
				variant="soft"
				@click="authStore.logout"
				class="w-full"
			/>

			<UButton
				label="Refresh token"
				@click="authStore.refreshAccessToken"
			/>

			<TeacherSidebar v-if="sidebarComponent === Sidebars.TEACHER" />
			<UserSidebar v-else-if="sidebarComponent === Sidebars.USER" />

			<ClientOnly>
				<div class="flex self-start gap-2 items-center">
					<ThemeSwitch />
					<ColorSwitch />
				</div>
			</ClientOnly>
		</div>
	</header>
</template>
