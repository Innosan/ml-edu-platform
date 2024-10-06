<script setup lang="ts">
import type { PropType } from "vue";
import { type SectionSizeKey, SectionSizes } from "~/types/ui/SectionSizes";

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	icon: {
		type: String,
		default: "",
	},
	size: {
		type: String as PropType<SectionSizeKey>,
		default: "md",
	},
});

const sectionSize = SectionSizes[props.size];
</script>

<template>
	<div class="flex items-center gap-2">
		<UIcon v-if="icon" :name="icon" :class="sectionSize.icon" />

		<h2 class="font-bold" :class="sectionSize.title">
			{{ title }}
		</h2>
	</div>
</template>
