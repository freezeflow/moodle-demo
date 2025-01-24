<template>
  <div class="flex flex-col border-b-2 border-black pb-4 w-1/5 items-center gap-2">
    <h1 class="text-2xl max-sm:text-xl mb-5 text-center">{{ title }}</h1>
    <p class="text-lg max-sm:text-sm text-center">
      <span class="font-semibold">Grades:</span> {{ cleanedGrades }}
    </p>
    <p class="text-lg max-sm:text-sm text-center">
      <span class="font-semibold">Subject:</span> {{ cleanedSubject }}
    </p>
    <p class="text-center max-sm:text-sm">
      <span class="font-semibold">Upload date:</span> {{ uploadDate }}
    </p>
    <div class="flex flex-row">
      <button 
        class="w-28 h-8 border border-y-0 border-l-0 border-white bg-blue-600 text-white rounded-l-sm cursor-pointer relative"
        @click="onEdit"
      >
        Edit details
      </button>
      <button 
        class="w-28 max-sm:w-1/2 h-8 border border-y-0 border-r-0 border-white bg-blue-600 text-white rounded-r-sm"
        @click="onDelete"
      >
        Delete file
      </button>
    </div>
  </div>
</template>

  
<script setup>
  import { defineProps, defineEmits, computed } from 'vue';

  // Define props
  const props = defineProps({
    title: { type: String, default: '' },
    grades: { type: Array, default: [] },
    subject: { type: Array, default: [] },
    uploadDate: { type: String, default: '' },
  });

  // Define emits
  const emit = defineEmits(['edit', 'delete']);

  // Emit events
  function onEdit() {
    emit('edit');
  }

  function onDelete() {
    emit('delete');
  }

  const cleanedGrades = computed(() => {
    return Array.isArray(props.grades)
      ? props.grades.join(', ')
      : typeof props.grades === 'string'
      ? props.grades.replace(/[\[\]"]+/g, '')
      : '';
  });
  const cleanedSubject = computed(() => {
    return Array.isArray(props.subject)
      ? props.subject.join(', ')
      : typeof props.subject === 'string'
      ? props.subject.replace(/[\[\]"]+/g, '')
      : '';
  });
</script>
  