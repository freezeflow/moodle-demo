import { defineStore } from 'pinia';

export const useQuizGrades = defineStore('quizGrades', {
    state: () => ({
        quizGrades: JSON.parse(localStorage.getItem('quizGrades') || '[]'),
    }),
    actions: {
        addGrades(teacherId, studentId, quizId, points) {
            const newGrade = {
                id: Date.now(),
                teacherId,
                studentId,
                quizId,
                points,
                createDate: new Date().toLocaleString(),
            };
            this.quizGrades.push(newGrade);
            this.saveQuizGradesToLocalStorage();
        },
        deleteQuizGrade(id) {
            this.quizGrades = this.quizGrades.filter(grade => grade.id !== id);
            this.saveQuizGradesToLocalStorage();
        },
        updateQuizGrade(id, updatedQuizData) {
            const index = this.quizGrades.findIndex(grade => grade.id === id);
            if (index !== -1) {
                this.quizGrades[index] = {
                    ...this.quizGrades[index],
                    ...updatedQuizData,
                    lastUpdated: new Date().toLocaleString(),
                };
                this.saveQuizGradesToLocalStorage();
            } else {
                console.error(`Quiz with id ${id} not found.`);
            }
        },
        saveQuizGradesToLocalStorage() {
            try {
                localStorage.setItem('quizGrades', JSON.stringify(this.quizGrades));
            } catch (error) {
                console.error('Failed to save quizzes to localStorage:', error);
            }
        },
    },
});
