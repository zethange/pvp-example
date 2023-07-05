(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const re=(e,n)=>e===n,ue=Symbol("solid-track"),M={equals:re};let fe=se;const E=1,U=2,Z={owned:null,cleanups:null,context:null,owner:null};var b=null;let K=null,h=null,v=null,C=null,D=0;function B(e,n){const t=h,l=b,s=e.length===0,o=s?Z:{owned:null,cleanups:null,context:null,owner:n===void 0?l:n},u=s?e:()=>e(()=>_(()=>J(o)));b=o,h=null;try{return I(u,!0)}finally{h=t,b=l}}function O(e,n){n=n?Object.assign({},M,n):M;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},l=s=>(typeof s=="function"&&(s=s(t.value)),ee(t,s));return[z.bind(t),l]}function P(e,n,t){const l=te(e,n,!1,E);F(l)}function R(e,n,t){t=t?Object.assign({},M,t):M;const l=te(e,n,!0,0);return l.observers=null,l.observerSlots=null,l.comparator=t.equals||void 0,F(l),z.bind(l)}function _(e){if(h===null)return e();const n=h;h=null;try{return e()}finally{h=n}}function ce(e){return b===null||(b.cleanups===null?b.cleanups=[e]:b.cleanups.push(e)),e}function z(){if(this.sources&&this.state)if(this.state===E)F(this);else{const e=v;v=null,I(()=>j(this),!1),v=e}if(h){const e=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(e)):(h.sources=[this],h.sourceSlots=[e]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return this.value}function ee(e,n,t){let l=e.value;return(!e.comparator||!e.comparator(l,n))&&(e.value=n,e.observers&&e.observers.length&&I(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s],u=K&&K.running;u&&K.disposed.has(o),(u?!o.tState:!o.state)&&(o.pure?v.push(o):C.push(o),o.observers&&le(o)),u||(o.state=E)}if(v.length>1e6)throw v=[],new Error},!1)),n}function F(e){if(!e.fn)return;J(e);const n=b,t=h,l=D;h=b=e,ae(e,e.value,l),h=t,b=n}function ae(e,n,t){let l;try{l=e.fn(n)}catch(s){return e.pure&&(e.state=E,e.owned&&e.owned.forEach(J),e.owned=null),e.updatedAt=t+1,oe(s)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?ee(e,l):e.value=l,e.updatedAt=t)}function te(e,n,t,l=E,s){const o={fn:e,state:l,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:b,context:null,pure:t};return b===null||b!==Z&&(b.owned?b.owned.push(o):b.owned=[o]),o}function ne(e){if(e.state===0)return;if(e.state===U)return j(e);if(e.suspense&&_(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<D);)e.state&&n.push(e);for(let t=n.length-1;t>=0;t--)if(e=n[t],e.state===E)F(e);else if(e.state===U){const l=v;v=null,I(()=>j(e,n[0]),!1),v=l}}function I(e,n){if(v)return e();let t=!1;n||(v=[]),C?t=!0:C=[],D++;try{const l=e();return de(t),l}catch(l){t||(C=null),v=null,oe(l)}}function de(e){if(v&&(se(v),v=null),e)return;const n=C;C=null,n.length&&I(()=>fe(n),!1)}function se(e){for(let n=0;n<e.length;n++)ne(e[n])}function j(e,n){e.state=0;for(let t=0;t<e.sources.length;t+=1){const l=e.sources[t];if(l.sources){const s=l.state;s===E?l!==n&&(!l.updatedAt||l.updatedAt<D)&&ne(l):s===U&&j(l,n)}}}function le(e){for(let n=0;n<e.observers.length;n+=1){const t=e.observers[n];t.state||(t.state=U,t.pure?v.push(t):C.push(t),t.observers&&le(t))}}function J(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),l=e.sourceSlots.pop(),s=t.observers;if(s&&s.length){const o=s.pop(),u=t.observerSlots.pop();l<s.length&&(o.sourceSlots[u]=l,s[l]=o,t.observerSlots[l]=u)}}if(e.owned){for(n=e.owned.length-1;n>=0;n--)J(e.owned[n]);e.owned=null}if(e.cleanups){for(n=e.cleanups.length-1;n>=0;n--)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function oe(e){throw e}const pe=Symbol("fallback");function H(e){for(let n=0;n<e.length;n++)e[n]()}function he(e,n,t={}){let l=[],s=[],o=[],u=0,i=n.length>1?[]:null;return ce(()=>H(o)),()=>{let a=e()||[],f,r;return a[ue],_(()=>{let p=a.length,w,$,x,d,m,g,y,A,L;if(p===0)u!==0&&(H(o),o=[],l=[],s=[],u=0,i&&(i=[])),t.fallback&&(l=[pe],s[0]=B(ie=>(o[0]=ie,t.fallback())),u=1);else if(u===0){for(s=new Array(p),r=0;r<p;r++)l[r]=a[r],s[r]=B(c);u=p}else{for(x=new Array(p),d=new Array(p),i&&(m=new Array(p)),g=0,y=Math.min(u,p);g<y&&l[g]===a[g];g++);for(y=u-1,A=p-1;y>=g&&A>=g&&l[y]===a[A];y--,A--)x[A]=s[y],d[A]=o[y],i&&(m[A]=i[y]);for(w=new Map,$=new Array(A+1),r=A;r>=g;r--)L=a[r],f=w.get(L),$[r]=f===void 0?-1:f,w.set(L,r);for(f=g;f<=y;f++)L=l[f],r=w.get(L),r!==void 0&&r!==-1?(x[r]=s[f],d[r]=o[f],i&&(m[r]=i[f]),r=$[r],w.set(L,r)):o[f]();for(r=g;r<p;r++)r in x?(s[r]=x[r],o[r]=d[r],i&&(i[r]=m[r],i[r](r))):s[r]=B(c);s=s.slice(0,u=p),l=a.slice(0)}return s});function c(p){if(o[r]=p,i){const[w,$]=O(r);return i[r]=$,n(a[r],w)}return n(a[r])}}}function T(e,n){return _(()=>e(n||{}))}const ge=e=>`Stale read from <${e}>.`;function V(e){const n="fallback"in e&&{fallback:()=>e.fallback};return R(he(()=>e.each,e.children,n||void 0))}function W(e){const n=e.keyed,t=R(()=>e.when,void 0,{equals:(l,s)=>n?l===s:!l==!s});return R(()=>{const l=t();if(l){const s=e.children;return typeof s=="function"&&s.length>0?_(()=>s(n?l:()=>{if(!_(t))throw ge("Show");return e.when})):s}return e.fallback},void 0,void 0)}function ye(e,n,t){let l=t.length,s=n.length,o=l,u=0,i=0,a=n[s-1].nextSibling,f=null;for(;u<s||i<o;){if(n[u]===t[i]){u++,i++;continue}for(;n[s-1]===t[o-1];)s--,o--;if(s===u){const r=o<l?i?t[i-1].nextSibling:t[o-i]:a;for(;i<o;)e.insertBefore(t[i++],r)}else if(o===i)for(;u<s;)(!f||!f.has(n[u]))&&n[u].remove(),u++;else if(n[u]===t[o-1]&&t[i]===n[s-1]){const r=n[--s].nextSibling;e.insertBefore(t[i++],n[u++].nextSibling),e.insertBefore(t[--o],r),n[s]=t[o]}else{if(!f){f=new Map;let c=i;for(;c<o;)f.set(t[c],c++)}const r=f.get(n[u]);if(r!=null)if(i<r&&r<o){let c=u,p=1,w;for(;++c<s&&c<o&&!((w=f.get(n[c]))==null||w!==r+p);)p++;if(p>r-i){const $=n[u];for(;i<r;)e.insertBefore(t[i++],$)}else e.replaceChild(t[i++],n[u++])}else u++;else n[u++].remove()}}}const Q="_$DX_DELEGATE";function we(e,n,t,l={}){let s;return B(o=>{s=o,n===document?e():S(n,e(),n.firstChild?null:void 0,t)},l.owner),()=>{s(),n.textContent=""}}function k(e,n,t){let l;const s=()=>{const u=document.createElement("template");return u.innerHTML=e,t?u.content.firstChild.firstChild:u.content.firstChild},o=n?()=>_(()=>document.importNode(l||(l=s()),!0)):()=>(l||(l=s())).cloneNode(!0);return o.cloneNode=o,o}function me(e,n=window.document){const t=n[Q]||(n[Q]=new Set);for(let l=0,s=e.length;l<s;l++){const o=e[l];t.has(o)||(t.add(o),n.addEventListener(o,ve))}}function be(e,n,t){t==null?e.removeAttribute(n):e.setAttribute(n,t)}function S(e,n,t,l){if(t!==void 0&&!l&&(l=[]),typeof n!="function")return q(e,n,l,t);P(s=>q(e,n(),s,t),l)}function ve(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}});t;){const l=t[n];if(l&&!t.disabled){const s=t[`${n}Data`];if(s!==void 0?l.call(t,s,e):l.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function q(e,n,t,l,s){for(;typeof t=="function";)t=t();if(n===t)return t;const o=typeof n,u=l!==void 0;if(e=u&&t[0]&&t[0].parentNode||e,o==="string"||o==="number")if(o==="number"&&(n=n.toString()),u){let i=t[0];i&&i.nodeType===3?i.data=n:i=document.createTextNode(n),t=N(e,t,l,i)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n;else if(n==null||o==="boolean")t=N(e,t,l);else{if(o==="function")return P(()=>{let i=n();for(;typeof i=="function";)i=i();t=q(e,i,t,l)}),()=>t;if(Array.isArray(n)){const i=[],a=t&&Array.isArray(t);if(G(i,n,t,s))return P(()=>t=q(e,i,t,l,!0)),()=>t;if(i.length===0){if(t=N(e,t,l),u)return t}else a?t.length===0?X(e,i,l):ye(e,t,i):(t&&N(e),X(e,i));t=i}else if(n.nodeType){if(Array.isArray(t)){if(u)return t=N(e,t,l,n);N(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}else console.warn("Unrecognized value. Skipped inserting",n)}return t}function G(e,n,t,l){let s=!1;for(let o=0,u=n.length;o<u;o++){let i=n[o],a=t&&t[o],f;if(!(i==null||i===!0||i===!1))if((f=typeof i)=="object"&&i.nodeType)e.push(i);else if(Array.isArray(i))s=G(e,i,a)||s;else if(f==="function")if(l){for(;typeof i=="function";)i=i();s=G(e,Array.isArray(i)?i:[i],Array.isArray(a)?a:[a])||s}else e.push(i),s=!0;else{const r=String(i);a&&a.nodeType===3&&a.data===r?e.push(a):e.push(document.createTextNode(r))}}return s}function X(e,n,t=null){for(let l=0,s=n.length;l<s;l++)e.insertBefore(n[l],t)}function N(e,n,t,l){if(t===void 0)return e.textContent="";const s=l||document.createTextNode("");if(n.length){let o=!1;for(let u=n.length-1;u>=0;u--){const i=n[u];if(s!==i){const a=i.parentNode===e;!o&&!u?a?e.replaceChild(s,i):e.insertBefore(s,t):a&&i.remove()}else o=!0}}else e.insertBefore(s,t);return[s]}const $e=k("<div><div>: Пользователи</div><div></div><div><img>"),Y=k("<div>"),xe=k('<img src="https://story.artux.net/static/tags/yellow.png">'),Ae=({login:e})=>{const[n,t]=O({background:"",id:0,positions:[],title:""}),[l,s]=O(),[o,u]=O();console.log(location.hostname);const i=new WebSocket(`wss://${location.hostname}/map?id=0&auth=`+e),a=f=>{switch(f.key){case"w":var c={...o(),y:o().y+3};break;case"s":var c={...o(),y:o().y-3};break;case"a":var c={...o(),x:o().x-3};break;case"d":var c={...o(),x:o().x+3};break}u(c),i.send(JSON.stringify(c))};return window.addEventListener("keydown",a),i.onmessage=f=>{const r=JSON.parse(f.data),c=JSON.parse(JSON.stringify(l()||{x:500,y:500}));switch(r.type){case"map":console.log("Карта:",r),t(r),u(r.position),s(r.positions);return;case"close":console.log("Пользователь отключился:",r);const p=c?.indexOf(c?.find($=>$.login===r.login));c.splice(p,1),s(c);return;case"updatePosition":console.log("Обновление позиции:",r);const w=c?.indexOf(c?.find($=>$.login===r.login));c?.splice(w,1,r),s(c);return;case"newUser":console.log("Новый пользователь:",r),c.push(r),s(c);return}},(()=>{const f=$e(),r=f.firstChild,c=r.firstChild,p=r.nextSibling,w=p.nextSibling,$=w.firstChild;return S(r,()=>n().title,c),S(p,T(V,{get each(){return n().positions},children:x=>(()=>{const d=Y();return S(d,()=>x.login),d})()})),w.style.setProperty("position","relative"),S(w,T(V,{get each(){return l()},children:x=>[(()=>{const d=Y();return d.style.setProperty("position","absolute"),d.style.setProperty("color","white"),d.style.setProperty("mix-blend-mode","difference"),S(d,()=>x.login),P(m=>{const g=x.pos.x+"px",y=x.pos.y+20+"px";return g!==m._v$&&((m._v$=g)!=null?d.style.setProperty("left",g):d.style.removeProperty("left")),y!==m._v$2&&((m._v$2=y)!=null?d.style.setProperty("bottom",y):d.style.removeProperty("bottom")),m},{_v$:void 0,_v$2:void 0}),d})(),(()=>{const d=xe();return d.style.setProperty("position","absolute"),d.style.setProperty("width","10px"),P(m=>{const g=x.pos.x+"px",y=x.pos.y+"px";return g!==m._v$3&&((m._v$3=g)!=null?d.style.setProperty("left",g):d.style.removeProperty("left")),y!==m._v$4&&((m._v$4=y)!=null?d.style.setProperty("bottom",y):d.style.removeProperty("bottom")),m},{_v$3:void 0,_v$4:void 0}),d})()]}),null),P(()=>be($,"src",n().background)),f})()},Se=k('<input placeholder="Логин...">'),Ce=k("<button>Войти"),Pe=k("<div>"),_e=()=>{const[e,n]=O(!1),[t,l]=O("user");return(()=>{const s=Pe();return S(s,T(W,{get when(){return!e()},get children(){return[(()=>{const o=Se();return o.addEventListener("change",u=>{l(u.target.value)}),P(()=>o.value=t()),o})(),(()=>{const o=Ce();return o.$$click=()=>n(!0),o})()]}}),null),S(s,T(W,{get when(){return e()},get children(){return T(Ae,{get login(){return t()}})}}),null),s})()};me(["click"]);const Ee=document.getElementById("root");we(()=>T(_e,{}),Ee);