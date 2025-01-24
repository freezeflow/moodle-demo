<template>
    <teacherNav 
    class="fixed z-50"/>
    <div class="w-full h-screen flex flex-col justify-center items-center max-md:pt-20 gap-8">
        <h1 class="text-4xl max-md:text-2xl underline m-0">Student settings</h1>
        <div class="w-full flex flex-row max-md:flex-col justify-center items-center max-sm:gap-6 max-md:gap-10 gap-28">
            <div @click="redirectTo('teacherRegisterStudents')" class="border w-48 max-md:w-36 max-md:h-36 h-48 bg-blue-600 rounded-lg flex max-sm:flex-col gap-2 justify-center items-center cursor-pointer">
                <div class="bg-white h-4/5 w-4/5 flex flex-col gap-4 justify-center items-center rounded shadow-lg" to="/teacherRegisterStudents">
                    <font-awesome-icon icon="user-plus" class="text-5xl max-md:text-2xl" />
                    <p class="text-center">Add students</p>
                </div>
            </div>
            <div @click="" class="border opacity-30 w-48 max-md:w-36 max-md:h-36 h-48 bg-blue-600 rounded-lg flex justify-center items-center cursor-pointer">
                <div class="bg-white h-4/5 w-4/5 flex flex-col gap-4 justify-center items-center rounded shadow-lg" to="/gradeStudents">
                    <font-awesome-icon icon="chalkboard-user" class="text-5xl max-md:text-2xl" />
                    <p class="text-center">Grade students</p>
                </div>
            </div>
            <div @click="redirectTo('findStudent')" class="border w-48 max-md:w-36 max-md:h-36 h-48 bg-blue-600 rounded-lg flex justify-center items-center cursor-pointer">
                <div class="bg-white h-4/5 w-4/5 flex flex-col gap-4 justify-center items-center rounded shadow-lg" to="/editStudent">
                    <font-awesome-icon icon="pen" class="text-5xl max-md:text-2xl" />
                    <p class="text-center">Edit students</p>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script setup>
import teacherNav from '@/components/teacherComponents/teacherNav.vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const id = Number(route.params.id);

function checkDeviceWidth(width){
    if(window.innerWidth < width){
        return true
    }

    return false
}

function redirectTo(link){
    router.push({name: link, params: {id}})
}
</script>