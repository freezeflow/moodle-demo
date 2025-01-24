<template>
    <div v-for="(notice, index) in notices"
    :key="index" 
    class="md:w-3/5 border text-gray-600 border-blue-600 border-x-0 border-t-0 flex flex-col max-md:justify-center max-md:items-center pl-2">
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
        
        <p class="text-lg max-md:text-center py-2 text-black">{{ notice.noticeMsg }}</p>
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
import { useParentSudentData } from '@/stores/parentStudentData';
import { useRoute } from 'vue-router';

const noticeData = useNoticesData();
const teacherData = useTeacherData();
const studentData = useStudentData();
const parentStudentData = useParentSudentData();
const route = useRoute();
const id = Number(route.params.id);

// Get students linked to the parent
const parentStudents = parentStudentData.parentSudent.filter(
  (parentStudent) => parentStudent.parentId === id
);

// Find students based on parent-student relationships
const students = studentData.students.filter((student) =>
  parentStudents.some((parentStudent) => parentStudent.studentId === student.id)
);

// Find notices relevant to the students
const notices = noticeData.notices.filter((notice) => {
  return students.some((student) => {
    const matchesSubject = notice.subjects
      ? student.selectedSubjects.some((subject) =>
          notice.subjects.includes(subject)
        )
      : false;

    const matchesGrade = notice.grades
      ? notice.grades.includes(student.grade)
      : false;

    const isGeneralNotice =
      notice.grades === null && notice.subjects === null;

    return matchesSubject || matchesGrade || isGeneralNotice;
  });
});

// Map notices to teachers and remove duplicates
    const teachers = notices.map((notice) => {
        return teacherData.teachers.find((teacher) => teacher.id === notice.teacherId);
    });
</script>
