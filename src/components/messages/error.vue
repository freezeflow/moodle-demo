<template>
    <div class="flex flex-row gap-3">
        <div class=" w-6 h-6 rounded-full bg-red-600 text-white text-center">!</div><p>{{ errorMessage }}</p>
    </div>
</template>

<script setup>
    defineProps({
        errorMessage: String
    })
</script>