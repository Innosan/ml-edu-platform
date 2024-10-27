<script setup lang="ts">
import type { TestCard } from "~/types/ui/TestCard";
import type { ButtonColor } from "#ui/types";

const props = defineProps({
	test: {
		type: Object as PropType<TestCard>,
		required: true,
	},
});

const buttonState = computed(() => {
	return {
		label: props.test.isCompleted ? "Посмотреть результаты" : "Пройти",
		color: props.test.isCompleted ? "green" : "blue",
		icon: props.test.isCompleted
			? "i-heroicons-sparkles-solid"
			: "i-heroicons-arrow-small-right-solid",
	};
});
</script>

<template>
	<div
		class="flex p-2 ring-1 ring-gray-200 dark:ring-gray-700 gap-2 rounded-lg flex-col"
	>
		<div>
			<div class="flex gap-1 items-center">
				<p class="font-bold">{{ test.title }}</p>
				•
				<p
					class="underline decoration-gray-700 decoration-dotted underline-offset-2 opacity-70 text-sm"
				>
					Петров В. И.
				</p>
			</div>
			<div class="flex text-sm gap-1 opacity-70">
				<p>{{ test.question }} вопросов</p>
				•
				<p>{{ test.length }} минут</p>
			</div>
		</div>
		<UButton
			:label="buttonState.label"
			:disabled="props.test.isCompleted"
			@click="() => $router.push(`/test/${test.id}`)"
			variant="link"
			size="xs"
			:color="buttonState.color as ButtonColor"
			:icon="buttonState.icon"
		/>
	</div>
</template>
