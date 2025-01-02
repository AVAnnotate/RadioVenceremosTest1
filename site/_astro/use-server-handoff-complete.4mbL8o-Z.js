import{r as s,R as h,t as F}from"./index.DddtCxX5.js";import{n as y,a as p}from"./use-sync-refs.CsDxRvfL.js";function E(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(n=>setTimeout(()=>{throw n}))}function f(){let e=[],n={addEventListener(t,r,l,a){return t.addEventListener(r,l,a),n.add(()=>t.removeEventListener(r,l,a))},requestAnimationFrame(...t){let r=requestAnimationFrame(...t);return n.add(()=>cancelAnimationFrame(r))},nextFrame(...t){return n.requestAnimationFrame(()=>n.requestAnimationFrame(...t))},setTimeout(...t){let r=setTimeout(...t);return n.add(()=>clearTimeout(r))},microTask(...t){let r={current:!0};return E(()=>{r.current&&t[0]()}),n.add(()=>{r.current=!1})},style(t,r,l){let a=t.style.getPropertyValue(r);return Object.assign(t.style,{[r]:l}),this.add(()=>{Object.assign(t.style,{[r]:a})})},group(t){let r=f();return t(r),this.add(()=>r.dispose())},add(t){return e.includes(t)||e.push(t),()=>{let r=e.indexOf(t);if(r>=0)for(let l of e.splice(r,1))l()}},dispose(){for(let t of e.splice(0))t()}};return n}function S(){let[e]=s.useState(f);return s.useEffect(()=>()=>e.dispose(),[e]),e}function x(e=0){let[n,t]=s.useState(e),r=s.useCallback(i=>t(i),[n]),l=s.useCallback(i=>t(o=>o|i),[n]),a=s.useCallback(i=>(n&i)===i,[n]),c=s.useCallback(i=>t(o=>o&~i),[t]),u=s.useCallback(i=>t(o=>o^i),[t]);return{flags:n,setFlag:r,addFlag:l,hasFlag:a,removeFlag:c,toggleFlag:u}}var A=(e=>(e[e.None=0]="None",e[e.Closed=1]="Closed",e[e.Enter=2]="Enter",e[e.Leave=4]="Leave",e))(A||{});function P(e){let n={};for(let t in e)e[t]===!0&&(n[`data-${t}`]="");return n}function H(e,n,t,r){let[l,a]=s.useState(t),{hasFlag:c,addFlag:u,removeFlag:i}=x(e&&l?3:0),o=s.useRef(!1),d=s.useRef(!1),C=S();return y(()=>{var g;if(e){if(t&&a(!0),!n){t&&u(3);return}return(g=r?.start)==null||g.call(r,t),k(n,{inFlight:o,prepare(){d.current?d.current=!1:d.current=o.current,o.current=!0,!d.current&&(t?(u(3),i(4)):(u(4),i(2)))},run(){d.current?t?(i(3),u(4)):(i(4),u(3)):t?i(1):u(1)},done(){var v;d.current&&typeof n.getAnimations=="function"&&n.getAnimations().length>0||(o.current=!1,i(7),t||a(!1),(v=r?.end)==null||v.call(r,t))}})}},[e,t,n,C]),e?[l,{closed:c(1),enter:c(2),leave:c(4),transition:c(2)||c(4)}]:[t,{closed:void 0,enter:void 0,leave:void 0,transition:void 0}]}function k(e,{prepare:n,run:t,done:r,inFlight:l}){let a=f();return b(e,{prepare:n,inFlight:l}),a.nextFrame(()=>{t(),a.requestAnimationFrame(()=>{a.add(O(e,r))})}),a.dispose}function O(e,n){let t=f();if(!e)return t.dispose;let r=!1;t.add(()=>{r=!0});let l=e.getAnimations().filter(a=>a instanceof CSSTransition);return l.length===0?(n(),t.dispose):(Promise.allSettled(l.map(a=>a.finished)).then(()=>{r||n()}),t.dispose)}function b(e,{inFlight:n,prepare:t}){if(n!=null&&n.current){t();return}let r=e.style.transition;e.style.transition="none",t(),e.offsetHeight,e.style.transition=r}let m=s.createContext(null);m.displayName="OpenClosedContext";var q=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(q||{});function R(){return s.useContext(m)}function j({value:e,children:n}){return h.createElement(m.Provider,{value:e},n)}function M({children:e}){return h.createElement(m.Provider,{value:null},e)}function $(){let e=typeof document>"u";return"useSyncExternalStore"in F?(n=>n.useSyncExternalStore)(F)(()=>()=>{},()=>!1,()=>!e):!1}function N(){let e=$(),[n,t]=s.useState(p.isHandoffComplete);return n&&p.isHandoffComplete===!1&&t(!1),s.useEffect(()=>{n!==!0&&t(!0)},[n]),s.useEffect(()=>p.handoff(),[]),e?!1:n}export{P as H,j as c,q as i,H as j,N as l,f as o,S as p,M as s,E as t,R as u};