<template>
    <div v-if="teacherToEdit" class="w-full h-screen flex flex-col justify-center items-center gap-6">
        <div>
            <h1 class="text-xl text-center">Edit Teacher assigned role</h1>
            <error
            :error-message="errorMsg"
            v-if="errorMsg"/>
            <successMessage v-if="success"
            success-message="Changes saved"/>
        </div>
        <form action="" @submit.prevent class="w-full flex flex-col gap-3 justify-center items-center">
            <div class="flex flex-col w-full justify-center items-center gap-5">
                <div class="w-full flex flex-col justify-center items-center">
                    <p class="w-3/5 font-semibold">Select Class:</p>
                    <select v-model="selectedClasses" name="" id=""
                        class="border border-blue-600 rounded h-8 w-3/5 cursor-pointer">
                    <option
                        v-for="option in constants.classes.value"
                        :key="option"
                        :value="option">
                        {{ option }}
                    </option>
                    </select>
                </div>
                
                
                <div class="w-full flex flex-col justify-center items-center">
                    <p class="w-3/5 font-semibold">Select Subject:</p>
                    <select v-model="selectedSubjects" name="" id=""
                        class="border border-blue-600 rounded h-8 w-3/5 cursor-pointer">
                    <option
                        v-for="option in constants.subjectOptions.value"
                        :key="option"
                        :value="option">
                        {{ option }}
                    </option>
                    </select>
                </div>
            </div>

            <div class="w-3/5 flex flex-col gap-2">
                <div class="flex flex-row gap-2" v-for="(assignedRole, index) in teacherToEdit.assignedClassesAndSubjects"
                :key="index">
                    <p>{{ assignedRole }}</p>
                    <button @click="removeRole(index)"><font-awesome-icon icon="xmark-circle" class="text-xs text-red-700"/></button>
                </div>
            </div>
            <div class="flex flex-col w-full items-center gap-5">
                <button class="bg-blue-600 text-white w-3/5 h-8 rounded" @click="handleAddMore()">Add more</button>
                <button class="bg-blue-600 text-white w-3/5 h-8 rounded" @click="handleSave()">Save</button>
            </div>
        </form>
    </div>
    <div v-else>
        <p>No Teacher found to edit.</p>
    </div> 
</template>

<script setup>
    import dropdown from '@/components/teacherComponents/dropdown.vue';
    import error from '@/components/messages/error.vue';
    import successMessage from '@/components/messages/successMessage.vue';

    import { useRoute, useRouter } from 'vue-router';
    import { ref, computed, reactive } from 'vue';
    import { useTeacherData } from '@/stores/teacherData';
    import { constants } from '@/utils/constants';

    const route = useRoute();
    const router = useRouter();
    const id = Number(route.params.teacherId);

    const teacherStore = useTeacherData();
    let success = ref(false)
    let selectedClasses = ref()
    let selectedSubjects = ref()
    let assignedRoles = ref([])
    let errorMsg = ref()

    const teacherToEdit = computed(() => {
        return teacherStore.teachers.find(teachers => teachers.id === id);
    });

    const form = reactive({
        assignedRole: teacherToEdit.value?.assignedClassesAndSubjects || '',
        uploadDate: new Date().toLocaleString() || '',
    });

    function removeRole(index) {
        form.assignedRole.splice(index, 1)
    }

    function handleAddMore(){
        const combSelections = selectedClasses.value + " - " + selectedSubjects.value
        form.assignedRole.push(combSelections)
        console.log(form.assignedRole)
    }

    function handleSave(){

        if(form.assignedRole !== ''){
            teacherStore.updateTeacherAssignments(id, form.assignedRole);
            success.value = true
            let newId = Number(route.params.id)
            let tid = Number(route.params.teacherId)
            router.push({ name: 'teacherInfo', params: {id: newId, teacherId: tid} });
        }else{
            errorMsg.value = 'Please select at least one subject and one grade'
        }
    }
</script>