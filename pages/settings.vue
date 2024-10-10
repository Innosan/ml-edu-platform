<script setup lang="ts">
const settingsStore = useSettingsStore();

const buttonStates = computed(() => {
	return {
		color: settingsStore.testsView === "list" ? "primary" : "gray",
		calendarColor:
			settingsStore.testsView === "calendar" ? "primary" : "gray",
		variant: settingsStore.testsView === "list" ? "solid" : "outline",
		calendarVariant:
			settingsStore.testsView === "calendar" ? "solid" : "outline",
	};
});
</script>

<template>
	<PageSection title="Настройки">
		<div class="flex flex-col gap-4">
			<TitledBlock title="Вид тестов">
				<UButtonGroup>
					<UButton
						@click="settingsStore.setTestsView('list')"
						:color="buttonStates.color"
						:variant="buttonStates.variant"
						label="Список"
					/>
					<UButton
						@click="settingsStore.setTestsView('calendar')"
						:color="buttonStates.calendarColor"
						:variant="buttonStates.calendarVariant"
						label="Календарь"
					/>
				</UButtonGroup>
			</TitledBlock>
		</div>
	</PageSection>
</template>
