var rt=Object.defineProperty;var o=(a,e)=>rt(a,"name",{value:e,configurable:!0});var xe=(a,e,t)=>{if(!e.has(a))throw TypeError("Cannot "+t)};var b=(a,e,t)=>(xe(a,e,"read from private field"),t?t.call(a):e.get(a)),G=(a,e,t)=>{if(e.has(a))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(a):e.set(a,t)},ee=(a,e,t,r)=>(xe(a,e,"write to private field"),r?r.call(a,t):e.set(a,t),t);var te=(a,e,t)=>(xe(a,e,"access private method"),t);import{h as st,j as nt,a as l,t as y,s,c as g,e as V,f as k}from"../chunks/disclose-version.BucBxo4S.js";import{r as M,p as de,a as he,l as u,J as H,e as Be,K as R,y as z,w as oe,I as it}from"../chunks/runtime.PM082qKs.js";import{a as ue,e as be,d as ye,s as X}from"../chunks/render.DV4Pg5-E.js";import{i as K}from"../chunks/if.C37vJmjH.js";import{S as ot,d as ut,o as Ce,n as Te,e as ke,i as Ie}from"../chunks/context.qpJfU0IM.js";import{r as lt,s as ct}from"../chunks/attributes.AgZSCq3u.js";import{l as vt}from"../chunks/shared.Cw0DxHz3.js";import{u as ge,s as Z,p as dt}from"../chunks/stores.DGAzmXNX.js";import{Q as ht,a as gt,u as me,i as mt,n as _t,c as Je}from"../chunks/createQuery.kb7HYXaV.js";import{i as Re,h as ft,a as bt,g as yt}from"../chunks/infiniteQueryBehavior.BOf9TdXX.js";import{r as ze,g as pt,d as xt}from"../chunks/parse.6b1VPbjQ.js";import{p as Me}from"../chunks/proxy.DDvSa-S9.js";import{b as Ue}from"../chunks/this.D0PalOrV.js";function je(a){st&&a.firstChild!==null&&nt(a)}o(je,"remove_textarea_child");function kt(a,e,t){vt(a,"input",()=>{t(Ee(a)?Le(a.value):a.value)}),M(()=>{var r=e();a.__value=r,!(Ee(a)&&r===Le(a.value))&&(a.type==="date"&&!r&&!a.value||(a.value=ue(r)))})}o(kt,"bind_value");function Ee(a){var e=a.type;return e==="number"||e==="range"}o(Ee,"is_numberlike_input");function Le(a){return a===""?null:+a}o(Le,"to_number");var le,Pt=(le=class extends ht{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:Re()},t)}getOptimisticResult(e){return e.behavior=Re(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){var p,f,i,d;const{state:r}=e,n=super.createResult(e,t),{isFetching:v,isRefetching:c}=n,m=v&&((f=(p=r.fetchMeta)==null?void 0:p.fetchMore)==null?void 0:f.direction)==="forward",_=v&&((d=(i=r.fetchMeta)==null?void 0:i.fetchMore)==null?void 0:d.direction)==="backward";return{...n,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:ft(t,r.data),hasPreviousPage:bt(t,r.data),isFetchingNextPage:m,isFetchingPreviousPage:_,isRefetching:c&&!m&&!_}}},o(le,"InfiniteQueryObserver"),le),J,U,N,D,ae,fe,ce,Pe,ve,Nt=(ve=class extends ot{constructor(t,r){super();G(this,ae);G(this,ce);G(this,J,void 0);G(this,U,void 0);G(this,N,void 0);G(this,D,void 0);ee(this,J,t),this.setOptions(r),this.bindMethods(),te(this,ae,fe).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var n;const r=this.options;this.options=b(this,J).defaultMutationOptions(t),ut(this.options,r)||b(this,J).getMutationCache().notify({type:"observerOptionsUpdated",mutation:b(this,N),observer:this}),r!=null&&r.mutationKey&&this.options.mutationKey&&Ce(r.mutationKey)!==Ce(this.options.mutationKey)?this.reset():((n=b(this,N))==null?void 0:n.state.status)==="pending"&&b(this,N).setOptions(this.options)}onUnsubscribe(){var t;this.hasListeners()||(t=b(this,N))==null||t.removeObserver(this)}onMutationUpdate(t){te(this,ae,fe).call(this),te(this,ce,Pe).call(this,t)}getCurrentResult(){return b(this,U)}reset(){var t;(t=b(this,N))==null||t.removeObserver(this),ee(this,N,void 0),te(this,ae,fe).call(this),te(this,ce,Pe).call(this)}mutate(t,r){var n;return ee(this,D,r),(n=b(this,N))==null||n.removeObserver(this),ee(this,N,b(this,J).getMutationCache().build(b(this,J),this.options)),b(this,N).addObserver(this),b(this,N).execute(t)}},J=new WeakMap,U=new WeakMap,N=new WeakMap,D=new WeakMap,ae=new WeakSet,fe=o(function(){var r;const t=((r=b(this,N))==null?void 0:r.state)??yt();ee(this,U,{...t,isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset})},"#updateResult"),ce=new WeakSet,Pe=o(function(t){Te.batch(()=>{var r,n,v,c,m,_,p,f;if(b(this,D)&&this.hasListeners()){const i=b(this,U).variables,d=b(this,U).context;(t==null?void 0:t.type)==="success"?((n=(r=b(this,D)).onSuccess)==null||n.call(r,t.data,i,d),(c=(v=b(this,D)).onSettled)==null||c.call(v,t.data,null,i,d)):(t==null?void 0:t.type)==="error"&&((_=(m=b(this,D)).onError)==null||_.call(m,t.error,i,d),(f=(p=b(this,D)).onSettled)==null||f.call(p,void 0,t.error,i,d))}this.listeners.forEach(i=>{i(b(this,U))})})},"#notify"),o(ve,"MutationObserver"),ve);function Mt(a,e){return gt(a,Pt)}o(Mt,"createInfiniteQuery");function Ke(a,e){const t=me(),r=mt(a)?a:ze(a),n=new Nt(t,pt(r));let v;r.subscribe(_=>{v=o((p,f)=>{n.mutate(p,f).catch(_t)},"mutate"),n.setOptions(_)});const c=ze(n.getCurrentResult(),_=>n.subscribe(Te.batchCalls(p=>_(p)))),{subscribe:m}=xt(c,_=>({..._,mutate:v,mutateAsync:_.mutate}));return{subscribe:m}}o(Ke,"createMutation");const De=new TextDecoder,Ae=new TextEncoder,Ne=De.decode.bind(De),We=Ae.encode.bind(Ae);var Kt=y('<form class="svelte-arygua"><label class="svelte-arygua">Key: <input type="text" name="key" required></label> <label class="svelte-arygua">Value: <div class="svelte-arygua"><textarea name="text-value"></textarea> <span>OR</span> <input type="file" name="binary-value"></div></label> <button type="submit">Put</button></form>');function Qt(a,e){de(e,!0);const t={};ge(t);const r=o(()=>Z(u(v),"$putMutation",t),"$putMutation"),n=me();let v=H(()=>Ke({mutationFn:([f,i])=>Promise.resolve(i instanceof File?i.arrayBuffer():We(i)).then(d=>e.KV.put(f,d).then(()=>f)),onSuccess:f=>{n.invalidateQueries({queryKey:["kv",e.bindingName,"list"]}),n.invalidateQueries({queryKey:["kv",e.bindingName,f]})}}));var c=Kt(),m=g(c),_=s(s(m,!0)),p=s(s(_,!0));M(()=>p.disabled=r().isPending),be("submit",c,f=>{f.preventDefault();const i=new FormData(f.currentTarget),[d,A,h]=[i.get("key"),i.get("text-value"),i.get("binary-value")];if(h instanceof File&&h.size!==0)return r().mutate([String(d),h]);r().mutate([String(d),String(A)])},!1),l(a,c),he()}o(Qt,"Add_key");var St=y("🌀 Loading value...",1),Ot=y("<pre> </pre>"),Vt=y("<pre>🙈 Value was `null`...</pre>"),$t=o((a,e,t)=>z(e,Me(R(t))),"on_click$3"),qt=y("<button> </button>"),wt=y("<pre> </pre>"),Ft=y('<textarea readonly="" disabled class="svelte-1v8em61"></textarea> <div class="view-as svelte-1v8em61">View as: <!></div> <dialog><!></dialog>',1);function Ct(a,e){de(e,!0);const t={};ge(t);const r=o(()=>Z(u(_),"$getQuery",t),"$getQuery"),n=o(i=>{try{return JSON.stringify(JSON.parse(Ne(i)),null,2)}catch{return"🤯 Not valid JSON!"}},"prettifyJSON"),v=["json"];let c=oe(null),m=oe(null);Be(()=>{var i,d;return u(c)!==null?(i=u(m))==null?void 0:i.showModal():(d=u(m))==null?void 0:d.close()});let _=H(()=>Je({queryKey:["kv",e.bindingName,e.key.name],queryFn:()=>e.KV.get(e.key.name,"arrayBuffer")}));var p=V(),f=k(p);K(f,()=>r().isLoading,i=>{var d=St();l(i,d)},i=>{var d=V(),A=k(d);K(A,()=>r().isError,h=>{var x=Ot(),j=g(x);M(()=>X(j,`💥 ${ue(r().error.message)}`)),l(h,x)},h=>{var x=V(),j=k(x);K(j,()=>r().isSuccess,W=>{var $=V(),P=k($);K(P,()=>r().data===null,q=>{var E=Vt();l(q,E)},q=>{var E=Ft(),L=k(E);je(L),M(()=>L.value=Ne(r().data));var Q=s(s(L,!0)),S=s(g(Q));ke(S,65,()=>v,Ie,(O,F,T)=>{var I=qt();I.__click=[$t,c,F];var Y=g(I);M(()=>X(Y,R(F))),l(O,I)});var w=s(s(Q,!0));Ue(w,O=>z(m,Me(O)),()=>u(m));var B=g(w);K(B,()=>u(c)==="json",O=>{var F=wt(),T=g(F);M(()=>X(T,n(r().data))),l(O,F)}),be("close",w,()=>z(c,null),!1),l(q,E)}),l(W,$)},null,!0),l(h,x)},!0),l(i,d)}),l(a,p),he()}o(Ct,"Show_value");ye(["click"]);var Rt=y("🌀 Loading value...",1),zt=y("<pre> </pre>"),Et=o((a,e)=>z(e,!1),"on_click$2"),Lt=y("<pre>🙈 Value was `null`</pre> <button>Cancel</button>",1),Dt=o((a,e)=>z(e,!1),"on_click_1$1"),At=y('<form class="svelte-1fzx4z8"><label class="svelte-1fzx4z8">Value: <div class="svelte-1fzx4z8"><textarea name="text-value" class="svelte-1fzx4z8"></textarea> OR <input type="file" name="binary-value"></div></label> <div><button>Cancel</button> <button type="submit">Put</button></div></form>'),Bt=o((a,e)=>z(e,!0),"on_click_2$1"),Tt=y("<dialog><!></dialog> <button>Update</button>",1);function It(a,e){de(e,!0);const t={};ge(t);const r=o(()=>Z(u(m),"$getQuery",t),"$getQuery"),n=o(()=>Z(p,"$putMutation",t),"$putMutation");let v=oe(!1),c=oe(null);Be(()=>{var h,x;return u(v)?(h=u(c))==null?void 0:h.showModal():(x=u(c))==null?void 0:x.close()});let m=H(()=>Je({queryKey:["kv",e.bindingName,e.key.name],queryFn:()=>e.KV.get(e.key.name,"arrayBuffer"),enabled:u(v),select:h=>h===null?null:Ne(h)}));const _=me(),p=Ke({mutationFn:h=>Promise.resolve(h instanceof File?h.arrayBuffer():We(h)).then(x=>e.KV.put(e.key.name,x)),onSuccess:()=>{_.invalidateQueries({queryKey:["kv",e.bindingName,e.key.name]}),z(v,!1)}});var f=Tt(),i=k(f);Ue(i,h=>z(c,Me(h)),()=>u(c));var d=g(i);K(d,()=>r().isLoading,h=>{var x=Rt();l(h,x)},h=>{var x=V(),j=k(x);K(j,()=>r().isError,W=>{var $=zt(),P=g($);M(()=>X(P,`💥 ${ue(r().error.message)}`)),l(W,$)},W=>{var $=V(),P=k($);K(P,()=>r().isSuccess,q=>{var E=V(),L=k(E);K(L,()=>r().data===null,Q=>{var S=Lt(),w=k(S),B=s(s(w,!0));B.__click=[Et,v],l(Q,S)},Q=>{var S=At(),w=g(S),B=s(g(w)),O=g(B);je(O);var F=s(s(w,!0)),T=g(F);T.__click=[Dt,v];var I=s(s(T,!0));M(()=>{O.value=r().data,I.disabled=n().isPending}),be("submit",S,Y=>{Y.preventDefault();const _e=new FormData(Y.currentTarget),[pe,re]=[_e.get("text-value"),_e.get("binary-value")];if(re instanceof File&&re.size!==0)return n().mutate(re);n().mutate(String(pe))},!1),l(Q,S)}),l(q,E)},null,!0),l(W,$)},!0),l(h,x)});var A=s(s(i,!0));A.__click=[Bt,v],be("close",i,()=>z(v,!1),!1),l(a,f),he()}o(It,"Update_key");ye(["click"]);var Jt=o((a,e,t)=>confirm("Are you sure?")&&e().mutate(),"on_click$1"),Ut=y("<button>Delete</button>");function jt(a,e){de(e,!0);const t={};ge(t);const r=o(()=>Z(v,"$deleteMutation",t),"$deleteMutation"),n=me(),v=Ke({mutationFn:()=>e.KV.delete(e.key.name),onSuccess:()=>{n.invalidateQueries({queryKey:["kv",e.bindingName]})}});var c=Ut();c.__click=[Jt,r,v],M(()=>c.disabled=r().isPending),l(a,c),he()}o(jt,"Delete_key");ye(["click"]);var Wt=y("🌀 Loading keys...",1),Yt=y("<pre> </pre>"),Gt=o((a,e,t)=>e.invalidateQueries({queryKey:u(t)}),"on_click"),Ht=o((a,e,t,r)=>e.invalidateQueries({queryKey:["kv",u(t),R(r).name]}),"on_click_1"),Xt=y('<tr><td align="left" class="svelte-c0188x"> </td><td align="left" class="svelte-c0188x"><!></td><td class="svelte-c0188x"><button>Refresh</button> <!> <!></td></tr>'),Zt=y('<tr><td class="svelte-c0188x">No entries...</td></tr>'),ea=o((a,e,t)=>e().fetchNextPage(),"on_click_2"),ta=y("<button>Load more</button>"),aa=y('<div class="action svelte-c0188x"><label>Filter key: <input type="search"></label> <button>Refresh all</button></div> <div class="scroller svelte-c0188x"><table class="svelte-c0188x"><thead><tr><th>Key</th><th>Value</th><th>Actions</th></tr></thead><tbody></tbody></table></div> <!>',1),ra=y('<section class="svelte-c0188x"><h2> </h2> <details><summary>Add new key:value</summary> <!></details> <!></section>');function pa(a,e){de(e,!0);const t={};ge(t);const r=o(()=>Z(dt,"$page",t),"$page"),n=o(()=>Z(u(f),"$listQuery",t),"$listQuery"),{bindings:v}=it("appContext"),c=me();let m=H(()=>r().params.bindingName),_=H(()=>v[u(m)]),p=H(()=>["kv",u(m),"list"]),f=H(()=>Mt({queryKey:u(p),queryFn:({pageParam:P})=>u(_).list({cursor:P.cursor,limit:25}),initialPageParam:{cursor:null},getNextPageParam:P=>P.list_complete?void 0:P})),i=oe("");var d=ra(),A=g(d),h=g(A),x=s(s(A,!0)),j=g(x),W=s(s(j,!0));Qt(W,{get KV(){return u(_)},get bindingName(){return u(m)}});var $=s(s(x,!0));K($,()=>n().isLoading,P=>{var q=Wt();l(P,q)},P=>{var q=V(),E=k(q);K(E,()=>n().isError,L=>{var Q=Yt(),S=g(Q);M(()=>X(S,`💥 ${ue(n().error.message)}`)),l(L,Q)},L=>{var Q=V(),S=k(Q);K(S,()=>n().isSuccess,w=>{var B=aa(),O=k(B),F=g(O),T=s(g(F));lt(T);var I=s(s(F,!0));I.__click=[Gt,c,p];var Y=s(s(O,!0)),_e=g(Y),pe=g(_e),re=s(pe);ke(re,73,o(()=>n().data.pages,"$$array"),Ie,(se,ne,na)=>{var Qe=V(),Ge=k(Qe);ke(Ge,69,()=>R(ne).keys,(ie,C)=>R(ie).name,(ie,C,Se)=>{var Oe=V(),He=k(Oe);K(He,()=>u(i)===""||R(C).name.includes(u(i)),Xe=>{var Ve=Xt(),$e=g(Ve),Ze=g($e),qe=s($e),et=g(qe);Ct(et,{get KV(){return u(_)},get bindingName(){return u(m)},get key(){return R(C)}});var tt=s(qe),we=g(tt);we.__click=[Ht,c,m,C];var Fe=s(s(we,!0));It(Fe,{get KV(){return u(_)},get bindingName(){return u(m)},get key(){return R(C)}});var at=s(s(Fe,!0));jt(at,{get KV(){return u(_)},get bindingName(){return u(m)},get key(){return R(C)}}),M(()=>X(Ze,R(C).name)),l(Xe,Ve)}),l(ie,Oe)},ie=>{var C=Zt(),Se=g(C);ct(Se,"colspan",3),l(ie,C)}),l(se,Qe)});var Ye=s(s(Y,!0));K(Ye,()=>n().hasNextPage,se=>{var ne=ta();ne.__click=[ea,n,f],M(()=>ne.disabled=n().isFetchingNextPage),l(se,ne)}),M(()=>I.disabled=n().isFetching),kt(T,()=>u(i),se=>z(i,se)),l(w,B)},null,!0),l(L,Q)},!0),l(P,q)}),M(()=>X(h,`[KV] ${ue(r().params.bindingName)}`)),l(a,d),he()}o(pa,"_page");ye(["click"]);export{pa as component};
