import{j as t,au as v,a8 as i,av as e,aw as u}from"./runtime.C4Zm_SMD.js";import{a as h}from"./events.0FsKVZzb.js";function A(r){if(t){var s=!1,a=()=>{if(!s){if(s=!0,r.hasAttribute("value")){var o=r.value;d(r,"value",null),r.value=o}if(r.hasAttribute("checked")){var _=r.checked;d(r,"checked",null),r.checked=_}}};r.__on_r=a,v(a),h()}}function n(r,s){var a=r.__attributes??(r.__attributes={});a.value===(a.value=s)||r.value===s&&(s!==0||r.nodeName!=="PROGRESS")||(r.value=s)}function d(r,s,a,o){var _=r.__attributes??(r.__attributes={});t&&(_[s]=r.getAttribute(s),s==="src"||s==="srcset"||s==="href"&&r.nodeName==="LINK")||_[s]!==(_[s]=a)&&(s==="style"&&"__styles"in r&&(r.__styles={}),s==="loading"&&(r[e]=a),a==null?r.removeAttribute(s):typeof a!="string"&&g(r).includes(s)?r[s]=a:r.setAttribute(s,a))}var c=new Map;function g(r){var s=c.get(r.nodeName);if(s)return s;c.set(r.nodeName,s=[]);for(var a,o=i(r),_=Element.prototype;_!==o;){a=u(o);for(var f in a)a[f].set&&s.push(f);o=i(o)}return s}export{n as a,A as r,d as s};
