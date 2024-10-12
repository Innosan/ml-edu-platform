<script setup lang="ts">
import { CardSizes } from "~/types/ui/CardSizes";
import { UserRoles } from "~/types/data/User";

import Teacherbar from "~/components/utility/userbars/Teacherbar.vue";
import Userbar from "~/components/utility/userbars/Userbar.vue";

const userStore = useUserStore();
const role = computed(() => userStore.user.role);

const userbarComponent = computed(() => {
	switch (role.value) {
		case UserRoles.TEACHER:
			return Teacherbar;
		case UserRoles.USER:
			return Userbar;
	}
});
</script>

<template>
	<div
		class="flex gap-2 text-nowrap flex-col"
		v-if="role !== UserRoles.GUEST"
	>
		<UCard :ui="CardSizes.sm">
			<template #header>
				<p class="font-bold text-wrap text-xl">
					Добрый вечер, {{ userStore.user.name }}!
				</p>
			</template>

			<div class="flex gap-6 flex-col">
				<component :is="userbarComponent">
					<slot />
				</component>
			</div>
		</UCard>
	</div>
</template>
