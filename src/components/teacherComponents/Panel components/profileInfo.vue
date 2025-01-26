<template>
    <div class="w-full h-full gap-3 border flex flex-col justify-center items-center">
        <div class="w-32 h-32 flex justify-center items-center rounded-lg bg-slate-200"><font-awesome-icon icon="user" class="text-3xl" /></div>
        <div class="flex flex-col gap-3 text-center text-white">
            <p class="text-2xl">{{ teacherInfo.surname }} {{ teacherInfo.name }} </p>
            <!-- <p class="font-bold">Assigned curriculums:</p> -->
            <div v-for="classesAndSubject in teacherInfo.assignedClassesAndSubjects">
                <p class="max-sm:text-sm"><span class="font-semibold">Grade:</span> {{classesAndSubject}}</p>
            </div>
            <p><span class="font-bold">Login pin:</span> {{ teacherInfo.pin }}</p>
            <p><span class="font-bold">Date created:</span> {{ teacherInfo.createDate }}</p>
            <div class="flex flex-row items-center justify-center w-full">
                <button class="border w-4/5" @click="edit">Edit</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useRoute, useRouter } from 'vue-router';
    import { useTeacherData } from '@/stores/teacherData';
    import { computed } from 'vue';

    const route = useRoute();
    const router = useRouter();
    const teacherData = useTeacherData()
    const id = Number(route.params.id);

    const teacherInfo = computed(() => {
        return teacherData.teachers.find(teachers => teachers.id === id);
    });

    function edit(){
        router.push({ name: 'editTeacher', params: { id: id, teacherId: id } });
    }
</script>