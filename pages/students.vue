<script setup lang="ts">
definePageMeta({
	middleware: ["auth", "role"],
});
</script>

<template>
	<PageSection title="Студенты" />
</template>
