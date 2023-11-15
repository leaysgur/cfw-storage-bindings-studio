var lt=Object.defineProperty;var h=(s,e)=>lt(s,"name",{value:e,configurable:!0});var Ne=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)};var L=(s,e,t)=>(Ne(s,e,"read from private field"),t?t.call(s):e.get(s)),Z=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)},x=(s,e,t,n)=>(Ne(s,e,"write to private field"),n?n.call(s,t):e.set(s,t),t);var $=(s,e,t)=>(Ne(s,e,"access private method"),t);import{q as st,s as ae,n as F,p as Me,l as ge,b as xe,r as Ve,m as rt}from"../chunks/scheduler.8c8bb1bf.js";import{S as ue,i as oe,g as E,s as q,m as R,h as T,j as w,A as Y,c as Q,n as B,f as _,k as ee,a as k,x as P,z as j,B as $e,e as A,o as ie,l as ce,y as et,r as de,u as he,v as _e,t as J,b as ye,d as z,w as be,p as ve,C as Be}from"../chunks/index.c03294ce.js";import{S as at,k as ut,a as tt,j as ne,u as ot,l as ft}from"../chunks/context.5b4701d7.js";import{Q as ct,a as dt,u as fe,i as ht,c as nt}from"../chunks/createQuery.7066ef76.js";import{i as Fe,h as _t,a as bt,g as mt}from"../chunks/infiniteQueryBehavior.ef35ab7f.js";import{p as pt}from"../chunks/stores.26442ccc.js";import{r as Ae,d as gt}from"../chunks/index.e2fc19a5.js";var le,yt=(le=class extends ct{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:Fe()},t)}getOptimisticResult(e){return e.behavior=Fe(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){var o,f,c,d;const{state:n}=e,i=super.createResult(e,t),{isFetching:l,isRefetching:r}=i,a=l&&((f=(o=n.fetchMeta)==null?void 0:o.fetchMore)==null?void 0:f.direction)==="forward",u=l&&((d=(c=n.fetchMeta)==null?void 0:c.fetchMore)==null?void 0:d.direction)==="backward";return{...i,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:_t(t,n.data),hasPreviousPage:bt(t,n.data),isFetchingNextPage:a,isFetchingPreviousPage:u,isRefetching:r&&!a&&!u}}},h(le,"InfiniteQueryObserver"),le),X,D,H,G,te,me,se,Pe,re,vt=(re=class extends at{constructor(t,n){super();Z(this,te);Z(this,se);Z(this,X,void 0);Z(this,D,void 0);Z(this,H,void 0);Z(this,G,void 0);x(this,D,void 0),x(this,X,t),this.setOptions(n),this.bindMethods(),$(this,te,me).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var i;const n=this.options;this.options=L(this,X).defaultMutationOptions(t),ut(n,this.options)||L(this,X).getMutationCache().notify({type:"observerOptionsUpdated",mutation:L(this,H),observer:this}),(i=L(this,H))==null||i.setOptions(this.options)}onUnsubscribe(){var t;this.hasListeners()||(t=L(this,H))==null||t.removeObserver(this)}onMutationUpdate(t){$(this,te,me).call(this),$(this,se,Pe).call(this,t)}getCurrentResult(){return L(this,D)}reset(){x(this,H,void 0),$(this,te,me).call(this),$(this,se,Pe).call(this)}mutate(t,n){var i;return x(this,G,n),(i=L(this,H))==null||i.removeObserver(this),x(this,H,L(this,X).getMutationCache().build(L(this,X),this.options)),L(this,H).addObserver(this),L(this,H).execute(t)}},X=new WeakMap,D=new WeakMap,H=new WeakMap,G=new WeakMap,te=new WeakSet,me=h(function(){var n;const t=((n=L(this,H))==null?void 0:n.state)??mt();x(this,D,{...t,isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset})},"#updateResult"),se=new WeakSet,Pe=h(function(t){tt.batch(()=>{var n,i,l,r,a,u,o,f;L(this,G)&&this.hasListeners()&&((t==null?void 0:t.type)==="success"?((i=(n=L(this,G)).onSuccess)==null||i.call(n,t.data,L(this,D).variables,L(this,D).context),(r=(l=L(this,G)).onSettled)==null||r.call(l,t.data,null,L(this,D).variables,L(this,D).context)):(t==null?void 0:t.type)==="error"&&((u=(a=L(this,G)).onError)==null||u.call(a,t.error,L(this,D).variables,L(this,D).context),(f=(o=L(this,G)).onSettled)==null||f.call(o,void 0,t.error,L(this,D).variables,L(this,D).context))),this.listeners.forEach(c=>{c(L(this,D))})})},"#notify"),h(re,"MutationObserver"),re);function kt(s,e){return dt(s,yt,e)}h(kt,"createInfiniteQuery");function Ke(s,e){const t=fe(e),n=ht(s)?s:Ae(s),i=new vt(t,st(n));let l;n.subscribe(u=>{l=h((o,f)=>{i.mutate(o,f).catch(Nt)},"mutate"),i.setOptions(u)});const r=Ae(i.getCurrentResult(),u=>i.subscribe(tt.batchCalls(o=>u(o)))),{subscribe:a}=gt(r,u=>({...u,mutate:l,mutateAsync:u.mutate}));return{subscribe:a}}h(Ke,"createMutation");function Nt(){}h(Nt,"noop");const Ue=new TextDecoder,De=new TextEncoder,pe=Ue.decode.bind(Ue),it=De.encode.bind(De);function Pt(s){let e,t,n=`Key:
    <input type="text" name="key" required=""/>`,i,l,r=`Value:
    <textarea name="text-value"></textarea>
    OR <input type="file" name="binary-value"/>`,a,u,o,f,c,d;return{c(){e=E("form"),t=E("label"),t.innerHTML=n,i=q(),l=E("label"),l.innerHTML=r,a=q(),u=E("button"),o=R("Put"),this.h()},l(m){e=T(m,"FORM",{});var b=w(e);t=T(b,"LABEL",{"data-svelte-h":!0}),Y(t)!=="svelte-1v5ib1q"&&(t.innerHTML=n),i=Q(b),l=T(b,"LABEL",{"data-svelte-h":!0}),Y(l)!=="svelte-deg37z"&&(l.innerHTML=r),a=Q(b),u=T(b,"BUTTON",{type:!0});var g=w(u);o=B(g,"Put"),g.forEach(_),b.forEach(_),this.h()},h(){ee(u,"type","submit"),u.disabled=f=s[1].isPending},m(m,b){k(m,e,b),P(e,t),P(e,i),P(e,l),P(e,a),P(e,u),P(u,o),c||(d=j(e,"submit",$e(s[4])),c=!0)},p(m,[b]){b&2&&f!==(f=m[1].isPending)&&(u.disabled=f)},i:F,o:F,d(m){m&&_(e),c=!1,d()}}}h(Pt,"create_fragment$4");function Et(s,e,t){let n,i,l=F,r=h(()=>(l(),l=Me(n,c=>t(1,i=c)),n),"$$subscribe_putMutation");s.$$.on_destroy.push(()=>l());let{KV:a}=e,{bindingName:u}=e;const o=fe(),f=h(c=>{const d=new FormData(c.currentTarget),[m,b,g]=[d.get("key"),d.get("text-value"),d.get("binary-value")];if(g instanceof File&&g.size!==0)return i.mutate([String(m),g]);i.mutate([String(m),String(b)])},"submit_handler");return s.$$set=c=>{"KV"in c&&t(2,a=c.KV),"bindingName"in c&&t(3,u=c.bindingName)},s.$$.update=()=>{s.$$.dirty&12&&r(t(0,n=Ke({mutationFn:([c,d])=>Promise.resolve(d instanceof File?d.arrayBuffer():it(d)).then(m=>a.put(c,m).then(()=>c)),onSuccess:c=>{o.invalidateQueries({queryKey:["kv",u,"list"]}),o.invalidateQueries({queryKey:["kv",u,c]})}})))},[n,i,a,u,f]}h(Et,"instance$4");const Le=class Le extends ue{constructor(e){super(),oe(this,e,Et,Pt,ae,{KV:2,bindingName:3})}};h(Le,"Add_key");let Ee=Le;function Ie(s,e,t){const n=s.slice();return n[12]=e[t],n}h(Ie,"get_each_context$1");function Tt(s){let e;function t(l,r){return l[2].data===null?Vt:Mt}h(t,"select_block_type_1");let n=t(s),i=n(s);return{c(){i.c(),e=A()},l(l){i.l(l),e=A()},m(l,r){i.m(l,r),k(l,e,r)},p(l,r){n===(n=t(l))&&i?i.p(l,r):(i.d(1),i=n(l),i&&(i.c(),i.m(e.parentNode,e)))},d(l){l&&_(e),i.d(l)}}}h(Tt,"create_if_block_2$2");function Ct(s){let e,t,n=s[2].error.message+"",i;return{c(){e=E("pre"),t=R("💥 "),i=R(n)},l(l){e=T(l,"PRE",{});var r=w(e);t=B(r,"💥 "),i=B(r,n),r.forEach(_)},m(l,r){k(l,e,r),P(e,t),P(e,i)},p(l,r){r&4&&n!==(n=l[2].error.message+"")&&ie(i,n)},d(l){l&&_(e)}}}h(Ct,"create_if_block_1$2");function Ot(s){let e;return{c(){e=R("🌀 Loading value...")},l(t){e=B(t,"🌀 Loading value...")},m(t,n){k(t,e,n)},p:F,d(t){t&&_(e)}}}h(Ot,"create_if_block$2");function Mt(s){let e,t,n,i,l,r,a,u,o=ne(s[3]),f=[];for(let d=0;d<o.length;d+=1)f[d]=ze(Ie(s,o,d));let c=s[0]==="json"&&je(s);return{c(){e=E("textarea"),n=q(),i=E("div");for(let d=0;d<f.length;d+=1)f[d].c();l=q(),r=E("dialog"),c&&c.c(),this.h()},l(d){e=T(d,"TEXTAREA",{}),w(e).forEach(_),n=Q(d),i=T(d,"DIV",{});var m=w(i);for(let g=0;g<f.length;g+=1)f[g].l(m);m.forEach(_),l=Q(d),r=T(d,"DIALOG",{style:!0});var b=w(r);c&&c.l(b),b.forEach(_),this.h()},h(){e.readOnly=!0,e.disabled=!0,e.value=t=pe(s[2].data),ce(r,"overflow","auto"),ce(r,"max-block-size","80dvh"),ce(r,"max-inline-size","80dvw")},m(d,m){k(d,e,m),k(d,n,m),k(d,i,m);for(let b=0;b<f.length;b+=1)f[b]&&f[b].m(i,null);k(d,l,m),k(d,r,m),c&&c.m(r,null),s[10](r),a||(u=j(r,"close",s[11]),a=!0)},p(d,m){if(m&4&&t!==(t=pe(d[2].data))&&(e.value=t),m&9){o=ne(d[3]);let b;for(b=0;b<o.length;b+=1){const g=Ie(d,o,b);f[b]?f[b].p(g,m):(f[b]=ze(g),f[b].c(),f[b].m(i,null))}for(;b<f.length;b+=1)f[b].d(1);f.length=o.length}d[0]==="json"?c?c.p(d,m):(c=je(d),c.c(),c.m(r,null)):c&&(c.d(1),c=null)},d(d){d&&(_(e),_(n),_(i),_(l),_(r)),et(f,d),c&&c.d(),s[10](null),a=!1,u()}}}h(Mt,"create_else_block$1");function Vt(s){let e,t="🙈 Value was `null`...";return{c(){e=E("pre"),e.textContent=t},l(n){e=T(n,"PRE",{"data-svelte-h":!0}),Y(e)!=="svelte-d1egyq"&&(e.textContent=t)},m(n,i){k(n,e,i)},p:F,d(n){n&&_(e)}}}h(Vt,"create_if_block_3$2");function ze(s){let e,t=s[12]+"",n,i,l;function r(){return s[9](s[12])}return h(r,"click_handler"),{c(){e=E("button"),n=R(t),this.h()},l(a){e=T(a,"BUTTON",{style:!0});var u=w(e);n=B(u,t),u.forEach(_),this.h()},h(){ce(e,"font-size",".6rem")},m(a,u){k(a,e,u),P(e,n),i||(l=j(e,"click",r),i=!0)},p(a,u){s=a},d(a){a&&_(e),i=!1,l()}}}h(ze,"create_each_block$1");function je(s){let e,t=s[5](s[2].data)+"",n;return{c(){e=E("pre"),n=R(t)},l(i){e=T(i,"PRE",{});var l=w(e);n=B(l,t),l.forEach(_)},m(i,l){k(i,e,l),P(e,n)},p(i,l){l&4&&t!==(t=i[5](i[2].data)+"")&&ie(n,t)},d(i){i&&_(e)}}}h(je,"create_if_block_4$1");function Kt(s){let e;function t(l,r){if(l[2].isLoading)return Ot;if(l[2].isError)return Ct;if(l[2].isSuccess)return Tt}h(t,"select_block_type");let n=t(s),i=n&&n(s);return{c(){i&&i.c(),e=A()},l(l){i&&i.l(l),e=A()},m(l,r){i&&i.m(l,r),k(l,e,r)},p(l,[r]){n===(n=t(l))&&i?i.p(l,r):(i&&i.d(1),i=n&&n(l),i&&(i.c(),i.m(e.parentNode,e)))},i:F,o:F,d(l){l&&_(e),i&&i.d(l)}}}h(Kt,"create_fragment$3");function Lt(s,e,t){let n,{KV:i}=e,{bindingName:l}=e,{key:r}=e;const a=["json"];let u=null,o;const f=nt({queryKey:["kv",l,r.name],queryFn:()=>i.get(r.name,"arrayBuffer")});ge(s,f,g=>t(2,n=g));const c=h(g=>{try{return JSON.stringify(JSON.parse(pe(g)),null,2)}catch{return"🤯 Not valid JSON!"}},"prettifyJSON"),d=h(g=>t(0,u=g),"click_handler");function m(g){xe[g?"unshift":"push"](()=>{o=g,t(1,o)})}h(m,"dialog_binding");const b=h(()=>t(0,u=null),"close_handler");return s.$$set=g=>{"KV"in g&&t(6,i=g.KV),"bindingName"in g&&t(7,l=g.bindingName),"key"in g&&t(8,r=g.key)},s.$$.update=()=>{s.$$.dirty&3&&(u!==null?o==null||o.showModal():o==null||o.close())},[u,o,n,a,f,c,i,l,r,d,m,b]}h(Lt,"instance$3");const we=class we extends ue{constructor(e){super(),oe(this,e,Lt,Kt,ae,{KV:6,bindingName:7,key:8})}};h(we,"Show_value");let Te=we;function wt(s){let e;function t(l,r){return l[3].data===null?Rt:Qt}h(t,"select_block_type_1");let n=t(s),i=n(s);return{c(){i.c(),e=A()},l(l){i.l(l),e=A()},m(l,r){i.m(l,r),k(l,e,r)},p(l,r){n===(n=t(l))&&i?i.p(l,r):(i.d(1),i=n(l),i&&(i.c(),i.m(e.parentNode,e)))},d(l){l&&_(e),i.d(l)}}}h(wt,"create_if_block_2$1");function St(s){let e,t,n=s[3].error.message+"",i;return{c(){e=E("pre"),t=R("💥 "),i=R(n)},l(l){e=T(l,"PRE",{});var r=w(e);t=B(r,"💥 "),i=B(r,n),r.forEach(_)},m(l,r){k(l,e,r),P(e,t),P(e,i)},p(l,r){r&8&&n!==(n=l[3].error.message+"")&&ie(i,n)},d(l){l&&_(e)}}}h(St,"create_if_block_1$1");function qt(s){let e;return{c(){e=R("🌀 Loading value...")},l(t){e=B(t,"🌀 Loading value...")},m(t,n){k(t,e,n)},p:F,d(t){t&&_(e)}}}h(qt,"create_if_block$1");function Qt(s){let e,t,n,i,l,r,a,u,o="Cancel",f,c,d,m,b,g;return{c(){e=E("form"),t=E("textarea"),i=R(`
        OR `),l=E("input"),r=q(),a=E("div"),u=E("button"),u.textContent=o,f=q(),c=E("button"),d=R("Put"),this.h()},l(V){e=T(V,"FORM",{});var O=w(e);t=T(O,"TEXTAREA",{name:!0}),w(t).forEach(_),i=B(O,`
        OR `),l=T(O,"INPUT",{type:!0,name:!0}),r=Q(O),a=T(O,"DIV",{});var C=w(a);u=T(C,"BUTTON",{"data-svelte-h":!0}),Y(u)!=="svelte-7fqizf"&&(u.textContent=o),f=Q(C),c=T(C,"BUTTON",{type:!0});var I=w(c);d=B(I,"Put"),I.forEach(_),C.forEach(_),O.forEach(_),this.h()},h(){ee(t,"name","text-value"),t.value=n=s[3].data,ee(l,"type","file"),ee(l,"name","binary-value"),ee(c,"type","submit"),c.disabled=m=s[4].isPending},m(V,O){k(V,e,O),P(e,t),P(e,i),P(e,l),P(e,r),P(e,a),P(a,u),P(a,f),P(a,c),P(c,d),b||(g=[j(u,"click",s[10]),j(e,"submit",$e(s[11]))],b=!0)},p(V,O){O&8&&n!==(n=V[3].data)&&(t.value=n),O&16&&m!==(m=V[4].isPending)&&(c.disabled=m)},d(V){V&&_(e),b=!1,Ve(g)}}}h(Qt,"create_else_block");function Rt(s){let e,t="🙈 Value was `null`",n,i,l="Cancel",r,a;return{c(){e=E("pre"),e.textContent=t,n=q(),i=E("button"),i.textContent=l},l(u){e=T(u,"PRE",{"data-svelte-h":!0}),Y(e)!=="svelte-1p3sbw2"&&(e.textContent=t),n=Q(u),i=T(u,"BUTTON",{"data-svelte-h":!0}),Y(i)!=="svelte-7fqizf"&&(i.textContent=l)},m(u,o){k(u,e,o),k(u,n,o),k(u,i,o),r||(a=j(i,"click",s[9]),r=!0)},p:F,d(u){u&&(_(e),_(n),_(i)),r=!1,a()}}}h(Rt,"create_if_block_3$1");function Bt(s){let e,t,n,i="Update",l,r;function a(f,c){if(f[3].isLoading)return qt;if(f[3].isError)return St;if(f[3].isSuccess)return wt}h(a,"select_block_type");let u=a(s),o=u&&u(s);return{c(){e=E("dialog"),o&&o.c(),t=q(),n=E("button"),n.textContent=i},l(f){e=T(f,"DIALOG",{});var c=w(e);o&&o.l(c),c.forEach(_),t=Q(f),n=T(f,"BUTTON",{"data-svelte-h":!0}),Y(n)!=="svelte-1qyk4l3"&&(n.textContent=i)},m(f,c){k(f,e,c),o&&o.m(e,null),s[12](e),k(f,t,c),k(f,n,c),l||(r=[j(e,"close",s[13]),j(n,"click",s[14])],l=!0)},p(f,[c]){u===(u=a(f))&&o?o.p(f,c):(o&&o.d(1),o=u&&u(f),o&&(o.c(),o.m(e,null)))},i:F,o:F,d(f){f&&(_(e),_(t),_(n)),o&&o.d(),s[12](null),l=!1,Ve(r)}}}h(Bt,"create_fragment$2");function Ft(s,e,t){let n,i,l=F,r=h(()=>(l(),l=Me(n,p=>t(3,i=p)),n),"$$subscribe_getQuery"),a;s.$$.on_destroy.push(()=>l());let{KV:u}=e,{bindingName:o}=e,{key:f}=e,c=!1,d;const m=fe(),b=Ke({mutationFn:p=>Promise.resolve(p instanceof File?p.arrayBuffer():it(p)).then(v=>u.put(f.name,v)),onSuccess:()=>{m.invalidateQueries({queryKey:["kv",o,f.name]}),t(0,c=!1)}});ge(s,b,p=>t(4,a=p));const g=h(()=>t(0,c=!1),"click_handler"),V=h(()=>t(0,c=!1),"click_handler_1"),O=h(p=>{const v=new FormData(p.currentTarget),[U,M]=[v.get("text-value"),v.get("binary-value")];if(M instanceof File&&M.size!==0)return a.mutate(M);a.mutate(String(U))},"submit_handler");function C(p){xe[p?"unshift":"push"](()=>{d=p,t(1,d)})}h(C,"dialog_binding");const I=h(()=>t(0,c=!1),"close_handler"),N=h(()=>t(0,c=!0),"click_handler_2");return s.$$set=p=>{"KV"in p&&t(6,u=p.KV),"bindingName"in p&&t(7,o=p.bindingName),"key"in p&&t(8,f=p.key)},s.$$.update=()=>{s.$$.dirty&3&&(c?d==null||d.showModal():d==null||d.close()),s.$$.dirty&449&&r(t(2,n=nt({queryKey:["kv",o,f.name],queryFn:()=>u.get(f.name,"arrayBuffer"),enabled:c,select:p=>p===null?null:pe(p)})))},[c,d,n,i,a,b,u,o,f,g,V,O,C,I,N]}h(Ft,"instance$2");const Se=class Se extends ue{constructor(e){super(),oe(this,e,Ft,Bt,ae,{KV:6,bindingName:7,key:8})}};h(Se,"Update_key");let Ce=Se;function At(s){let e,t,n,i,l;return{c(){e=E("button"),t=R("Delete"),this.h()},l(r){e=T(r,"BUTTON",{});var a=w(e);t=B(a,"Delete"),a.forEach(_),this.h()},h(){e.disabled=n=s[0].isPending},m(r,a){k(r,e,a),P(e,t),i||(l=j(e,"click",s[5]),i=!0)},p(r,[a]){a&1&&n!==(n=r[0].isPending)&&(e.disabled=n)},i:F,o:F,d(r){r&&_(e),i=!1,l()}}}h(At,"create_fragment$1");function Ut(s,e,t){let n,{KV:i}=e,{bindingName:l}=e,{key:r}=e;const a=fe(),u=Ke({mutationFn:()=>i.delete(r.name),onSuccess:()=>{a.invalidateQueries({queryKey:["kv",l]})}});ge(s,u,f=>t(0,n=f));const o=h(()=>confirm("Are you sure?")&&n.mutate(),"click_handler");return s.$$set=f=>{"KV"in f&&t(2,i=f.KV),"bindingName"in f&&t(3,l=f.bindingName),"key"in f&&t(4,r=f.key)},[n,u,i,l,r,o]}h(Ut,"instance$1");const qe=class qe extends ue{constructor(e){super(),oe(this,e,Ut,At,ae,{KV:2,bindingName:3,key:4})}};h(qe,"Delete_key");let Oe=qe;function He(s,e,t){const n=s.slice();return n[13]=e[t],n}h(He,"get_each_context");function Je(s,e,t){const n=s.slice();return n[16]=e[t],n}h(Je,"get_each_context_1");function Dt(s){let e,t,n,i,l,r,a,u,o,f,c,d,m="<tr><th>Key</th> <th>Value</th> <th>Actions</th></tr>",b,g,V,O,C,I,N,p=ne(s[6].data.pages),v=[];for(let y=0;y<p.length;y+=1)v[y]=Xe(He(s,p,y));const U=h(y=>J(v[y],1,1,()=>{v[y]=null}),"out");let M=s[6].hasNextPage&&We(s);return{c(){e=E("button"),t=R("Refresh"),i=q(),l=E("label"),r=R(`Filter key:
    `),a=E("input"),u=q(),o=E("hr"),f=q(),c=E("table"),d=E("thead"),d.innerHTML=m,b=q(),g=E("tbody");for(let y=0;y<v.length;y+=1)v[y].c();V=q(),M&&M.c(),O=A(),this.h()},l(y){e=T(y,"BUTTON",{});var K=w(e);t=B(K,"Refresh"),K.forEach(_),i=Q(y),l=T(y,"LABEL",{});var S=w(l);r=B(S,`Filter key:
    `),a=T(S,"INPUT",{type:!0}),S.forEach(_),u=Q(y),o=T(y,"HR",{}),f=Q(y),c=T(y,"TABLE",{});var W=w(c);d=T(W,"THEAD",{"data-svelte-h":!0}),Y(d)!=="svelte-1ntjhph"&&(d.innerHTML=m),b=Q(W),g=T(W,"TBODY",{});var Re=w(g);for(let ke=0;ke<v.length;ke+=1)v[ke].l(Re);Re.forEach(_),W.forEach(_),V=Q(y),M&&M.l(y),O=A(),this.h()},h(){e.disabled=n=s[6].isFetching,ee(a,"type","search")},m(y,K){k(y,e,K),P(e,t),k(y,i,K),k(y,l,K),P(l,r),P(l,a),Be(a,s[4]),k(y,u,K),k(y,o,K),k(y,f,K),k(y,c,K),P(c,d),P(c,b),P(c,g);for(let S=0;S<v.length;S+=1)v[S]&&v[S].m(g,null);k(y,V,K),M&&M.m(y,K),k(y,O,K),C=!0,I||(N=[j(e,"click",s[8]),j(a,"input",s[9])],I=!0)},p(y,K){if((!C||K&64&&n!==(n=y[6].isFetching))&&(e.disabled=n),K&16&&a.value!==y[4]&&Be(a,y[4]),K&213){p=ne(y[6].data.pages);let S;for(S=0;S<p.length;S+=1){const W=He(y,p,S);v[S]?(v[S].p(W,K),z(v[S],1)):(v[S]=Xe(W),v[S].c(),z(v[S],1),v[S].m(g,null))}for(ve(),S=p.length;S<v.length;S+=1)U(S);ye()}y[6].hasNextPage?M?M.p(y,K):(M=We(y),M.c(),M.m(O.parentNode,O)):M&&(M.d(1),M=null)},i(y){if(!C){for(let K=0;K<p.length;K+=1)z(v[K]);C=!0}},o(y){v=v.filter(Boolean);for(let K=0;K<v.length;K+=1)J(v[K]);C=!1},d(y){y&&(_(e),_(i),_(l),_(u),_(o),_(f),_(c),_(V),_(O)),et(v,y),M&&M.d(y),I=!1,Ve(N)}}}h(Dt,"create_if_block_2");function It(s){let e,t,n=s[6].error.message+"",i;return{c(){e=E("pre"),t=R("💥 "),i=R(n)},l(l){e=T(l,"PRE",{});var r=w(e);t=B(r,"💥 "),i=B(r,n),r.forEach(_)},m(l,r){k(l,e,r),P(e,t),P(e,i)},p(l,r){r&64&&n!==(n=l[6].error.message+"")&&ie(i,n)},i:F,o:F,d(l){l&&_(e)}}}h(It,"create_if_block_1");function zt(s){let e;return{c(){e=R("🌀 Loading keys...")},l(t){e=B(t,"🌀 Loading keys...")},m(t,n){k(t,e,n)},p:F,i:F,o:F,d(t){t&&_(e)}}}h(zt,"create_if_block");function Ye(s){let e,t,n=s[16].name+"",i,l,r,a,u,o,f,c="Refresh",d,m,b,g,V,O,C,I;a=new Te({props:{KV:s[0],bindingName:s[2],key:s[16]}});function N(){return s[10](s[16])}return h(N,"click_handler_1"),m=new Ce({props:{KV:s[0],bindingName:s[2],key:s[16]}}),g=new Oe({props:{KV:s[0],bindingName:s[2],key:s[16]}}),{c(){e=E("tr"),t=E("td"),i=R(n),l=q(),r=E("td"),de(a.$$.fragment),u=q(),o=E("td"),f=E("button"),f.textContent=c,d=q(),de(m.$$.fragment),b=q(),de(g.$$.fragment),V=q()},l(p){e=T(p,"TR",{});var v=w(e);t=T(v,"TD",{});var U=w(t);i=B(U,n),U.forEach(_),l=Q(v),r=T(v,"TD",{});var M=w(r);he(a.$$.fragment,M),M.forEach(_),u=Q(v),o=T(v,"TD",{});var y=w(o);f=T(y,"BUTTON",{"data-svelte-h":!0}),Y(f)!=="svelte-mhzrjw"&&(f.textContent=c),d=Q(y),he(m.$$.fragment,y),b=Q(y),he(g.$$.fragment,y),y.forEach(_),V=Q(v),v.forEach(_)},m(p,v){k(p,e,v),P(e,t),P(t,i),P(e,l),P(e,r),_e(a,r,null),P(e,u),P(e,o),P(o,f),P(o,d),_e(m,o,null),P(o,b),_e(g,o,null),P(e,V),O=!0,C||(I=j(f,"click",N),C=!0)},p(p,v){s=p,(!O||v&64)&&n!==(n=s[16].name+"")&&ie(i,n);const U={};v&1&&(U.KV=s[0]),v&4&&(U.bindingName=s[2]),v&64&&(U.key=s[16]),a.$set(U);const M={};v&1&&(M.KV=s[0]),v&4&&(M.bindingName=s[2]),v&64&&(M.key=s[16]),m.$set(M);const y={};v&1&&(y.KV=s[0]),v&4&&(y.bindingName=s[2]),v&64&&(y.key=s[16]),g.$set(y)},i(p){O||(z(a.$$.fragment,p),z(m.$$.fragment,p),z(g.$$.fragment,p),O=!0)},o(p){J(a.$$.fragment,p),J(m.$$.fragment,p),J(g.$$.fragment,p),O=!1},d(p){p&&_(e),be(a),be(m),be(g),C=!1,I()}}}h(Ye,"create_if_block_4");function Ge(s,e){let t,n=e[4]===""||e[16].name.includes(e[4]),i,l,r=n&&Ye(e);return{key:s,first:null,c(){t=A(),r&&r.c(),i=A(),this.h()},l(a){t=A(),r&&r.l(a),i=A(),this.h()},h(){this.first=t},m(a,u){k(a,t,u),r&&r.m(a,u),k(a,i,u),l=!0},p(a,u){e=a,u&80&&(n=e[4]===""||e[16].name.includes(e[4])),n?r?(r.p(e,u),u&80&&z(r,1)):(r=Ye(e),r.c(),z(r,1),r.m(i.parentNode,i)):r&&(ve(),J(r,1,1,()=>{r=null}),ye())},i(a){l||(z(r),l=!0)},o(a){J(r),l=!1},d(a){a&&(_(t),_(i)),r&&r.d(a)}}}h(Ge,"create_each_block_1");function Xe(s){let e=[],t=new Map,n,i,l=ne(s[13].keys);const r=h(a=>a[16].name,"get_key");for(let a=0;a<l.length;a+=1){let u=Je(s,l,a),o=r(u);t.set(o,e[a]=Ge(o,u))}return{c(){for(let a=0;a<e.length;a+=1)e[a].c();n=A()},l(a){for(let u=0;u<e.length;u+=1)e[u].l(a);n=A()},m(a,u){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(a,u);k(a,n,u),i=!0},p(a,u){u&213&&(l=ne(a[13].keys),ve(),e=ot(e,u,r,1,a,l,t,n.parentNode,ft,Ge,n,Je),ye())},i(a){if(!i){for(let u=0;u<l.length;u+=1)z(e[u]);i=!0}},o(a){for(let u=0;u<e.length;u+=1)J(e[u]);i=!1},d(a){a&&_(n);for(let u=0;u<e.length;u+=1)e[u].d(a)}}}h(Xe,"create_each_block");function We(s){let e,t,n,i,l;return{c(){e=E("button"),t=R("Load more"),this.h()},l(r){e=T(r,"BUTTON",{});var a=w(e);t=B(a,"Load more"),a.forEach(_),this.h()},h(){e.disabled=n=s[6].isFetchingNextPage},m(r,a){k(r,e,a),P(e,t),i||(l=j(e,"click",s[11]),i=!0)},p(r,a){a&64&&n!==(n=r[6].isFetchingNextPage)&&(e.disabled=n)},d(r){r&&_(e),i=!1,l()}}}h(We,"create_if_block_3");function jt(s){let e,t=s[3].params.bindingName+"",n,i,l,r,a="Add new key:value",u,o,f,c,d,m,b,g,V;o=new Ee({props:{KV:s[0],bindingName:s[2]}});const O=[zt,It,Dt],C=[];function I(N,p){return N[6].isLoading?0:N[6].isError?1:N[6].isSuccess?2:-1}return h(I,"select_block_type"),~(m=I(s))&&(b=C[m]=O[m](s)),{c(){e=R("kv/"),n=R(t),i=q(),l=E("details"),r=E("summary"),r.textContent=a,u=q(),de(o.$$.fragment),f=q(),c=E("hr"),d=q(),b&&b.c(),g=A()},l(N){e=B(N,"kv/"),n=B(N,t),i=Q(N),l=T(N,"DETAILS",{});var p=w(l);r=T(p,"SUMMARY",{"data-svelte-h":!0}),Y(r)!=="svelte-1ctqjdt"&&(r.textContent=a),u=Q(p),he(o.$$.fragment,p),p.forEach(_),f=Q(N),c=T(N,"HR",{}),d=Q(N),b&&b.l(N),g=A()},m(N,p){k(N,e,p),k(N,n,p),k(N,i,p),k(N,l,p),P(l,r),P(l,u),_e(o,l,null),k(N,f,p),k(N,c,p),k(N,d,p),~m&&C[m].m(N,p),k(N,g,p),V=!0},p(N,[p]){(!V||p&8)&&t!==(t=N[3].params.bindingName+"")&&ie(n,t);const v={};p&1&&(v.KV=N[0]),p&4&&(v.bindingName=N[2]),o.$set(v);let U=m;m=I(N),m===U?~m&&C[m].p(N,p):(b&&(ve(),J(C[U],1,1,()=>{C[U]=null}),ye()),~m?(b=C[m],b?b.p(N,p):(b=C[m]=O[m](N),b.c()),z(b,1),b.m(g.parentNode,g)):b=null)},i(N){V||(z(o.$$.fragment,N),z(b),V=!0)},o(N){J(o.$$.fragment,N),J(b),V=!1},d(N){N&&(_(e),_(n),_(i),_(l),_(f),_(c),_(d),_(g)),be(o),~m&&C[m].d(N)}}}h(jt,"create_fragment");function Ht(s,e,t){let n,i,l,r,a,u,o=F,f=h(()=>(o(),o=Me(r,C=>t(6,u=C)),r),"$$subscribe_listQuery");ge(s,pt,C=>t(3,a=C)),s.$$.on_destroy.push(()=>o());const{bindings:c}=rt("appContext"),d=fe();let m="";const b=h(()=>d.invalidateQueries({queryKey:l}),"click_handler");function g(){m=this.value,t(4,m)}h(g,"input_input_handler");const V=h(C=>d.invalidateQueries({queryKey:["kv",n,C.name]}),"click_handler_1"),O=h(()=>u.fetchNextPage(),"click_handler_2");return s.$$.update=()=>{s.$$.dirty&8&&t(2,n=a.params.bindingName),s.$$.dirty&4&&t(0,i=c[n]),s.$$.dirty&4&&t(1,l=["kv",n,"list"]),s.$$.dirty&3&&f(t(5,r=kt({queryKey:l,queryFn:({pageParam:C})=>i.list({cursor:C.cursor,limit:50}),initialPageParam:{cursor:null},getNextPageParam:C=>C.list_complete?void 0:C})))},[i,l,n,a,m,r,u,d,b,g,V,O]}h(Ht,"instance");const Qe=class Qe extends ue{constructor(e){super(),oe(this,e,Ht,jt,ae,{})}};h(Qe,"Page");let Ze=Qe;export{Ze as component};