<template>
    <div class="fixed z-50 w-full">
        <studentNav />
        <secondStudentNav
        @Subjects="viewMode = 'Subject'"
        @notices="viewMode = 'Notices'"/>
    </div>
    
    <div class="w-full h-screen flex flex-col gap-10 justify-center items-center pt-32 max-md:pt-44">
        <h1 class="text-2xl max-sm:text-xl">Welcome back {{student.name}}</h1>
        <Subjects 
        v-if="viewMode === 'Subject'"/>
        <Notices 
        v-if="viewMode === 'Notices'"/>
    </div>
</template>

<script setup>
    import studentNav from '@/components/studentComponents/studentNav.vue';
    import secondStudentNav from '@/components/studentComponents/secondStudentNav.vue';
    import Subjects from './Subjects.vue';
    import Notices from './Notices.vue';
    import { useStudentData } from '@/stores/studentData';
    import { useRoute } from 'vue-router';
    import { ref } from 'vue';

    const studentData = useStudentData()

    const route = useRoute();
    const id = Number(route.params.id);

    let viewMode = ref('Subject')

    const student = studentData.students.find(
        (student) => student.id === id
    );
</script>