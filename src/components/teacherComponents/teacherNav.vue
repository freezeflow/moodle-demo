<template>
    <div class="w-full h-12 flex flex-col">
        <nav class="m-0 h-screen min-h-12 w-full shadow-xl bg-blue-950 max-sm:px-2.5 px-6 flex flex-row items-center">
            <div class="bg-white w-36 h-4/5 max-sm:w-2/4 max-sm:max-w-24 max-sm:h-7 max-sm:rounded-lg rounded-xl flex items-center max-sm:gap-3 justify-between">
                <img class="w-8 max-sm:max-w-6 ml-1" src="/src/assets/images/logo.png" alt="">
                <div class="flex flex-col gap-2 max-sm:gap-1 cursor-pointer mr-2" @click="toggleNav()">
                    <span class="w-10 max-sm:w-8 h-0.5 bg-blue-600"></span>
                    <span :class="span1" class="transition-all h-0.5 bg-blue-600"></span>
                    <span :class="span2" class="transition-all h-0.5 bg-blue-600"></span>
                </div>
            </div>
            <div class="w-full flex justify-end">
                <ul class="flex flex-row-reverse max-sm:w-4/5 gap-16 max-sm:gap-5 max-sm:items-center">
                    <li @click="logout" class="cursor-pointer h-10 w-16 max-sm:w-1/4 max-sm:max-w-14 max-sm:h-7 bg-white text-lg max-sm:text-sm flex justify-center items-center rounded-xl max-sm:rounded-lg">
                        <font-awesome-icon icon="sign-out" />
                    </li>
                    <li class="h-10 w-64 max-sm:h-7 max-sm:w-2/3 bg-white text-lg max-sm:text-sm flex justify-center items-center rounded-xl max-sm:rounded-lg" @click="togglePanel">
                        <div class="cursor-pointer w-1/4 text-center" @click="console.log('Timetable')">
                            <font-awesome-icon icon="table" />
                        </div>
                        <div class="cursor-pointer w-1/4 text-center border border-y-0 border-black" @click="panelMode = 'Messages'">
                            <font-awesome-icon icon="message" />
                        </div>
                        <div class="cursor-pointer w-1/4 text-center border border-y-0 border-l-0 border-black" @click="panelMode = 'Lesson plans'">
                            <font-awesome-icon icon="clipboard-list" />
                        </div>
                        <div  class="cursor-pointer w-1/4 text-center" @click="panelMode = 'Profile'">
                            <font-awesome-icon icon="user" />
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="w-full">
            <secondTeacherNav
            :changeNav="changeNav"
            v-if="changeNav === 'translate-x-0'"
            />
            <teacherPanel
            @close-card="closePanel"
            :changePosition="changePosition"
            :nav-mode="panelMode"
            v-if="changePosition === '-translate-x-0'"/>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useTeacherData } from '@/stores/teacherData';
import secondTeacherNav from './secondTeacherNav.vue';
import teacherPanel from './teacherPanel.vue';
import router from '@/router';

let span1 = ref('w-5 max-sm:w-1/2')
let span2 = ref('w-2.5 max-sm:w-1/4')
let changeNav = ref('-translate-x-56')
let changePosition = ref('-translate-x-full')
let panelMode = ref('')
const route = useRoute();
const id = Number(route.params.id);
const teacherData = useTeacherData();

    function toggleNav(){
        if(changeNav.value === '-translate-x-56'){
            span1.value = 'w-full'
            span2.value = 'w-full'
            changeNav.value = 'translate-x-0'
            changePosition.value = '-translate-x-full'
        }else{
            span1.value = 'w-5'
            span2.value = 'w-2.5'
            changeNav.value = '-translate-x-56'
        }
    }

    function togglePanel(){
        if(changePosition.value === '-translate-x-full'){
            changeNav.value = 'translate-x-56'
            changePosition.value = '-translate-x-0'
            span1.value = 'w-5 max-sm:w-1/2'
            span2.value = 'w-2.5 max-sm:w-1/4'
        }
    }

    function logout(){
        teacherData.logoutTeacher(id)
        router.push('/')
    }

    function closePanel(){
        changePosition.value = '-translate-x-full'
    }
</script>