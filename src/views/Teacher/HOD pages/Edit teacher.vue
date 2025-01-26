<template>
    <teacherNav class="fixed"/>
    <deleteCard
    v-if="show"
    @closeCard="closeCard"
    @confirmDelete="performDelete" />
    <div class="w-full h-screen flex flex-col items-center justify-center gap-6">
        <search 
        class="mb-6"
        placeholder="Search teacher"/>
        <div v-if="teachers" class="flex flex-row gap-5 border-0 border-b-2 border-black pb-3 w-3/5 max-sm:w-5/6"
            v-for="teacher in teachers"
            :key="teacher.id">
            <div class="w-16 h-20 max-sm:w-16 max-sm:h-full rounded bg-slate-300 flex justify-center items-center text-3xl max-sm:text-lg">
                <font-awesome-icon icon="user" class="" />
            </div>
            <div class="flex flex-col gap-3">
                <div class="flex flex-row gap-3">
                    <h2 class="text-2xl max-sm:text-lg text-center">{{teacher.name}} {{ teacher.surname }}</h2>
                    <div class="flex flex-row gap-3">
                        <button class="w-10 h-10 max-sm:w-6 max-sm:h-6 flex justify-center items-center rounded border-2 border-green-500 text-green-500 cursor-pointer" @click="inspectTeacher(teacher.id)"><font-awesome-icon icon="info-circle" class="text-lg max-sm:text-sm" /></button>
                        <button class="w-10 h-10 max-sm:w-6 max-sm:h-6 flex justify-center items-center rounded border-2 border-blue-950 text-blue-950 cursor-pointer" @click="editTeacher(teacher.id)"><font-awesome-icon icon="pencil" class="max-sm:text-sm" /></button>
                        <button class="w-10 h-10 max-sm:w-6 max-sm:h-6 flex justify-center items-center rounded border-2 border-gold text-gold cursor-pointer" @click="editTeacherRole(teacher.id)"><font-awesome-icon icon="graduation-cap" class="max-sm:text-sm" /></button>
                        <button class="w-10 h-10 max-sm:w-6 max-sm:h-6 flex justify-center items-center rounded border-2 border-red-700 text-red-700 cursor-pointer" @click="showDeleteModal(teacher.id)"><font-awesome-icon icon="trash" class="max-sm:text-sm" /></button>
                    </div>
                </div>
                <div class="flex flex-row gap-2">
                    <div v-for="classesAndSubject in teacher.assignedClassesAndSubjects">
                        <p class="max-sm:text-sm">{{classesAndSubject}} |</p>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <p>No teachers found</p>
        </div>
    </div>
</template>

<script setup>
    import teacherNav from '@/components/teacherComponents/teacherNav.vue';
    import search from '@/components/teacherComponents/search.vue';
    import deleteCard from '@/components/teacherComponents/deleteCard.vue';

    import { useRoute, useRouter } from 'vue-router';
    import { useTeacherData } from '@/stores/teacherData';
    import { ref } from 'vue';

    const route = useRoute();
    const router = useRouter();
    const teacherData = useTeacherData()
    let show = ref(false)
    let teacherToDelete = ref(null)
    const id = Number(route.params.id);

    const teachers = teacherData.teachers.filter(
        (teachers) => teachers.id !== id
    );

    console.log(teachers.id)
    function editTeacher(tid) {
        router.push({ name: 'editTeacher', params: { id: id, teacherId: tid } });
    }

    function inspectTeacher(tid) {
        router.push({ name: 'teacherInfo', params: { id: id, teacherId: tid } });
    }

    function editTeacherRole(tid){
        router.push({ name: 'teacherRole', params: { id: id, teacherId: tid } });
    }

    function showDeleteModal(id) {
        teacherToDelete.value = id;
        show.value = true;
    }

    function closeCard() {
        show.value = false;
        teacherToDelete.value = null;
    }

    function performDelete() {
        if (teacherToDelete.value) {
            teacherData.deleteTeacher(teacherToDelete.value);
            closeCard();
        }
    }
</script>