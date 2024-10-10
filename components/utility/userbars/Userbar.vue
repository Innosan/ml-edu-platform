<script setup lang="ts"></script>

<template>
	<PageSection size="sm" title="Ближайший тест" icon="i-heroicons-calendar">
		<div class="flex flex-col bg-gray-100 dark:bg-gray-800 p-2 rounded-lg">
			<div class="flex gap-1 text-sm opacity-70">
				<p>до 15 сентября</p>
				•
				<p>60 минут</p>
			</div>
			<p class="font-bold">Русский язык / Тест 2</p>
		</div>
	</PageSection>

	<PageSection size="sm" title="Успеваемость" icon="i-heroicons-chart-pie">
		<div class="flex flex-col gap-3">
			<TitledBlock title="Средний балл">
				<p>4.5</p>
			</TitledBlock>

			<TitledBlock title="Самый высокий результат">
				<p>88%</p>
			</TitledBlock>

			<TitledBlock title="Самый низкий результат">
				<p>60%</p>
			</TitledBlock>

			<TitledBlock title="Посещаемость">
				<p>12 занятий</p>
			</TitledBlock>
		</div>
	</PageSection>
</template>
