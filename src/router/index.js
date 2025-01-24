import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/teacherLogin',
      name: 'teacherLogin',

      component: () => import('../views/loginPages/TeacherLogin.vue'),
    },
    {
      path: '/studentLogin',
      name: 'studentLogin',

      component: () => import('../views/loginPages/StudentLogin.vue'),
    },
    {
      path: '/parentLogin',
      name: 'parentLogin',

      component: () => import('../views/loginPages/ParentLogin.vue'),
    },
    {
      path: '/parentRegister',
      name: 'parentRegister',

      component: () => import('../views/ParentRegister.vue'),
    },
    {
      path: '/teacherDashboard:id',
      name: 'teacherDashboard',

      props:true,

      component: () => import('../views/Teacher/Dashboard.vue'),
    },
    {
      path: '/teacherEditFiles:id',
      name: 'teacherEditFiles',

      props:true,

      component: () => import('../views/Teacher/Edit files.vue'),
    },
    {
      path: '/teacherStudentSettings:id',
      name: 'teacherStudentSettings',

      props:true,

      component: () => import('../views/Teacher/Student settings.vue'),
    },
    {
      path: '/teacherRegisterStudents:id',
      name: 'teacherRegisterStudents',

      props:true,

      component: () => import('../views/Teacher/Register student.vue'),
    },
    {
      path: '/activities:id',
      name: 'activities',

      props:true,

      component: () => import('../views/Teacher/Activities.vue'),
    },
    {
      path: '/teacherGradeStudents:id',
      name: 'teacherGradeStudents',

      props:true,

      component: () => import('../views/Teacher/Grade students.vue'),
    },
    {
      path: '/findStudent:id',
      name: 'findStudent',

      props:true,

      component: () => import('../views/Teacher/Edit student profile.vue'),
    },
    {
      path: '/teacherLessonPlanner:id',
      name: 'teacherLessonPlanner',

      props:true,

      component: () => import('../views/Teacher/Lesson planner.vue'),
    },
    {
      path: '/teacherCreateNotice:id',
      name: 'teacherCreateNotice',

      props:true,

      component: () => import('../views/Teacher/Create notice.vue'),
    },
    {
      path: '/subjectSettings:id/:subject/:grade',
      name: 'subjectSettings',

      props:true,

      component: () => import('../views/Teacher/HOD pages/settings/subject.vue'),
    },
    {
      path: '/teacherUploadFile:id',
      name: 'teacherUploadFile',

      props:true,

      component: () => import('../views/Teacher/Activities/Upload file.vue'),
    },
    {
      path: '/createQuiz:id',
      name: 'createQuiz',

      props:true,

      component: () => import('../views/Teacher/Activities/Quiz.vue'),
    },
    {
      path: '/editFile:id',
      name: 'editFile',

      props:true,

      component: () => import('../views/Teacher/editFile.vue'),
    },
    {
      path: '/editStudent:id/:studentId',
      name: 'editStudent',
      
      props:true,

      component: () => import('../views/Teacher/editStudent.vue'),
    },
    {
      path: '/studentInfo:id/:studentId',
      name: 'studentInfo',
      
      props:true,

      component: () => import('../views/Teacher/studentInfo.vue'),
    },
    {
      path: '/gradeStudents:id',
      name: 'gradeStudents',

      props:true,

      component: () => import('../views/Teacher/Grade students.vue'),
    },
    {
      path: '/teacherSettings:id',
      name: 'teacherSettings',

      props:true,

      component: () => import('../views/Teacher/HOD pages/Teacher settings.vue'),
    },
    {
      path: '/registerTeacher:id',
      name: 'registerTeacher',

      props:true,

      component: () => import('../views/Teacher/HOD pages/Register teacher.vue'),
    },
    {
      path: '/findTeacher:id',
      name: 'findTeacher',

      props:true,

      component: () => import('../views/Teacher/HOD pages/Edit teacher.vue'),
    },
    {
      path: '/teacherInfo:id/:teacherId',
      name: 'teacherInfo',
      
      props:true,

      component: () => import('../views/Teacher/HOD pages/teacherInfo.vue'),
    },
    {
      path: '/editTeacher:id/:teacherId',
      name: 'editTeacher',
      
      props:true,

      component: () => import('../views/Teacher/HOD pages/editTeacher.vue'),
    },
    {
      path: '/teacherRole:id/:teacherId',
      name: 'teacherRole',
      
      props:true,

      component: () => import('../views/Teacher/HOD pages/teacherRole.vue'),
    },
    {
      path: '/creationPanel:id',
      name: 'creationPanel',

      props:true,

      component: () => import('../views/Teacher/HOD pages/Creation panel.vue'),
    },

    // Student routes
    {
      path: '/studentDashboard:id',
      name: 'studentDashboard',

      props:true,

      component: () => import('../views/Student/Dashboard.vue'),
    },
    {
      path: '/subject:id/:subject',
      name: 'subject',

      props:true,

      component: () => import('../views/Student/subject.vue'),
    },
    {
      path: '/quiz:id/:quizId',
      name: 'quiz',

      props:true,

      component: () => import('../views/Student/quiz.vue'),
    },

    // Parent/Guardian routes
    {
      path: '/parentDashboard:id',
      name: 'parentDashboard',

      props:true,

      component: () => import('../views/Parent/Dashboard.vue'),
    },
    {
      path: '/addStudent:id',
      name: 'addStudent',

      props:true,

      component: () => import('../views/Parent/addStudent.vue'),
    },
    {
      path: '/editParentProfile:id',
      name: 'editParentProfile',

      props:true,

      component: () => import('../views/Parent/Edit Profile.vue'),
    },
  ],
})

export default router
