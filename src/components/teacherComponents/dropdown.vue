<template>
  <div class="w-2/5">
    <!-- Dropdown Header -->
    <div
      class="border border-blue-600 w-full h-8 rounded-md px-2 flex items-center justify-between bg-white cursor-pointer"
      @click="toggleDropdown"
    >
      <span
        class="overflow-hidden whitespace-nowrap text-ellipsis"
        :title="selectedValues.join(', ')"
      >
        {{ selectedValues.length > 0 ? selectedValues.join(', ') : placeholder }}
      </span>
      <i class="fas fa-chevron-down"></i>
    </div>
  
    <!-- Dropdown Options -->
    <div
      v-if="isDropdownOpen"
      class="absolute rounded-md mt-1"
      :class="optionsWidth"
    >
      <div
        v-for="option in options"
        :key="option"
        
        class="relative z-10 flex items-center gap-2 px-2 py-1 rounded-md border border-blue-600 bg-white hover:bg-blue-100 cursor-pointer"
        @click="toggleOption(option)"
      >
        <input
          type="checkbox"
          :checked="selectedValues.includes(option)"
          @change="toggleOption(option)"
        />
        <label class="overflow-hidden">{{ option }}</label>
      </div>
    </div>
  </div>
</template>

<style scoped>
.truncate {
  display: inline-block;
  max-width: calc(100% - 20px); /* Ensure space for the dropdown arrow */
  text-overflow: ellipsis;
  overflow: hidden;
  vertical-align: middle;
}
</style>

  
  <script setup>
  import { ref, watch } from 'vue';
  
  // Props
  const props = defineProps({
    options: { type: Array, required: true },
    placeholder: { type: String, default: 'Select Options' },
    modelValue: { type: Array, default: () => [] },
    optionsWidth: String
  });
  
  // Emits
  const emit = defineEmits(['update:modelValue']);
  
  // State
  const selectedValues = ref([...props.modelValue]);
  const isDropdownOpen = ref(false);
  
  // Toggle dropdown visibility
  function toggleDropdown() {
    isDropdownOpen.value = !isDropdownOpen.value;
  }
  
  // Toggle selection of an option
  function toggleOption(option) {
    if (selectedValues.value.includes(option)) {
      selectedValues.value = selectedValues.value.filter((item) => item !== option);
    } else {
      selectedValues.value.push(option);
    }
    emit('update:modelValue', selectedValues.value); // Emit the updated value
  }
  </script>
  