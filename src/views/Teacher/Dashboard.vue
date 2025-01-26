<template>
    <teacherNav class="fixed z-50"></teacherNav>
    <div class="w-full h-screen flex flex-col justify-center items-center gap-8">
        <h1 class="text-2xl max-sm:text-xl">Welcome back {{teacher? teacher.surname : 'Gaweseb'}}</h1>
        <div class="grid grid-cols-4 max-sm:grid-cols-2 max-sm:grid-rows-3 grid-rows-2 max-sm:gap-5 gap-10">
            
            <div @click="redirectTo('activities')" class="flex flex-col justify-center items-center cursor-pointer">
                <div class="w-24 h-24 max-sm:w-3/5 max-sm:h-16 rounded-xl bg-[#C3861B] flex justify-center items-center">
                    <div class="bg-white w-4/6 h-4/6 flex justify-center items-center text-2xl max-sm:text-lg rounded-lg"><font-awesome-icon icon="file-pen" /></div>
                </div>
                <p class="">Create activities</p>
            </div>
            
            <div @click="redirectTo('teacherStudentSettings')" class="flex flex-col justify-center items-center cursor-pointer">
                <div class="w-24 h-24 max-sm:w-3/5 max-sm:h-16 rounded-xl bg-[#C3861B] flex justify-center items-center">
                    <div class="bg-white w-4/6 h-4/6 flex flex-col justify-center items-center text-2xl max-sm:text-lg rounded-lg">
                        <font-awesome-icon icon="graduation-cap" class="text-xs rotate-5" /><font-awesome-icon icon="user-pen" />
                    </div>
                </div>
                <p class="">Student settings</p>
            </div>

            <div @click="redirectTo('teacherSettings')" class="flex flex-col justify-center items-center cursor-pointer">
                <div class="w-24 h-24 max-sm:w-3/5 max-sm:h-16 rounded-xl bg-[#C3861B] flex justify-center items-center">
                    <div class="bg-white w-4/6 h-4/6 flex justify-center items-center text-2xl max-sm:text-lg rounded-lg"><div class="">
                        <font-awesome-icon icon="chalkboard-teacher" /><font-awesome-icon icon="cog" class="max-sm:text-xs text-lg translate-y-1" />
                    </div></div>
                </div>
                <p class="">Teacher settings</p>
            </div>

            <div @click="redirectTo('teacherEditProfile')" class="flex flex-col justify-center items-center cursor-pointer">
                <div class="w-24 h-24 max-sm:w-3/5 max-sm:h-16 rounded-xl bg-[#C3861B] flex justify-center items-center">
                    <div class="bg-white w-4/6 h-4/6 flex justify-center items-center text-2xl max-sm:text-lg rounded-lg"><font-awesome-icon icon="user-edit" /></div>
                </div>
                <p class="">Subjects</p>
            </div>

            <div @click="redirectTo('teacherLessonPlanner')" class="flex flex-col justify-center items-center cursor-pointer">
                <div class="w-24 h-24 max-sm:w-3/5 max-sm:h-16 rounded-xl bg-[#C3861B] flex justify-center items-center">
                    <div class="bg-white w-4/6 h-4/6 flex justify-center items-center text-2xl max-sm:text-lg rounded-lg"><font-awesome-icon icon="clipboard-list" /></div>
                </div>
                <p class="">Lesson planner</p>
            </div>

            <div @click="redirectTo('teacherCreateNotice')" class="flex flex-col justify-center items-center cursor-pointer">
                <div class="w-24 h-24 max-sm:w-3/5 max-sm:h-16 rounded-xl bg-[#C3861B] flex justify-center items-center">
                    <div class="bg-white w-4/6 h-4/6 flex justify-center items-center text-2xl max-sm:text-lg rounded-lg"><font-awesome-icon icon="bullhorn" /></div>
                </div>
                <p class="">Create notice</p>
            </div>

            

            <div @click="redirectTo('creationPanel')"  class="flex flex-col justify-center items-center cursor-pointer">
                <div class="w-24 h-24 max-sm:w-3/5 max-sm:h-16 rounded-xl bg-[#C3861B] flex justify-center items-center">
                    <div class="bg-white w-4/6 h-4/6 flex justify-center items-center text-2xl max-sm:text-lg rounded-lg"><font-awesome-icon icon="plus-circle" /></div>
                </div>
                <p class="">Creation panel</p>
            </div>

        </div>
    </div>
</template>

<script setup>
import teacherNav from '@/components/teacherComponents/teacherNav.vue';
import { useTeacherData } from '@/stores/teacherData';
import { useRoute, useRouter } from 'vue-router';
const teacherData = useTeacherData();

const route = useRoute();
const router = useRouter();
const id = Number(route.params.id);

const teacher = teacherData.loggedinTeachers.find(
    (teacher) => teacher.id === id
);

function redirectTo(link){
    router.push({name: link, params: {id}})
}
</script>