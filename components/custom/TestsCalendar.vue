<script setup lang="ts">
import { mockTests } from "~/types/ui/TestCard";
import { prettifyDayTitle } from "~/utils/datetimes";
import { weekdays } from "~/utils/navigation";

const currentDate = ref(new Date());
const calendar = computed(() => {
	const year = currentDate.value.getFullYear();
	const month = currentDate.value.getMonth();
	const daysInMonth = new Date(year, month + 1, 0).getDate();

	// Get the first day of the current month
	const firstDayOfMonth = new Date(year, month, 1).getDay();
	// Calculate the number of empty days needed at the beginning of the month
	const emptyDaysStart = (firstDayOfMonth + 6) % 7;

	// Generate all days of the current month as Date objects
	const days = Array.from(
		{ length: daysInMonth },
		(_, i) => new Date(year, month, i + 1),
	);

	// Add days from the previous month
	const prevMonthDays = new Date(year, month, 0).getDate();
	for (let i = 0; i < emptyDaysStart; i++) {
		days.unshift(new Date(year, month - 1, prevMonthDays - i));
	}

	// Get the last day of the current month
	const lastDayOfMonth = new Date(year, month, daysInMonth).getDay();
	// Calculate the number of empty days needed at the end of the month
	const emptyDaysEnd = (7 - lastDayOfMonth) % 7;

	// Add days from the next month
	for (let i = 1; i <= emptyDaysEnd; i++) {
		days.push(new Date(year, month + 1, i));
	}

	return days;
});

// Map each day to its corresponding tests
const currentMonthDays = computed(() => {
	return calendar.value.map((day) => {
		const isToday = day.toDateString() === new Date().toDateString();
		const currentTests = mockTests.filter(
			(test) => new Date(test.date).toDateString() === day.toDateString(),
		);

		return {
			day: prettifyDayTitle(day),
			isToday,
			currentTests,
		};
	});
});
</script>

<template>
	<div class="grid grid-cols-7 items-start gap-2">
		<!-- Weekdays Row -->
		<div
			v-for="weekday in weekdays"
			:key="weekday"
			class="text-sm font-bold"
		>
			{{ weekday }}
		</div>
		<!-- Days of the Month -->
		<div v-for="day in currentMonthDays" :key="day.day.dayMonth">
			<div
				class="flex flex-col p-2 rounded-xl ring-1 ring-gray-200"
				:class="
					day.isToday
						? 'bg-primary-100 ring-primary-300'
						: 'bg-gray-50'
				"
			>
				<p class="text-xs font-bold uppercase">
					{{ day.day.dayMonth }}
				</p>
				<UPopover mode="hover">
					<UButton
						:color="
							day.currentTests.length > 0 ? 'primary' : 'gray'
						"
						variant="link"
						:padded="false"
						size="xs"
						:label="
							day.currentTests.length > 0
								? 'Тесты - ' + day.currentTests.length
								: 'Тестов нет'
						"
					/>

					<template #panel v-if="day.currentTests.length > 0">
						<div class="p-2 flex gap-2">
							<TestCard
								v-for="test in day.currentTests"
								:key="test.id"
								:test="test"
							/>
						</div>
					</template>
				</UPopover>
			</div>
		</div>
	</div>
</template>

<style scoped>
.grid {
	grid-template-columns: repeat(7, 1fr);
}
</style>
