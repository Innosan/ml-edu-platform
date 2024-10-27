<script setup lang="ts">
import { CardSizes } from "~/types/ui/CardSizes";
import { fullName, UserRoles } from "~/types/data/User";

import { Userbars } from "~/components/utility/userbars/Userbars";

const userStore = useUserStore();
const authStore = useAuthStore();

const userbarComponent = computed(() => {
	return userStore.user.isTeacher ? Userbars.TEACHER : Userbars.USER;
});
</script>

<template>
	<div class="flex gap-2 text-nowrap flex-col" v-if="authStore.refreshToken">
		<UCard :ui="CardSizes.sm">
			<template #header>
				<p class="font-bold text-wrap text-xl">
					Добрый вечер, {{ fullName(userStore.user) }}!
				</p>
			</template>

			<div class="flex gap-6 flex-col">
				<Userbar v-if="userbarComponent === Userbars.USER" />
				<Teacherbar v-else-if="userbarComponent === Userbars.TEACHER" />
			</div>
		</UCard>
	</div>
</template>
