import { defineStore } from 'pinia';

export const useLessonData = defineStore('lessonData', {
    state: () => ({
        lessonPlan: JSON.parse(localStorage.getItem('lessonPlan') || '[]'),
    }),
    actions: {
        addLessonPlan(teacherId, topic, lessonPlan, startDate, endDate, selectedGrades, selectedSubjects){
            const newLessonPlan = {
                id: Date.now(),
                teacherId,
                topic,
                lessonPlan,
                startDate,
                endDate,
                selectedGrades,
                selectedSubjects,
                createDate: new Date().toLocaleString(),
            };
            this.lessonPlan.push(newLessonPlan);
            this.saveLessonPlanToLocalStorage();
        },
        deleteLessonPlan(id) {
            this.lessonPlan = this.lessonPlan.filter(lessonPlan => lessonPlan.id !== id);
            this.saveLessonPlanToLocalStorage();
        },
        updateLessonPlan(topic, lessonPlan, startDate, endDate, selectedGrades, selectedSubjects) {
            const index = this.lessonPlan.findIndex(lessonPlan => lessonPlan.id === id);
            if (index !== -1) {
                this.lessonPlan[index] = {
                    ...this.lessonPlan[index],
                    topic,
                    lessonPlan,
                    startDate,
                    endDate,
                    selectedGrades,
                    selectedSubjects,
                    uploadDate: new Date().toLocaleString(),
                };
                this.saveLessonPlanToLocalStorage();
            } else {
                console.error(`Lesson plan with id ${id} not found.`);
            }
        },
        saveLessonPlanToLocalStorage() {
            localStorage.setItem('lessonPlan', JSON.stringify(this.lessonPlan));
        },
    },
})