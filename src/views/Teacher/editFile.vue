<template>
    <div v-if="fileToEdit" class="w-full h-screen flex flex-col justify-center items-center gap-2">
      <div>
        <h1 class="text-xl text-center">Edit File Details</h1>
        <successMessage v-if="success"
        success-message="Changes saved"/>
      </div>
        
        <form @submit.prevent="handleFormSubmit" class="flex flex-col gap-4 w-full items-center">
        <!-- Title -->
        <label class="flex flex-col w-full items-center">
            <span class="w-2/5 text-lg">Title:</span>
            <input type="text" v-model="form.name" class="pl-2 border border-blue-600 rounded-md h-8 w-2/5 " />
        </label>

        <!-- Grades -->
        <label class="flex flex-col w-full items-center">
            <span class="w-2/5 text-lg">Grades:</span>
            <Dropdown
            class="w-2/5"
            v-model="form.selectedClasses"
            :options="classOptions"
            placeholder="Select Grade & class"
            />
        </label>

        <!-- Subjects -->
        <label class="flex flex-col w-full items-center">
            <span class="w-2/5 text-lg">Subject:</span>
            <Dropdown
            class="w-2/5"
            v-model="form.selectedSubjects"
            :options="subjectOptions"
            placeholder="Select Subjects"
            />
        </label>

        <!-- Submit -->
        <button type="submit" class="bg-blue-500 text-white  h-8 rounded w-2/5">Save Changes</button>
        </form>
        </div>
    <div v-else>
    <p>No File found to edit.</p>
    </div>  
</template>
  

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, computed, reactive } from 'vue';
import { useFilData } from '@/stores/fileData';
import Dropdown from '@/components/teacherComponents/dropdown.vue';
import successMessage from '@/components/messages/successMessage.vue';

const route = useRoute();
const router = useRouter();
const id = Number(route.params.id);
const classOptions = ref(['8A', '8B', '8C', '9A', '9B', '9C']);
const subjectOptions = ref(['Mathematics', 'Physical science'])


const fileStore = useFilData();
let success = ref(false)

const fileToEdit = computed(() => {
  return fileStore.files.find(file => file.id === id);
});

// Form state
const form = reactive({
  name: fileToEdit.value?.name || '',
  selectedClasses: fileToEdit.value?.selectedClasses || [],
  selectedSubjects: fileToEdit.value?.selectedSubjects || [],
  uploadDate: new Date().toLocaleString() || '',
});

// Initialize form with file data
if (fileToEdit.value) {
  form.value = { ...fileToEdit.value }; // Clone the file data
} else {
  console.warn('No file found with the given id:', id);
}

// Handle form submission
function handleFormSubmit() {
  // Validate form (optional)
  if (!form.name || form.selectedClasses.length === 0 || form.selectedSubjects.length === 0) {
    alert('Please fill out all fields.');
    return;
  }

  fileStore.updateFile(id, form.name, form.selectedClasses, form.selectedSubjects);
  success.value = true

  // Navigate back to the file list or another page
  router.push({ name: 'teacherEditFiles' }); // Replace 'FileList' with the correct route name
}
</script>

