import"./disclose-version.Bg9kRutz.js";import"./legacy.CtaTdtmd.js";import{a as h,t as y}from"./template.DSd8qUyh.js";import{p as L,t as I,a as M,s as f,c as x,r as v}from"./runtime.C4Zm_SMD.js";import{s as V}from"./render.CDLKzv1_.js";import{i as B}from"./if.DE9gnGtz.js";import{s as D}from"./slot.BsP6Jqie.js";import{r as E,s as d,a as P}from"./attributes.D8pdVHUB.js";import{e as S,d as T}from"./events.0FsKVZzb.js";import{i as H}from"./lifecycle.BqYKJ8Hp.js";import{p as r}from"./props.BEAp8kY0.js";import{c as j}from"./index-client.BQR9iTQS.js";import{M as N}from"./common.C1ZTChvC.js";import"./entry.5HYBzXlr.js";import{a as u}from"./notification.DABGdHs6.js";var O=y('<div class="fixed bottom-0 left-0 z-10 flex h-screen w-screen items-center justify-center rounded-xl bg-black bg-opacity-10"><div class="flex items-center"><span class="mr-4 text-3xl text-black">Loading</span> <svg class="h-8 w-8 animate-spin text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div></div>');function de(a){var e=O();h(a,e)}var U=y('<input class="w-full rounded-md p-2 md:w-[70%] svelte-1w19983">'),X=y('<div class="mb-4 lg:min-w-[800px] md:min-w-[600px] items-center md:flex md:gap-0 !gap-4"><label class="pr-4 mb-2 md:mb-0 md:text-[16px] text-xs font-bold text-gray-600 md:w-[30%] md:text-left"> </label> <!> <!></div>');function ce(a,e){L(e,!1);let s=r(e,"bindValue",8),c=r(e,"text",8),g=r(e,"placeholder",8),w=r(e,"customInput",8,!1),m=r(e,"type",8,"text");const i=j();function _(n){const t=n.target;i("update",t.value)}H();var o=X(),l=x(o),b=x(l,!0);v(l);var p=f(l,2);B(p,()=>!w(),n=>{var t=U();E(t),I(()=>{d(t,"type",m()),P(t,s()),d(t,"placeholder",g())}),S("input",t,_),h(n,t)});var k=f(p,2);D(k,e,"default",{},null),v(o),I(()=>V(b,c())),h(a,o),M()}var Z=(a,e,s)=>{const c=a.target;e("update",{value:c.value,index:s.indexArr})},q=(a,e,s)=>e(a,s.indexArr),G=y('<div class="mb-4 lg:min-w-[800px] md:min-w-[600px] items-center md:flex gap-3"><label class="md:text-[15px] leading-5 text-xs pr-4 mb-2 md:mb-0 font-bold text-gray-600 md:w-[30%] md:text-left"> </label> <div class="flex w-full gap-2 md:w-[70%]"><input disabled type="text" class="flex-1 rounded-md p-2 svelte-p4kol9"> <label class="group relative inline-block cursor-pointer px-2 py-2 md:px-4 md:py-2 font-medium"><span class="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-black transition duration-200 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span> <span class="absolute inset-0 h-full w-full border-2 border-black bg-white group-hover:bg-black"></span> <span class="relative text-xs md:text-[16px] text-black group-hover:text-white">Upload</span></label> <input class="hidden rounded-md p-2 svelte-p4kol9" type="file" accept="image/*"></div></div>');function me(a,e){L(e,!0);let s=r(e,"loading",7,!1),c=r(e,"placeholder",3,"https://placehold.co/315x340");const g=j(),w=async(k,n)=>{var z;const t=k.target.files[0];if(console.log("selectedFile",t),!t){u({message:"No file selected.",type:"error"});return}if(t.size>N){u({message:"File size exceeds 2MB.",type:"error"});return}const A=new FormData;A.append("image",t),s(!0);try{const F=await fetch("http://localhost:3000/api/upload",{method:"POST",body:A});if(F.ok){const C=(await F.json()).filePath;u({message:"File uploaded successfully",type:"success"}),g("update",{value:C,index:n}),(z=e.customFuncion)==null||z.call(e,C,n)}else u({message:"File upload failed.",type:"error"})}catch{u({message:"File upload failed.",type:"error"})}finally{s(!1)}};var m=G(),i=x(m),_=x(i,!0);v(i);var o=f(i,2),l=x(o);E(l),l.__input=[Z,g,e];var b=f(l,2),p=f(b,2);p.__change=[q,w,e],v(o),v(m),I(()=>{d(i,"for",`upload-${e.indexArr??""}`),V(_,e.text),P(l,e.bindValue),d(l,"placeholder",c()),d(b,"for",`upload-${e.indexArr??""}`),d(p,"id",`upload-${e.indexArr??""}`)}),h(a,m),M()}T(["input","change"]);export{ce as I,de as L,me as a};
