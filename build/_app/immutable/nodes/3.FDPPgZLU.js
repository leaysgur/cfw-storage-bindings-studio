var ee=Object.defineProperty;var r=(m,o)=>ee(m,"name",{value:o,configurable:!0});import{a as s,t as c,c as Y,b as ae}from"../chunks/disclose-version.BbL9ofby.js";import{p as te,Y as re,t as _,a as se,f as L,m as t,v as b,c as a,r as e,s as f}from"../chunks/runtime.DGYXNv_o.js";import{d as ie,s as N}from"../chunks/render.BQbOHs_-.js";import{i as K}from"../chunks/if.6eDf-x_W.js";import{e as oe,i as le}from"../chunks/context.CNAOubcP.js";import{s as ne}from"../chunks/snippet.CrnrPYU_.js";import{s as j}from"../chunks/attributes.BkVHChdm.js";import{s as ve,a as z,p as ce}from"../chunks/stores.BDonSuMi.js";import{e as me}from"../chunks/d1.DaxEI2kX.js";import{u as de,c as pe}from"../chunks/createQuery.RWPW4Ur5.js";var ue=c("<pre> </pre>"),_e=r((m,o,d)=>o.invalidateQueries({queryKey:t(d)}),"on_click"),be=c("<li><a> </a></li>"),fe=c("<li>No tables...</li>"),ge=c('<div class="action svelte-rbew6h"><button>Refresh tables list</button></div> <div class="selector svelte-rbew6h"><ul></ul> <ul><li><a>REPL</a></li></ul></div>',1),he=c('<section class="svelte-rbew6h"><h2 class="svelte-rbew6h"> </h2> <!> <div class="main svelte-rbew6h"><!></div></section>');function Pe(m,o){te(o,!0);const d=ve(),P=r(()=>z(ce,"$page",d),"$page"),l=r(()=>z(t(J),"$tablesQuery",d),"$tablesQuery"),{bindings:B}=re("appContext"),H=de();let p=b(()=>P().params.bindingName),I=b(()=>B[t(p)]),R=b(()=>["d1",t(p),"tables"]),J=b(()=>pe({queryKey:t(R),queryFn:r(()=>t(I).prepare("PRAGMA table_list").raw().then(i=>i),"queryFn"),select:r(i=>me(i).map(([,n,,y])=>({name:n,ncol:y})),"select")}));var g=he(),h=a(g),O=a(h);e(h);var A=f(h,2);K(A,()=>l().isLoading,i=>{var n=ae("🌀 Loading tables...");s(i,n)},i=>{var n=Y(),y=L(n);K(y,()=>l().isError,x=>{var v=ue(),$=a(v);e(v),_(()=>N($,`💥 ${l().error.message??""}`)),s(x,v)},x=>{var v=Y(),$=L(v);K($,()=>l().isSuccess,V=>{var E=ge(),w=L(E),F=a(w);F.__click=[_e,H,R],e(w);var G=f(w,2),Q=a(G);oe(Q,5,()=>l().data,le,(q,u)=>{let T=r(()=>t(u).name,"name"),X=r(()=>t(u).ncol,"ncol");var k=be(),C=a(k),Z=a(C);e(C),e(k),_(()=>{j(C,"href",`/d1/${t(p)}/${T()}`),N(Z,`${T()??""} (${X()??""} cols)`)}),s(q,k)},q=>{var u=fe();s(q,u)}),e(Q);var M=f(Q,2),S=a(M),W=a(S);e(S),e(M),e(G),_(()=>{F.disabled=l().isFetching,j(W,"href",`/d1/${t(p)}/repl`)}),s(V,E)},null,!0),s(x,v)},!0),s(i,n)});var D=f(A,2),U=a(D);ne(U,()=>o.children),e(D),e(g),_(()=>N(O,`[D1] ${P().params.bindingName??""}`)),s(m,g),se()}r(Pe,"_layout");ie(["click"]);export{Pe as component};
