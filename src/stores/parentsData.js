import { defineStore } from 'pinia';

export const useParentData = defineStore('parentData', {
    state: () => ({
        parents: JSON.parse(localStorage.getItem('parents') || '[]'),
        parentStudent: JSON.parse(localStorage.getItem('parentStudent') || '[]'),
    }),
    actions: {
        addParent(name, surname, email, mobileNum, password){
            const newParent = {
                id: Date.now(),
                name,
                surname,
                email,
                mobileNum,
                password,
                createDate: new Date().toLocaleString(),
            };
            this.parents.push(newParent);
            this.saveParentsToLocalStorage();
        },
        addParentStudent(parentId, studentId){
            const newParentStudent = {
                id: Date.now(),
                parentId,
                studentId,
                createDate: new Date().toLocaleString(),
            };
            this.parents.push(newParentStudent);
            this.saveParentStudentToLocalStorage();
        },
        deleteParent(id) {
            this.parents = this.parents.filter(parents => parents.id !== id);
            this.saveParentsToLocalStorage();
        },
        deleteParentStudent(id) {
            this.parentStudent = this.parentStudent.filter(parentStudent => parentStudent.id !== id);
            this.saveParentStudentToLocalStorage();
        },
        updateParent(id, name, surname, email, mobileNum, password) {
            const index = this.parents.findIndex(parents => parents.id === id);
            if (index !== -1) {
                this.parents[index] = {
                    ...this.parents[index],
                    name,
                    surname,
                    email,
                    mobileNum,
                    password,
                    uploadDate: new Date().toLocaleString(),
                };
                this.saveParentsToLocalStorage();
            } else {
                console.error(`File with id ${id} not found.`);
            }
        },
        saveParentsToLocalStorage() {
            localStorage.setItem('parents', JSON.stringify(this.parents));
        },
        saveParentStudentToLocalStorage() {
            localStorage.setItem('parentStudent', JSON.stringify(this.parents));
        },
    },
})