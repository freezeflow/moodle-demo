<template>
    <teacherNav 
    class="fixed"/>
    <deleteCard
    v-if="show"
    @closeCard="closeCard"
    @confirmDelete="performDelete" />
    <div class="w-full h-screen flex flex-col justify-center items-center gap-9 pt-10">
        <search 
        placeholder="Search student by name, class or subject"/>
        <div class="flex flex-row max-md:flex-col gap-5 border-0 border-b-2 border-black pb-3 w-3/5 max-md:w-4/5"
            v-for="student in students.students"
            :key="student.id">
            <div class="w-16 h-20 max-sm:w-20 max-md:h-20 rounded bg-slate-300 flex justify-center items-center text-3xl max-md:text-lg">
                <font-awesome-icon icon="user" />
            </div>
            <div class="flex flex-col gap-3">
                <div class="flex flex-row max-md:flex-col gap-3">
                    <div class="flex flex-col">
                        <h2 class="text-2xl max-md:text-lg md:text-center">{{student.name}} {{ student.surname }}</h2>
                        <p class="text-lg max-md:text-md">Grade: {{student.grade}}{{student.classes}}</p>
                    </div>
                    <div class="flex flex-row gap-3">
                        <button class="w-10 h-10 max-md:w-6 max-md:h-6 flex justify-center items-center rounded bg-green-500 text-white cursor-pointer" @click="inspectStudent(student.id)"><font-awesome-icon icon="info-circle" class="text-lg max-md:text-md" /></button>
                        <button class="w-10 h-10 max-md:w-6 max-md:h-6 flex justify-center items-center rounded bg-blue-950 text-white cursor-pointer" @click="editStudent(student.id)"><font-awesome-icon icon="pencil" class="max-md:text-md" /></button>
                        <button class="w-10 h-10 max-md:w-6 max-md:h-6 flex justify-center items-center rounded bg-red-700 text-white cursor-pointer" @click="showDeleteModal(student.id)"><font-awesome-icon icon="trash" class="max-sm:text-sm" /></button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script setup>
    import teacherNav from '@/components/teacherComponents/teacherNav.vue';
    import search from '@/components/teacherComponents/search.vue';
    import deleteCard from '@/components/teacherComponents/deleteCard.vue';
    import { useRoute, useRouter } from 'vue-router';

    import { useStudentData } from '@/stores/studentData';
    import { ref } from 'vue';

    const students = useStudentData();
    let show = ref(false)
    let studentToDelete = ref(null)
    const route = useRoute();
    const router = useRouter();
    const id = Number(route.params.id);

    function editStudent(sid) {
        router.push({ name: 'editStudent', params: {id: id, studentId: sid } });
    }

    function inspectStudent(sid) {
        router.push({ name: 'studentInfo', params: {id: id, studentId: sid } });
    }

    function showDeleteModal(sid) {
        studentToDelete.value = sid;
        show.value = true;
    }

    function closeCard() {
        show.value = false;
        studentToDelete.value = null;
    }

    function performDelete() {
        if (studentToDelete.value) {
            students.deleteStudent(studentToDelete.value);
            closeCard();
        }
    }
</script>