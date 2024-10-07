<script setup lang="ts">
import { CardSizes } from "~/types/ui/CardSizes";
</script>

<template>
	<UCard :ui="CardSizes.sm" class="w-full">
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
</template>
