<template>
    <div class="w-full pt-2 max-md:pt-16">
        <search 
        />
        <div v-if="!chatOpen" class="w-full pt-6 px-2 flex flex-col gap-2">
            <div class="bg-gray-200 text-center">
                <h4>Teachers</h4>
            </div>
            <div v-if="teacherData.teachers"
            v-for="teacher in teacherData.teachers"
            :key="teacher.id"
            class="text-white bg-blue-700 h-8 flex flex-row items-center pl-2 gap-2 cursor-pointer"
            @click="openChat(teacher.id)">
                <div class="w-6 h-6 bg-white rounded-full"></div>
                <h2 class="max-sm:text-sm">{{teacher.name}} {{ teacher.surname }}....</h2>
            </div>
            <div v-else class="w-full text-center text-white">
                No users found
            </div>
        </div>
        <chatWindow
        :rid ="rid"
        :sid = "id"
        @closeWindow="closeChat"
        v-else/>
    </div>
</template>

<script setup>
    import search from '../search.vue';
    import chatWindow from './chat window.vue';
    import { useTeacherData } from '@/stores/teacherData';
    import { useRoute } from 'vue-router';
    import { ref } from 'vue';

    const route = useRoute();
    const teacherData = useTeacherData()
    const id = Number(route.params.id);
    let chatOpen = ref(false)
    let rid = ref()

    function openChat(id){
        rid.value = Number(id)
        chatOpen.value = true
    }

    function closeChat(){
        chatOpen.value = false
    }
</script>