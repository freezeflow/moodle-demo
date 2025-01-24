<template>
    <div class="w-full h-full flex flex-col justify-center items-center gap-5">
            <search />
            <div v-if="lessons.length">
                <div v-for="lesson in lessons" class="flex flex-col gap-2 text-white  border-0 border-b-2 border-white pb-2">
                    <p class="text-3xl max-md:text-lg text-center"><span class="font-bold">Topic: </span>{{ lesson.topic }}</p>
                    <p class="max-sm:text-sm max-sm:text-center font-bold">Lesson plan:</p>
                    <p class="border border-blue-950 px-2 rounded max-w-full text-wrap max-sm:text-sm">{{ lesson.lessonPlan }}</p>
                    <p class="max-sm:text-sm max-sm:text-center"><span class="font-bold">Grades: </span>{{ lesson.selectedGrades.join(", ") }}</p>
                    <p class="max-sm:text-sm max-sm:text-center"><span class="font-bold max-sm:text-sm">Subject/s: </span> {{ lesson.selectedSubjects.join(", ") }}</p>
                    <div class="flex flex-row justify-between gap-8 max-sm:text-sm">
                        <p><span class="font-bold">Start date: </span>{{ lesson.startDate }}</p> -
                        <p><span class="font-bold">End date: </span>{{ lesson.endDate }}</p>
                    </div>
                </div>
            </div>
            <div v-else class="px-3 text-center">
                <p class="text-white">No lesson plans, <span @click="toLessonPlans" class="underline text-gray-300">press here to create some</span></p>
            </div>
        </div>
</template>

<script setup>
    import search from '../search.vue';
    import { useLessonData } from '@/stores/lessonData';
    import { useRoute, useRouter } from 'vue-router';

    const route = useRoute();
    const router = useRouter();
    const lessonPlans = useLessonData();
    const plan = lessonPlans.lessonPlan;

    const teacherId = Number(route.params.id);

    const lessons = plan.filter((lesson) => lesson.teacherId === teacherId);

    function toLessonPlans(){
        router.push({name: 'teacherLessonPlanner', params: {teacherId}})
    }
</script>