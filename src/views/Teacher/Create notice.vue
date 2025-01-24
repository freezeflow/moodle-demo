<template>
    <teacherNav 
    class="fixed z-50"/>
    <div class="w-full h-screen flex flex-col justify-center items-center gap-5">
        <div class="flex flex-col gap-2 items-center">
            <h2 class="text-2xl">Create notice</h2>
            <error 
            :error-message="errorMsg"
            v-if="errorMsg"/>
            <successMessage 
            :success-message="successMsg"
            v-if="successMsg"/>
        </div>
        <form action="" class="w-full flex flex-col justify-center items-center gap-5" @submit.prevent>
            <input v-model="noticeMessage" type="text" name="" id="" placeholder="Notice message" class="border border-blue-600 w-2/5 max-md:w-4/5 h-8 rounded pl-2">
            <div class="relative border border-blue-600 w-2/5 max-md:w-4/5 h-8 rounded flex items-center pl-2"
                :class="{ 'bg-blue-100': isDragging }"
                @dragover.prevent="formUtilities.handleDragOver"
                @dragleave="formUtilities.handleDragLeave"
                @drop.prevent="onFileDrop">
                <input class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" type="file" name="" id="" @change="onFileSelect">
                <label
                    for="file-upload"
                    class="text-gray-400 cursor-pointer max-sm:text-sm overflow-hidden whitespace-nowrap text-ellipsis"
                >
                    <span v-if="!selectedFile">Drop or click to upload files (optional)</span>
                    <span v-else>{{ selectedFile.name }}</span>
                </label>
            </div>

            <div class="w-2/5 max-md:w-4/5 max-md:mb-14 h-8 flex flex-row max-md:flex-col max-md:gap-5 justify-between">
                <Dropdown
                    class="w-2/5 max-md:w-full"
                    v-model="selectedSubjects"
                    options-width="2/5"
                    :options="uniqueSubjects"
                    placeholder="Subjects (optional)"
                />
                <Dropdown
                    class="w-2/5 max-md:w-full"
                    v-model="selectedClasses"
                    options-width=""
                    :options="uniqueGrades"
                    placeholder="Classes (optional)"
                />
            </div>

            <div class="flex flex-row w-2/5 max-md:w-4/5 max-md:text-sm justify-between">
                <label for="">
                    Email registered parents: <input type="checkbox" v-model="sendEmail" name="" id="">
                </label>

                <label for="">
                    Sms registered parents: <input type="checkbox" v-model="sendSms" name="" id="">
                </label>
            </div>
            <button @click="handleForm" class="w-2/5 max-md:w-4/5 h-8 bg-blue-600 text-white rounded">Create notice</button>
        </form>
    </div>
</template>

<script setup>
    import teacherNav from '@/components/teacherComponents/teacherNav.vue';
    import error from '@/components/messages/error.vue';
    import successMessage from '@/components/messages/successMessage.vue';
    import Dropdown from '@/components/teacherComponents/dropdown.vue';

    import { formUtilities, isDragging } from '@/utils/formUtilities';
    import { ref } from 'vue';
    import { useTeacherData } from '@/stores/teacherData';
    import { useNoticesData } from '@/stores/noticeData';
    import { useRoute, useRouter } from 'vue-router';

    const teacherData = useTeacherData();
    const noticeData = useNoticesData()
    const route = useRoute();
    const router = useRouter();
    const id = Number(route.params.id);
    const grades = ref([]);
    const subjects = ref([]);
    const selectedFile = ref(null);

    let errorMsg = ref('')
    let successMsg = ref('')
    let selectedClasses = ref()
    let selectedSubjects = ref()
    
    let noticeMessage = ref()
    let sendEmail = ref(false)
    let sendSms = ref(false)

    const teacher = teacherData.teachers.find(
        (teacher) => teacher.id === id
    );

    teacher.assignedClassesAndSubjects.forEach(item => {
        const [grade, subject] = item.split(" - ");
        grades.value.push(Number(grade));
        subjects.value.push(subject);
    });

    const uniqueSubjects = [...new Set(subjects.value)];
    const uniqueGrades = [...new Set(grades.value)];

    function onFileDrop(event){
        formUtilities.handleDrop(event, selectedFile)
    }

    function onFileSelect(event){
        formUtilities.handleFileSelect(event, selectedFile)
    }

    function handleForm(){
        if(formUtilities.checkEmptyFields(noticeMessage.value)){
            errorMsg.value = 'Please fill in non-optional field'
            return
        }

        if(formUtilities.checkEmptyFields(selectedSubjects.value)){
            selectedSubjects.value = null
        }

        if(formUtilities.checkEmptyFields(selectedClasses.value)){
            selectedClasses.value = null
        }

        noticeData.addNotice(id, noticeMessage.value, sendEmail.value, sendSms.value, selectedClasses.value, selectedSubjects.value)
        successMsg.value = 'Notice created'
    }
</script>