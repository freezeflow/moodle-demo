import{r as s,c as b,f as g,a as t,u as r,b as F,d as j,g as h,x as R,t as z,w as k,v as V,i as C,F as W,k as $,o as f,l as q}from"./index-CwIRFKx0.js";import{_ as A}from"./error-CknHqRNW.js";import{_ as I}from"./successMessage-wI-VHyJP.js";import{_ as P}from"./teacherNav-BUhn-0PW.js";import{D as U}from"./dropdown-CU-M8jxB.js";import{f as a,a as G,i as H}from"./formUtilities-b0G78jVk.js";import{u as J}from"./fileData-BPcDlXXT.js";import{u as K}from"./teacherData-Des5ZfOl.js";import"./studentData-CoaBhV-D.js";import"./parentsData-nJOEJgqE.js";import"./messageData-C00oRMPq.js";/* empty css                                                                 */const Q={class:"w-full h-screen flex flex-col gap-5 justify-center items-center"},X={class:"mt-16"},Y={for:"file-upload",class:"text-blue-600 font-medium cursor-pointer max-sm:text-sm text-center"},Z={key:0},ee={key:1},ve={__name:"Upload file",setup(le){const _=K(),E=$();q();const N=Number(E.params.id),D=s([]),w=s([]);let i=s(),v=s("");const x=_.teachers.find(n=>n.id===N);x.assignedClassesAndSubjects.forEach(n=>{const[e,l]=n.split(" - ");D.value.push(Number(e)),w.value.push(l)});const T=[...new Set(w.value)];let d=s(""),c=s(!1),y=s(!1);const u=s(null),o=s({name:"",note:"",selectedClasses:[],selectedSubjects:[],uploadDate:""}),p=s([]),m=s([]),S=J();a.handleDragOver(),a.handleDragLeave();function B(n){a.handleDrop(n,u)}function L(n){a.handleFileSelect(n,u)}function M(){o.value.name=i.value,o.value.note=v.value||"",o.value.selectedClasses=p,o.value.selectedSubjects=m,o.value.uploadDate=new Date().toLocaleString()}function O(){if(c.value=!1,d.value="",a.checkEmptyFields(p,m)||a.checkEmptyFields(i)){c.value=!0,d.value="There are empty fields",console.log(i.value,p.value,m.value);return}if(!u.value){c.value=!0,d.value="Please add a file",console.log("Error");return}if(!a.allowedFileTypes(G,u.value)){c.value=!0,d.value="Invalid file",console.log(u.value);return}c.value=!1,y.value=!0,d.value="",M(),S.addFile(x.id,o.value.name,o.value.note,o.value.selectedClasses,o.value.selectedSubjects),u.value=null,p.value=[],m.value=[],o.value={name:"",selectedClasses:[],selectedSubjects:[],uploadDate:""},console.log("File added:",S.files)}return(n,e)=>(f(),b(W,null,[g(P,{class:"fixed z-50"}),t("div",Q,[t("div",X,[e[8]||(e[8]=t("h1",{class:"text-2xl text-center"},"Upload files",-1)),r(c)?(f(),F(A,{key:0,"error-message":r(d),class:"mt-2"},null,8,["error-message"])):j("",!0),r(y)?(f(),F(I,{key:1,"success-message":"File successfully uploaded",class:"mt-2"})):j("",!0)]),t("form",{class:"flex flex-col w-full justify-center items-center gap-5",onSubmit:[e[6]||(e[6]=h(()=>{},["prevent"])),e[7]||(e[7]=l=>O())]},[t("div",{class:R(["relative border border-blue-600 w-3/5 h-44 rounded-xl flex justify-center items-center",{"bg-blue-100":r(H)}]),onDragover:e[0]||(e[0]=h((...l)=>r(a).handleDragOver&&r(a).handleDragOver(...l),["prevent"])),onDragleave:e[1]||(e[1]=(...l)=>r(a).handleDragLeave&&r(a).handleDragLeave(...l)),onDrop:h(B,["prevent"])},[t("input",{class:"absolute inset-0 w-full h-full opacity-0 cursor-pointer",type:"file",name:"",id:"",onChange:L},null,32),t("label",Y,[u.value?(f(),b("span",ee,z(u.value.name),1)):(f(),b("span",Z,"Drag and drop files here, or click to select"))])],34),k(t("input",{"onUpdate:modelValue":e[2]||(e[2]=l=>C(i)?i.value=l:i=l),type:"text",name:"",id:"",class:"border border-blue-600 w-3/5 h-8 rounded pl-2",placeholder:"Title"},null,512),[[V,r(i)]]),k(t("input",{"onUpdate:modelValue":e[3]||(e[3]=l=>C(v)?v.value=l:v=l),type:"text",name:"",id:"",class:"border border-blue-600 w-3/5 h-8 rounded pl-2",placeholder:"Note...(optional)"},null,512),[[V,r(v)]]),g(U,{class:"w-3/5",modelValue:p.value,"onUpdate:modelValue":e[4]||(e[4]=l=>p.value=l),"options-width":"dropdownWidth",options:D.value,placeholder:"Select Classes"},null,8,["modelValue","options"]),g(U,{class:"w-3/5",modelValue:m.value,"onUpdate:modelValue":e[5]||(e[5]=l=>m.value=l),"options-width":"dropdownWidth",options:T,placeholder:"Select Subjects"},null,8,["modelValue"]),e[9]||(e[9]=t("div",{class:"w-3/5"},[t("button",{class:"bg-blue-600 max-sm:w-full w-1/5 h-8 rounded text-white cursor-pointer",type:"submit"},"Upload")],-1))],32)])],64))}};export{ve as default};
