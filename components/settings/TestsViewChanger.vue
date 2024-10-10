<script setup lang="ts">
const settingsStore = useSettingsStore();

const buttonStates = computed(() => {
	return {
		color: settingsStore.testsView === "list" ? "primary" : "gray",
		calendarColor:
			settingsStore.testsView === "calendar" ? "primary" : "gray",
	};
});
</script>

<template>
	<UButtonGroup>
		<UButton
			@click="settingsStore.setTestsView('list')"
			:color="buttonStates.color"
			variant="solid"
			label="Список"
		/>
		<UButton
			@click="settingsStore.setTestsView('calendar')"
			:color="buttonStates.calendarColor"
			variant="solid"
			label="Календарь"
		/>
	</UButtonGroup>
</template>
