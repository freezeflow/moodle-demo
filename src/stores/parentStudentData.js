import { defineStore } from 'pinia';

export const useParentSudentData = defineStore('parentSudentData', {
    state: () => ({
        parentSudent: JSON.parse(localStorage.getItem('parentSudent') || '[]'),
    }),
    actions: {
        addparentSudent(parentId, studentId){
            const newparentSudent = {
                id: Date.now(),
                parentId,
                studentId,
                createDate: new Date().toLocaleString(),
            };
            this.parentSudent.push(newparentSudent);
            this.saveParentSudentToLocalStorage();
        },
        deleteparentSudent(id) {
            this.parentSudent = this.parentSudent.filter(parentSudent => parentSudent.id !== id);
            this.saveParentSudentToLocalStorage(); // Save updated list to localStorage
        },
        saveParentSudentToLocalStorage() {
            localStorage.setItem('parentSudent', JSON.stringify(this.parentSudent));
        },
    },
})