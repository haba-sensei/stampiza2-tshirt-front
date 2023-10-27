<template> 
		<h1>Footer: {{ props.foo }}</h1> 
</template>

<script setup lang="ts">
const props = defineProps({
  foo: { type: String, required: true },
  bar: Number
})
</script>

<style scoped>

</style>