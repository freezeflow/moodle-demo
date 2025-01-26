import { defineStore } from 'pinia';

export const useQuiz = defineStore('quiz', {
    state: () => ({
        quizes: JSON.parse(localStorage.getItem('quizes') || '[]'),
    }),
    actions: {
        addQuiz(teacherId, title, note, subject, grade, Class, numOfQuestions, questions, answers, points) {
            const newQuiz = {
                id: Date.now(),
                teacherId,
                title,
                note,
                subject,
                grade,
                Class,
                numOfQuestions,
                questions,
                answers,
                points,
                createDate: new Date().toLocaleString(),
            };
            this.quizes.push(newQuiz);
            this.saveQuizesToLocalStorage();
        },
        deleteQuiz(id) {
            this.quizes = this.quizes.filter(quiz => quiz.id !== id);
            this.saveQuizesToLocalStorage();
        },
        updateQuiz(id, updatedQuizData) {
            const index = this.quizes.findIndex(quiz => quiz.id === id);
            if (index !== -1) {
                this.quizes[index] = {
                    ...this.quizes[index],
                    ...updatedQuizData,
                    lastUpdated: new Date().toLocaleString(),
                };
                this.saveQuizesToLocalStorage();
            } else {
                console.error(`Quiz with id ${id} not found.`);
            }
        },
        saveQuizesToLocalStorage() {
            try {
                localStorage.setItem('quizes', JSON.stringify(this.quizes));
            } catch (error) {
                console.error('Failed to save quizzes to localStorage:', error);
            }
        },
    },
});
