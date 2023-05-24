import{d,i as _,a as u,u as p,b as h,c as m,e as g,f as n,g as t,t as o,h as a,F as f,r as v,n as x,j as y,o as r,k as b,l as S,m as k,p as w,q as N,_ as P}from"./index-a1e7f85d.js";import{N as B}from"./NoteDisplay-76e7b913.js";const C={class:"m-4"},V={class:"mb-10"},j={class:"text-4xl font-bold mt-2"},L={class:"opacity-50"},T={class:"text-lg"},D={class:"font-bold flex gap-2"},E={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},F=d({__name:"PresenterPrint",setup(M){_(u),p(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),h({title:`Notes - ${m.title}`});const l=g(()=>y.slice(0,-1).map(s=>{var i;return(i=s.meta)==null?void 0:i.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,i)=>(r(),n("div",{id:"page-root",style:x(a(N))},[t("div",C,[t("div",V,[t("h1",j,o(a(m).title),1),t("div",L,o(new Date().toLocaleString()),1)]),(r(!0),n(f,null,v(a(l),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",T,[t("div",D,[t("div",E,o(e==null?void 0:e.no)+"/"+o(a(b)),1),S(" "+o(e==null?void 0:e.title)+" ",1),H])]),k(B,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(l).length-1?(r(),n("hr",z)):w("v-if",!0)]))),128))])],4))}}),R=P(F,[["__file","/home/runner/work/SoftwareEngineeringBusinessCaseStudies/SoftwareEngineeringBusinessCaseStudies/travelagency/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{R as default};
