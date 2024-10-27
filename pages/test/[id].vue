<script setup lang="ts">
import { mockTests } from "~/types/ui/TestCard";

const route = useRoute();
const test = mockTests.find((t) => t.id === route.params.id);

const currentQuestion = ref(test.questions[0].id);
const currentQData = computed(() => {
	return test.questions.find((q) => q.id == currentQuestion.value);
});
</script>

<template>
	<div class="flex flex-row gap-12 justify-between">
		<PageSection :title="test.title">
			<p class="text-2xl">
				{{ currentQData.id }}.
				{{ currentQData.description }}
			</p>

			<UTextarea size="xl" placeholder="Ответ на вопрос" />
		</PageSection>

		<div class="w-max text-nowrap flex flex-col gap-8">
			<div class="flex flex-col gap-2">
				<p class="font-bold text-xl">Все вопросы</p>
				<UButton
					v-for="(question, index) in test.questions"
					@click="currentQuestion = question.id"
					:class="currentQuestion === question.id ? 'underline' : ''"
					class="text-nowrap w-full"
					:variant="
						currentQuestion === question.id ? 'solid' : 'outline'
					"
				>
					Вопрос #{{ index + 1 }}
				</UButton>
			</div>

			<div class="flex flex-col gap-1">
				<UButton
					size="xl"
					@click="navigateTo('/')"
					label="Вернуться к тестам"
				/>
				<UButton
					variant="solid"
					@click="navigateTo('/')"
					color="green"
					size="xl"
					label="Завершить"
				/>
			</div>
		</div>
	</div>
</template>
