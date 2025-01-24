<template>
    <button @click="redirectTo" class="bg-red-600 text-white w-10 h-10 rounded-full">
        <font-awesome-icon icon="arrow-left" />
    </button>
</template>

<script setup>
import { useRouter } from 'vue-router';

// Access props
const props = defineProps({
    link: { type: String, required: true },
    id: { type: [String, Number]},
});

const router = useRouter();

function redirectTo() {
    router.push({ name: props.link, params: { id: props.id } });
}
</script>
