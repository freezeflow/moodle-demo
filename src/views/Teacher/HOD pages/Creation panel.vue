<template>
    <teacherNav 
    class="fixed z-50"/>
    <div v-if="!panelMode" class="w-full h-screen flex flex-col gap-12 justify-center items-center">
        <h1 class="text-2xl">Creation panel</h1>
        <div @click="panelMode = 'subject'"><button class="bg-blue-600 w-48 h-10 text-white rounded-lg cursor-pointer">Add subjects</button></div>
        <div @click=""><button class="bg-blue-600 opacity-30 w-48 h-10 text-white rounded-lg cursor-pointer">Subject settings</button></div>
        <div @click="panelMode = 'grades'"><button class="bg-blue-600 w-48 h-10 text-white rounded-lg cursor-pointer">Add grades</button></div>
        <div @click=""><button class="bg-blue-600 opacity-30 w-48 h-10 text-white rounded-lg cursor-pointer">Add classes</button></div>
    </div>
    <div v-else class="w-full h-screen">
        <button @click="panelMode = null" class="bg-red-600 text-white w-10 h-10 rounded-full absolute top-20 left-5">
            <font-awesome-icon icon="arrow-left" />
        </button>
        <AddSubjects 
        v-if="panelMode === 'subject'"/>
        <subjectSettings 
        v-if="panelMode === 'subjectSettings'"/>
        <AddGrades 
        v-if="panelMode === 'grades'"/>
        <AddClasses
        v-if="panelMode === 'classes'"/>
    </div>
</template>

<script setup>
    import teacherNav from '@/components/teacherComponents/teacherNav.vue';
    import AddSubjects from './settings/Add subjects.vue';
    import subjectSettings from './settings/subjectSettings.vue';
    import AddGrades from './settings/Add grades.vue';
    import AddClasses from './settings/Add classes.vue';

    import { ref } from 'vue';

    let panelMode = ref()
</script>