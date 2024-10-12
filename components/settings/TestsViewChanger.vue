<script setup lang="ts">
import type { ButtonColor } from "#ui/types";
import { TestViews, testViewsLabels } from "~/types/ui/TestViews";

const settingsStore = useSettingsStore();

const getButtonColor = (view: TestViews) => {
	return view === settingsStore.testsView ? "primary" : "gray";
};

const views = Object.entries(TestViews).filter(([_, k]) => Number.isInteger(k));
</script>

<template>
	<UButtonGroup size="xs">
		<UButton
			v-for="([value, key], idx) in views"
			@click="settingsStore.setTestsView(idx)"
			:color="getButtonColor(idx) as ButtonColor"
			:key="idx"
			variant="solid"
			icon="i-heroicons-bars-3-20-solid"
			:label="testViewsLabels[key as TestViews]"
		/>
	</UButtonGroup>
</template>
