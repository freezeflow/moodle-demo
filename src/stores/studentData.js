import { defineStore } from 'pinia';

export const useStudentData = defineStore('studentData', {
    state: () => ({
        students: JSON.parse(localStorage.getItem('student') || '[]'),
    }),
    actions: {
        addStudent(name, surname, grade, classes, selectedSubjects){
            const newStudent = {
                id: Date.now(),
                name,
                surname,
                grade,
                classes,
                selectedSubjects,
                pin: Math.floor(1000 + Math.random() * 9000),
                createDate: new Date().toLocaleString(),
            };
            this.students.push(newStudent);
            this.saveStudentsToLocalStorage();
        },
        deleteStudent(id) {
            this.students = this.students.filter(students => students.id !== id);
            this.saveStudentsToLocalStorage(); // Save updated list to localStorage
        },
        updateStudent(id, name, surname, grade, classes, selectedSubjects) {
            const index = this.students.findIndex(students => students.id === id);
            if (index !== -1) {
                this.students[index] = {
                    ...this.students[index],
                    name,
                    surname,
                    grade,
                    classes,
                    selectedSubjects,
                    uploadDate: new Date().toLocaleString(),
                };
                this.saveStudentsToLocalStorage();
            } else {
                console.error(`File with id ${id} not found.`);
            }
        },
        saveStudentsToLocalStorage() {
            localStorage.setItem('student', JSON.stringify(this.students));
        },
    },
})