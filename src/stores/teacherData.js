import { defineStore } from 'pinia';

export const useTeacherData = defineStore('teacherData', {
    state: () => ({
        teachers: JSON.parse(localStorage.getItem('teacher') || '[]'),
        loggedinTeachers: JSON.parse(localStorage.getItem('loginTeacher') || '[]'),
    }),
    actions: {
        addTeacher(name, surname, email, mobileNumber, assignedClassesAndSubjects){
            const newTeacher = {
                id: Date.now(),
                name,
                surname,
                email,
                mobileNumber,
                assignedClassesAndSubjects,
                pin: Math.floor(1000 + Math.random() * 9000),
                createDate: new Date().toLocaleString(),
            };
            this.teachers.push(newTeacher);
            this.saveTeachersToLocalStorage();
        },
        deleteTeacher(id) {
            this.teachers = this.teachers.filter(teachers => teachers.id !== id);
            this.saveTeachersToLocalStorage();
        },
        updateTeacherDetails(id, name, surname, email, pin, mobileNumber) {
            const index = this.teachers.findIndex(teachers => teachers.id === id);
            if (index !== -1) {
                this.teachers[index] = {
                    ...this.teachers[index],
                    name,
                    surname,
                    email,
                    pin,
                    mobileNumber,
                    uploadDate: new Date().toLocaleString(),
                };
                this.saveTeachersToLocalStorage();
            } else {
                console.error(`Teacher with id ${id} not found.`);
            }
        },
        updateTeacherAssignments(id, assignedClassesAndSubjects) {
            const index = this.teachers.findIndex(teachers => teachers.id === id);
            if (index !== -1) {
                this.teachers[index] = {
                    ...this.teachers[index],
                    assignedClassesAndSubjects,
                    uploadDate: new Date().toLocaleString(),
                };
                this.saveTeachersToLocalStorage();
            } else {
                console.error(`Teacher with id ${id} not found.`);
            }
        },
        loginTeacher(id){
            const logTeacher = {
                id: id,
                createDate: new Date().toLocaleString(),
            };
            this.loggedinTeachers.push(logTeacher);
            this.saveloggedinTeachersToLocalStorage();
        },
        logoutTeacher(id) {
            this.loggedinTeachers = this.loggedinTeachers.filter(loggedinTeachers => loggedinTeachers.id !== id);
            this.saveloggedinTeachersToLocalStorage();
        },
        saveTeachersToLocalStorage() {
            localStorage.setItem('teacher', JSON.stringify(this.teachers));
        },
        saveloggedinTeachersToLocalStorage(){
            localStorage.setItem('loginTeacher', JSON.stringify(this.teachers));
        }
    },
})