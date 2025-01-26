import { ref } from "vue";
const isDragging = ref(false)
const allowedTypes = [
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/pdf',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'image/png',
    'image/jpeg',
];

const classOptions = ref([
    '8A', '8B', '8C', '9A', '9B', '9C', '10A', '10B', '10C', '11A', '11B', '11C'
]);

const subjectOptions = ref([
    'Afrikaans','English','Mathematics','Accounting','Entreprenuership','Bussiness studies','Life science','Biology','Physical science','Chemistry','History','Geography'
]);

const formUtilities = {
    checkEmptyFields(...fields) {
        return fields.some(field => {
            if (field && typeof field === 'object' && field.value !== undefined) {
                if (Array.isArray(field.value)) {
                    return field.value.length === 0;
                }
                return !field.value || (typeof field.value === 'string' && field.value.trim() === '');
            }

            if (Array.isArray(field)) {
                return field.length === 0;
            }
            return !field || (typeof field === 'string' && field.trim() === '');
        });
    },
       
    isNumber(userString) {
        return typeof userString === 'string' && /^[0-9]+$/.test(userString);
    },    
    validatePin(pin, limit = 4) {
        // Convert to string to handle various input types
        const pinString = String(pin || '');
    
        // Check if the pin is numeric and has the correct length
        const isValidLength = pinString.length === limit;
        const isNumeric = /^\d+$/.test(pinString); // Regex to check if all characters are digits
    
        return isNumeric && isValidLength;
    },        
    validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email.value);
    },
    validateMobileNumber(contact, startWith, limit) {
        const contactString = contact.value.replace(/[^0-9+]/g, '');
    
        const isNumber = /^[0-9+]+$/.test(contactString);
        const doesStartWith = contactString.startsWith(startWith);
        const isValidLength = contactString.length === limit;
    
        return isNumber && doesStartWith && isValidLength;
    },
    handleDragOver() {
        isDragging.value = true;
    },
    handleDragLeave() {
        isDragging.value = false;
    },
    handleDrop(event, selectedFile) {
        const files = event.dataTransfer.files;
        if (files && files.length > 0) {
            selectedFile.value = files[0];
            console.log("File dropped:", files[0]);
        }
    },
    allowedFileTypes(fileTypes, file){
        if (!fileTypes.includes(file.type)) {
            return false;
        }
        return true
    },
    handleFileSelect(event, selectedFile) {
        const files = event.target.files;
        if (files && files.length > 0) {
            selectedFile.value = files[0];
            console.log("File selected:", files[0]);
        }
    },
    handleForm(checkEmptyFields, requiredFields){
        if(checkEmptyFields === true){
            this.checkEmptyFields(fields)
        }
    }
}

export { formUtilities, isDragging, allowedTypes, classOptions, subjectOptions }