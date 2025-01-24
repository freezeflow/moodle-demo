<template>
    <div class="w-full h-full gap-3 flex flex-col justify-center items-center">
        <div class="w-32 h-32 flex justify-center items-center rounded-lg bg-slate-200"><font-awesome-icon icon="user" class="text-3xl" /></div>
        <div class="flex flex-col gap-3 text-center text-white">
            <p class="text-2xl">{{ studentInfo.surname }} {{ studentInfo.name }} </p>
            <!-- <p class="font-bold">Assigned curriculums:</p> -->
            <p><span class="font-bold">Grade & Class:</span> {{ studentInfo.grade }} {{ studentInfo.classes }}</p>
            <p class="font-semibold">Enrolled subjects:</p>
            <div class="grid grid-cols-2">
                <div v-for="subject in studentInfo.selectedSubjects">
                    <p class="max-sm:text-sm"> {{subject}}</p>
                </div>
            </div>
            
            <p><span class="font-bold">Login pin:</span> {{ studentInfo.pin }}</p>
            <p><span class="font-bold">Date created:</span> {{ studentInfo.createDate }}</p>
        </div>
    </div>
</template>

<script setup>
    import { useRoute, useRouter } from 'vue-router';
    import { useStudentData } from '@/stores/studentData';
    import { computed } from 'vue';

    const route = useRoute();
    const router = useRouter();
    const studentData = useStudentData()
    const id = Number(route.params.id);

    const studentInfo = computed(() => {
        return studentData.students.find(student => student.id === id);
    });

    function edit(){
        router.push({ name: 'editTeacher', params: { id: id, teacherId: id } });
    }
</script>