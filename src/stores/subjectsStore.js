import { defineStore } from 'pinia';

export const useSubjectsData = defineStore('subjectData', {
    state: () => ({
        subjects: JSON.parse(localStorage.getItem('subjects') || '[]'),
    }),
    actions: {
        addSubjects(subject){
            this.subjects.push(subject);
            this.saveSubjectsToLocalStorage();
        },
        deleteSubject(index) {
            this.subjects = this.subjects.value.splice(index, 1);
            this.saveSubjectsToLocalStorage();
        },
        saveSubjectsToLocalStorage() {
            localStorage.setItem('subjects', JSON.stringify(this.subjects));
        },
    },
})