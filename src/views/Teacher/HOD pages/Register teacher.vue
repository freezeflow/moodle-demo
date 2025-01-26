<template>
    <teacherNav class="fixed z-50"/>
    <div class="w-full h-screen flex flex-col justify-center items-center gap-7">
        <div>
            <h2 class="text-2xl">{{formHeading}}</h2>
            <error 
            :error-message="errorMsg"
            v-if="errorMsg"/>
            <successMessage class="mt-1"
            :success-message="successMsg"
            v-if="successMsg"/>
        </div>
        <form class="flex flex-col w-full justify-center items-center gap-5" @submit.prevent>
            <div v-if="!next" class="flex flex-col w-full justify-center items-center gap-5">
                <input v-model="name" type="text" name="" id="" placeholder="Name" class="w-3/5 h-8 border border-blue-600 rounded pl-2">
                <input v-model="surname" type="text" name="" id="" placeholder="Surname" class="w-3/5 h-8 border border-blue-600 rounded pl-2">
                <input v-model="email" type="text" name="" id="" placeholder="Email" class="w-3/5 h-8 border border-blue-600 rounded pl-2">
                <input v-model="mobileNumber" type="text" name="" id="" placeholder="Mobile number" class="w-3/5 h-8 border border-blue-600 rounded pl-2">
            </div>
            <div v-if="next" class="flex flex-col w-full justify-center items-center gap-5">
                <div class="w-full flex flex-col justify-center items-center">
                    <p class="w-3/5 font-semibold">Select Grade:</p>
                    <select v-model="selectedClasses" name="" id=""
                        class="border border-blue-600 rounded h-8 w-3/5 cursor-pointer">
                    <option
                        v-for="option in constants.grades.value"
                        :key="option"
                        :value="option">
                        {{ option }}
                    </option>
                    </select>
                </div>
                
                
                <div class="w-full flex flex-col justify-center items-center">
                    <p class="w-3/5 font-semibold">Select Subject:</p>
                    <select v-model="selectedSubjects" name="" id=""
                        class="border border-blue-600 rounded h-8 w-3/5 cursor-pointer">
                    <option
                        v-for="option in constants.subjectOptions.value"
                        :key="option"
                        :value="option">
                        {{ option }}
                    </option>
                    </select>
                </div>
            
            </div>

            <div v-if="next" class="w-3/5 flex flex-col gap-2">
                <div class="flex flex-row gap-2" v-for="(assignedRole, index) in assignedRoles"
                :key="index">
                    <p>{{ assignedRole }}</p>
                    <button @click="removeRole(index)"><font-awesome-icon icon="xmark-circle" class="text-xs text-red-700"/></button>
                </div>
            </div>
            
            <div v-if="!next" class="w-3/5 flex max-md:flex-col max-md:gap-5 flex-row justify-between">
                <button class="w-full h-8 rounded text-white bg-blue-600 max-md:w-full" @click="handleNext()">Next</button>
            </div>
            <div v-if="next" class="w-3/5 flex max-md:flex-col max-md:gap-5 flex-row justify-between">
                <button class="w-full h-8 rounded text-white bg-blue-600 max-md:w-full" @click="handleAssign()">Assign</button>
            </div>
            <div v-if="next" class="w-3/5 flex max-md:flex-col max-md:gap-5 flex-row justify-between">
                <button class="w-1/4 h-8 rounded text-white bg-blue-600 max-md:w-full" @click="handlePrev()">Previous</button>
                <button class="w-1/4 h-8 rounded text-white bg-blue-600 max-md:w-full" @click="handleDone()">Done</button>
            </div>
        </form>
    </div>
</template>

<script setup>
    import teacherNav from '@/components/teacherComponents/teacherNav.vue';
    import error from '@/components/messages/error.vue';
    import successMessage from '@/components/messages/successMessage.vue';
    import { ref } from 'vue';
    import { formUtilities} from '@/utils/formUtilities';
    import { constants } from '@/utils/constants';
    import { useTeacherData } from '@/stores/teacherData';

    let selectedClasses = ref()
    let selectedSubjects = ref()
    let assignedRoles = ref([])
    let name = ref()
    let surname = ref()
    let email = ref()
    let mobileNumber = ref()

    let errorMsg = ref()
    let successMsg = ref()
    let next = ref(false)
    let formHeading = ref('Register teacher details')
    let teacherData = useTeacherData()

    function handleDetails(){

        errorMsg.value = ''
        if(formUtilities.checkEmptyFields(name, surname, email, mobileNumber)){
            errorMsg.value = 'Please fill in all fields'
            return false
        }

        if(!formUtilities.validateEmail(email)){
            errorMsg.value = 'Invalid email'
            return false
        }

        const validMobileNumber = formUtilities.validateMobileNumber(mobileNumber, '081', 10) || formUtilities.validateMobileNumber(mobileNumber, '+26481', 13);
        if(!validMobileNumber){
            errorMsg.value = 'Invalid mobile number'
            console.log(formUtilities.validateMobileNumber(mobileNumber, '+26481', 13))
            return false
        }

        errorMsg.value = ''
        console.log(name.value, surname.value, email.value, mobileNumber.value)
        return true
    }

    function handleNext(){
        if(handleDetails()){
            next.value = true
            formHeading.value = 'Assign to grades and subjects'
        }

    }

    function handlePrev(){
        next.value = false
        formHeading.value = 'Register teacher details'
    }

    function handleAssign(){
        errorMsg.value = ''
        if(formUtilities.checkEmptyFields(selectedClasses, selectedSubjects)){
            errorMsg.value = 'Please fill all fields'
            return
        }

        const combSelections = selectedClasses.value + " - " + selectedSubjects.value
        assignedRoles.value.push(combSelections)
        console.log(assignedRoles.value)
    }

    function removeRole(index) {
        assignedRoles.value.splice(index, 1)
    }

    function handleDone(){

        teacherData.addTeacher(name.value, surname.value, email.value, mobileNumber.value, assignedRoles.value)
        setTimeout(() => {
            successMsg.value = 'Teacher registered';
        }, 3000);
    }
</script>