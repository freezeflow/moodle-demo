<template>
    <main>
        
        <img class="w-10 ml-5 mt-5 absolute" src="/src/assets/images/logo.png" alt="">
        <form @submit.prevent class="w-full h-screen flex flex-col gap-8 justify-center items-center" action="">
            <div class="flex flex-col items-center gap-2">
                <h1 class="text-xl">Student Login</h1>
                <error 
                :error-message="errorMessage"
                v-if="errorMessage"/>
            </div>
            <div>
                <input v-model="surname" class="border border-blue-600 rounded h-8 w-56 pl-2" type="text" name="surname" id="surname" placeholder="Surname">
            </div>
            <div class="flex flex-row">
                <input v-model="pin" class="border border-blue-600 rounded-l h-8 w-48 pl-2" :type="passType" name="" placeholder="Pin">
                <button class="w-8 h-8 bg-blue-600 rounded-r" @click="togglePass"><font-awesome-icon :icon="passIcon" /></button>
            </div>
            <div class="w-60 pl-2">
                <button class="bg-blue-600 w-56 h-8 text-white rounded" type="submit" @click="handleForm">Login</button>
            </div>
        </form>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import { formUtilities } from '@/utils/formUtilities';
import { useStudentData } from '@/stores/studentData';
import error from '@/components/messages/error.vue';
import router from '@/router';

let surname = ref('')
let pin = ref('')
let errorMessage = ref('')
let studentData = useStudentData()
let passIcon = ref('eye-slash')
let passType = ref('password')

function togglePass(){
    if(passIcon.value === 'eye-slash' && passType.value === 'password'){
        passIcon.value = 'eye'
        passType.value = 'text'
    }else{
        passIcon.value = 'eye-slash'
        passType.value = 'password'
    }
}

function handleForm(){

    if(formUtilities.checkEmptyFields(surname, pin)){
        errorMessage.value = 'There are empty fields'
        return
    }
    
    if(!formUtilities.validatePin(pin.value)){
        errorMessage.value = 'Invalid pin'
        return
    }

    const student = studentData.students.find(
        (student) => student.surname === surname.value && student.pin === parseInt(pin.value)
    );

    if (student) {
        const id = student.id
        router.push({name: 'studentDashboard', params: {id}});
    } else {
        errorMessage.value = 'User unrecognized';
        return
    }
}
</script>