import{r as o,c as D,a as e,u as s,b as B,d as E,w as p,v as x,i as c,e as N,f as _,g as I,h as T,j as R,o as M,_ as S}from"./index-D-Va-jl2.js";import{_ as j}from"./error-B3aSxyLj.js";import{f as g}from"./formUtilities-BQ_NIFFl.js";import{u as F}from"./parentsData-CBen2V5Y.js";const G={class:"flex flex-col gap-2 items-center"},q={class:"flex flex-row"},z=["type"],A={class:"flex flex-row"},H=["type"],W={__name:"ParentRegister",setup(J){const P=F();let d=o(""),i=o(""),r=o(""),t=o(""),n=o(""),b=o("eye-slash"),f=o("password"),w=o("eye-slash"),y=o("password"),u=o(""),m=o("");function V(){b.value==="eye-slash"&&f.value==="password"?(b.value="eye",f.value="text"):(b.value="eye-slash",f.value="password")}function k(){w.value==="eye-slash"&&y.value==="password"?(w.value="eye",y.value="text"):(w.value="eye-slash",y.value="password")}function C(){if(g.checkEmptyFields(d,i,t,r,u,m)){n.value="There are empty fields";return}if(!g.validateEmail(r)){n.value="Invalid email";return}if(!(g.validateMobileNumber(t,"081",10)||g.validateMobileNumber(t,"+26481",13))){n.value="Invalid mobile number";return}if(u.value!==m.value){n.value="Passwords do not match";return}if(P.parents.find(v=>v.email===r.value||v.mobileNum===t.value)){n.value="Parent already registered";return}P.addParent(d.value,i.value,r.value,t.value,u.value);const h=P.parents.find(v=>v.email===r.value&&v.mobileNum===t.value),a=Number(h.id);T.push({name:"parentDashboard",params:{id:a}})}return(U,l)=>{const h=R("font-awesome-icon");return M(),D("main",null,[l[8]||(l[8]=e("img",{class:"w-10 ml-5 mt-5 absolute",src:S,alt:""},null,-1)),e("form",{onSubmit:l[6]||(l[6]=I(()=>{},["prevent"])),class:"w-full h-screen flex flex-col gap-5 justify-center items-center",action:""},[e("div",G,[l[7]||(l[7]=e("h1",{class:"text-xl"},"Parent/Guardian Sign up",-1)),s(n)?(M(),B(j,{key:0,"error-message":s(n)},null,8,["error-message"])):E("",!0)]),e("div",null,[p(e("input",{"onUpdate:modelValue":l[0]||(l[0]=a=>c(d)?d.value=a:d=a),class:"border border-blue-600 rounded h-8 w-56 pl-2",type:"text",name:"name",id:"name",placeholder:"Name"},null,512),[[x,s(d)]])]),e("div",null,[p(e("input",{"onUpdate:modelValue":l[1]||(l[1]=a=>c(i)?i.value=a:i=a),class:"border border-blue-600 rounded h-8 w-56 pl-2",type:"text",name:"surname",id:"surname",placeholder:"Surname"},null,512),[[x,s(i)]])]),e("div",null,[p(e("input",{"onUpdate:modelValue":l[2]||(l[2]=a=>c(r)?r.value=a:r=a),class:"border border-blue-600 rounded h-8 w-56 pl-2",type:"text",name:"email",id:"email",placeholder:"Email"},null,512),[[x,s(r)]])]),e("div",null,[p(e("input",{"onUpdate:modelValue":l[3]||(l[3]=a=>c(t)?t.value=a:t=a),class:"border border-blue-600 rounded h-8 w-56 pl-2",type:"text",name:"contact",id:"contact",placeholder:"Mobile number"},null,512),[[x,s(t)]])]),e("div",q,[p(e("input",{"onUpdate:modelValue":l[4]||(l[4]=a=>c(u)?u.value=a:u=a),class:"border border-blue-600 rounded-l h-8 w-48 pl-2",type:s(f),name:"",placeholder:"Password"},null,8,z),[[N,s(u)]]),e("button",{class:"w-8 h-8 bg-blue-600 rounded-r",onClick:V},[_(h,{icon:s(b)},null,8,["icon"])])]),e("div",A,[p(e("input",{"onUpdate:modelValue":l[5]||(l[5]=a=>c(m)?m.value=a:m=a),class:"border border-blue-600 rounded-l h-8 w-48 pl-2",type:s(y),name:"",placeholder:"Confirm password"},null,8,H),[[N,s(m)]]),e("button",{class:"w-8 h-8 bg-blue-600 rounded-r",onClick:k},[_(h,{icon:s(w)},null,8,["icon"])])]),e("div",{class:"w-60 pl-2"},[e("button",{class:"bg-blue-600 w-32 h-8 text-white rounded",type:"submit",onClick:C},"Register")])],32)])}}};export{W as default};