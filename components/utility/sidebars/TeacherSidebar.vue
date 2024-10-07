<script setup lang="ts">
import { CardSizes } from "~/types/ui/CardSizes";
</script>

<template>
	<UCard :ui="CardSizes.sm">
		<div class="flex flex-col gap-2">
			<UButton label="Создать тест" icon="i-heroicons-plus" />
			<UButton label="Создать новость" icon="i-heroicons-plus" />
		</div>
	</UCard>
</template>
