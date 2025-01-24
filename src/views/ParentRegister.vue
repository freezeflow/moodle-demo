<template>
    <main>
        
        <img class="w-10 ml-5 mt-5 absolute" src="../assets/images/logo.png" alt="">
        <form @submit.prevent class="w-full h-screen flex flex-col gap-5 justify-center items-center" action="">
            <div class="flex flex-col gap-2 items-center">
                <h1 class="text-xl">Parent/Guardian Sign up</h1>
                <error v-if="errorMessage" :error-message="errorMessage"/>
            </div>
            
            <div>
                <input v-model="name" class="border border-blue-600 rounded h-8 w-56 pl-2" type="text" name="name" id="name" placeholder="Name">
            </div>
            <div>
                <input v-model="surname" class="border border-blue-600 rounded h-8 w-56 pl-2" type="text" name="surname" id="surname" placeholder="Surname">
            </div>
            <div>
                <input v-model="email" class="border border-blue-600 rounded h-8 w-56 pl-2" type="text" name="email" id="email" placeholder="Email">
            </div>
            <div>
                <input v-model="contact" class="border border-blue-600 rounded h-8 w-56 pl-2" type="text" name="contact" id="contact" placeholder="Mobile number">
            </div>
            <div class="flex flex-row">
                <input v-model="pass" class="border border-blue-600 rounded-l h-8 w-48 pl-2" :type="passType" name="" placeholder="Password">
                <button class="w-8 h-8 bg-blue-600 rounded-r" @click="togglePass"><font-awesome-icon :icon="passIcon" /></button>
            </div>
            <div class="flex flex-row">
                <input v-model="cPass" class="border border-blue-600 rounded-l h-8 w-48 pl-2" :type="cPassType" name="" placeholder="Confirm password">
                <button class="w-8 h-8 bg-blue-600 rounded-r" @click="toggleCPass"><font-awesome-icon :icon="cPassIcon" /></button>
            </div>
            <div class="w-60 pl-2">
                <button class="bg-blue-600 w-32 h-8 text-white rounded" type="submit" @click="handleForm">Register</button>
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

const parentsData = useParentData()

let name = ref('')
let surname = ref('')
let email = ref('')
let contact = ref('')
let errorMessage = ref('')
let passIcon = ref('eye-slash')
let passType = ref('password')
let cPassIcon = ref('eye-slash')
let cPassType = ref('password')
let pass = ref('')
let cPass = ref('')

function togglePass(){
    if(passIcon.value === 'eye-slash' && passType.value === 'password'){
        passIcon.value = 'eye'
        passType.value = 'text'
    }else{
        passIcon.value = 'eye-slash'
        passType.value = 'password'
    }
}

function toggleCPass(){
    if(cPassIcon.value === 'eye-slash' && cPassType.value === 'password'){
        cPassIcon.value = 'eye'
        cPassType.value = 'text'
    }else{
        cPassIcon.value = 'eye-slash'
        cPassType.value = 'password'
    }
}

function handleForm(){

    if(formUtilities.checkEmptyFields(name, surname, contact, email, pass, cPass)){
        errorMessage.value = 'There are empty fields'
        return
    }
    
    if(!formUtilities.validateEmail(email)){
        errorMessage.value = 'Invalid email'
        return
    }
    
    const validMobileNumber = formUtilities.validateMobileNumber(contact, '081', 10) || formUtilities.validateMobileNumber(contact, '+26481', 13);
    if(!validMobileNumber){
        errorMessage.value = 'Invalid mobile number'
        return
    }

    if(pass.value !== cPass.value){
        errorMessage.value = 'Passwords do not match'
        return
    }

    const oldParent = parentsData.parents.find(
        (parent) => parent.email === email.value || parent.mobileNum === contact.value
    );

    if(oldParent){
        errorMessage.value = 'Parent already registered'
        return
    }

    parentsData.addParent(name.value, surname.value, email.value, contact.value, pass.value)
    const newParent = parentsData.parents.find(
        (parent) => parent.email === email.value && parent.mobileNum === contact.value
    );

    const id = Number(newParent.id)
    router.push({name: 'parentDashboard', params: {id}});
}
</script>