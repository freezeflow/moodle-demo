import { defineStore } from 'pinia';

export const useFilData = defineStore('fileData', {
    state: () => ({
        files: JSON.parse(localStorage.getItem('files') || '[]'),
    }),
    actions: {
        addFile(tid, name, note, selectedClasses, selectedSubjects){
            const newFile = {
                id: Date.now(),
                tid,
                name,
                note,
                selectedClasses,
                selectedSubjects,
                uploadDate: new Date().toLocaleString(),
            };
            this.files.push(newFile);
            this.saveFilesToLocalStorage();
        },
        deleteFile(id) {
            this.files = this.files.filter(file => file.id !== id);
            this.saveFilesToLocalStorage(); // Save updated list to localStorage
        },
        
        updateFile(id, name, selectedClasses, selectedSubjects) {
            const index = this.files.findIndex(file => file.id === id);
            if (index !== -1) {
                this.files[index] = {
                    ...this.files[index],
                    name,
                    selectedClasses,
                    selectedSubjects,
                    uploadDate: new Date().toLocaleString(),
                };
                this.saveFilesToLocalStorage();
            } else {
                console.error(`File with id ${id} not found.`);
            }
        },
        saveFilesToLocalStorage() {
            localStorage.setItem('files', JSON.stringify(this.files)); // Save files array to localStorage
        },
    },

})