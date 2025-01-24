import { defineStore } from 'pinia';

export const useGradesData = defineStore('gradeData', {
    state: () => ({
        grades: JSON.parse(localStorage.getItem('grade') || '[]'),
    }),
    actions: {
        addGrades(grade){
            this.grades.push(grade);
            this.saveGradesToLocalStorage();
        },
        deleteGrade(index) {
            this.grades = this.grades.value.splice(index, 1);
            this.saveGradesToLocalStorage();
        },
        saveGradesToLocalStorage() {
            localStorage.setItem('grade', JSON.stringify(this.grades));
        },
    },
})