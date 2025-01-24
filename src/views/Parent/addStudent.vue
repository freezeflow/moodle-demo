<template>
    <back 
    :link="'parentDashboard'"
    :id="id"
    class="fixed top-3 left-3"/>

    <div class="w-full h-screen flex flex-col gap-5 justify-center items-center">
        <div class="flex flex-col justify-center items-center gap-2">
            <h1 class="text-xl">Register student</h1>
            <error 
            :error-message="errorMsg"
            v-if="errorMsg"/>
            <successMessage 
            :success-message="successMsg"
            v-if="successMsg"/>
        </div>
        <form action="" @submit.prevent class="w-2/5 max-sm:w-4/5 flex flex-col gap-5">
            <div>
                <label for="">Student pin:</label>
                <input type="number" v-model="pin" class="w-full h-8 pl-2 border border-blue-600 rounded">
            </div>
            <button class="w-full h-8 bg-blue-950 text-white rounded" @click="handleLookUp">Look up student</button>
            <div>
                <h1 class="text-lg">Student info:</h1>
                <div v-if="student">
                    <p> <span class="font-semibold">Name:</span> {{ student.name }} {{ student.surname }}</p>
                    <p> <span class="font-semibold">Grade:</span> {{ student.grade }}{{ student.classes }}</p>
                </div>
            </div>
            <button class="w-full h-8 bg-blue-600 text-white rounded" @click="handleConfirm">Confirm student</button>
        </form>
    </div>
</template>

<script setup>
    import back from '@/components/parentComponent/back.vue';
    import error from '@/components/messages/error.vue';
    import successMessage from '@/components/messages/successMessage.vue';
    import { useRoute, useRouter } from 'vue-router';
    import { useParentData } from '@/stores/parentsData';
    import { useStudentData } from '@/stores/studentData';
    import { useParentSudentData } from '@/stores/parentStudentData';
    import { formUtilities } from '@/utils/formUtilities';
    import { ref } from 'vue';

    const parentsData = useParentData()
    const studentData = useStudentData()
    const parentStudentData = useParentSudentData()

    const route = useRoute();
    const router = useRouter();
    const id = Number(route.params.id);

    let student = ref()
    let pin = ref()
    let errorMsg = ref('')
    let successMsg = ref('')

    function handleLookUp(){
        if(formUtilities.checkEmptyFields(pin.value)){
            errorMsg.value = "Please enter a student's pin"
            return
        }

        student.value = studentData.students.find(
            (student) => student.pin === Number(pin.value)
        );

        if(!student.value){
            errorMsg.value = 'No student with that pin'
            return
        }

        errorMsg.value = ''
    }

    function handleConfirm(){
        student.value = studentData.students.find(
            (student) => student.pin === Number(pin.value)
        );

        if(!student.value){
            errorMsg.value = 'No student with that pin'
            return
        }

        errorMsg.value = ''
        parentStudentData.addparentSudent(id, student.value.id)
        successMsg.value = 'Student saved'
        console.log(student.value.id, id)

    }
</script>