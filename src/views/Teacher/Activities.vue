<template>
    <teacherNav class="fixed z-50"></teacherNav>
    <div class="w-full h-screen border flex flex-col gap-12 justify-center items-center">
        <h1 class="text-2xl">Create Activities</h1>
        <div @click="redirectTo('teacherUploadFile')"><button class="bg-blue-600 w-48 h-10 text-white rounded-lg cursor-pointer">Upload document</button></div>
        <div @click="redirectTo('createQuiz')"><button class="bg-blue-600 w-48 h-10 text-white rounded-lg cursor-pointer">Create quiz</button></div>
        <div @click="redirectTo('teacherStudentSettings')"><button class="bg-blue-600 w-48 h-10 text-white rounded-lg cursor-pointer">Create test</button></div>
    </div>
</template>

<script setup>
    import teacherNav from '@/components/teacherComponents/teacherNav.vue';
    import { useRoute, useRouter } from 'vue-router';

    const route = useRoute();
    const router = useRouter();
    const id = Number(route.params.id);

    function redirectTo(link){
        router.push({name: link, params: {id}})
    }
</script>