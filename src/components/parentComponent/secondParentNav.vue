<template>
    <nav :class="changeNav" class="transition-all m-0 bg-blue-600 w-56 h-screen" id="closeNav">
        <ul  class="flex flex-col gap-5 justify-center items-center text-white">
            <div class="border border-x-0 border-t-0 border-white h-10 w-4/5 flex justify-center items-center mt-5 cursor-pointer" @click="redirectTo('teacherDashboard')">
                <p class="cursor-pointer">Dashboard</p>
            </div>
            <div class="border border-x-0 border-t-0 border-white h-10 w-4/5 flex justify-center items-center" @click="redirectTo('activities')">
                <p class="cursor-pointer">Create activities</p>
            </div>
            <div class="border border-x-0 border-t-0 border-white h-10 w-4/5 flex justify-center items-center" @click="redirectTo('teacherStudentSettings')">
                <p class="cursor-pointer">Student settings</p>
            </div>
            <div class="border border-x-0 border-t-0 border-white h-10 w-4/5 flex justify-center items-center" @click="redirectTo('teacherLessonPlanner')">
                <p class="cursor-pointer">Lesson planner</p>
            </div>
            <div class="border border-x-0 border-t-0 border-white h-10 w-4/5 flex justify-center items-center" @click="redirectTo('teacherCreateNotice')">
                <p class="cursor-pointer">Create notice</p>
            </div>
            <div class="border border-x-0 border-t-0 border-white h-10 w-4/5 flex justify-center items-center" @click="redirectTo('teacherSettings')">
                <p class="cursor-pointer">Teacher settings</p>
            </div>
            <div class="border border-x-0 border-t-0 border-white h-10 w-4/5 flex justify-center items-center" @click="redirectTo('creationPanel')">
                <p class="cursor-pointer">Creation panel</p>
            </div>
        </ul>
    </nav> 
</template>

<script setup>
import { defineProps } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const id = Number(route.params.id);

    defineProps({
        changeNav: String
    })

    function redirectTo(link){
        router.push({name: link, params: {id}})
    }
</script>