import{r as d,c as n,f as k,a as l,u as t,n as c,t as p,d as y,b as V,g as C,w as r,v as f,q as h,F as v,p as g,k as D,o}from"./index-D-Va-jl2.js";import{_ as A}from"./teacherNav-CHd_82Ql.js";import{_ as M}from"./backComponent-DKgl23DX.js";import{_ as T}from"./error-B3aSxyLj.js";import{_ as B}from"./successMessage-DTJ0GUfD.js";import{u as $}from"./teacherData-e-uUSn8Y.js";import{u as F}from"./quizData-D5duW6vz.js";import{c as G}from"./constants-Bw5y3ypq.js";import{f as P}from"./formUtilities-BQ_NIFFl.js";import"./studentData-CueDiwWW.js";import"./parentsData-CBen2V5Y.js";import"./messageData-CgJ8COl1.js";const I={class:"w-full pt-20"},L={class:"w-full pl-5"},R={class:"w-full flex flex-col justify-center items-center gap-4"},H={class:"w-full flex flex-col justify-center items-center gap-2"},J={class:"text-2xl text-center"},K={key:0},W={key:0,class:"w-full flex flex-col gap-4"},X={class:"w-full flex flex-row"},Y={class:"w-1/2 flex flex-col"},Z=["value"],ee={class:"w-3/5 flex flex-row"},se={class:"w-full flex flex-col"},le=["value"],te={class:"w-full flex flex-col"},ue=["value"],oe={key:1},ne=["onUpdate:modelValue"],re=["onUpdate:modelValue"],ae=["onUpdate:modelValue"],qe={__name:"Quiz",setup(ie){const j=D(),U=$(),O=F(),q=d([]),Q=d([]),x=Number(j.params.id);let _=d(!1),i=d(""),b=d(""),e=d({title:"",note:"",subjects:"",grades:"",classes:"",numOfQuestions:"",questions:[],answers:[],points:[]});U.loggedinTeachers.find(w=>w.id===x).assignedClassesAndSubjects.forEach(w=>{const[s,u]=w.split(" - ");q.value.push(Number(s)),Q.value.push(u)});const S=[...new Set(Q.value)],z=[...new Set(q.value)];function N(){if(P.checkEmptyFields(e.value.title,e.value.subjects)){i.value="Please fill out all required fields.",console.log(e.value.title,e.value.grades,e.value.subjects);return}if(!Number.isInteger(Number(e.value.numOfQuestions))||e.value.numOfQuestions<=0){i.value="Please enter a valid number of questions.",console.log(e.value.numOfQuestions);return}i.value="",b.value="",e.value.questions=Array.from({length:e.value.numOfQuestions},()=>""),e.value.answers=Array.from({length:e.value.numOfQuestions},()=>""),e.value.points=Array.from({length:e.value.numOfQuestions},()=>""),_.value=!0}function E(){if(e.value.questions.includes("")||e.value.answers.includes("")||e.value.points.includes("")){i.value="All fields must be filled out.";return}O.addQuiz(x,e.value.title,e.value.note,e.value.subjects,e.value.grades,e.value.classes,e.value.numOfQuestions,e.value.questions,e.value.answers,e.value.points),b.value="Quiz successfully created!",_.value=!1,numOfQuestions.value="",e.value={questions:[],answers:[],points:[]},console.log(e)}return(w,s)=>(o(),n(v,null,[k(A,{class:"fixed z-50"}),l("div",I,[l("div",L,[k(M,{link:"activities",id:t(x)},null,8,["id"])]),l("div",R,[l("div",H,[l("h2",J,[s[7]||(s[7]=c("Create ")),t(e).title?(o(),n("span",K,p(t(e).title),1)):y("",!0),s[8]||(s[8]=c(" quiz"))]),t(i)?(o(),V(T,{key:0,"error-message":t(i)},null,8,["error-message"])):y("",!0),t(b)?(o(),V(B,{key:1,"success-message":t(b)},null,8,["success-message"])):y("",!0)]),l("form",{class:"w-2/5 max-md:w-4/5 flex flex-col gap-4",onSubmit:s[6]||(s[6]=C(()=>{},["prevent"]))},[t(_)?(o(),n("div",oe,[(o(!0),n(v,null,g(t(e).questions,(u,a)=>(o(),n("div",{key:a,class:"flex flex-col gap-2"},[l("label",null,"Question "+p(a+1),1),r(l("input",{"onUpdate:modelValue":m=>t(e).questions[a]=m,placeholder:"Enter question",type:"text",class:"border border-blue-600 pl-2 w-full h-8 rounded"},null,8,ne),[[f,t(e).questions[a]]]),r(l("input",{"onUpdate:modelValue":m=>t(e).answers[a]=m,placeholder:"Enter answer",type:"text",class:"border border-blue-600 pl-2 w-full h-8 rounded"},null,8,re),[[f,t(e).answers[a]]]),r(l("input",{"onUpdate:modelValue":m=>t(e).points[a]=m,placeholder:"Enter points",type:"number",min:"0",class:"border border-blue-600 pl-2 w-full h-8 rounded"},null,8,ae),[[f,t(e).points[a]]])]))),128)),l("button",{onClick:E,type:"submit",class:"w-full h-8 bg-green-600 rounded text-white mt-4"},"Save Quiz")])):(o(),n("div",W,[l("div",null,[s[9]||(s[9]=c(" Title: ")),r(l("input",{"onUpdate:modelValue":s[0]||(s[0]=u=>t(e).title=u),type:"text",class:"border border-blue-600 pl-2 w-full h-8 rounded"},null,512),[[f,t(e).title]])]),l("div",null,[s[10]||(s[10]=c(" Optional note: ")),r(l("input",{"onUpdate:modelValue":s[1]||(s[1]=u=>t(e).note=u),type:"text",class:"border border-blue-600 pl-2 w-full h-8 rounded"},null,512),[[f,t(e).note]])]),l("div",X,[l("div",Y,[s[11]||(s[11]=l("label",{for:""},"Subjects:",-1)),r(l("select",{"onUpdate:modelValue":s[2]||(s[2]=u=>t(e).subjects=u),name:"",id:"",class:"border border-blue-600 rounded h-8 w-4/5 cursor-pointer"},[(o(),n(v,null,g(S,u=>l("option",{key:u,value:u},p(u),9,Z)),64))],512),[[h,t(e).subjects]])]),l("div",ee,[l("div",se,[s[12]||(s[12]=l("label",{for:""},"Grade:",-1)),r(l("select",{"onUpdate:modelValue":s[3]||(s[3]=u=>t(e).grades=u),name:"",id:"",class:"border border-blue-600 rounded h-8 cursor-pointer"},[(o(),n(v,null,g(z,u=>l("option",{key:u,value:u},p(u),9,le)),64))],512),[[h,t(e).grades]])]),l("div",te,[s[13]||(s[13]=l("label",{for:""},"Class(optional):",-1)),r(l("select",{"onUpdate:modelValue":s[4]||(s[4]=u=>t(e).classes=u),name:"",id:"",class:"border border-blue-600 rounded h-8 cursor-pointer"},[(o(!0),n(v,null,g(t(G).classes.value,u=>(o(),n("option",{key:u,value:u},p(u),9,ue))),128))],512),[[h,t(e).classes]])])])]),l("div",null,[s[14]||(s[14]=c(" Enter number of questions: ")),r(l("input",{"onUpdate:modelValue":s[5]||(s[5]=u=>t(e).numOfQuestions=u),type:"number",min:"1",class:"border border-blue-600 pl-2 w-full h-8 rounded"},null,512),[[f,t(e).numOfQuestions]])]),l("button",{onClick:N,class:"w-full h-8 bg-blue-600 rounded text-white"},"Start")]))],32)])])],64))}};export{qe as default};