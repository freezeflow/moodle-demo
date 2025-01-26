<template>
    <img class="w-10 ml-5 mt-5 absolute" src="../assets/images/logo.png" alt="">
    <div class="w-full h-screen pt-20 flex flex-col gap-12 justify-center items-center">
        <h1 class="text-2xl">Who's loging in?</h1>
        <RouterLink to="/teacherLogin"><button class="bg-blue-600 w-48 h-10 text-white rounded-lg cursor-pointer">Teacher</button></RouterLink>
        <RouterLink to="/studentLogin"><button class="bg-blue-600 w-48 h-10 text-white rounded-lg cursor-pointer">Student</button></RouterLink>
        <RouterLink to="/parentLogin"><button class="bg-blue-600 w-48 h-10 text-white rounded-lg cursor-pointer">Parent/Guardian</button></RouterLink>
        <RouterLink to="/parentRegister"><button class="w-48 h-10 text-blue-600 rounded-lg cursor-pointer">Sign up as parent/guardian</button></RouterLink>
        <p class="text-gray-400 border border-black border-x-0 border-t-0">
            <span class="font-semibold text-black">Note:</span>
            This is an early demo and some features are disabled due to certain requirements
        </p>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>