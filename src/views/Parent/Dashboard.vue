<template>
    <parentNav />
    <div class="w-full">
        <div class="w-full fixed top-11 bg-blue-600 md:h-10 h-16 max-md:p-2 mt-0.5 flex flex-row justify-start  pl-2 md:items-center text-white gap-3">
            <div :class="noticesClass" class="border rounded-lg md:h-6 h-12 max-md:text-sm w-1/5 max-md:w-1/3 text-center flex justify-center items-center" @click="noticesStyle">
                <p class="cursor-pointer">Notices</p>
            </div>
            <div :class="subjectClass" class="border rounded-lg md:h-6 h-12 max-md:text-sm w-1/5 max-md:w-1/3 text-center flex justify-center items-center" @click="subjectStyle">
                <p class="cursor-pointer">Student subjects</p>
            </div>
            <div :class="infoClass" class="border rounded-lg md:h-6 h-12 max-md:text-sm w-1/5 max-md:w-1/3 text-center flex justify-center items-center" @click="infoStyle">
                <p class="cursor-pointer">Staff Information</p>
            </div>
        </div>
        <div class="w-full h-screen flex flex-col gap-4 pt-32">
            <h1 class="md:text-xl text-lg text-center">Welcome {{ parent.name }} {{ parent.surname }}</h1>
            <div v-if="students ">
                <Subjects 
                :-ids="studentId"
                class="w-full"
                v-if="viewMode === 'Subject'"/>
            </div>
            <div v-else>
                <p>No student assigned, please press <span class="underline text-blue-600 cursor-pointer" @click="redirectTo('addStudent')">here to register a student</span> </p>
            </div>
            <Notices 
                v-if="viewMode === 'Notices'"
            />
        </div>
        
    </div>
</template>

<script setup>
    import parentNav from '@/components/parentComponent/parentNav.vue';
    import Notices from './Notices.vue';
    import Subjects from './Subjects.vue';
    import { useParentData } from '@/stores/parentsData';
    import { useStudentData } from '@/stores/studentData';
    import { useParentSudentData } from '@/stores/parentStudentData';
    import { useRoute, useRouter } from 'vue-router';
    import { ref } from 'vue';

    let subjectClass = ref('border-white')
    let noticesClass = ref('border-blue-200 text-blue-200')
    let infoClass = ref('border-white')
    let viewMode = ref('Notices')
    let studentId = []
    const parentsData = useParentData()
    const studentData = useStudentData()
    const parentStudentData = useParentSudentData()

    function subjectStyle(){
        viewMode.value = 'Subject'
        noticesClass.value = 'border-white'
        infoClass.value = 'border-white'
        subjectClass.value = 'border-blue-200 text-blue-200'
    }

    function noticesStyle(){
        viewMode.value = 'Notices'
        subjectClass.value = 'border-white'
        infoClass.value = 'border-white'
        noticesClass.value = 'border-blue-200 text-blue-200'
    }

    function infoStyle(){
        viewMode.value = 'Info'
        subjectClass.value = 'border-white'
        infoClass.value = 'border-blue-200 text-blue-200'
        noticesClass.value = 'border-white'
    }

    const route = useRoute();
    const router = useRouter();
    const id = Number(route.params.id);

    const parent = parentsData.parents.find(
        (parent) => parent.id === id
    );

    const parentStudent = parentStudentData.parentSudent.filter(
        (data) => data.parentId === id
    );

    const students = studentData.students.filter(
        (student) => student.id === parentStudent.studentId
    )

    parentStudent.forEach(element => {
        studentId.push(element.studentId)
    });

    console.log(studentId.value)

    function redirectTo(link){
        router.push({name: link, params: {id}})
    }
</script>