import{s as n}from"./index-D-Va-jl2.js";const S=n("parentSudentData",{state:()=>({parentSudent:JSON.parse(localStorage.getItem("parentSudent")||"[]")}),actions:{addparentSudent(t,e){const a={id:Date.now(),parentId:t,studentId:e,createDate:new Date().toLocaleString()};this.parentSudent.push(a),this.saveParentSudentToLocalStorage()},deleteparentSudent(t){this.parentSudent=this.parentSudent.filter(e=>e.id!==t),this.saveParentSudentToLocalStorage()},saveParentSudentToLocalStorage(){localStorage.setItem("parentSudent",JSON.stringify(this.parentSudent))}}});export{S as u};