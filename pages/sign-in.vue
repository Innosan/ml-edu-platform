<script setup lang="ts">
definePageMeta({
	middleware: ["auth"],
});

useHead({
	title: "Вход",
	meta: [
		{
			name: "description",
			content: "Войдите в свой аккаунт",
		},
	],
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

const currentTab = ref(0);

const email = ref("");
const password = ref("");
const name = ref("");
const code = ref("");

const showCodeBlock = ref(false);

const onAuthButtonClick = (index: number) => {
	if (index === 0) {
		userStore.login(email.value, password.value);
	} else if (index === 1) {
		showCodeBlock.value = true;
	} else if (index === 1 && showCodeBlock.value) {
		//userStore.register(name.value, email.value, password.value, code.value);
	}
};

const clearInputs = () => {
	email.value = "";
	password.value = "";
	name.value = "";
	code.value = "";

	if (showCodeBlock.value) {
		showCodeBlock.value = false;
	}
};
</script>

<template>
	<div class="m-auto md:w-1/2 flex gap-12 flex-col items-center">
		<h1 class="text-3xl text-primary-500 font-extrabold">ML Edu Learner</h1>
		<UTabs
			:items="tabs"
			class="w-full"
			v-model="currentTab"
			@change="clearInputs"
		>
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
				<div
					v-else-if="item.id === 2 && !showCodeBlock"
					class="flex flex-col gap-2"
				>
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
				<div v-else>
					<TitledBlock title="Уникальный ключ класса">
						<div class="flex gap-2 flex-col">
							<p class="opacity-70 text-xs">
								Уникальный ключ класса - это уникальный
								идентификатор класса, который выдает ваш
								учитель.
							</p>

							<UInput
								v-model="code"
								id="code"
								label="Уникальный ключ класса"
								placeholder="class-id-12345"
								icon="i-heroicons-sparkles"
							/>
						</div>
					</TitledBlock>
				</div>

				<UAlert
					class="mt-4"
					icon="i-heroicons-information-circle-solid"
					title="Доступные аккаунты"
					description="user@gmail.com:password, teacher@gmail.com:password1"
				/>
			</template>
		</UTabs>

		<UButton
			@click="onAuthButtonClick(currentTab)"
			label="Продолжить"
			size="xl"
			class="font-bold"
			icon="i-heroicons-arrow-left-end-on-rectangle-16-solid"
			block
		/>
	</div>
</template>

<style scoped></style>
