import{s as S}from"./index-CwIRFKx0.js";const l=S("parentData",{state:()=>({parents:JSON.parse(localStorage.getItem("parents")||"[]"),parentStudent:JSON.parse(localStorage.getItem("parentStudent")||"[]")}),actions:{addParent(t,e,a,n,r){const s={id:Date.now(),name:t,surname:e,email:a,mobileNum:n,password:r,createDate:new Date().toLocaleString()};this.parents.push(s),this.saveParentsToLocalStorage()},addParentStudent(t,e){const a={id:Date.now(),parentId:t,studentId:e,createDate:new Date().toLocaleString()};this.parents.push(a),this.saveParentStudentToLocalStorage()},deleteParent(t){this.parents=this.parents.filter(e=>e.id!==t),this.saveParentsToLocalStorage()},deleteParentStudent(t){this.parentStudent=this.parentStudent.filter(e=>e.id!==t),this.saveParentStudentToLocalStorage()},updateParent(t,e,a,n,r,s){const o=this.parents.findIndex(i=>i.id===t);o!==-1?(this.parents[o]={...this.parents[o],name:e,surname:a,email:n,mobileNum:r,password:s,uploadDate:new Date().toLocaleString()},this.saveParentsToLocalStorage()):console.error(`File with id ${t} not found.`)},saveParentsToLocalStorage(){localStorage.setItem("parents",JSON.stringify(this.parents))},saveParentStudentToLocalStorage(){localStorage.setItem("parentStudent",JSON.stringify(this.parents))}}});export{l as u};
