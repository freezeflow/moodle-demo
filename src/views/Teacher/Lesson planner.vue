<template>
    <teacherNav 
    class="fixed"/>
    <div class="w-full h-screen flex flex-col justify-center items-center gap-3">
        <div class="flex flex-col items-center gap-2">
            <h2 class="text-2xl">Lesson planner</h2>
            <error 
            :error-message="errorMessage"
            v-if="hasError"/>
            <successMessage 
            success-message="Lesson plan created"
            v-if="isSuccess"/>
        </div>
        
        <form action=""
        class="w-full flex flex-col items-center gap-3"
        @submit.prevent>
            <div class="w-2/6 max-md:w-4/5 flex flex-col items-center gap-3">
                <dropdown 
                :options="grades"
                options-width="w-4/12"
                placeholder="Select grade/s"
                v-model="selectedGrades" class="w-full"
                />
                <dropdown 
                :options="subjects"
                optionsWidth="w-4/12"
                placeholder="Select subject/s"
                v-model="selectedSubjects" class="w-full"
                />
            </div>

            <input v-model="topic" type="text" name="" id="" placeholder="Topic" class="w-2/6 max-md:w-4/5 pl-1 h-8 border border-blue-600 rounded">
            
            <textarea name="" id="" v-model="lessonPlan" class="w-2/6 max-md:w-4/5 border border-blue-600 rounded p-1" placeholder="Lesson plan"></textarea>
            <div class="w-2/6 max-md:w-4/5 flex flex-row justify-between">
                <label for="" class="flex flex-col w-1/2">
                    Start-date:
                    <input v-model="startDate" type="date" name="" id="" class="w-4/5 h-8 border border-blue-600 rounded">
                </label>
                
                <label for="" class="flex flex-col items-end w-1/2">
                    End-date:
                    <input v-model="endDate" type="date" name="" id="" class="w-4/5 h-8 border border-blue-600 rounded">
                </label>
            </div>
            <div class="w-2/6 max-md:w-4/5">
                <button class="w-1/2 h-8 rounded-l text-center text-white bg-blue-600 border border-y-0" @click="handleCreate">Create</button>
                <button class="w-1/2 h-8 rounded-r text-center text-white bg-blue-600 border border-y-0" @click="handleAddMore">Add more</button>
            </div>
        </form>
    </div>
</template>

<script setup>
    import teacherNav from '@/components/teacherComponents/teacherNav.vue';
    import dropdown from '@/components/teacherComponents/dropdown.vue';
    import error from '@/components/messages/error.vue';
    import successMessage from '@/components/messages/successMessage.vue';
    import { useRoute} from 'vue-router';

    import { useLessonData } from '@/stores/lessonData';
    import { formUtilities } from '@/utils/formUtilities';
    import { ref } from 'vue';

    const grades = ref([
        '8A','8B','8C','9A','9B','9C','10A','10B','10C','11A','11B','11C','12A','12B','12C'
    ])

    const subjects = ref([
        'Afrikaans','English','Mathematics','Accounting','Entreprenuership','Biology','Physical science','Chemistry','History','Geography'
    ])
    const lesson = useLessonData()
    const route = useRoute();
    const id = Number(route.params.id);

    let selectedGrades = ref()
    let selectedSubjects = ref()
    let topic = ref()
    let lessonPlan = ref()
    let startDate = ref()
    let endDate = ref()

    let errorMessage = ref()
    let hasError = ref(false)
    let isSuccess = ref(false)

    function handleForm(){
        if(formUtilities.checkEmptyFields(topic, lessonPlan, startDate, endDate, selectedGrades, selectedSubjects)){
            hasError.value = true;
            errorMessage.value = 'Please fill out all fields'
            return
        }

        isSuccess.value = true
        lesson.addLessonPlan(id ,topic.value, lessonPlan.value, startDate.value, endDate.value, selectedGrades.value, selectedSubjects.value)
        console.log(id, topic.value, lessonPlan.value, startDate.value, endDate.value, selectedGrades.value, selectedSubjects.value)
    }

    function clearData(){
        topic.value = ''
        lessonPlan.value = ''
        startDate.value = ''
        endDate.value = ''
        selectedGrades.value = []
        selectedSubjects.value = []
    }

    function handleCreate(){
        handleForm()
        clearData()
    }

    function handleAddMore(){
        handleForm()
    }
</script>