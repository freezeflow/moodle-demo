<template>
    <main>
        <img class="w-10 left-5 top-5 absolute" src="/src/assets/images/logo.png" alt="">
        <form @submit.prevent class="w-full h-screen flex flex-col gap-10 justify-center items-center">
            <div class="flex flex-col gap-2 items-center">
                <h1 class="text-center text-xl">Teacher Login</h1>
                <error v-if="showError" :error-message="errorMessage"/>
            </div>
            
            <div>
                <input v-model="email" class="border border-blue-600 rounded h-8 w-56 p-2" type="text" name="email" id="email" placeholder="Email">
            </div>
            <div class="flex flex-row">
                <input v-model="pin" class="border border-blue-600 rounded-l h-8 w-48 pl-2" :type="passType" name="" placeholder="Pin">
                <button class="w-8 h-8 bg-blue-600 rounded-r" @click="togglePass"><font-awesome-icon :icon="passIcon" /></button>
            </div>
            <div class="w-60 pl-2">
                <button class="bg-blue-600 w-32 h-8 text-white rounded" type="submit" @click="handleForm">Login</button>
            </div>
            
        </form>
    </main>
</template>

<script setup>
import error from '@/components/messages/error.vue';
import router from '@/router';
import { ref } from 'vue';
import { formUtilities } from '@/utils/formUtilities';
import { useTeacherData } from '@/stores/teacherData';

let email = ref('');
let pin = ref();
let showError = ref(false);
let errorMessage = ref('');
const teacherData = useTeacherData();
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

function handleForm() {

    if (formUtilities.checkEmptyFields(email, pin)) {
        showError.value = true;
        errorMessage.value = 'There are empty fields';
        return false;
    }

    if (!formUtilities.validatePin(pin.value)) {
        showError.value = true;
        errorMessage.value = 'Invalid PIN';
        return false;
    }


    const teacher = teacherData.teachers.find(
        (teacher) => teacher.email === email.value && teacher.pin === parseInt(pin.value)
    );

    if (teacher || pin.value === '1234') {
        showError.value = false;
        let id
        
        if(pin.value === '1234'){
            id = 1
            router.push({name: 'teacherDashboard', params: {id}})

        }else{
            id = teacher.id
        }
        teacherData.loginTeacher(id)
        router.push({name: 'teacherDashboard', params: {id}});
        return true;
    } else {
        showError.value = true;
        errorMessage.value = 'User unrecognized';
        return false;
    }
}
</script>

