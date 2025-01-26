import { defineStore } from 'pinia';

export const useNoticesData = defineStore('noticesData', {
    state: () => ({
        notices: JSON.parse(localStorage.getItem('Newnotices') || '[]'),
    }),
    actions: {
        addNotice(teacherId, noticeMsg, sendEmail, sendSms, grades, subjects){
            const newLessonPlan = {
                id: Date.now(),
                teacherId,
                noticeMsg,
                sendEmail,
                sendSms,
                grades,
                subjects,
                createDate: new Date().toLocaleString(),
            };
            this.notices.push(newLessonPlan);
            this.saveNoticeToLocalStorage();
        },
        updateNotice(noticeMsg, sendEmail, sendSms, grades, subjects) {
            const index = this.notices.findIndex(notices => notices.id === id);
            if (index !== -1) {
                this.notices[index] = {
                    ...this.notices[index],
                    noticeMsg,
                    sendEmail,
                    sendSms,
                    grades,
                    subjects,
                    uploadDate: new Date().toLocaleString(),
                };
                this.saveNoticeToLocalStorage();
            } else {
                console.error(`Lesson plan with id ${id} not found.`);
            }
        },
        saveNoticeToLocalStorage() {
            localStorage.setItem('Newnotices', JSON.stringify(this.notices));
        },
    },
})