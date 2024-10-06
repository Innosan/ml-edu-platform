<script setup lang="ts">
definePageMeta({
	middleware: ["auth"],
});
const userStore = useEduUserStore();

const email = ref("");
const password = ref("");
</script>

<template>
	<div class="m-auto w-fit flex gap-4 flex-col items-center">
		<h1 class="font-bold text-xl">Вход</h1>

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

		<UButton
			@click="userStore.login(email, password)"
			label="Войти"
			icon="i-heroicons-arrow-left-end-on-rectangle-solid"
			block
		/>
	</div>
</template>

<style scoped></style>
