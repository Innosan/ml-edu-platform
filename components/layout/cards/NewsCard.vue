<script setup lang="ts">
import type { News } from "~/types/ui/News";
import { getRelativeTime } from "~/utils/datetimes";

const props = defineProps({
	news: {
		type: Object as PropType<News>,
		required: true,
	},
});
</script>

<template>
	<div class="flex flex-col rounded-xl gap-2">
		<div class="flex flex-col">
			<h3 class="font-bold">#{{ news.id }} {{ news.title }}</h3>

			<div class="flex flex-row items-center gap-1">
				<UIcon name="i-heroicons-clock" class="w-4 h-4" />
				<p class="text-sm opacity-70">
					{{ getRelativeTime(news.time) }}
				</p>
			</div>
		</div>

		<p class="text-sm opacity-70">{{ news.description }}</p>
	</div>
</template>
