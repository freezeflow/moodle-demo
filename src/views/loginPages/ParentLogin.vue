<template>
    <main>
        
        <img class="w-10 ml-5 mt-5 absolute" src="/src/assets/images/logo.png" alt="">
        <form @submit.prevent class="w-full h-screen flex flex-col gap-10 justify-center items-center" action="">
            <div class="flex flex-col gap-2 items-center">
                <h1 class="text-xl">Parent/Guardian Login</h1>
                <error v-if="errorMessage" :error-message="errorMessage"/>
            </div>
            <div>
                <input v-model="email" class="border border-blue-600 rounded h-8 w-56 pl-2" type="text" name="email" id="email" placeholder="Email">
            </div>
            <div class="flex flex-row">
                <input v-model="pass" class="border border-blue-600 rounded-l h-8 w-48 pl-2" :type="passType" name="" placeholder="Password">
                <button class="w-8 h-8 bg-blue-600 rounded-r" @click="togglePass"><font-awesome-icon :icon="passIcon" /></button>
            </div>
            <div class="w-60 pl-2">
                <button class="bg-blue-600 w-32 h-8 text-white rounded" type="submit" @click="handleForm">Login</button>
            </div>
            
        </form>
    </main>
</template>

<script setup>
import router from '@/router';
import error from '@/components/messages/error.vue';
import { ref } from 'vue';
import { formUtilities } from '@/utils/formUtilities';
import { useParentData } from '@/stores/parentsData';

let email = ref('')
let pass = ref('')
let errorMessage = ref('')
let passIcon = ref('eye-slash')
let passType = ref('password')

const parentsData = useParentData()

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

    if(formUtilities.checkEmptyFields(email, pass)){
        errorMessage.value = 'There are empty fields'
        return
    }
    
    if(!formUtilities.validateEmail(email)){
        errorMessage.value = 'Invalid email'
        return
    }

    const parent = parentsData.parents.find(
        (parent) => parent.email === email.value && parent.password === pass.value
    );

    if(!parent){
        errorMessage.value = 'User not recognized'
        return
    }else{
        const id = Number(parent.id)
        router.push({name: 'parentDashboard', params: {id}});
    }
    
}
</script>