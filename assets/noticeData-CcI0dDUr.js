import{s as c}from"./index-D-Va-jl2.js";const d=c("noticesData",{state:()=>({notices:JSON.parse(localStorage.getItem("Newnotices")||"[]")}),actions:{addNotice(t,o,s,i,a,e){const n={id:Date.now(),teacherId:t,noticeMsg:o,sendEmail:s,sendSms:i,grades:a,subjects:e,createDate:new Date().toLocaleString()};this.notices.push(n),this.saveNoticeToLocalStorage()},updateNotice(t,o,s,i,a){const e=this.notices.findIndex(n=>n.id===id);e!==-1?(this.notices[e]={...this.notices[e],noticeMsg:t,sendEmail:o,sendSms:s,grades:i,subjects:a,uploadDate:new Date().toLocaleString()},this.saveNoticeToLocalStorage()):console.error(`Lesson plan with id ${id} not found.`)},saveNoticeToLocalStorage(){localStorage.setItem("Newnotices",JSON.stringify(this.notices))}}});export{d as u};