<template>
    <teacherNav 
    class="fixed"/>
    <div class="w-full h-screen flex flex-col justify-center items-center gap-3">
        <search 
        placeholder="Search by subject and grade" />
        <div class="flex flex-col gap-2 items-center">
            <h2 class="text-center text-lg">Grade & Subject: 10 English</h2>
            <div>
                <button class="bg-green-600 w-44 text-white rounded" @click="saveGrades">Save changes</button>
            </div>
            <table class="w-5/6">
                <thead>
                    <tr>
                        <th class="border border-black text-left pl-2">Students</th>
                        <th class="border border-black text-left pl-2"
                        v-for="activity in activities"
                        >{{ activity }}</th>
                        <th class="border border-black text-left pl-2">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="student in studentData.students">
                        <td class="w-1/4 border border-black pl-2">{{ student.name }} {{ student.surname }}</td>
                        <td class="border border-black"
                        v-for="(activity, index) in activities"
                        :key="index"
                        ><input type="text" class="w-full h-full pl-1" 
                        :value="getGrade(student.id, activity)"
                        @input="setGrade(student.id, activity, $event.target.value)"></td>
                        <td class="border border-black"
                        >{{ calculateTotal(student.id) }}</td>
                    </tr> 
                </tbody>
            </table> 
        </div>

        
    </div>
</template>

<script setup>
    import teacherNav from '@/components/teacherComponents/teacherNav.vue';
    import search from '@/components/teacherComponents/search.vue';
    import { ref } from 'vue';
    import { useStudentData } from '@/stores/studentData';
    import { useStudentGrades } from '@/stores/studentGrades';

    const studentData = useStudentData();
    const studentGrades = useStudentGrades();

    // Define activities
    const activities = ref([
    'Activity 1',
    'Activity 2',
    'Activity 3',
    'Activity 4',
    'Assignment 1',
    'Test 1',
    'Test 2',
    'Assignment 2',
    ]);

    const grades = ref({});

    function calculateTotal(studentId) {
    const studentGrades = grades.value[studentId] || {};
    return Object.values(studentGrades).reduce((total, grade) => {
        return total + (parseFloat(grade) || 0);
    }, 0);
    }

    function saveGrades() {
        Object.entries(grades.value).forEach(([studentId, studentActivities]) => {
            Object.entries(studentActivities).forEach(([activity, grade]) => {
                studentGrades.addGrades(studentId, {
                    grade,
                    selectedClass: '10A', // Example: Replace with the actual selected class
                    subject: 'English', // Example: Replace with the actual subject
                    activity,
                });
            });
        });
        console.log('Grades saved:', studentGrades.grades);
        }

    function getGrade(studentId, activity) {
    if (!grades.value[studentId]) {
        grades.value[studentId] = {};
    }
    if (!grades.value[studentId][activity]) {
        grades.value[studentId][activity] = ''; // Default value
    }
    return grades.value[studentId][activity];
    }

    function setGrade(studentId, activity, value) {
    if (!grades.value[studentId]) {
        grades.value[studentId] = {};
    }
    grades.value[studentId][activity] = value; // Dynamically update the value
    }

</script>