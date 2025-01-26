<template>
    <div v-for="(notice, index) in notices"
    :key="index" 
    class="w-3/5 border border-blue-600 border-x-0 border-t-0 flex flex-col">
        <div v-if="notice.subjects && !notice.grades" class="flex flex-row gap-3">
            <font-awesome-icon icon="bullhorn" 
            class="text-red-600"/><p> To all <span class="underline">{{ notice.subjects?.join(", ") || "" }}</span> students</p>
        </div>
        <div v-if="notice.grades && !notice.subjects" class="flex flex-row gap-3">
            <font-awesome-icon icon="bullhorn" 
            class="text-red-600"/><p> To all <span class="underline">{{ notice.grades?.join(", ") || "" }}</span> students</p>
        </div>
        <div v-if="notice.grades && notice.subjects" class="flex flex-row gap-3">
            <font-awesome-icon icon="bullhorn" 
            class="text-red-600"/><p> To all grade <span class="underline">{{ notice.grades?.join(", ") || "" }} {{ notice.subjects?.join(", ") || "" }}</span> students</p>
        </div>
        
        <p class="text-lg">{{ notice.noticeMsg }}</p>
        <p><span class="font-semibold">Notice from:</span> 
            {{ teachers[index].name }} {{ teachers[index].surname }}
        </p>
        <p><span class="font-semibold">Notice date:</span> {{ notice.createDate }}</p>
    </div>
</template>

<script setup>
    import { useNoticesData } from '@/stores/noticeData';
    import { useTeacherData } from '@/stores/teacherData';
    import { useStudentData } from '@/stores/studentData';
    import { useRoute } from 'vue-router';

    const noticeData = useNoticesData()
    const teacherData = useTeacherData()
    const studentData = useStudentData()
    const route = useRoute();
    const id = Number(route.params.id);

    const student = studentData.students.find(
        (student) => student.id === id
    );

    const notices = noticeData.notices.filter((notice) => {
        const matchesSubject = notice.subjects 
            ? student.selectedSubjects.some(subject => notice.subjects.includes(subject)) 
            : false;

        const matchesGrade = notice.grades 
            ? notice.grades.includes(student.grade) 
            : false;

        const isGeneralNotice = notice.grades === null && notice.subjects === null;

        return matchesSubject || matchesGrade || isGeneralNotice;
    });
    
    const teachers = notices.map((notice) => {
        return teacherData.teachers.find((teacher) => teacher.id === notice.teacherId);
    });
</script>