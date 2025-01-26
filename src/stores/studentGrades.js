import { defineStore } from 'pinia';

export const useStudentGrades = defineStore('studentGrades', {
    state: () => ({
        grades: JSON.parse(localStorage.getItem('studentGrades') || '[]'),
    }),
    actions: {
        addGrades(studentId, gradeData) {
            const newGrade = {
                id: Date.now(),
                studentId,
                ...gradeData, // Spread the grade data fields
                createDate: new Date().toLocaleString(),
            };
            this.grades.push(newGrade);
            this.saveGradesToLocalStorage();
        },
        deleteGrades(id) {
            this.grades = this.grades.filter(grade => grade.id !== id);
            this.saveGradesToLocalStorage();
        },
        updateGrades(id, updatedGradeData) {
            const index = this.grades.findIndex(grade => grade.id === id);
            if (index !== -1) {
                this.grades[index] = {
                    ...this.grades[index],
                    ...updatedGradeData, // Spread the updated fields
                    lastUpdated: new Date().toLocaleString(),
                };
                this.saveGradesToLocalStorage();
            } else {
                console.error(`Grade with id ${id} not found.`);
            }
        },
        saveGradesToLocalStorage() {
            try {
                localStorage.setItem('studentGrades', JSON.stringify(this.grades));
            } catch (error) {
                console.error('Failed to save grades to localStorage:', error);
            }
        },
    },
});