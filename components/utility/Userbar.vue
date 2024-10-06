<script setup lang="ts">
import { CardSizes } from "~/types/ui/CardSizes";

const userStore = useUserStore();
</script>

<template>
	<div class="flex gap-2 text-nowrap flex-col" v-if="userStore.user.id !== 0">
		<UCard :ui="CardSizes.sm">
			<template #header>
				<p class="font-bold text-xl">Добрый вечер, Василий!</p>
			</template>

			<div class="flex gap-6 flex-col">
				<PageSection
					size="sm"
					title="Ближайший тест"
					icon="i-heroicons-calendar"
					:is-divided="false"
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
					size="sm"
					title="Успеваемость"
					icon="i-heroicons-chart-pie"
					:is-divided="false"
				>
					<div class="flex flex-col gap-3">
						<TitledBlock title="Средний балл">
							<p>4.5</p>
						</TitledBlock>

						<TitledBlock title="Самый высокий результат">
							<p>88%</p>
						</TitledBlock>

						<TitledBlock title="Самый низкий результат">
							<p>60%</p>
						</TitledBlock>

						<TitledBlock title="Посещаемость">
							<p>12 занятий</p>
						</TitledBlock>
					</div>
				</PageSection>
			</div>
		</UCard>
	</div>
</template>
