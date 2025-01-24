<template>
    <teacherNav 
    class="fixed"/>
    <div class="flex flex-col gap-2 justify-center max-md:items-center max-md:w-full h-screen px-5">
        <div class="w-32 h-32 flex justify-center items-center rounded-lg bg-slate-200"><font-awesome-icon icon="user" class="text-3xl" /></div>
        <div class="flex flex-col gap-3 max-md:text-center">
            <p class="text-2xl">{{ teacherInfo.surname }} {{ teacherInfo.name }} </p>
            <p class="font-bold">Assigned subjects and classes:</p>
            <div v-for="classesAndSubject in teacherInfo.assignedClassesAndSubjects">
                <p class="max-sm:text-sm"> {{classesAndSubject}}</p>
            </div>
            <p><span class="font-bold">Login pin:</span> {{ teacherInfo.pin }}</p>
            <p><span class="font-bold">Date created:</span> {{ teacherInfo.createDate }}</p>
            <div class="flex flex-row w-3/5 max-md:w-full">
                <button class="border border-black w-1/3" @click="edit">Edit</button><button class="border border-black w-1/3" @click="editAssignment">Class and subjects</button><button class="border border-black w-1/3">Delete</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useRoute, useRouter } from 'vue-router';
    import { useTeacherData } from '@/stores/teacherData';
    import { computed } from 'vue';
    import teacherNav from '@/components/teacherComponents/teacherNav.vue';

    const route = useRoute();
    const router = useRouter();
    const teacherData = useTeacherData()
    const tid = Number(route.params.teacherId);
    const id = Number(route.params.id);

    const teacherInfo = computed(() => {
        return teacherData.teachers.find(teachers => teachers.id === tid);
    });

    function edit(){
        router.push({ name: 'editTeacher', params: { id: id, teacherId: tid } });
    }

    function editAssignment(){
        router.push({ name: 'teacherRole', params: { id: id, teacherId: tid } });
    }
</script>