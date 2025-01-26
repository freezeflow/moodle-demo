<template>
    <div v-if="teacherToEdit" class="w-full h-screen flex flex-col justify-center items-center gap-2">
      <div>
        <h1 class="text-xl text-center">Edit Teacher Details</h1>
        <successMessage v-if="success"
        success-message="Changes saved"/>
      </div>
      <form action="" @submit.prevent class="w-full flex flex-col gap-3">
        <label class="flex flex-col w-full items-center">
            <span class="w-2/5 text-lg">Name:</span>
            <input type="text" v-model="form.name" class="pl-2 border border-blue-600 rounded-md h-8 w-2/5 " />
        </label>
        <label class="flex flex-col w-full items-center">
            <span class="w-2/5 text-lg">Surname:</span>
            <input type="text" v-model="form.surname" class="pl-2 border border-blue-600 rounded-md h-8 w-2/5 " />
        </label>
        <label class="flex flex-col w-full items-center">
            <span class="w-2/5 text-lg">Email:</span>
            <input type="text" v-model="form.email" class="pl-2 border border-blue-600 rounded-md h-8 w-2/5 " />
        </label>
        <label class="flex flex-col w-full items-center">
            <span class="w-2/5 text-lg">Mobile number:</span>
            <input type="text" v-model="form.mobileNumber" class="pl-2 border border-blue-600 rounded-md h-8 w-2/5 " />
        </label>
        <label class="flex flex-col w-full items-center">
            <span class="w-2/5 text-lg">Pin:</span>
            <input type="text" v-model="form.pin" class="pl-2 border border-blue-600 rounded-md h-8 w-2/5 " />
        </label>

        <div class="flex flex-col w-full items-center">
            <button class="bg-blue-600 text-white w-2/5 h-8 rounded" @click="handleFormSubmit()">Save</button>
        </div>
      </form>
    </div>
    <div v-else>
        <p>No Teacher found to edit.</p>
    </div>  
</template>
  

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, computed, reactive } from 'vue';
import { useTeacherData } from '@/stores/teacherData';

import successMessage from '@/components/messages/successMessage.vue';

const route = useRoute();
const router = useRouter();
const id = Number(route.params.teacherId);

const teacherStore = useTeacherData();
let success = ref(false)

const teacherToEdit = computed(() => {
  return teacherStore.teachers.find(teachers => teachers.id === id);
});

const form = reactive({
  name: teacherToEdit.value?.name || '',
  surname: teacherToEdit.value?.surname || '',
  email: teacherToEdit.value?.email || '',
  mobileNumber: teacherToEdit.value?.mobileNumber || '',
  pin: teacherToEdit.value?.pin || '',
  uploadDate: new Date().toLocaleString() || '',
});

if (teacherToEdit.value) {
  form.value = { ...teacherToEdit.value };
} else {
  console.warn('No teacher found with the given id:', id);
}

function handleFormSubmit(){

    teacherStore.updateTeacherDetails(id, form.name, form.surname, form.email, form.pin, form.mobileNumber);
    success.value = true
    let newId = Number(route.params.id)
    router.push({ name: 'teacherInfo', params: {newId} });
}
</script>