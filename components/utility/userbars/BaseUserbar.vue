<script setup lang="ts">
import { CardSizes } from "~/types/ui/CardSizes";
import { UserRoles } from "~/types/data/User";

import { Userbars } from "~/components/utility/userbars/Userbars";

const userStore = useUserStore();
const authStore = useAuthStore();
const role = computed(() => userStore.user.role);

const userbarComponent = computed(() => {
	switch (role.value) {
		case UserRoles.TEACHER:
			return Userbars.TEACHER;
		case UserRoles.USER:
			return Userbars.USER;
	}
});
</script>

<template>
	<div class="flex gap-2 text-nowrap flex-col" v-if="authStore.refreshToken">
		<UCard :ui="CardSizes.sm">
			<template #header>
				<p class="font-bold text-wrap text-xl">
					Добрый вечер, {{ userStore.user.name }}!
				</p>
			</template>

			<div class="flex gap-6 flex-col">
				<Userbar v-if="userbarComponent === Userbars.USER" />
				<Teacherbar v-else-if="userbarComponent === Userbars.TEACHER" />
			</div>
		</UCard>
	</div>
</template>
