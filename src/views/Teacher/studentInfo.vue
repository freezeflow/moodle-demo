<template>
    <teacherNav 
    class="fixed"/>
    <div class="flex flex-row gap-4 items-center h-screen px-5">
        <div class="w-2/12 h-64 flex justify-center items-center rounded-lg bg-slate-200"><font-awesome-icon icon="user" class="text-3xl" /></div>
        <div class="flex flex-col gap-5">
            <p class="text-2xl">{{ studentInfo.surname }} {{ studentInfo.name }} </p>
            <p clas><span class="font-bold">Grade:</span> {{ studentInfo.selectedClass }}</p>
            <p><span class="font-bold">Subjects:</span> {{ cleanedSubjects }}</p>
            <p><span class="font-bold">Login pin:</span> {{ studentInfo.pin }}</p>
            <p><span class="font-bold">Date created:</span> {{ studentInfo.createDate }}</p>
            <div class="flex flex-row w-3/5">
                <button class="border border-black w-1/2">Edit</button><button class="border border-black w-1/2">Delete</button>
            </div>
        </div>
        
    </div>
    
    
</template>

<script setup>
    import { useRoute, useRouter } from 'vue-router';
    import { useStudentData } from '@/stores/studentData';
    import { ref, computed, reactive } from 'vue';
    import teacherNav from '@/components/teacherComponents/teacherNav.vue';

    const route = useRoute();
    const router = useRouter();
    const studentStore = useStudentData();

    const id = Number(route.params.studentId);
    const studentInfo = computed(() => {
        return studentStore.students.find(sutdents => sutdents.id === id);
    });

    const cleanedSubjects = computed(() => {
        return Array.isArray(studentInfo.value.selectedSubjects)
        ? studentInfo.value.selectedSubjects.join(', ')
        : typeof studentInfo.value.selectedSubjects === 'string'
        ? studentInfo.value.selectedSubjects.replace(/[\[\]"]+/g, '')
        : '';
    });

    console.log(cleanedSubjects.value)
</script>