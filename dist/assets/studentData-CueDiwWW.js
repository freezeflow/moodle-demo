import{s as u}from"./index-D-Va-jl2.js";const S=u("studentData",{state:()=>({students:JSON.parse(localStorage.getItem("student")||"[]")}),actions:{addStudent(t,e,s,n,a){const o={id:Date.now(),name:t,surname:e,grade:s,classes:n,selectedSubjects:a,pin:Math.floor(1e3+Math.random()*9e3),createDate:new Date().toLocaleString()};this.students.push(o),this.saveStudentsToLocalStorage()},deleteStudent(t){this.students=this.students.filter(e=>e.id!==t),this.saveStudentsToLocalStorage()},updateStudent(t,e,s,n,a,o){const d=this.students.findIndex(i=>i.id===t);d!==-1?(this.students[d]={...this.students[d],name:e,surname:s,grade:n,classes:a,selectedSubjects:o,uploadDate:new Date().toLocaleString()},this.saveStudentsToLocalStorage()):console.error(`File with id ${t} not found.`)},saveStudentsToLocalStorage(){localStorage.setItem("student",JSON.stringify(this.students))}}});export{S as u};