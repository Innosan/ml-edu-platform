<script setup lang="ts">
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
								:color="badge.color"
							/>
						</div>
					</PageSection>

					<PageSection
						title="Иванов Иван Иванович"
						class="col-span-2"
						size="sm"
						icon="i-heroicons-academic-cap-solid"
						:is-divided="false"
					>
						<div class="flex flex-col gap-2">
							<div class="flex w-1/2 gap-2">
								<UButton
									size="2xs"
									variant="link"
									label="Сообщение"
									icon="i-heroicons-chat-bubble-left-ellipsis-solid"
								/>
								<UButton
									icon="i-heroicons-user-solid"
									size="2xs"
									variant="link"
								/>
							</div>
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
