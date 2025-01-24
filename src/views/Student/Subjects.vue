<template>
    <div class="w-full h-screen flex flex-col gap-10">
        <div class="w-full md:px-5 grid md:grid-cols-5 max-md:grid-cols-1 justify-items-center items-center gap-5">
            <div
            v-for="subjects in student.selectedSubjects" 
            class="bg-slate-200 max-md:w-4/5 max-md:h-40 w-36 h-40 flex flex-col justify-center items-center rounded-t-lg gap-2 cursor-pointer"
            @click="redirectTo(subjects)">
                <div class="max-md:w-4/5 max-md:h-28 w-32 h-28 bg-white rounded-t-lg"</div>
                <p class="text-center">{{ subjects }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useStudentData } from '@/stores/studentData';
    import { useRoute, useRouter } from 'vue-router';

    const studentData = useStudentData()

    const route = useRoute();
    const router = useRouter();
    const id = Number(route.params.id);

    const student = studentData.students.find(
        (student) => student.id === id
    );

    function redirectTo(subject){
        router.push({name: 'subject', params: {id: id, subject: subject}})
    }
</script>