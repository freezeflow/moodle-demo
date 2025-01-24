<template>
   <backComponent 
    link="studentSubjects"
    :id="id"
    class="absolute top-2 left-2"/>
    <div class="w-full h-screen flex flex-col gap-10 items-center pt-10 pb-5">
        <div class="flex flex-col gap-2">
            <h1 class="text-xl text-center">{{ quiz.title }}</h1>
            <error 
            v-if="errorMsg"
            :error-message="errorMsg"/>
            <SuccessMessage
            v-if="successMsg"
            :success-message="successMsg"/>
        </div>
        <form action="" @submit.prevent class="w-full flex flex-col gap-5 justify-center items-center">
            <div v-for="(question, index) in quiz.questions"
            class="w-2/5 max-md:w-4/5 border border-blue-600 border-x-0 border-t-0 flex flex-col gap-3 pb-2">
                <p class="text-lg rounded">{{ question }}?</p>
                <input v-model="answers[index]" type="text" name="" placeholder="Answer" class="w-full pl-2 border border-gray-400 rounded">
                
            </div>
            <button @click="submitQuiz" class="w-2/5 max-md:w-4/5 bg-blue-600 rounded text-white">Submit answers</button>
        </form>
    </div>
</template>

<script setup>
    import backComponent from '@/components/teacherComponents/backComponent.vue';
    import error from '@/components/messages/error.vue';
    import SuccessMessage from '@/components/messages/successMessage.vue';
    import { useStudentData } from '@/stores/studentData';
    import { useQuiz } from '@/stores/quizData';
    import { useQuizGrades } from '@/stores/quizGrades';
    import { useRoute, useRouter } from 'vue-router';
    import { ref } from 'vue';
    
    const studentData = useStudentData()
    const quizData = useQuiz()
    const quizGrades = useQuizGrades()

    const route = useRoute();
    const router = useRouter();
    const id = Number(route.params.id);
    const quizId = Number(route.params.quizId);
    
    let errorMsg = ref()
    let successMsg = ref()

    const quiz = quizData.quizes.find(
        (quiz) => quiz.id === quizId
    );

    let answers = ref([])
    answers.value = Array(quiz.questions.length).fill('');
    function submitQuiz() {
        const quizQuestions = quiz.questions;

        if (answers.value.length !== quizQuestions.length) {
            console.error('Error: Please answer all the questions.');
            errorMsg.value = 'You must answer all the questions before submitting.';
            successMsg.value = '';
            return;
        }

        if (answers.value.some((answer) => !answer.trim())) {
            console.error('Error: Some answers are empty.');
            errorMsg.value = 'All answers must be filled out before submitting.';
            successMsg.value = '';
            return;
        }

        const studentId = quizGrades.quizGrades.find(
            (quiz) => quiz.studentId === id
        );

        if(studentId){
            errorMsg.value = 'Cannot redo quiz';
            successMsg.value = ''
            return
        }

        const score = answers.value.reduce((acc, answer, index) => {
            return acc + (answer.trim().toLowerCase() === quiz.answers[index].toLowerCase() ? Number(quiz.points[index]) : 0);
        }, 0);

        successMsg.value = `You got ${score} out of ${quiz.points.reduce((sum, element) => sum + element, 0)}.`;

        console.log('Done', answers.value.length, answers.value);
        
        quizGrades.addGrades(quiz.teacherId, id, quizId, score)
        errorMsg.value = '';
    }

</script>