<script lang="ts" setup>
import { CardSizes } from "~/types/ui/CardSizes";

const userStore = useUserStore();
</script>

<template>
	<header
		class="flex text-nowrap items-center"
		v-if="userStore.user.id !== 0"
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
			<UCard :ui="CardSizes.sm">
				<div class="flex gap-2 flex-col">
					<PageSection
						size="xs"
						:is-divided="false"
						title="Дедлайны"
						icon="i-heroicons-calendar"
					>
						<div
							class="flex flex-col bg-gray-100 dark:bg-gray-800 p-2 rounded-lg"
						>
							<div class="flex gap-1 text-sm opacity-70">
								<p>до 15 сентября</p>
								•
								<p>60 минут</p>
							</div>
							<p class="font-bold">Русский язык / Тест 2</p>
						</div>
					</PageSection>
					<PageSection
						size="xs"
						title="Встречи"
						:is-divided="false"
						icon="i-heroicons-calendar"
					>
						<div
							class="flex flex-col bg-gray-100 dark:bg-gray-800 p-2 rounded-lg"
						>
							<div class="flex gap-1 text-sm opacity-70">
								<p>до 15 сентября</p>
								•
								<p>60 минут</p>
							</div>
							<p class="font-bold">Русский язык / Тест 2</p>
						</div>
					</PageSection>
				</div>
			</UCard>
			<ClientOnly>
				<div class="flex self-start gap-2 items-center">
					<ThemeSwitch />
					<ColorSwitch />
				</div>
			</ClientOnly>
		</div>
		<div>
			<SidebarNavigation
				class="block md:hidden"
				:navigation="navigation"
			/>
		</div>
	</header>
</template>
