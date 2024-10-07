<script setup lang="ts">
const settingsStore = useSettingsStore();
const appConfig = useAppConfig();
const route = useRoute();

appConfig.ui.primary = settingsStore.primaryColor;
</script>

<template>
	<div>
		<div class="page-container gap-4 justify-between items-start">
			<BaseSidebar />
			<div class="w-full" v-auto-animate>
				<NuxtPage :key="route" />
			</div>
			<BaseUserbar />
		</div>

		<UNotifications />
	</div>
</template>
