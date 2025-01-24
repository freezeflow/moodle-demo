<template>
    <div class="w-full h-12 flex flex-col fixed z-50">
        <nav class="m-0 h-screen min-h-12 w-full shadow-xl bg-blue-950 max-sm:px-2.5 px-6 flex flex-row items-center">
            <div class="bg-white w-36 h-4/5 max-sm:w-2/4 max-sm:max-w-24 max-sm:h-7 max-sm:rounded-lg rounded-xl flex justify-center items-center max-sm:gap-3 gap-7">
                <img class="w-8 max-sm:max-w-6" src="/src/assets/images/logo.png" alt="">
            </div>
            <div class="w-full flex justify-end">
                <ul class="flex flex-row-reverse max-sm:w-4/5 gap-12 max-sm:gap-5 max-sm:items-center">
                    <li @click="logout" class="cursor-pointer h-10 w-16 max-sm:w-1/4 max-sm:max-w-14 max-sm:h-7 bg-white text-lg max-sm:text-sm flex justify-center items-center rounded-xl max-sm:rounded-lg">
                        <font-awesome-icon icon="sign-out" />
                    </li>
                    <li class="h-10 w-44 max-sm:h-7 max-sm:w-2/3 bg-white text-lg max-sm:text-sm flex justify-center items-center rounded-xl max-sm:rounded-lg" @click="togglePanel">
                        <div class="cursor-pointer w-1/3 text-center border border-y-0 border-black" @click="panelMode = 'Messages'">
                            <font-awesome-icon icon="message" />
                        </div>
                        <div class="cursor-pointer w-1/3 text-center border border-y-0 border-l-0 border-black" @click="redirectTo('addStudent')">
                            <font-awesome-icon icon="user-plus" />
                        </div>
                        <div  class="cursor-pointer w-1/3 text-center" @click="panelMode = 'Profile'">
                            <font-awesome-icon icon="user" />
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="w-full">
            <parentPanel
            @close-card="closePanel"
            :changePosition="changePosition"
            :nav-mode="panelMode"
            v-if="changePosition === '-translate-x-0'"/>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useTeacherData } from '@/stores/teacherData';
import parentPanel from './parentPanel.vue';

let changePosition = ref('-translate-x-full')
let panelMode = ref('')
const route = useRoute();
const router = useRouter();
const id = Number(route.params.id);

    function togglePanel(){
        if(changePosition.value === '-translate-x-full'){
            changePosition.value = '-translate-x-0'
        }
    }

    function closePanel(){
        changePosition.value = '-translate-x-full'
    }

    function redirectTo(link){
        router.push({name: link, params: {id}})
    }

    function logout(){
        router.push('/')
    }
</script>