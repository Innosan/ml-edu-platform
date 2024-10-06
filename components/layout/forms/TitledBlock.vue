<script setup lang="ts">
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	icon: {
		type: String,
		default: "",
	},
});
</script>

<template>
	<div class="flex flex-col">
		<div class="flex flex-row items-center gap-1">
			<UIcon v-if="icon" :name="icon" class="w-4 h-4" />
			<p class="opacity-70 text-sm">{{ title }}</p>
		</div>
		<slot />
	</div>
</template>
