var J=Object.defineProperty;var L=(a,e)=>J(a,"name",{value:e,configurable:!0});import{s as W,r as X,f as k,l as Q,a as P,g as C,h as N,m as w,d as b,c as q,j as R,i as $,x as v,n as F,A as Y,B as Z,C as x,F as ee,N as te,E as O,O as le,z as se,M as ae,u as re}from"../chunks/scheduler.868b4e5c.js";import{S as ie,i as ne,a as oe,t as fe}from"../chunks/index.82e26aad.js";import{j as M}from"../chunks/context.e8a7e09b.js";import{u as ce,c as ue}from"../chunks/createQuery.7eb1e000.js";import{p as _e}from"../chunks/stores.6f5893dc.js";import{e as he}from"../chunks/d1.89c35b64.js";function z(a,e,t){const l=a.slice();return l[11]=e[t].name,l[12]=e[t].ncol,l}L(z,"get_each_context");function de(a){let e,t,l,o,f,r,h,y,d,m,c,i,D,g,n,s=M(a[4].data),_=[];for(let u=0;u<s.length;u+=1)_[u]=H(z(a,s,u));let p=null;return s.length||(p=G()),{c(){e=k("div"),t=k("button"),l=Q("Refresh tables list"),f=P(),r=k("div"),h=k("ul");for(let u=0;u<_.length;u+=1)_[u].c();p&&p.c(),y=P(),d=k("ul"),m=k("li"),c=k("a"),i=Q("REPL"),this.h()},l(u){e=C(u,"DIV",{class:!0});var I=N(e);t=C(I,"BUTTON",{});var E=N(t);l=w(E,"Refresh tables list"),E.forEach(b),I.forEach(b),f=q(u),r=C(u,"DIV",{class:!0});var A=N(r);h=C(A,"UL",{});var S=N(h);for(let T=0;T<_.length;T+=1)_[T].l(S);p&&p.l(S),S.forEach(b),y=q(A),d=C(A,"UL",{});var V=N(d);m=C(V,"LI",{});var j=N(m);c=C(j,"A",{href:!0});var B=N(c);i=w(B,"REPL"),B.forEach(b),j.forEach(b),V.forEach(b),A.forEach(b),this.h()},h(){t.disabled=o=a[4].isFetching,R(e,"class","action svelte-rbew6h"),R(c,"href",D=`/d1/${a[1]}/repl`),R(r,"class","selector svelte-rbew6h")},m(u,I){$(u,e,I),v(e,t),v(t,l),$(u,f,I),$(u,r,I),v(r,h);for(let E=0;E<_.length;E+=1)_[E]&&_[E].m(h,null);p&&p.m(h,null),v(r,y),v(r,d),v(d,m),v(m,c),v(c,i),g||(n=se(t,"click",a[9]),g=!0)},p(u,I){if(I&16&&o!==(o=u[4].isFetching)&&(t.disabled=o),I&18){s=M(u[4].data);let E;for(E=0;E<s.length;E+=1){const A=z(u,s,E);_[E]?_[E].p(A,I):(_[E]=H(A),_[E].c(),_[E].m(h,null))}for(;E<_.length;E+=1)_[E].d(1);_.length=s.length,!s.length&&p?p.p(u,I):s.length?p&&(p.d(1),p=null):(p=G(),p.c(),p.m(h,null))}I&2&&D!==(D=`/d1/${u[1]}/repl`)&&R(c,"href",D)},d(u){u&&(b(e),b(f),b(r)),ae(_,u),p&&p.d(),g=!1,n()}}}L(de,"create_if_block_2");function pe(a){let e,t,l=a[4].error.message+"",o;return{c(){e=k("pre"),t=Q("💥 "),o=Q(l)},l(f){e=C(f,"PRE",{});var r=N(e);t=w(r,"💥 "),o=w(r,l),r.forEach(b)},m(f,r){$(f,e,r),v(e,t),v(e,o)},p(f,r){r&16&&l!==(l=f[4].error.message+"")&&F(o,l)},d(f){f&&b(e)}}}L(pe,"create_if_block_1");function me(a){let e;return{c(){e=Q("🌀 Loading tables...")},l(t){e=w(t,"🌀 Loading tables...")},m(t,l){$(t,e,l)},p:O,d(t){t&&b(e)}}}L(me,"create_if_block");function G(a){let e,t="No tables...";return{c(){e=k("li"),e.textContent=t},l(l){e=C(l,"LI",{"data-svelte-h":!0}),re(e)!=="svelte-tnaom"&&(e.textContent=t)},m(l,o){$(l,e,o)},p:O,d(l){l&&b(e)}}}L(G,"create_else_block");function H(a){let e,t,l=a[11]+"",o,f,r=a[12]+"",h,y,d;return{c(){e=k("li"),t=k("a"),o=Q(l),f=Q(" ("),h=Q(r),y=Q(" cols)"),this.h()},l(m){e=C(m,"LI",{});var c=N(e);t=C(c,"A",{href:!0});var i=N(t);o=w(i,l),f=w(i," ("),h=w(i,r),y=w(i," cols)"),i.forEach(b),c.forEach(b),this.h()},h(){R(t,"href",d=`/d1/${a[1]}/${a[11]}`)},m(m,c){$(m,e,c),v(e,t),v(t,o),v(t,f),v(t,h),v(t,y)},p(m,c){c&16&&l!==(l=m[11]+"")&&F(o,l),c&16&&r!==(r=m[12]+"")&&F(h,r),c&18&&d!==(d=`/d1/${m[1]}/${m[11]}`)&&R(t,"href",d)},d(m){m&&b(e)}}}L(H,"create_each_block");function be(a){let e,t,l,o=a[2].params.bindingName+"",f,r,h,y,d;function m(n,s){if(n[4].isLoading)return me;if(n[4].isError)return pe;if(n[4].isSuccess)return de}L(m,"select_block_type");let c=m(a),i=c&&c(a);const D=a[8].default,g=X(D,a,a[7],null);return{c(){e=k("section"),t=k("h2"),l=Q("[D1] "),f=Q(o),r=P(),i&&i.c(),h=P(),y=k("div"),g&&g.c(),this.h()},l(n){e=C(n,"SECTION",{class:!0});var s=N(e);t=C(s,"H2",{class:!0});var _=N(t);l=w(_,"[D1] "),f=w(_,o),_.forEach(b),r=q(s),i&&i.l(s),h=q(s),y=C(s,"DIV",{class:!0});var p=N(y);g&&g.l(p),p.forEach(b),s.forEach(b),this.h()},h(){R(t,"class","svelte-rbew6h"),R(y,"class","main svelte-rbew6h"),R(e,"class","svelte-rbew6h")},m(n,s){$(n,e,s),v(e,t),v(t,l),v(t,f),v(e,r),i&&i.m(e,null),v(e,h),v(e,y),g&&g.m(y,null),d=!0},p(n,[s]){(!d||s&4)&&o!==(o=n[2].params.bindingName+"")&&F(f,o),c===(c=m(n))&&i?i.p(n,s):(i&&i.d(1),i=c&&c(n),i&&(i.c(),i.m(e,h))),g&&g.p&&(!d||s&128)&&Y(g,D,n,n[7],d?x(D,n[7],s,null):Z(n[7]),null)},i(n){d||(oe(g,n),d=!0)},o(n){fe(g,n),d=!1},d(n){n&&b(e),i&&i.d(),g&&g.d(n)}}}L(be,"create_fragment");function ve(a,e,t){let l,o,f,r,h,y,d=O,m=L(()=>(d(),d=le(r,s=>t(4,y=s)),r),"$$subscribe_tablesQuery");ee(a,_e,s=>t(2,h=s)),a.$$.on_destroy.push(()=>d());let{$$slots:c={},$$scope:i}=e;const{bindings:D}=te("appContext"),g=ce(),n=L(()=>g.invalidateQueries({queryKey:f}),"click_handler");return a.$$set=s=>{"$$scope"in s&&t(7,i=s.$$scope)},a.$$.update=()=>{a.$$.dirty&4&&t(1,l=h.params.bindingName),a.$$.dirty&2&&t(6,o=D[l]),a.$$.dirty&2&&t(0,f=["d1",l,"tables"]),a.$$.dirty&65&&m(t(3,r=ue({queryKey:f,queryFn:()=>o.prepare("PRAGMA table_list").raw().then(s=>s),select:s=>he(s).map(([,_,,p])=>({name:_,ncol:p}))})))},[f,l,h,r,y,g,o,i,c,n]}L(ve,"instance");const U=class U extends ie{constructor(e){super(),ne(this,e,ve,be,W,{})}};L(U,"Layout");let K=U;export{K as component};
