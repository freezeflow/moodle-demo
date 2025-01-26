<template>
    <nav class="transition-all m-0 bg-blue-600 w-full h-10" id="closeNav">
        <ul  class="flex flex-row justify-start max-md:justify-center gap-4 p-2 text-white">
            <div :class="subjectClass" class="border rounded-lg h-6 w-1/5 max-md:w-1/3 text-center" @click="subjectStyle">
                <p class="cursor-pointer">Subjects</p>
            </div>
            <div :class="noticesClass" class="border rounded-lg h-6 w-1/5 max-md:w-1/3 text-center" @click="noticesStyle">
                <p class="cursor-pointer">Notices</p>
            </div>
        </ul>
    </nav> 
</template>

<script setup>
    import { ref } from 'vue';
    const emit = defineEmits(['subjects', 'notices'])

    let subjectClass = ref('border-blue-200 text-blue-200')
    let noticesClass = ref('border-white')

    function subjectStyle(){
        emit('subjects')
        noticesClass.value = 'border-white'
        subjectClass.value = 'border-blue-200 text-blue-200'
    }

    function noticesStyle(){
        emit('notices')
        subjectClass.value = 'border-white'
        noticesClass.value = 'border-blue-200 text-blue-200'
    }
</script>