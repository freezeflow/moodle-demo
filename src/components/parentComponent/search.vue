<template>
    <div class="w-full flex flex-row justify-center">
        <input type="search" name="" id="" :placeholder="placeholder" class="outline-none border border-blue-950 w-2/6 max-sm:w-3/5 max-sm:h-6 h-8 rounded-l-md pl-5">
        <button class="bg-blue-950 w-20 rounded-r-md text-white cursor-pointer"><font-awesome-icon icon="search" /></button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    placeholder: { type: String, default: 'Search' },
    modelValue: { type: Array, default: () => [] }
});
</script>