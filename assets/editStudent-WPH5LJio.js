import{r,m as N,A as j,c as n,a as s,u as B,b as h,d as k,w as d,v as x,q as V,F as A,p as D,f as E,g as M,k as U,o,t as F,l as _}from"./index-CwIRFKx0.js";import{u as G}from"./studentData-CoaBhV-D.js";import{D as L}from"./dropdown-CU-M8jxB.js";import{_ as P}from"./successMessage-wI-VHyJP.js";/* empty css                                                                 */const R={key:0,class:"w-full h-screen flex flex-col justify-center items-center gap-2"},T={class:"flex flex-col w-full items-center"},q={class:"flex flex-col w-full items-center"},H={class:"flex flex-col w-full items-center"},O=["value"],$={class:"flex flex-col w-full items-center"},z={key:1},Y={__name:"editStudent",setup(I){var m,p,f,b;const w=U(),S=_(),u=Number(w.params.id),g=r(["8A","8B","8C","9A","9B","9C","10A","10B","10C","11A","11B","11C","12A","12B","12C"]),C=r(["Afrikaans","English","Mathematics","Accounting","Entreprenuership","Biology","Physical science","Chemistry","History","Geography"]),i=G();let c=r(!1);const a=N(()=>i.students.find(v=>v.id===u)),t=j({name:((m=a.value)==null?void 0:m.name)||"",surName:((p=a.value)==null?void 0:p.surname)||"",selectedClass:((f=a.value)==null?void 0:f.selectedClass)||"",selectedSubjects:((b=a.value)==null?void 0:b.selectedSubjects)||[],uploadDate:new Date().toLocaleString()||""});a.value?t.value={...a.value}:console.warn("No student found with the given id:",u);function y(){if(!t.name||!t.selectedClass||t.selectedSubjects.length===0){alert("Please fill out all fields.");return}i.updateStudent(u,t.name,t.surName,t.selectedClass,t.selectedSubjects),c.value=!0,S.push({name:"editStudent"})}return(v,e)=>a.value?(o(),n("div",R,[s("div",null,[e[4]||(e[4]=s("h1",{class:"text-xl text-center"},"Edit Student Details",-1)),B(c)?(o(),h(P,{key:0,"success-message":"Changes saved"})):k("",!0)]),s("form",{onSubmit:M(y,["prevent"]),class:"flex flex-col gap-4 w-full items-center"},[s("label",T,[e[5]||(e[5]=s("span",{class:"w-2/5 text-lg"},"Name:",-1)),d(s("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=l=>t.name=l),class:"pl-2 border border-blue-600 rounded-md h-8 w-2/5"},null,512),[[x,t.name]])]),s("label",q,[e[6]||(e[6]=s("span",{class:"w-2/5 text-lg"},"Surname:",-1)),d(s("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=l=>t.surName=l),class:"pl-2 border border-blue-600 rounded-md h-8 w-2/5"},null,512),[[x,t.surName]])]),s("label",H,[e[7]||(e[7]=s("span",{class:"w-2/5 text-lg"},"Select Grade:",-1)),d(s("select",{"onUpdate:modelValue":e[2]||(e[2]=l=>t.selectedClass=l),name:"",id:"",class:"border border-blue-600 rounded h-8 cursor-pointer w-2/5"},[(o(!0),n(A,null,D(g.value,l=>(o(),n("option",{key:l,value:l},F(l),9,O))),128))],512),[[V,t.selectedClass]])]),s("label",$,[e[8]||(e[8]=s("span",{class:"w-2/5 text-lg"},"Subject:",-1)),E(L,{class:"w-2/5",modelValue:t.selectedSubjects,"onUpdate:modelValue":e[3]||(e[3]=l=>t.selectedSubjects=l),options:C.value,placeholder:"Select Subjects"},null,8,["modelValue","options"])]),e[9]||(e[9]=s("button",{type:"submit",class:"bg-blue-500 text-white h-8 rounded w-2/5"},"Save Changes",-1))],32)])):(o(),n("div",z,e[10]||(e[10]=[s("p",null,"No file found to edit.",-1)])))}};export{Y as default};
