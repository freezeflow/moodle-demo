<template>
    <teacherNav 
    class="fixed"/>
    <div class="w-full h-screen flex flex-col gap-5 justify-center items-center">
        <div class="mt-16">
            <h1 class="text-2xl text-center">Register students</h1>
            <error v-if="hasError"
            :error-message="errorMessage"
             class="mt-2"/>
            <successMessage v-if="isSuccess"
            success-message="Student profile successfully created"
            class="mt-2"/>
        </div>
        <form action="" @submit.prevent class="flex flex-col w-5/12 max-md:w-4/5 gap-3">
            <input v-model="name" type="text" name="" id="" placeholder="Student name" class="border border-blue-600 rounded h-8 pl-2">
            <input v-model="surname" type="text" name="" id="" placeholder="Student surname" class="border border-blue-600 rounded h-8 pl-2">
            <div class="w-full flex flex-row justify-between">
                <select v-model="grade" name="" id=""
                    class="border border-blue-600 rounded h-8 cursor-pointer w-2/5">
                <option disabled value="" selected hidden>
                    Select Grade
                </option>
                <option
                    v-for="option in constants.grades.value"
                    :key="option"
                    :value="option">
                    {{ option }}
                </option>
                </select>

                <select v-model="selectedClass" name="" id=""
                    class="border border-blue-600 rounded h-8 cursor-pointer w-2/5">
                <option disabled value="" selected hidden>
                    Select Class
                </option>
                <option
                    v-for="option in constants.classes.value"
                    :key="option"
                    :value="option">
                    {{ option }}
                </option>
                </select>
            </div>
            
            <dropdown 
            :options="constants.subjectOptions.value"
            placeholder="Select student subjects"
            v-model="selectedSubjects"
            options-width="w-4/5"
            class="w-full"/>
            <div class="w-full flex flex-row text-white">
                <button type="submit" class="bg-blue-600 w-1/2 h-8 border-0 border-r-2 border-white rounded-l-md " @click="handleDone">Done</button>
                <button class="bg-blue-600 w-1/2 h-8 border-0 border-l-2 border-white rounded-r-md" @click="handleAddMore">Add more</button>
            </div>
        </form>
    </div>
</template>

<script setup>
    import teacherNav from '@/components/teacherComponents/teacherNav.vue';
    import error from '@/components/messages/error.vue';
    import successMessage from '@/components/messages/successMessage.vue';
    import { useStudentData } from '@/stores/studentData';
    import dropdown from '@/components/teacherComponents/dropdown.vue';
    import { formUtilities } from '@/utils/formUtilities';
    import { constants } from '@/utils/constants';
    import { ref } from 'vue';

    const studentData = useStudentData();

    let hasError = ref(false)
    let isSuccess = ref(false)
    let errorMessage = ref('')

    let name = ref('')
    let surname = ref('')
    let grade = ref('')
    let selectedClass = ref('')
    let selectedSubjects = ref([])

    function handleForm(){
        if(formUtilities.checkEmptyFields(name, surname, grade, selectedClass) && formUtilities.checkEmptyFields(selectedSubjects)){
            hasError.value = true
            errorMessage.value = 'Please fill all fields'
        }else{
            hasError.value = false
            isSuccess.value = true
            studentData.addStudent(name.value, surname.value, grade.value, selectedClass.value, selectedSubjects.value)
            setTimeout(() => {
                isSuccess.value = false;
            }, 3000);
            resetForm()
        }
    }

    function resetForm() {
        name.value = '';
        surname.value = '';
        grade.value = '';
        selectedClass.value = ''
        selectedSubjects.value = [];
    }

    function handleDone() {
        handleForm();
    }

    function handleAddMore() {
        handleForm();
        resetForm();
    }
</script>