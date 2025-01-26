<template>
    <div class="w-full pt-20 max-md:pt-40 flex flex-col items-center gap-10">
        <div class="flex flex-col items-center gap-3">
            <h2 class="text-xl">Add subjects</h2>
            <error 
            :error-message="errorMsg"
            v-if="errorMsg"/>
            <successMessage
            success-message="Subject/s added"
            v-if="successMsg"/>
        </div>
        
        <form action="" class="w-2/5 max-md:w-4/5 flex flex-col gap-4" @submit.prevent>
            <div class="flex flex-col">
                <label for="">Subject:</label>
                <input v-model="subject" type="text" name="" id="" class="border border-blue-600 w-full h-8 rounded pl-2 outline-none">
            </div>
            <div class="">
                <div v-for="(sub, index) in subjects"
                :key="index" class="flex flex-row gap-3">
                    <p>{{ sub }}</p>
                    <button @click="removeSubject(index)"><font-awesome-icon icon="xmark-circle" class="text-xs text-red-700"/></button>
                </div>
            </div>
            <div class="w-full flex flex-row justify-between text-white">
                <button class="bg-blue-600 w-2/5 h-8 rounded" @click="handleAddMore">Add more</button>
                <button class="bg-blue-600 w-2/5 h-8 rounded" @click="handleSave">Done</button>
            </div>
        </form>
    </div>
    
</template>

<script setup>
    import { ref } from 'vue';
    import { formUtilities } from '@/utils/formUtilities';
    import { useSubjectsData } from '@/stores/subjectsStore';
    import error from '@/components/messages/error.vue';
    import successMessage from '@/components/messages/successMessage.vue';

    let subject = ref('')
    let subjects = ref([])
    let errorMsg = ref('')
    let successMsg = ref('')
    const subjectData = useSubjectsData()

    function handleAddMore(){
        if(formUtilities.checkEmptyFields(subject)){
            errorMsg.value = 'Please enter a subject'
            return
        }

        subjects.value.push(subject.value)
        subject.value = ''
        console.log(subjects.value)
    }

    function removeSubject(index) {
        subjects.value.splice(index, 1)
    }

    function handleSave(){
        if(!formUtilities.checkEmptyFields(subject)){
            subjects.value.push(subject.value)
            subject.value = ''
        }

        if(formUtilities.checkEmptyFields(subjects)){
            errorMsg.value = 'Please enter a grade'
            return
        }

        successMsg.value = 'New subjects added'
        const uniqueSubjects = [...new Set(subjects.value)];
        subjectData.addSubjects(uniqueSubjects)

    }
</script>