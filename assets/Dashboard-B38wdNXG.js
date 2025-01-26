import{_ as u}from"./teacherNav-BUhn-0PW.js";import{u as f}from"./teacherData-Des5ZfOl.js";import{c as g,f as s,a as e,t as p,u as a,F as h,k as v,o as w,l as j,j as y}from"./index-CwIRFKx0.js";import"./studentData-CoaBhV-D.js";import"./parentsData-nJOEJgqE.js";import"./messageData-C00oRMPq.js";const _={class:"w-full h-screen flex flex-col justify-center items-center gap-8"},b={class:"text-2xl max-sm:text-xl"},C={class:"grid grid-cols-4 max-sm:grid-cols-2 max-sm:grid-rows-3 grid-rows-2 max-sm:gap-5 gap-10"},k={class:"w-24 h-24 max-sm:w-3/5 max-sm:h-16 rounded-xl bg-[#C3861B] flex justify-center items-center"},B={class:"bg-white w-4/6 h-4/6 flex justify-center items-center text-2xl max-sm:text-lg rounded-lg"},$={class:"w-24 h-24 max-sm:w-3/5 max-sm:h-16 rounded-xl bg-[#C3861B] flex justify-center items-center"},S={class:"bg-white w-4/6 h-4/6 flex flex-col justify-center items-center text-2xl max-sm:text-lg rounded-lg"},D={class:"w-24 h-24 max-sm:w-3/5 max-sm:h-16 rounded-xl bg-[#C3861B] flex justify-center items-center"},N={class:"bg-white w-4/6 h-4/6 flex justify-center items-center text-2xl max-sm:text-lg rounded-lg"},T={class:""},P={class:"w-24 h-24 max-sm:w-3/5 max-sm:h-16 rounded-xl bg-[#C3861B] flex justify-center items-center"},E={class:"bg-white w-4/6 h-4/6 flex justify-center items-center text-2xl max-sm:text-lg rounded-lg"},F={class:"w-24 h-24 max-sm:w-3/5 max-sm:h-16 rounded-xl bg-[#C3861B] flex justify-center items-center"},L={class:"bg-white w-4/6 h-4/6 flex justify-center items-center text-2xl max-sm:text-lg rounded-lg"},R={class:"w-24 h-24 max-sm:w-3/5 max-sm:h-16 rounded-xl bg-[#C3861B] flex justify-center items-center"},V={class:"bg-white w-4/6 h-4/6 flex justify-center items-center text-2xl max-sm:text-lg rounded-lg"},z={class:"w-24 h-24 max-sm:w-3/5 max-sm:h-16 rounded-xl bg-[#C3861B] flex justify-center items-center"},G={class:"bg-white w-4/6 h-4/6 flex justify-center items-center text-2xl max-sm:text-lg rounded-lg"},M={__name:"Dashboard",setup(W){const m=f(),x=v(),d=j(),l=Number(x.params.id),c=m.loggedinTeachers.find(r=>r.id===l);function n(r){d.push({name:r,params:{id:l}})}return(r,t)=>{const i=y("font-awesome-icon");return w(),g(h,null,[s(u,{class:"fixed z-50"}),e("div",_,[e("h1",b,"Welcome back "+p(a(c)?a(c).surname:"Gaweseb"),1),e("div",C,[e("div",{onClick:t[0]||(t[0]=o=>n("activities")),class:"flex flex-col justify-center items-center cursor-pointer"},[e("div",k,[e("div",B,[s(i,{icon:"file-pen"})])]),t[7]||(t[7]=e("p",{class:""},"Create activities",-1))]),e("div",{onClick:t[1]||(t[1]=o=>n("teacherStudentSettings")),class:"flex flex-col justify-center items-center cursor-pointer"},[e("div",$,[e("div",S,[s(i,{icon:"graduation-cap",class:"text-xs rotate-5"}),s(i,{icon:"user-pen"})])]),t[8]||(t[8]=e("p",{class:""},"Student settings",-1))]),e("div",{onClick:t[2]||(t[2]=o=>n("teacherSettings")),class:"flex flex-col justify-center items-center cursor-pointer"},[e("div",D,[e("div",N,[e("div",T,[s(i,{icon:"chalkboard-teacher"}),s(i,{icon:"cog",class:"max-sm:text-xs text-lg translate-y-1"})])])]),t[9]||(t[9]=e("p",{class:""},"Teacher settings",-1))]),e("div",{onClick:t[3]||(t[3]=o=>n("teacherEditProfile")),class:"flex flex-col justify-center items-center cursor-pointer"},[e("div",P,[e("div",E,[s(i,{icon:"user-edit"})])]),t[10]||(t[10]=e("p",{class:""},"Subjects",-1))]),e("div",{onClick:t[4]||(t[4]=o=>n("teacherLessonPlanner")),class:"flex flex-col justify-center items-center cursor-pointer"},[e("div",F,[e("div",L,[s(i,{icon:"clipboard-list"})])]),t[11]||(t[11]=e("p",{class:""},"Lesson planner",-1))]),e("div",{onClick:t[5]||(t[5]=o=>n("teacherCreateNotice")),class:"flex flex-col justify-center items-center cursor-pointer"},[e("div",R,[e("div",V,[s(i,{icon:"bullhorn"})])]),t[12]||(t[12]=e("p",{class:""},"Create notice",-1))]),e("div",{onClick:t[6]||(t[6]=o=>n("creationPanel")),class:"flex flex-col justify-center items-center cursor-pointer"},[e("div",z,[e("div",G,[s(i,{icon:"plus-circle"})])]),t[13]||(t[13]=e("p",{class:""},"Creation panel",-1))])])])],64)}}};export{M as default};
