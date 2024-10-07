<script setup lang="ts">
definePageMeta({
	middleware: ["auth"],
});
const userStore = useUserStore();

const tabs = [
	{
		id: 1,
		label: "Вход",
		icon: "i-heroicons-user-solid",
	},
	{
		id: 2,
		label: "Регистрация",
		icon: "i-heroicons-user-plus-16-solid",
	},
];

const email = ref("");
const password = ref("");
const name = ref("");
</script>

<template>
	<div class="m-auto w-1/2 flex gap-12 flex-col items-center">
		<h1 class="text-3xl text-primary-500 font-extrabold">ML Edu Learner</h1>
		<UTabs :items="tabs" class="w-full">
			<template
				#item="{
					item,
				}: {
					item: { id: number; label: string; icon: string };
				}"
			>
				<div v-if="item.id === 1" class="flex flex-col gap-4">
					<UInput
						v-model="email"
						type="email"
						id="email"
						label="Email"
						placeholder="user@gmail.com"
						icon="i-heroicons-envelope-solid"
					/>
					<UInput
						v-model="password"
						id="password"
						label="Password"
						placeholder="••••••••"
						type="password"
						icon="i-heroicons-lock-closed-solid"
					/>
				</div>
				<div v-else-if="item.id === 2" class="flex flex-col gap-2">
					<UInput
						v-model="name"
						id="name"
						label="Name"
						placeholder="John Doe"
						icon="i-heroicons-user-solid"
					/>
					<UInput
						v-model="email"
						type="email"
						id="email"
						label="Email"
						placeholder="user@gmail.com"
						icon="i-heroicons-envelope-solid"
					/>
					<UInput
						v-model="password"
						id="password"
						label="Password"
						placeholder="••••••••"
						type="password"
						icon="i-heroicons-lock-closed-solid"
					/>
				</div>
			</template>
		</UTabs>

		<UButton
			@click="userStore.login(email, password)"
			label="Войти"
			size="xl"
			class="font-bold"
			icon="i-heroicons-arrow-left-end-on-rectangle-16-solid"
			block
		/>
	</div>
</template>

<style scoped></style>
