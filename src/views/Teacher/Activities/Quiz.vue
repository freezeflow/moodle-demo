<template>
    <teacherNav class="fixed z-50" />
    <div class="w-full pt-20">
        <div class="w-full pl-5">
            <backComponent link="activities" :id="id" />
        </div>
        <div class="w-full flex flex-col justify-center items-center gap-4">
            <div class="w-full flex flex-col justify-center items-center gap-2">
                <h2 class="text-2xl text-center">Create <span v-if="quiz.title">{{ quiz.title }}</span> quiz</h2>
                <error :error-message="errorMsg" v-if="errorMsg" />
                <successMessage :success-message="successMsg" v-if="successMsg" />
            </div>
            <form class="w-2/5 max-md:w-4/5 flex flex-col gap-4" @submit.prevent>
                <div v-if="!startQuestions" class="w-full flex flex-col gap-4">
                    <div>
                        Title:
                        <input v-model="quiz.title" type="text" class="border border-blue-600 pl-2 w-full h-8 rounded" />
                    </div>
                    <div>
                        Optional note:
                        <input v-model="quiz.note" type="text" class="border border-blue-600 pl-2 w-full h-8 rounded" />
                    </div>
                    <div class="w-full flex flex-row">
                        <div class="w-1/2 flex flex-col">
                            <label for="">Subjects:</label>
                            <select v-model="quiz.subjects" name="" id=""
                                class="border border-blue-600 rounded h-8 w-4/5 cursor-pointer">
                                <option
                                    v-for="option in uniqueSubjects"
                                    :key="option"
                                    :value="option">
                                    {{ option }}
                                </option>
                            </select> 
                        </div>
                        <div class="w-3/5 flex flex-row">
                            <div class="w-full flex flex-col">
                                <label for="">Grade:</label>
                                <select v-model="quiz.grades" name="" id=""
                                    class="border border-blue-600 rounded h-8 cursor-pointer">
                                    <option
                                        v-for="option in uniqueGrades"
                                        :key="option"
                                        :value="option">
                                        {{ option }}
                                    </option>
                                </select>
                            </div>
                            <div class="w-full flex flex-col">
                                <label for="">Class(optional):</label>
                                <select v-model="quiz.classes" name="" id=""
                                    class="border border-blue-600 rounded h-8 cursor-pointer">
                                    <option
                                        v-for="option in constants.classes.value"
                                        :key="option"
                                        :value="option">
                                        {{ option }}
                                    </option>
                                </select>
                            </div>
                             
                        </div>
                    </div>
                    <div>
                        Enter number of questions:
                        <input v-model="quiz.numOfQuestions" type="number" min="1" class="border border-blue-600 pl-2 w-full h-8 rounded" />
                    </div>
                    <button @click="quizDetails" class="w-full h-8 bg-blue-600 rounded text-white">Start</button>
                </div>
                <div v-else>
                    <div v-for="(question, index) in quiz.questions" :key="index" class="flex flex-col gap-2">
                        <label>Question {{ index + 1 }}</label>
                        <input v-model="quiz.questions[index]" placeholder="Enter question" type="text" class="border border-blue-600 pl-2 w-full h-8 rounded" />
                        <input v-model="quiz.answers[index]" placeholder="Enter answer" type="text" class="border border-blue-600 pl-2 w-full h-8 rounded" />
                        <input v-model="quiz.points[index]" placeholder="Enter points" type="number" min="0" class="border border-blue-600 pl-2 w-full h-8 rounded" />
                    </div>
                    <button @click="handleSubmit" type="submit" class="w-full h-8 bg-green-600 rounded text-white mt-4">Save Quiz</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import teacherNav from '@/components/teacherComponents/teacherNav.vue';
import backComponent from '@/components/teacherComponents/backComponent.vue';
import error from '@/components/messages/error.vue';
import successMessage from '@/components/messages/successMessage.vue';

import { useTeacherData } from '@/stores/teacherData';
import { useQuiz } from '@/stores/quizData';
import { constants } from '@/utils/constants';
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { formUtilities } from '@/utils/formUtilities';

const route = useRoute();
const teacherData = useTeacherData();
const quizData = useQuiz()
const grades = ref([]);
const subjects = ref([]);

const id = Number(route.params.id);
let startQuestions = ref(false);

let errorMsg = ref('');
let successMsg = ref('');
let quiz = ref({
    title: '',
    note: '',
    subjects: '',
    grades: '',
    classes: '',
    numOfQuestions: '',
    questions: [],
    answers: [],
    points: [],
});

const teacher = teacherData.loggedinTeachers.find(
    (teacher) => teacher.id === id
);

teacher.assignedClassesAndSubjects.forEach(item => {
    const [grade, subject] = item.split(" - ");
    grades.value.push(Number(grade));
    subjects.value.push(subject);
});

const uniqueSubjects = [...new Set(subjects.value)];
const uniqueGrades = [...new Set(grades.value)];

function quizDetails() {
    if (formUtilities.checkEmptyFields(quiz.value.title, quiz.value.subjects)) {
        errorMsg.value = 'Please fill out all required fields.';
        console.log(quiz.value.title, quiz.value.grades, quiz.value.subjects)
        return;
    }

    if (!Number.isInteger(Number(quiz.value.numOfQuestions)) || quiz.value.numOfQuestions <= 0) {
        errorMsg.value = 'Please enter a valid number of questions.';
        console.log(quiz.value.numOfQuestions)
        return;
    }

    // Reset error and success messages
    errorMsg.value = '';
    successMsg.value = '';

    quiz.value.questions = Array.from({ length: quiz.value.numOfQuestions }, () => '');
    quiz.value.answers = Array.from({ length: quiz.value.numOfQuestions }, () => '');
    quiz.value.points = Array.from({ length: quiz.value.numOfQuestions }, () => '');
    startQuestions.value = true;
}

function handleSubmit() {
    // Validate form data
    if (quiz.value.questions.includes('') || quiz.value.answers.includes('') || quiz.value.points.includes('')) {
        errorMsg.value = 'All fields must be filled out.';
        return;
    }

    // Save quiz (implement actual saving logic here)
    quizData.addQuiz(
        id, 
        quiz.value.title, 
        quiz.value.note, 
        quiz.value.subjects, 
        quiz.value.grades, 
        quiz.value.classes, 
        quiz.value.numOfQuestions,
        quiz.value.questions, 
        quiz.value.answers, 
        quiz.value.points
    )
    successMsg.value = 'Quiz successfully created!';
    startQuestions.value = false;
    numOfQuestions.value = '';
    quiz.value = { questions: [], answers: [], points: [] };
    console.log(quiz)
}
</script>
