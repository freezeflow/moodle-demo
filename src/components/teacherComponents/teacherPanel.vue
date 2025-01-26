<template>
    <nav :class="changePosition" class="teacherSecondNav transition-all m-0 bg-blue-600 w-3/5 max-md:w-4/5 relative z-500 overflow-y-scroll">
        <button @click="$emit('closeCard')" class="border w-12 h-10 rounded-full absolute left-2 top-2 flex justify-center items-center text-white"><font-awesome-icon icon="arrow-left" /></button>
        <lessonPlan 
        v-if="navMode === 'Lesson plans'"/>
        <messages 
        v-if="navMode === 'Messages'"/>
        <profileInfo 
        v-if="navMode === 'Profile'"/>
    </nav>
</template>

<script setup>
import lessonPlan from './Panel components/lessonPlan.vue';
import messages from './Panel components/messages.vue';
import profileInfo from './Panel components/profileInfo.vue';

import { defineProps, defineEmits } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const emit = defineEmits(['closeCard'])

const teacherId = Number(route.params.id);

defineProps({
    changePosition: String,
    navMode: String,
});
</script>
