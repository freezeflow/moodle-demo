<template>
    <div class="w-full pt-20 max-md:pt-40 flex flex-col items-center gap-10">
        <div class="flex flex-col items-center gap-3">
            <h2 class="text-xl">Add Grades</h2>
            <error 
            :error-message="errorMsg"
            v-if="errorMsg"/>
            <successMessage
            :success-message="successMsg"
            v-if="successMsg"/>
        </div>
        <form action="" class="w-2/5 max-md:w-4/5 flex flex-col gap-4" @submit.prevent>
            <div class="flex flex-col">
                <label for="">Grade:</label>
                <input v-model="grade" type="number" name="" id="" class="border border-blue-600 w-full h-8 rounded pl-2">
            </div>
            <div class="">
                <div v-for="(grd, index) in grades"
                :key="index" class="flex flex-row gap-3">
                    <p>{{ grd }}</p>
                    <button @click="removeGrade(index)"><font-awesome-icon icon="xmark-circle" class="text-xs text-red-700"/></button>
                </div>
            </div>
            <div class="w-full flex flex-row justify-between text-white">
                <button class="bg-blue-600 w-2/5 h-8 rounded" @click="handleAddMore">Add more</button>
                <button class="bg-blue-600 w-2/5 h-8 rounded" @click="handleSave">Save</button>
            </div>
        </form>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { formUtilities } from '@/utils/formUtilities';
    import { useGradesData } from '@/stores/gradesStore';
    import error from '@/components/messages/error.vue';
    import successMessage from '@/components/messages/successMessage.vue';

    let grade = ref('')
    let grades = ref([])
    let errorMsg = ref('')
    let successMsg = ref('')
    const gradeStore = useGradesData()

    function handleAddMore(){
        if(formUtilities.checkEmptyFields(grade)){
            errorMsg.value = 'Please enter a grade'
            return
        }

        grades.value.push(grade.value)
        grade.value = ''
        console.log(grades.value)
    }

    function removeGrade(index) {
        grades.value.splice(index, 1)
    }

    function handleSave(){
        if(!formUtilities.checkEmptyFields(grade)){
            grades.value.push(grade.value)
            grade.value = ''
        }

        if(formUtilities.checkEmptyFields(grades)){
            errorMsg.value = 'Please enter a grade'
            return
        }

        successMsg.value = 'New grades added'
        const uniqueGrades = [...new Set(grades.value)];
        gradeStore.addGrades(uniqueGrades)

    }
</script>