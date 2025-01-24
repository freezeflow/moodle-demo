<template>
    <div class="flex flex-row gap-3">
        <p class="h-8 w-full px-2 flex items-center justify-center bg-green-300 border border-green-900 rounded">{{ successMessage }}</p>
    </div>
</template>

<script setup>
    defineProps({
        successMessage: String
    })
</script>