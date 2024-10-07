<script setup lang="ts">
const settingsStore = useSettingsStore();
const appConfig = useAppConfig();

appConfig.ui.primary = settingsStore.primaryColor;
</script>

<template>
	<div>
		<div class="page-container gap-4 justify-between items-start">
			<BaseSidebar />
			<div class="w-full">
				<NuxtPage />
			</div>
			<BaseUserbar />
		</div>

		<UNotifications />
	</div>
</template>
