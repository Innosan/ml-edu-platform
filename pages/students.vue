<script setup lang="ts">
import { CardSizes } from "~/types/ui/CardSizes";
import { students } from "~/types/data/Student";

definePageMeta({
	middleware: ["auth", "role"],
});
</script>

<template>
	<PageSection title="Студенты">
		<div class="flex flex-col gap-3">
			<UCard v-for="student in students" :ui="CardSizes.sm">
				<template #header>
					<p>{{ student.name }}</p>
					<p class="underline">{{ student.email }}</p>
				</template>
				<div class="flex flex-wrap gap-4">
					<div class="flex flex-col gap-1">
						<p class="text-sm">Средний балл</p>
						<p class="font-bold">{{ student.averageScore }}</p>
					</div>
					<div class="flex flex-col gap-1">
						<p class="text-sm">Тестов пройдено</p>
						<p class="font-bold">{{ student.id + 1 }}</p>
					</div>
				</div>
			</UCard>
		</div>
	</PageSection>
</template>
