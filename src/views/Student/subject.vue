<template>
    <backComponent 
    link="studentDashboard"
    :id="id"
    class="absolute top-2 left-2"/>
    <div class="w-full h-screen flex flex-col items-center gap-4 pt-20">
        <div class="border border-blue-600 rounded-lg flex flex-col gap-3 w-4/5 py-5">
            <h1 class="text-center text-xl">Introduction to {{ subject }}</h1>
            <div class="flex flex-col justify-center items-center">
                <div class="w-20 h-20 border rounded-lg flex justify-center items-center text-2xl"><font-awesome-icon icon="user" /></div>
                <h3 class="text-lg my-2" v-if="teachers" ><span class="font-semibold">Teacher:</span> {{ teachers.name }} {{ teachers.surname }}</h3>
                <h3 class="text-lg my-2" v-else >No teacher assinged to cirriculum</h3>
                <div class="w-full h-32 px-2">
                    <p class="font-semibold">Bio of subject:</p>
                </div>
            </div>
        </div>
        <div class="border border-blue-600 rounded-lg flex flex-col gap-3 w-4/5 p-5">
            <h1 class="text-xl text-center">Quizes</h1>
            <div v-if="quizes.length !== 0">
                <div v-for="(quiz, index) in quizes" :key="index"
                class="border border-black border-x-0 border-t-0"
                @click="redirectTo(quiz.id)">
                    <h3 class="text-lg"><span class="font-semibold">Quiz topic:</span> {{ quiz.title }}</h3>
                    <p>score: {{ studentGrade.points }} / {{ getTotal(quiz.points) }}</p>
                </div>
            </div>
            <div v-else
            class="flex w-full justify-center items-center">
                <div class="text-center">
                    <p class="underline">No quizes found</p>
                </div>
            </div>
        </div>
        <div class="border border-blue-600 rounded-lg flex flex-col gap-3 w-4/5 p-5">
            <h1 class="text-xl text-center">Uploaded files</h1>
            <div v-if="files.length !== 0">
                <div v-for="(file, index) in files" :key="index"
                class="border border-black border-x-0 border-t-0 flex flex-col gap-2">
                    <div class="w-full h-14 border border-blue-300 rounded-lg flex justify-center items-center text-blue-600">
                        <font-awesome-icon icon="download" />
                    </div>
                    <h3 class="text-lg"><span class="font-semibold">Title:</span> {{ file.name }}</h3>
                    <p><span class="font-semibold">Note:</span>{{ file.note }}</p>
                    <p><span class="font-semibold">Date uploaded:</span> {{ file.uploadDate }}</p>
                </div>
            </div>
            <div v-else
            class="flex w-full justify-center items-center">
                <div class="text-center">
                    <p class="underline">No files found</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import backComponent from '@/components/teacherComponents/backComponent.vue';
    import { useStudentData } from '@/stores/studentData';
    import { useQuiz } from '@/stores/quizData';
    import { useRoute, useRouter } from 'vue-router';
    import { useQuizGrades } from '@/stores/quizGrades';
    import { useTeacherData } from '@/stores/teacherData';
    import { useFilData } from '@/stores/fileData';

    const studentData = useStudentData()
    const quizData = useQuiz()
    const quizGrades = useQuizGrades()
    const teacherData = useTeacherData()
    const fileData = useFilData()

    const route = useRoute();
    const router = useRouter();
    const id = Number(route.params.id);
    const subject = route.params.subject;

    const student = studentData.students.find(
        (student) => student.id === id
    );

    const quizes = quizData.quizes.filter(
        (quiz) => quiz.subject === subject && quiz.grade === student.grade
    );

    const teachers = teacherData.teachers.find((teacher) =>
        teacher.assignedClassesAndSubjects.some((element) => {
            const [grade, subjects] = element.split(" - ");
            return subjects === subject && Number(grade) === student.grade;
        })
    );

    const studentGrade = quizGrades.quizGrades.find(
        (quizGrades) => quizGrades.studentId === id
    );

    const files = fileData.files.filter(
        (file) => file.selectedSubjects.includes(subject) && file.selectedClasses.includes(student.grade)
    );

    function getTotal(array) {
        return array.reduce((sum, element) => sum + element, 0);
    }

    function redirectTo(quizId){
        router.push({name: 'quiz', params: {id: id, quizId: quizId}})
    }
</script>