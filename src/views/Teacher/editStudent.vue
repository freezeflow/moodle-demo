<template>
    <div v-if="studentToEdit" class="w-full h-screen flex flex-col justify-center items-center gap-2">
      <div>
        <h1 class="text-xl text-center">Edit Student Details</h1>
        <successMessage v-if="success"
        success-message="Changes saved"/>
      </div>
        
        <form @submit.prevent="handleFormSubmit" class="flex flex-col gap-4 w-full items-center">
        <!-- Title -->
        <label class="flex flex-col w-full items-center">
            <span class="w-2/5 text-lg">Name:</span>
            <input type="text" v-model="form.name" class="pl-2 border border-blue-600 rounded-md h-8 w-2/5 " />
        </label>

        <label class="flex flex-col w-full items-center">
            <span class="w-2/5 text-lg">Surname:</span>
            <input type="text" v-model="form.surName" class="pl-2 border border-blue-600 rounded-md h-8 w-2/5 " />
        </label>

        <!-- Grades -->
        <label class="flex flex-col w-full items-center">
            <span class="w-2/5 text-lg">Select Grade:</span>
            <select v-model="form.selectedClass" name="" id=""
                    class="border border-blue-600 rounded h-8 cursor-pointer w-2/5">
            <option
                v-for="option in grades"
                :key="option"
                :value="option">
                {{ option }}
            </option>
            </select>
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
    <p>No file found to edit.</p>
    </div>  
</template>
  

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, computed, reactive } from 'vue';
import { useStudentData } from '@/stores/studentData';

import Dropdown from '@/components/teacherComponents/dropdown.vue';
import successMessage from '@/components/messages/successMessage.vue';

const route = useRoute();
const router = useRouter();
const id = Number(route.params.id);
const grades = ref([
    '8A','8B','8C','9A','9B','9C','10A','10B','10C','11A','11B','11C','12A','12B','12C'
])

const subjectOptions = ref([
    'Afrikaans','English','Mathematics','Accounting','Entreprenuership','Biology','Physical science','Chemistry','History','Geography'
])


const studentStore = useStudentData();
let success = ref(false)

const studentToEdit = computed(() => {
  return studentStore.students.find(sutdents => sutdents.id === id);
});

const form = reactive({
  name: studentToEdit.value?.name || '',
  surName: studentToEdit.value?.surname || '',
  selectedClass: studentToEdit.value?.selectedClass || '',
  selectedSubjects: studentToEdit.value?.selectedSubjects || [],
  uploadDate: new Date().toLocaleString() || '',
});

if (studentToEdit.value) {
  form.value = { ...studentToEdit.value };
} else {
  console.warn('No student found with the given id:', id);
}

function handleFormSubmit() {
  if (!form.name || !form.selectedClass || form.selectedSubjects.length === 0) {
    alert('Please fill out all fields.');
    return;
  }

  studentStore.updateStudent(id, form.name, form.surName, form.selectedClass, form.selectedSubjects);
  success.value = true

  router.push({ name: 'editStudent' });
}
</script>

