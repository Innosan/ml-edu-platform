<script setup lang="ts">
import type { BadgeColor } from "#ui/types";

import { CardSizes } from "~/types/ui/CardSizes";
import { mockTests } from "~/types/ui/TestCard";
import { mockNews } from "~/types/ui/News";
import { TestViews } from "~/types/ui/TestViews";

useHead({
	title: "Главная",
	meta: [
		{
			name: "description",
			content: "Ваш личный кабинет и статистика",
		},
	],
});

definePageMeta({
	middleware: ["auth"],
});

const userStore = useUserStore();
userStore.fetchUser();

const infoBadges = computed(() => [
	{ label: mockTests.length + " тестов", color: "gray" },
	{
		label: mockTests.filter((t) => t.isCompleted).length + " выполнено",
		color: "green",
	},
	{ label: "Средний балл - 4.3", color: "blue" },
]);

const settingsStore = useSettingsStore();
</script>

<template>
	<div class="flex flex-col gap-8">
		<UCard :ui="CardSizes.sm">
			<template #header>
				<div class="flex gap-12">
					<PageSection
						title="Русский язык"
						icon="i-heroicons-language-20-solid"
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
						<TestsViewChanger />
					</PageSection>
				</div>
			</template>

			<div class="flex p-2 justify-between">
				<TestsBlock v-if="settingsStore.testsView === TestViews.LIST" />
				<TestsCalendar v-else />
			</div>
		</UCard>

		<PageSection
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
