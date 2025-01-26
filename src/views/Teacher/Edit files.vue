<template>
    <teacherNav class="fixed z-50" />
    <deleteCard
      v-if="show"
      @closeCard="closeCard"
      @confirmDelete="performDelete"
    />
    <div class="w-full h-screen pt-24 flex flex-col gap-10">
      <search placeholder="Search files" class="relative" />
      <div class="w-full flex flex-col justify-center items-center">
        <fileDetails 
          v-for="file in fileData.files"
          :key="file.id"
          :title="file.name"
          :grades="file.selectedClasses"
          :subject="file.selectedSubjects"
          :uploadDate="file.uploadDate"
          @edit="editFile(file.id)"
          @delete="showDeleteModal(file.id)"
          class="w-3/5"
        />
      </div>
    </div>
</template>
  
<script setup>
import teacherNav from '@/components/teacherComponents/teacherNav.vue';
import search from '@/components/teacherComponents/search.vue';
import fileDetails from '@/components/teacherComponents/fileDetails.vue';
import deleteCard from '@/components/teacherComponents/deleteCard.vue';
import { ref } from 'vue';
import router from '@/router';
import { useFilData } from '@/stores/fileData';

const fileData = useFilData();
const show = ref(false);
const fileIdToDelete = ref(null);

  function editFile(id) {
    router.push({ name: 'editFile', params: { id } });
  }

  function showDeleteModal(id) {
    fileIdToDelete.value = id;
    console.log
    show.value = true;
  }

  function closeCard() {
    show.value = false;
    fileIdToDelete.value = null;
  }

  function performDelete() {
  if (fileIdToDelete.value) {
      fileData.deleteFile(fileIdToDelete.value);
      closeCard();
  }
}
</script>
  