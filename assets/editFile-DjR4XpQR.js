import{r as n,m as j,A as V,c as p,a as l,u as h,b as k,d as y,w as D,v as F,f as b,g as B,k as N,o as u,l as E}from"./index-CwIRFKx0.js";import{u as A}from"./fileData-BPcDlXXT.js";import{D as v}from"./dropdown-CU-M8jxB.js";import{_ as M}from"./successMessage-wI-VHyJP.js";/* empty css                                                                 */const T={key:0,class:"w-full h-screen flex flex-col justify-center items-center gap-2"},U={class:"flex flex-col w-full items-center"},_={class:"flex flex-col w-full items-center"},G={class:"flex flex-col w-full items-center"},O={key:1},H={__name:"editFile",setup(P){var r,c,m;const x=N(),w=E(),o=Number(x.params.id),S=n(["8A","8B","8C","9A","9B","9C"]),g=n(["Mathematics","Physical science"]),i=A();let d=n(!1);const t=j(()=>i.files.find(f=>f.id===o)),s=V({name:((r=t.value)==null?void 0:r.name)||"",selectedClasses:((c=t.value)==null?void 0:c.selectedClasses)||[],selectedSubjects:((m=t.value)==null?void 0:m.selectedSubjects)||[],uploadDate:new Date().toLocaleString()||""});t.value?s.value={...t.value}:console.warn("No file found with the given id:",o);function C(){if(!s.name||s.selectedClasses.length===0||s.selectedSubjects.length===0){alert("Please fill out all fields.");return}i.updateFile(o,s.name,s.selectedClasses,s.selectedSubjects),d.value=!0,w.push({name:"teacherEditFiles"})}return(f,e)=>t.value?(u(),p("div",T,[l("div",null,[e[3]||(e[3]=l("h1",{class:"text-xl text-center"},"Edit File Details",-1)),h(d)?(u(),k(M,{key:0,"success-message":"Changes saved"})):y("",!0)]),l("form",{onSubmit:B(C,["prevent"]),class:"flex flex-col gap-4 w-full items-center"},[l("label",U,[e[4]||(e[4]=l("span",{class:"w-2/5 text-lg"},"Title:",-1)),D(l("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>s.name=a),class:"pl-2 border border-blue-600 rounded-md h-8 w-2/5"},null,512),[[F,s.name]])]),l("label",_,[e[5]||(e[5]=l("span",{class:"w-2/5 text-lg"},"Grades:",-1)),b(v,{class:"w-2/5",modelValue:s.selectedClasses,"onUpdate:modelValue":e[1]||(e[1]=a=>s.selectedClasses=a),options:S.value,placeholder:"Select Grade & class"},null,8,["modelValue","options"])]),l("label",G,[e[6]||(e[6]=l("span",{class:"w-2/5 text-lg"},"Subject:",-1)),b(v,{class:"w-2/5",modelValue:s.selectedSubjects,"onUpdate:modelValue":e[2]||(e[2]=a=>s.selectedSubjects=a),options:g.value,placeholder:"Select Subjects"},null,8,["modelValue","options"])]),e[7]||(e[7]=l("button",{type:"submit",class:"bg-blue-500 text-white h-8 rounded w-2/5"},"Save Changes",-1))],32)])):(u(),p("div",O,e[8]||(e[8]=[l("p",null,"No File found to edit.",-1)])))}};export{H as default};
