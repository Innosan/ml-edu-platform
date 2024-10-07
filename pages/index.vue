<script setup lang="ts">
import type { BadgeColor } from "#ui/types";

import { CardSizes } from "~/types/ui/CardSizes";
import { mockTests } from "~/types/ui/TestCard";
import { mockNews } from "~/types/ui/News";

definePageMeta({
	middleware: ["auth"],
});

const infoBadges = computed(() => [
	{ label: mockTests.length + " тестов", color: "gray" },
	{
		label: mockTests.filter((t) => t.isCompleted).length + " выполнено",
		color: "green",
	},
	{ label: "Средний балл - 4.3", color: "blue" },
]);
</script>

<template>
	<div class="flex flex-col gap-8">
		<UCard :ui="CardSizes.sm">
			<template #header>
				<div class="flex gap-12">
					<PageSection
						title="Русский язык"
						icon="i-heroicons-language-20-solid"
						:is-divided="false"
						size="sm"
					>
						<div class="flex gap-2 opacity-80">
							<UBadge
								v-for="badge in infoBadges"
								:key="badge.label"
								:label="badge.label"
								:color="badge.color as BadgeColor"
							/>
						</div>
					</PageSection>
				</div>
			</template>

			<div class="flex justify-between">
				<TestsBlock />
			</div>
		</UCard>

		<PageSection
			:is-divided="false"
			title="Новости и обновления"
			icon="i-heroicons-newspaper-solid"
		>
			<div class="grid grid-cols-3 gap-4 w-full">
				<NewsCard
					v-for="news in mockNews"
					:news="news"
					:key="news.id"
				/>
			</div>
		</PageSection>
	</div>
</template>
