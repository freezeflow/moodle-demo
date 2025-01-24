<template>
    <div class="w-full h-screen pt-32 flex flex-col gap-10 justify-center items-center">
        <p class="text-xl">Subject settings</p>
        <div class="flex flex-row max-md:flex-col items-center gap-5">
            <div
            v-for="(subjects, index) in subjects" 
            class="bg-blue-600 max-md:w-32 max-md:h-40 w-36 h-40 flex flex-col justify-center items-center rounded-t-lg gap-2 cursor-pointer"
            @click="redirectTo(subjects, grades[index])">
                <div class="max-md:w-5/6 max-md:h-28 w-32 h-28 bg-white rounded-t-lg"</div>
                <p class="text-center text-white">{{ grades[index] }} {{ subjects }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useTeacherData } from '@/stores/teacherData';
    import { useRoute, useRouter } from 'vue-router';
    import { ref } from 'vue';

    const teacherData = useTeacherData();
    const route = useRoute();
    const router = useRouter();
    const id = Number(route.params.id);

    let grades = ref([])
    let subjects = ref([])

    const teacher = teacherData.loggedinTeachers.find(
        (teacher) => teacher.id === id
    );

    teacher.assignedClassesAndSubjects.forEach(item => {
        const [grade, subject] = item.split(" - ");
        grades.value.push(Number(grade));
        subjects.value.push(subject);
    });

    function redirectTo(subject, grade){
        router.push({name: 'subjectSettings', params: {id: id, subject: subject, grade: grade}})
    }
</script>