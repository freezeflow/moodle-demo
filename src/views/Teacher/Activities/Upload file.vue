<template>
    <teacherNav class="fixed z-50" />
    <div class="w-full h-screen flex flex-col gap-5 justify-center items-center">
        <div class="mt-16">
            <h1 class="text-2xl text-center">Upload files</h1>
            <error v-if="hasError"
            :error-message="errorMessage"
             class="mt-2"/>
            <successMessage v-if="isSuccess"
            success-message="File successfully uploaded"
            class="mt-2"/>
        </div>
        
        <form class="flex flex-col w-full justify-center items-center gap-5" @submit.prevent @submit="handleForm()">
            <div class="relative border border-blue-600 w-3/5 h-44 rounded-xl flex justify-center items-center"
                :class="{ 'bg-blue-100': isDragging }"
                @dragover.prevent="formUtilities.handleDragOver"
                @dragleave="formUtilities.handleDragLeave"
                @drop.prevent="onFileDrop">
                <input class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" type="file" name="" id="" @change="onFileSelect">
                <label
                  for="file-upload"
                  class="text-blue-600 font-medium cursor-pointer max-sm:text-sm text-center"
                >
                    <span v-if="!selectedFile">Drag and drop files here, or click to select</span>
                    <span v-else>{{ selectedFile.name }}</span>
                </label>
            </div>
            <input v-model="title" type="text" name="" id="" class="border border-blue-600 w-3/5 h-8 rounded pl-2" placeholder="Title">
            <input v-model="note" type="text" name="" id="" class="border border-blue-600 w-3/5 h-8 rounded pl-2" placeholder="Note...(optional)">
            <!-- Class options -->
            <Dropdown
            class="w-3/5"
            v-model="selectedClasses"
            options-width="dropdownWidth"
            :options="grades"
            placeholder="Select Classes"
            />

            <!-- Subject options -->
            <Dropdown
            class="w-3/5"
            v-model="selectedSubjects"
            options-width="dropdownWidth"
            :options="uniqueSubjects"
            placeholder="Select Subjects"
            />

            <div class="w-3/5">
                <button class="bg-blue-600 max-sm:w-full w-1/5 h-8 rounded text-white cursor-pointer" type="submit">Upload</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import error from '@/components/messages/error.vue';
import successMessage from '@/components/messages/successMessage.vue';
import teacherNav from '@/components/teacherComponents/teacherNav.vue';
import Dropdown from '@/components/teacherComponents/dropdown.vue';
import backComponent from '@/components/teacherComponents/backComponent.vue';
import { ref } from 'vue';
import { formUtilities, isDragging, allowedTypes } from '@/utils/formUtilities';
import { useFilData } from '@/stores/fileData';
import { useTeacherData } from '@/stores/teacherData';
import { useRoute, useRouter } from 'vue-router';

const teacherData = useTeacherData();
const route = useRoute();
const router = useRouter();
const id = Number(route.params.id);
const grades = ref([]);
const subjects = ref([]);
let title = ref()
let note = ref('')

const teacher = teacherData.teachers.find(
    (teacher) => teacher.id === id
);

teacher.assignedClassesAndSubjects.forEach(item => {
    const [grade, subject] = item.split(" - ");
    grades.value.push(Number(grade));
    subjects.value.push(subject);
});

const uniqueSubjects = [...new Set(subjects.value)];

let errorMessage = ref('')
let hasError = ref(false)
let isSuccess = ref(false)

const selectedFile = ref(null);

const fileData = ref({
  name: '',
  note: '',
  selectedClasses: [],
  selectedSubjects: [],
  uploadDate: ''
})

const selectedClasses = ref([])
const selectedSubjects = ref([]);
const fileStore = useFilData();

formUtilities.handleDragOver()

formUtilities.handleDragLeave()

function onFileDrop(event){
  formUtilities.handleDrop(event, selectedFile)
}

function onFileSelect(event){
  formUtilities.handleFileSelect(event, selectedFile)
}

function bindFileDetails(){
  fileData.value.name = title.value
  fileData.value.note = note.value || ''
  fileData.value.selectedClasses = selectedClasses
  fileData.value.selectedSubjects = selectedSubjects
  fileData.value.uploadDate = new Date().toLocaleString();
}

function handleForm() {
  hasError.value = false;
  errorMessage.value = '';

  // Chack for empty fields
  if (formUtilities.checkEmptyFields(selectedClasses, selectedSubjects) || formUtilities.checkEmptyFields(title)) {
    hasError.value = true;
    errorMessage.value = 'There are empty fields';
    console.log(title.value, selectedClasses.value, selectedSubjects.value);
    return;
  }

  // Check if a file is selected
  if (!selectedFile.value) {
    hasError.value = true;
    errorMessage.value = 'Please add a file';
    console.log('Error');
    return;
  }
  
  // Check if uploaded file type is allowed
  if(!formUtilities.allowedFileTypes(allowedTypes, selectedFile.value)){
    hasError.value = true;
    errorMessage.value = 'Invalid file';
    console.log(selectedFile.value);
    return;
  }

  hasError.value = false;
  isSuccess.value = true
  errorMessage.value = '';
  bindFileDetails();

  fileStore.addFile(
    teacher.id,
    fileData.value.name,
    fileData.value.note,
    fileData.value.selectedClasses,
    fileData.value.selectedSubjects
  );

  // Reset form after successful submission
  selectedFile.value = null;
  selectedClasses.value = [];
  selectedSubjects.value = [];
  fileData.value = { name: '', selectedClasses: [], selectedSubjects: [], uploadDate: '' };

  console.log('File added:', fileStore.files);
}

</script>