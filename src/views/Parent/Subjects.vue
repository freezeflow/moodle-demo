<template>
    <div class="w-full flex flex-col gap-10" v-if="$props.Ids">
        <div class="" v-for="student in students">
            <p class="font-semibold text-lg">{{ student.name }} {{ student.surname }}'s subjects:</p>
            <div class="flex flex-col gap-6">
                <div v-for="subject in student.selectedSubjects" class="border border-x-0 border-t-0 w-3/5">
                    <div class="flex flex-row justify-between cursor-pointer" @click="toggleSubjects(subject, student.grade)">
                        <h2 class="font-semibold">{{ subject }}: </h2>
                        <font-awesome-icon :icon="subjectOpenStates[`${subject}-${student.grade}`]? 'chevron-up' : 'chevron-down'" />
                    </div>
                    <div class="w-4/5 pl-2" v-if="subjectOpenStates[`${subject}-${student.grade}`]">
                        <div class="flex flex-row w-2/5 shadow-sm justify-start items-center gap-5 cursor-pointer" @click="toggleQuizes(subject)">
                            <h3 class="">{{ subject }} Quizes</h3>
                            <font-awesome-icon :icon="quizOpenStates[subject] && getQuiz(subject, student.grade) ? 'minus' : 'plus'" :class="quizOpenStates[subject] && getQuiz(subject, student.grade).length ?'text-red-600' : 'text-blue-600'"/>
                        </div>
                        <div class="bg-blue-300 p-2 rounded shadow-lg flex flex-col gap-2" v-if="quizOpenStates[subject] && getQuiz(subject, student.grade).length">
                            <div v-for="(quiz, index) in getQuiz(subject, student.grade)" class="bg-blue-200 p-2 rounded shadow-lg">
                                <p class="font-bold text-lg">Quiz #{{ index + 1 }}</p>
                                <p> <span class="font-semibold">Title:</span> {{ quiz.title }}</p>
                                <div v-for="grade in getQuizGrades(student.id, quiz.id)">
                                    <p> <span class="font-semibold">Grade:</span> {{ grade.points }}/{{ getTotal(quiz.points) }}</p>
                                    <p> <span class="font-semibold">Date completed:</span> {{ grade.createDate }}</p>
                                </div>
                                <p> <span class="font-semibold">Date created:</span> {{ quiz.createDate }}</p>
                            </div>
                        </div>
                        <div v-else-if="quizOpenStates[subject] && !getQuiz(subject, student.grade).length" class="bg-red-300 shadow-lg p-2 rounded">
                            No quizes for this subject
                        </div>
                        <div>
                            <div class="flex flex-row justify-start items-center gap-5">
                            <h3 class="">{{ subject }} Files</h3>
                            <font-awesome-icon :icon="isQuizOpen && getQuiz(subject, student.grade) ? 'minus' : 'plus'" :class="isQuizOpen && getQuiz(subject, student.grade) ?'text-red-600' : 'text-green-600'"/>
                        </div>
                            <div v-for="(file , index) in getFile(student.subject, student.grade)">
                                {{ file.title }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
    <div v-else>
        No student found
    </div>
</template>

<script setup>
    const props = defineProps(['Ids'])
    import { useStudentData } from '@/stores/studentData';
    import { useQuiz } from '@/stores/quizData';
    import { useQuizGrades } from '@/stores/quizGrades';
    import { useFilData } from '@/stores/fileData';
    import { reactive } from 'vue';
    import { ref } from 'vue';

    const studentData = useStudentData()
    const quizGrades = useQuizGrades()
    const fileData = useFilData()
    const quizData = useQuiz()
    const quizOpenStates = reactive({})
    const subjectOpenStates = reactive({})
    const gradeOpenStates = reactive({})

    const students = studentData.students.filter(
        (student) => props.Ids.includes(student.id)
    )

    function getQuiz(subject, grade){

        const quiz = quizData.quizes.filter(
            (quiz) => quiz.subject === subject && quiz.grade === grade
        )

        return quiz
    }

    function getQuizGrades(studentId, quizId){

        const quiz = quizGrades.quizGrades.filter(
            (quiz) => quiz.studentId === studentId && quiz.quizId === quizId
        )

        return quiz
    }

    function getFile(subject, grade){

        const file = fileData.files.filter(
            (file) => file.selectedSubjects.includes(subject) && file.selectedClasses.includes(grade)
        )

        return file
    }

    function getTotal(array) {
        return array.reduce((sum, element) => sum + element, 0);
    }

    function toggleQuizes(subject) {
        quizOpenStates[subject] = !quizOpenStates[subject];
    }

    function toggleSubjects(subject, grade) {
        const key = `${subject}-${grade}`;
        subjectOpenStates[key] = !subjectOpenStates[key];
    }

</script>