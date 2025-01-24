<template>
    <div class="deleteCard absolute z-50 w-screen h-screen flex justify-center items-center">
      <div class="bg-white w-2/5 h-2/5 rounded-lg shadow-xl flex flex-col items-center gap-12">
        <div>
          <button 
            @click="$emit('closeCard')" 
            class="absolute -translate-x-20 translate-y-2 border border-red-600 w-7 h-7 rounded-full text-red-600"
          >
            <font-awesome-icon icon="xmark" />
          </button>
          <div class="flex flex-col justify-center items-center">
            <h1 class="text-xl mt-6">Please enter pin to <span class="text-red-600">permanently</span> delete file</h1>
            <error
            :error-message="errorMsg"
            class="mr-8"
            v-if="hasError"/>
          </div>

        </div>
        <form @submit.prevent="confirmDelete" class="flex flex-col gap-3">
          <input 
            type="password" 
            placeholder="Enter pin" 
            v-model="pin"
            class="border border-blue-600 rounded h-8 pl-2"
          />
          <button type="submit" class="bg-blue-600 text-white rounded">Delete</button>
        </form>
      </div>
    </div>
  </template>
  
<script setup>
import { ref, defineEmits } from 'vue';
import error from '../messages/error.vue';
import { formUtilities } from '@/utils/formUtilities';
import { useTeacherData } from '@/stores/teacherData';
import { useRoute, useRouter } from 'vue-router';
const teacherData = useTeacherData();

const route = useRoute();
const router = useRouter();
const tid = Number(route.params.id);

const emit = defineEmits(['confirmDelete','closeCard'])

const teachers = teacherData.teachers.find(
  (teachers) => teachers.id === tid
);

console.log(teachers)

const pin = ref('');
let hasError = ref(false)
let errorMsg = ref('')

function confirmDelete() {
  if(formUtilities.checkEmptyFields(pin)){
    hasError.value = true;
    errorMsg.value = 'Please enter your pin'
    return;
  }

  if (pin.value === teachers.pin) {
    emit('confirmDelete');
    hasError.value = false
    emit('closeCard');
  } else {
    hasError.value = true;
    errorMsg.value = 'Incorrect pin'
  }
}
</script>
  