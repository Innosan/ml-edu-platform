<script setup lang="ts">
const settingsStore = useSettingsStore();
const appConfig = useAppConfig();

appConfig.ui.primary = settingsStore.primaryColor;
</script>

<template>
	<div>
		<div
			class="grid grid-cols-1 items-start md:grid-cols-4 lg:grid-cols-6 gap-8"
		>
			<BaseSidebar class="md:col-span-2 lg:col-span-1 order-first" />
			<div class="w-full md:col-span-4 lg:order-2 lg:col-span-4">
				<NuxtPage />
			</div>
			<BaseUserbar
				class="md:-order-2 -order-2 lg:order-last lg:col-span-1 md:col-span-2"
			/>
		</div>

		<UNotifications />
	</div>
</template>
