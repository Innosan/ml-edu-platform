<script setup lang="ts">
import { mockTests } from "~/types/ui/TestCard";

const pageCount = 9;
const currentPage = ref(1);
const total = mockTests.length;

const testsToShow = computed(() => {
	const start = (currentPage.value - 1) * pageCount;
	const end = start + pageCount;

	return mockTests.slice(start, end);
});
</script>

<template>
	<div class="flex flex-col w-full gap-4">
		<div class="grid grid-cols-3 w-full gap-4 justify-between">
			<TestCard v-for="test in testsToShow" :test="test" :key="test.id" />
		</div>

		<UPagination
			class="self-center"
			v-model="currentPage"
			:total="total"
			:pageCount="pageCount"
		/>
	</div>
</template>
