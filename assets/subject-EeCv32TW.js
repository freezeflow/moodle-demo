import{_ as C}from"./backComponent-D3BFl8YC.js";import{u as B}from"./studentData-CoaBhV-D.js";import{u as G}from"./quizData-DemVtmlC.js";import{c as o,f as b,u as l,a as e,t as d,n as a,F as x,p as v,k as Q,o as n,l as S,j as F}from"./index-CwIRFKx0.js";import{u as I}from"./quizGrades-BAqxXVAX.js";import{u as V}from"./teacherData-Des5ZfOl.js";import{u as R}from"./fileData-BPcDlXXT.js";const $={class:"w-full h-screen flex flex-col items-center gap-4 pt-20"},A={class:"border border-blue-600 rounded-lg flex flex-col gap-3 w-4/5 py-5"},E={class:"text-center text-xl"},L={class:"flex flex-col justify-center items-center"},U={class:"w-20 h-20 border rounded-lg flex justify-center items-center text-2xl"},H={key:0,class:"text-lg my-2"},J={key:1,class:"text-lg my-2"},K={class:"border border-blue-600 rounded-lg flex flex-col gap-3 w-4/5 p-5"},M={key:0},O=["onClick"],P={class:"text-lg"},W={key:1,class:"flex w-full justify-center items-center"},X={class:"border border-blue-600 rounded-lg flex flex-col gap-3 w-4/5 p-5"},Y={key:0},Z={class:"w-full h-14 border border-blue-300 rounded-lg flex justify-center items-center text-blue-600"},ee={class:"text-lg"},se={key:1,class:"flex w-full justify-center items-center"},ce={__name:"subject",setup(te){const y=B(),k=G(),j=I(),w=V(),D=R(),_=Q(),z=S(),u=Number(_.params.id),c=_.params.subject,f=y.students.find(t=>t.id===u),g=k.quizes.filter(t=>t.subject===c&&t.grade===f.grade),p=w.teachers.find(t=>t.assignedClassesAndSubjects.some(s=>{const[i,r]=s.split(" - ");return r===c&&Number(i)===f.grade})),N=j.quizGrades.find(t=>t.studentId===u),h=D.files.filter(t=>t.selectedSubjects.includes(c)&&t.selectedClasses.includes(f.grade));function T(t){return t.reduce((s,i)=>s+i,0)}function q(t){z.push({name:"quiz",params:{id:u,quizId:t}})}return(t,s)=>{const i=F("font-awesome-icon");return n(),o(x,null,[b(C,{link:"studentDashboard",id:l(u),class:"absolute top-2 left-2"},null,8,["id"]),e("div",$,[e("div",A,[e("h1",E,"Introduction to "+d(l(c)),1),e("div",L,[e("div",U,[b(i,{icon:"user"})]),l(p)?(n(),o("h3",H,[s[0]||(s[0]=e("span",{class:"font-semibold"},"Teacher:",-1)),a(" "+d(l(p).name)+" "+d(l(p).surname),1)])):(n(),o("h3",J,"No teacher assinged to cirriculum")),s[1]||(s[1]=e("div",{class:"w-full h-32 px-2"},[e("p",{class:"font-semibold"},"Bio of subject:")],-1))])]),e("div",K,[s[4]||(s[4]=e("h1",{class:"text-xl text-center"},"Quizes",-1)),l(g).length!==0?(n(),o("div",M,[(n(!0),o(x,null,v(l(g),(r,m)=>(n(),o("div",{key:m,class:"border border-black border-x-0 border-t-0",onClick:oe=>q(r.id)},[e("h3",P,[s[2]||(s[2]=e("span",{class:"font-semibold"},"Quiz topic:",-1)),a(" "+d(r.title),1)]),e("p",null,"score: "+d(l(N).points)+" / "+d(T(r.points)),1)],8,O))),128))])):(n(),o("div",W,s[3]||(s[3]=[e("div",{class:"text-center"},[e("p",{class:"underline"},"No quizes found")],-1)])))]),e("div",X,[s[9]||(s[9]=e("h1",{class:"text-xl text-center"},"Uploaded files",-1)),l(h).length!==0?(n(),o("div",Y,[(n(!0),o(x,null,v(l(h),(r,m)=>(n(),o("div",{key:m,class:"border border-black border-x-0 border-t-0 flex flex-col gap-2"},[e("div",Z,[b(i,{icon:"download"})]),e("h3",ee,[s[5]||(s[5]=e("span",{class:"font-semibold"},"Title:",-1)),a(" "+d(r.name),1)]),e("p",null,[s[6]||(s[6]=e("span",{class:"font-semibold"},"Note:",-1)),a(d(r.note),1)]),e("p",null,[s[7]||(s[7]=e("span",{class:"font-semibold"},"Date uploaded:",-1)),a(" "+d(r.uploadDate),1)])]))),128))])):(n(),o("div",se,s[8]||(s[8]=[e("div",{class:"text-center"},[e("p",{class:"underline"},"No files found")],-1)])))])])],64)}}};export{ce as default};
