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
	isDivided: {
		type: Boolean,
		default: true,
	},
});

const sectionSize = SectionSizes[props.size];
</script>

<template>
	<section class="flex flex-col" :class="sectionSize.spacing">
		<SectionTitle :title="title" :icon="icon" :size="size" />

		<slot />
	</section>

	<UDivider v-if="isDivided" />
</template>
