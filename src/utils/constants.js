import { ref } from "vue";

const constants = {
    isDragging: ref(false),

    allowedTypes: [
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/pdf',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'image/png',
    'image/jpeg',
    ],

    classOptions: ref([
    '8A', '8B', '8C', '9A', '9B', '9C', '10A', '10B', '10C', '11A', '11B', '11C'
    ]),

    grades: ref([
        8, 9,10 ,11 , 12
    ]),

    classes: ref([
        'A','B','C'
    ]),

    subjectOptions: ref([
    'Afrikaans','English','Mathematics','Accounting','Entreprenuership','Bussiness studies','Life science','Biology','Physical science','Chemistry','History','Geography'
    ])
}

export {constants}