import{ac as t,o as _,u as l,a9 as m}from"./runtime.C4Zm_SMD.js";import{l as p}from"./index.BFqC5wTN.js";function r(e){throw new Error("lifecycle_outside_component")}function v(e){t===null&&r(),p&&t.l!==null?y(t).m.push(e):_(()=>{const n=l(e);if(typeof n=="function")return n})}function h(e){t===null&&r(),v(()=>()=>l(e))}function d(e,n,{bubbles:c=!1,cancelable:a=!1}={}){return new CustomEvent(e,{detail:n,bubbles:c,cancelable:a})}function k(){const e=t;return e===null&&r(),(n,c,a)=>{var s;const o=(s=e.s.$$events)==null?void 0:s[n];if(o){const f=m(o)?o.slice():[o],u=d(n,c,a);for(const i of f)i.call(e.x,u);return!u.defaultPrevented}return!0}}function y(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}export{h as a,k as c,v as o};
