<script setup lang="ts">
import { computed } from "vue";
import { UserRoles } from "~/types/data/User";

import UserSidebar from "~/components/utility/sidebars/UserSidebar.vue";
import TeacherSidebar from "~/components/utility/sidebars/TeacherSidebar.vue";

import { teacherNavigation, userNavigation } from "~/utils/navigation";

const userStore = useUserStore();
const role = computed(() => userStore.user.role);

const sidebarComponent = computed(() => {
	switch (role.value) {
		case UserRoles.TEACHER:
			return TeacherSidebar;
		case UserRoles.USER:
			return UserSidebar;
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
		v-if="role !== UserRoles.GUEST"
		class="flex text-nowrap items-center"
	>
		<div class="flex flex-col gap-6 items-center">
			<UVerticalNavigation :links="navigation" class="w-full" />
			<UButton
				label="Выйти"
				icon="i-heroicons-arrow-right-start-on-rectangle-solid"
				color="red"
				variant="soft"
				@click="userStore.logout"
				class="w-full"
			/>

			<component :is="sidebarComponent">
				<slot />
			</component>

			<ClientOnly>
				<div class="flex self-start gap-2 items-center">
					<ThemeSwitch />
					<ColorSwitch />
				</div>
			</ClientOnly>
		</div>
	</header>
</template>
