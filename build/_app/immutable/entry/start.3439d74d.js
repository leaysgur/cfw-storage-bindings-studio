var tt=Object.defineProperty;var c=(n,o)=>tt(n,"name",{value:o,configurable:!0});import{o as we,t as ye}from"../chunks/scheduler.868b4e5c.js";import{S as We,a as He,I as V,g as Ve,f as Fe,b as ve,c as fe,s as ae,i as be,d as K,o as Je,e as B,P as Ke,h as nt}from"../chunks/singletons.063831b2.js";import{u as at}from"../chunks/parse.457da179.js";function rt(n,o){return n==="/"||o==="ignore"?n:o==="never"?n.endsWith("/")?n.slice(0,-1):n:o==="always"&&!n.endsWith("/")?n+"/":n}c(rt,"normalize_path");function ot(n){return n.split("%25").map(decodeURI).join("%25")}c(ot,"decode_pathname");function it(n){for(const o in n)n[o]=decodeURIComponent(n[o]);return n}c(it,"decode_params");const st=["href","pathname","search","searchParams","toString","toJSON"];function ct(n,o){const f=new URL(n);for(const l of st)Object.defineProperty(f,l,{get(){return o(),n[l]},enumerable:!0,configurable:!0});return lt(f),f}c(ct,"make_trackable");function lt(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}c(lt,"disable_hash");const ft="/__data.json";function ut(n){return n.replace(/\/$/,"")+ft}c(ut,"add_data_suffix");function dt(...n){let o=5381;for(const f of n)if(typeof f=="string"){let l=f.length;for(;l;)o=o*33^f.charCodeAt(--l)}else if(ArrayBuffer.isView(f)){const l=new Uint8Array(f.buffer,f.byteOffset,f.byteLength);let g=l.length;for(;g;)o=o*33^l[--g]}else throw new TypeError("value must be a string or TypedArray");return(o>>>0).toString(36)}c(dt,"hash");const Ye=window.fetch;window.fetch=(n,o)=>((n instanceof Request?n.method:(o==null?void 0:o.method)||"GET")!=="GET"&&re.delete(ke(n)),Ye(n,o));const re=new Map;function pt(n,o){const f=ke(n,o),l=document.querySelector(f);if(l!=null&&l.textContent){const{body:g,..._}=JSON.parse(l.textContent),E=l.getAttribute("data-ttl");return E&&re.set(f,{body:g,init:_,ttl:1e3*Number(E)}),Promise.resolve(new Response(g,_))}return window.fetch(n,o)}c(pt,"initial_fetch");function ht(n,o,f){if(re.size>0){const l=ke(n,f),g=re.get(l);if(g){if(performance.now()<g.ttl&&["default","force-cache","only-if-cached",void 0].includes(f==null?void 0:f.cache))return new Response(g.body,g.init);re.delete(l)}}return window.fetch(o,f)}c(ht,"subsequent_fetch");function ke(n,o){let l=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;if(o!=null&&o.headers||o!=null&&o.body){const g=[];o.headers&&g.push([...new Headers(o.headers)].join(",")),o.body&&(typeof o.body=="string"||ArrayBuffer.isView(o.body))&&g.push(o.body),l+=`[data-hash="${dt(...g)}"]`}return l}c(ke,"build_selector");const gt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function mt(n){const o=[];return{pattern:n==="/"?/^\/$/:new RegExp(`^${wt(n).map(l=>{const g=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(l);if(g)return o.push({name:g[1],matcher:g[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const _=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(l);if(_)return o.push({name:_[1],matcher:_[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!l)return;const E=l.split(/\[(.+?)\](?!\])/);return"/"+E.map((y,S)=>{if(S%2){if(y.startsWith("x+"))return Se(String.fromCharCode(parseInt(y.slice(2),16)));if(y.startsWith("u+"))return Se(String.fromCharCode(...y.slice(2).split("-").map(I=>parseInt(I,16))));const d=gt.exec(y);if(!d)throw new Error(`Invalid param: ${y}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,C,N,T,q]=d;return o.push({name:T,matcher:q,optional:!!C,rest:!!N,chained:N?S===1&&E[0]==="":!1}),N?"(.*?)":C?"([^/]*)?":"([^/]+?)"}return Se(y)}).join("")}).join("")}/?$`),params:o}}c(mt,"parse_route_id");function _t(n){return!/^\([^)]+\)$/.test(n)}c(_t,"affects_path");function wt(n){return n.slice(1).split("/").filter(_t)}c(wt,"get_route_segments");function yt(n,o,f){const l={},g=n.slice(1),_=g.filter(w=>w!==void 0);let E=0;for(let w=0;w<o.length;w+=1){const y=o[w];let S=g[w-E];if(y.chained&&y.rest&&E&&(S=g.slice(w-E,w+1).filter(d=>d).join("/"),E=0),S===void 0){y.rest&&(l[y.name]="");continue}if(!y.matcher||f[y.matcher](S)){l[y.name]=S;const d=o[w+1],C=g[w+1];d&&!d.rest&&d.optional&&C&&y.chained&&(E=0),!d&&!C&&Object.keys(l).length===_.length&&(E=0);continue}if(y.optional&&y.chained){E++;continue}return}if(!E)return l}c(yt,"exec");function Se(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}c(Se,"escape");function vt({nodes:n,server_loads:o,dictionary:f,matchers:l}){const g=new Set(o);return Object.entries(f).map(([w,[y,S,d]])=>{const{pattern:C,params:N}=mt(w),T={id:w,exec:q=>{const I=C.exec(q);if(I)return yt(I,N,l)},errors:[1,...d||[]].map(q=>n[q]),layouts:[0,...S||[]].map(E),leaf:_(y)};return T.errors.length=T.layouts.length=Math.max(T.errors.length,T.layouts.length),T});function _(w){const y=w<0;return y&&(w=~w),[y,n[w]]}function E(w){return w===void 0?w:[g.has(w),n[w]]}}c(vt,"parse");function Xe(n){try{return JSON.parse(sessionStorage[n])}catch{}}c(Xe,"get");function ze(n,o){const f=JSON.stringify(o);try{sessionStorage[n]=f}catch{}}c(ze,"set");function bt(n){return n.filter(o=>o!=null)}c(bt,"compact");const Qe=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Qe];const St=new Set([...Qe]);[...St];async function Et(n,o){var f;for(const l in n)if(typeof((f=n[l])==null?void 0:f.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([g,_])=>[g,await _])));return n}c(Et,"unwrap_promises");const Re=class Re{constructor(o,f){this.status=o,typeof f=="string"?this.body={message:f}:f?this.body=f:this.body={message:`Error: ${o}`}}toString(){return JSON.stringify(this.body)}};c(Re,"HttpError");let H=Re;const Le=class Le{constructor(o,f){this.status=o,this.location=f}};c(Le,"Redirect");let ue=Le;const xt="x-sveltekit-invalidated",kt="x-sveltekit-trailing-slash",G=Xe(We)??{},ne=Xe(He)??{};function Ee(n){G[n]=ae()}c(Ee,"update_scroll_positions");function W(n){return location.href=n.href,new Promise(()=>{})}c(W,"native_navigation");function Rt(n,o){var Ne;const f=vt(n),l=n.nodes[0],g=n.nodes[1];l(),g();const _=document.documentElement,E=[],w=[];let y=null;const S={before_navigate:[],on_navigate:[],after_navigate:[]};let d={branch:[],error:null,url:null},C=!1,N=!1,T=!0,q=!1,I=!1,D=!1,Y=!1,F,U=(Ne=history.state)==null?void 0:Ne[V];U||(U=Date.now(),history.replaceState({...history.state,[V]:U},"",location.href));const de=G[U];de&&(history.scrollRestoration="manual",scrollTo(de.x,de.y));let J,X,Q;async function Ae(){if(Q=Q||Promise.resolve(),await Q,!Q)return;Q=null;const e=new URL(location.href),i=ee(e,!0);y=null;const t=X={},r=i&&await ge(i);if(t===X&&r){if(r.type==="redirect")return oe(new URL(r.location,e).href,{},1,t);r.props.page!==void 0&&(J=r.props.page),F.$set(r.props)}}c(Ae,"invalidate");function Pe(e){w.some(i=>i==null?void 0:i.snapshot)&&(ne[e]=w.map(i=>{var t;return(t=i==null?void 0:i.snapshot)==null?void 0:t.capture()}))}c(Pe,"capture_snapshot");function Oe(e){var i;(i=ne[e])==null||i.forEach((t,r)=>{var a,s;(s=(a=w[r])==null?void 0:a.snapshot)==null||s.restore(t)})}c(Oe,"restore_snapshot");function Ue(){Ee(U),ze(We,G),Pe(U),ze(He,ne)}c(Ue,"persist_state");async function oe(e,{noScroll:i=!1,replaceState:t=!1,keepFocus:r=!1,state:a={},invalidateAll:s=!1},u,v){return typeof e=="string"&&(e=new URL(e,Ve(document))),le({url:e,scroll:i?ae():null,keepfocus:r,redirect_count:u,details:{state:a,replaceState:t},nav_token:v,accepted:()=>{s&&(Y=!0)},blocked:()=>{},type:"goto"})}c(oe,"goto");async function Ie(e){return y={id:e.id,promise:ge(e).then(i=>(i.type==="loaded"&&i.state.error&&(y=null),i))},y.promise}c(Ie,"preload_data");async function ie(...e){const t=f.filter(r=>e.some(a=>r.exec(a))).map(r=>Promise.all([...r.layouts,r.leaf].map(a=>a==null?void 0:a[1]())));await Promise.all(t)}c(ie,"preload_code");function $e(e){var r;d=e.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),J=e.props.page,F=new n.root({target:o,props:{...e.props,stores:K,components:w},hydrate:!0}),Oe(U);const t={from:null,to:{params:d.params,route:{id:((r=d.route)==null?void 0:r.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};S.after_navigate.forEach(a=>a(t)),N=!0}c($e,"initialize");async function Z({url:e,params:i,branch:t,status:r,error:a,route:s,form:u}){let v="never";for(const h of t)(h==null?void 0:h.slash)!==void 0&&(v=h.slash);e.pathname=rt(e.pathname,v),e.search=e.search;const b={type:"loaded",state:{url:e,params:i,branch:t,error:a,route:s},props:{constructors:bt(t).map(h=>h.node.component)}};u!==void 0&&(b.props.form=u);let m={},A=!J,R=0;for(let h=0;h<Math.max(t.length,d.branch.length);h+=1){const p=t[h],O=d.branch[h];(p==null?void 0:p.data)!==(O==null?void 0:O.data)&&(A=!0),p&&(m={...m,...p.data},A&&(b.props[`data_${R}`]=m),R+=1)}return(!d.url||e.href!==d.url.href||d.error!==a||u!==void 0&&u!==J.form||A)&&(b.props.page={error:a,params:i,route:{id:(s==null?void 0:s.id)??null},status:r,url:new URL(e),form:u??null,data:A?m:J.data}),b}c(Z,"get_navigation_result_from_branch");async function pe({loader:e,parent:i,url:t,params:r,route:a,server_data_node:s}){var m,A,R;let u=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await e();if((m=b.universal)!=null&&m.load){let P=function(...p){for(const O of p){const{href:$}=new URL(O,t);v.dependencies.add($)}};c(P,"depends");const h={route:new Proxy(a,{get:(p,O)=>(v.route=!0,p[O])}),params:new Proxy(r,{get:(p,O)=>(v.params.add(O),p[O])}),data:(s==null?void 0:s.data)??null,url:ct(t,()=>{v.url=!0}),async fetch(p,O){let $;p instanceof Request?($=p.url,O={body:p.method==="GET"||p.method==="HEAD"?void 0:await p.blob(),cache:p.cache,credentials:p.credentials,headers:p.headers,integrity:p.integrity,keepalive:p.keepalive,method:p.method,mode:p.mode,redirect:p.redirect,referrer:p.referrer,referrerPolicy:p.referrerPolicy,signal:p.signal,...O}):$=p;const M=new URL($,t);return P(M.href),M.origin===t.origin&&($=M.href.slice(t.origin.length)),N?ht($,M.href,O):pt($,O)},setHeaders:()=>{},depends:P,parent(){return v.parent=!0,i()}};u=await b.universal.load.call(null,h)??null,u=u?await Et(u,a.id):null}return{node:b,loader:e,server:s,universal:(A=b.universal)!=null&&A.load?{type:"data",data:u,uses:v}:null,data:u??(s==null?void 0:s.data)??null,slash:((R=b.universal)==null?void 0:R.trailingSlash)??(s==null?void 0:s.slash)}}c(pe,"load_node");function je(e,i,t,r,a){if(Y)return!0;if(!r)return!1;if(r.parent&&e||r.route&&i||r.url&&t)return!0;for(const s of r.params)if(a[s]!==d.params[s])return!0;for(const s of r.dependencies)if(E.some(u=>u(new URL(s))))return!0;return!1}c(je,"has_changed");function he(e,i){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?i??null:null}c(he,"create_data_node");async function ge({id:e,invalidating:i,url:t,params:r,route:a}){if((y==null?void 0:y.id)===e)return y.promise;const{errors:s,layouts:u,leaf:v}=a,b=[...u,v];s.forEach(x=>x==null?void 0:x().catch(()=>{})),b.forEach(x=>x==null?void 0:x[1]().catch(()=>{}));let m=null;const A=d.url?e!==d.url.pathname+d.url.search:!1,R=d.route?a.id!==d.route.id:!1;let P=!1;const h=b.map((x,L)=>{var z;const k=d.branch[L],j=!!(x!=null&&x[0])&&((k==null?void 0:k.loader)!==x[1]||je(P,R,A,(z=k.server)==null?void 0:z.uses,r));return j&&(P=!0),j});if(h.some(Boolean)){try{m=await Be(t,h)}catch(x){return se({status:x instanceof H?x.status:500,error:await te(x,{url:t,params:r,route:{id:a.id}}),url:t,route:a})}if(m.type==="redirect")return m}const p=m==null?void 0:m.nodes;let O=!1;const $=b.map(async(x,L)=>{var me;if(!x)return;const k=d.branch[L],j=p==null?void 0:p[L];if((!j||j.type==="skip")&&x[1]===(k==null?void 0:k.loader)&&!je(O,R,A,(me=k.universal)==null?void 0:me.uses,r))return k;if(O=!0,(j==null?void 0:j.type)==="error")throw j;return pe({loader:x[1],url:t,params:r,route:a,parent:async()=>{var Me;const qe={};for(let _e=0;_e<L;_e+=1)Object.assign(qe,(Me=await $[_e])==null?void 0:Me.data);return qe},server_data_node:he(j===void 0&&x[0]?{type:"skip"}:j??null,x[0]?k==null?void 0:k.server:void 0)})});for(const x of $)x.catch(()=>{});const M=[];for(let x=0;x<b.length;x+=1)if(b[x])try{M.push(await $[x])}catch(L){if(L instanceof ue)return{type:"redirect",location:L.location};let k=500,j;if(p!=null&&p.includes(L))k=L.status??k,j=L.error;else if(L instanceof H)k=L.status,j=L.body;else{if(await K.updated.check())return await W(t);j=await te(L,{params:r,url:t,route:{id:a.id}})}const z=await Ce(x,M,s);return z?await Z({url:t,params:r,branch:M.slice(0,z.idx).concat(z.node),status:k,error:j,route:a}):await De(t,{id:a.id},j,k)}else M.push(void 0);return await Z({url:t,params:r,branch:M,status:200,error:null,route:a,form:i?void 0:null})}c(ge,"load_route");async function Ce(e,i,t){for(;e--;)if(t[e]){let r=e;for(;!i[r];)r-=1;try{return{idx:r+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}c(Ce,"load_nearest_error_page");async function se({status:e,error:i,url:t,route:r}){const a={};let s=null;if(n.server_loads[0]===0)try{const m=await Be(t,[!0]);if(m.type!=="data"||m.nodes[0]&&m.nodes[0].type!=="data")throw 0;s=m.nodes[0]??null}catch{(t.origin!==Je||t.pathname!==location.pathname||C)&&await W(t)}const v=await pe({loader:l,url:t,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:he(s)}),b={node:await g(),loader:g,universal:null,server:null,data:null};return await Z({url:t,params:a,branch:[v,b],status:e,error:i,route:null})}c(se,"load_root_error_page");function ee(e,i){if(be(e,B))return;const t=ce(e);for(const r of f){const a=r.exec(t);if(a)return{id:e.pathname+e.search,invalidating:i,route:r,params:it(a),url:e}}}c(ee,"get_navigation_intent");function ce(e){return ot(e.pathname.slice(B.length)||"/")}c(ce,"get_url_path");function Te({url:e,type:i,intent:t,delta:r}){let a=!1;const s=Ge(d,t,e,i);r!==void 0&&(s.navigation.delta=r);const u={...s.navigation,cancel:()=>{a=!0,s.reject(new Error("navigation was cancelled"))}};return I||S.before_navigate.forEach(v=>v(u)),a?null:s}c(Te,"before_navigate");async function le({url:e,scroll:i,keepfocus:t,redirect_count:r,details:a,type:s,delta:u,nav_token:v={},accepted:b,blocked:m}){var $,M,x;const A=ee(e,!1),R=Te({url:e,type:s,delta:u,intent:A});if(!R){m();return}const P=U;b(),I=!0,N&&K.navigating.set(R.navigation),X=v;let h=A&&await ge(A);if(!h){if(be(e,B))return await W(e);h=await De(e,{id:null},await te(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(A==null?void 0:A.url)||e,X!==v)return R.reject(new Error("navigation was aborted")),!1;if(h.type==="redirect")if(r>=20)h=await se({status:500,error:await te(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return oe(new URL(h.location,e).href,{},r+1,v),!1;else(($=h.props.page)==null?void 0:$.status)>=400&&await K.updated.check()&&await W(e);if(E.length=0,Y=!1,q=!0,Ee(P),Pe(P),(M=h.props.page)!=null&&M.url&&h.props.page.url.pathname!==e.pathname&&(e.pathname=(x=h.props.page)==null?void 0:x.url.pathname),a){const L=a.replaceState?0:1;if(a.state[V]=U+=L,history[a.replaceState?"replaceState":"pushState"](a.state,"",e),!a.replaceState){let k=U+1;for(;ne[k]||G[k];)delete ne[k],delete G[k],k+=1}}if(y=null,N){d=h.state,h.props.page&&(h.props.page.url=e);const L=(await Promise.all(S.on_navigate.map(k=>k(R.navigation)))).filter(k=>typeof k=="function");if(L.length>0){let k=function(){S.after_navigate=S.after_navigate.filter(j=>!L.includes(j))};c(k,"cleanup"),L.push(k),S.after_navigate.push(...L)}F.$set(h.props)}else $e(h);const{activeElement:p}=document;if(await ye(),T){const L=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));i?scrollTo(i.x,i.y):L?L.scrollIntoView():scrollTo(0,0)}const O=document.activeElement!==p&&document.activeElement!==document.body;!t&&!O&&xe(),T=!0,h.props.page&&(J=h.props.page),I=!1,s==="popstate"&&Oe(U),R.fulfil(void 0),S.after_navigate.forEach(L=>L(R.navigation)),K.navigating.set(null),q=!1}c(le,"navigate");async function De(e,i,t,r){return e.origin===Je&&e.pathname===location.pathname&&!C?await se({status:r,error:t,url:e,route:i}):await W(e)}c(De,"server_fallback");function et(){let e;_.addEventListener("mousemove",s=>{const u=s.target;clearTimeout(e),e=setTimeout(()=>{r(u,2)},20)});function i(s){r(s.composedPath()[0],1)}c(i,"tap"),_.addEventListener("mousedown",i),_.addEventListener("touchstart",i,{passive:!0});const t=new IntersectionObserver(s=>{for(const u of s)u.isIntersecting&&(ie(ce(new URL(u.target.href))),t.unobserve(u.target))},{threshold:0});function r(s,u){const v=Fe(s,_);if(!v)return;const{url:b,external:m,download:A}=ve(v,B);if(m||A)return;const R=fe(v);if(!R.reload)if(u<=R.preload_data){const P=ee(b,!1);P&&Ie(P)}else u<=R.preload_code&&ie(ce(b))}c(r,"preload");function a(){t.disconnect();for(const s of _.querySelectorAll("a")){const{url:u,external:v,download:b}=ve(s,B);if(v||b)continue;const m=fe(s);m.reload||(m.preload_code===Ke.viewport&&t.observe(s),m.preload_code===Ke.eager&&ie(ce(u)))}}c(a,"after_navigate"),S.after_navigate.push(a),a()}c(et,"setup_preload");function te(e,i){return e instanceof H?e.body:n.hooks.handleError({error:e,event:i})??{message:i.route.id!=null?"Internal Error":"Not Found"}}return c(te,"handle_error"),{after_navigate:e=>{we(()=>(S.after_navigate.push(e),()=>{const i=S.after_navigate.indexOf(e);S.after_navigate.splice(i,1)}))},before_navigate:e=>{we(()=>(S.before_navigate.push(e),()=>{const i=S.before_navigate.indexOf(e);S.before_navigate.splice(i,1)}))},on_navigate:e=>{we(()=>(S.on_navigate.push(e),()=>{const i=S.on_navigate.indexOf(e);S.on_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(q||!N)&&(T=!1)},goto:(e,i={})=>oe(e,i,0),invalidate:e=>{if(typeof e=="function")E.push(e);else{const{href:i}=new URL(e,location.href);E.push(t=>t.href===i)}return Ae()},invalidate_all:()=>(Y=!0,Ae()),preload_data:async e=>{const i=new URL(e,Ve(document)),t=ee(i,!1);if(!t)throw new Error(`Attempted to preload a URL that does not belong to this app: ${i}`);await Ie(t)},preload_code:ie,apply_action:async e=>{if(e.type==="error"){const i=new URL(location.href),{branch:t,route:r}=d;if(!r)return;const a=await Ce(d.branch.length,t,r.errors);if(a){const s=await Z({url:i,params:d.params,branch:t.slice(0,a.idx).concat(a.node),status:e.status??500,error:e.error,route:r});d=s.state,F.$set(s.props),ye().then(xe)}}else e.type==="redirect"?oe(e.location,{invalidateAll:!0},0):(F.$set({form:null,page:{...J,form:e.data,status:e.status}}),await ye(),F.$set({form:e.data}),e.type==="success"&&xe())},_start_router:()=>{var i;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let r=!1;if(Ue(),!I){const a=Ge(d,void 0,null,"leave"),s={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation was cancelled"))}};S.before_navigate.forEach(u=>u(s))}r?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ue()}),(i=navigator.connection)!=null&&i.saveData||et(),_.addEventListener("click",t=>{var P;if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const r=Fe(t.composedPath()[0],_);if(!r)return;const{url:a,external:s,target:u,download:v}=ve(r,B);if(!a)return;if(u==="_parent"||u==="_top"){if(window.parent!==window)return}else if(u&&u!=="_self")return;const b=fe(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||v)return;if(s||b.reload){Te({url:a,type:"link"})?I=!0:t.preventDefault();return}const[A,R]=a.href.split("#");if(R!==void 0&&A===location.href.split("#")[0]){if(d.url.hash===a.hash){t.preventDefault(),(P=r.ownerDocument.getElementById(R))==null||P.scrollIntoView();return}if(D=!0,Ee(U),e(a),!b.replace_state)return;D=!1,t.preventDefault()}le({url:a,scroll:b.noscroll?ae():null,keepfocus:b.keep_focus??!1,redirect_count:0,details:{state:{},replaceState:b.replace_state??a.href===location.href},accepted:()=>t.preventDefault(),blocked:()=>t.preventDefault(),type:"link"})}),_.addEventListener("submit",t=>{if(t.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const u=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(be(u,B))return;const v=t.target,{keep_focus:b,noscroll:m,reload:A,replace_state:R}=fe(v);if(A)return;t.preventDefault(),t.stopPropagation();const P=new FormData(v),h=a==null?void 0:a.getAttribute("name");h&&P.append(h,(a==null?void 0:a.getAttribute("value"))??""),u.search=new URLSearchParams(P).toString(),le({url:u,scroll:m?ae():null,keepfocus:b??!1,redirect_count:0,details:{state:{},replaceState:R??u.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async t=>{var r;if(X={},(r=t.state)!=null&&r[V]){if(t.state[V]===U)return;const a=G[t.state[V]],s=new URL(location.href);if(d.url.href.split("#")[0]===location.href.split("#")[0]){e(s),G[U]=ae(),U=t.state[V],scrollTo(a.x,a.y);return}const u=t.state[V]-U;await le({url:s,scroll:a,keepfocus:!1,redirect_count:0,details:null,accepted:()=>{U=t.state[V]},blocked:()=>{history.go(-u)},type:"popstate",delta:u,nav_token:X})}else if(!D){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{D&&(D=!1,history.replaceState({...history.state,[V]:++U},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&K.navigating.set(null)});function e(t){d.url=t,K.page.set({...J,url:t}),K.page.notify()}c(e,"update_url")},_hydrate:async({status:e=200,error:i,node_ids:t,params:r,route:a,data:s,form:u})=>{C=!0;const v=new URL(location.href);({params:r={},route:a={id:null}}=ee(v,!1)||{});let b;try{const m=t.map(async(P,h)=>{const p=s[h];return p!=null&&p.uses&&(p.uses=Ze(p.uses)),pe({loader:n.nodes[P],url:v,params:r,route:a,parent:async()=>{const O={};for(let $=0;$<h;$+=1)Object.assign(O,(await m[$]).data);return O},server_data_node:he(p)})}),A=await Promise.all(m),R=f.find(({id:P})=>P===a.id);if(R){const P=R.layouts;for(let h=0;h<P.length;h++)P[h]||A.splice(h,0,void 0)}b=await Z({url:v,params:r,branch:A,status:e,error:i,form:u,route:R??null})}catch(m){if(m instanceof ue){await W(new URL(m.location,location.href));return}b=await se({status:m instanceof H?m.status:500,error:await te(m,{url:v,params:r,route:a}),url:v,route:a})}$e(b)}}}c(Rt,"create_client");async function Be(n,o){var g;const f=new URL(n);f.pathname=ut(n.pathname),n.pathname.endsWith("/")&&f.searchParams.append(kt,"1"),f.searchParams.append(xt,o.map(_=>_?"1":"0").join(""));const l=await Ye(f.href);if((g=l.headers.get("content-type"))!=null&&g.includes("text/html")&&await W(n),!l.ok)throw new H(l.status,await l.json());return new Promise(async _=>{var C;const E=new Map,w=l.body.getReader(),y=new TextDecoder;function S(N){return at(N,{Promise:T=>new Promise((q,I)=>{E.set(T,{fulfil:q,reject:I})})})}c(S,"deserialize");let d="";for(;;){const{done:N,value:T}=await w.read();if(N&&!d)break;for(d+=!T&&d?`
`:y.decode(T);;){const q=d.indexOf(`
`);if(q===-1)break;const I=JSON.parse(d.slice(0,q));if(d=d.slice(q+1),I.type==="redirect")return _(I);if(I.type==="data")(C=I.nodes)==null||C.forEach(D=>{(D==null?void 0:D.type)==="data"&&(D.uses=Ze(D.uses),D.data=S(D.data))}),_(I);else if(I.type==="chunk"){const{id:D,data:Y,error:F}=I,U=E.get(D);E.delete(D),F?U.reject(S(F)):U.fulfil(S(Y))}}}})}c(Be,"load_data");function Ze(n){return{dependencies:new Set((n==null?void 0:n.dependencies)??[]),params:new Set((n==null?void 0:n.params)??[]),parent:!!(n!=null&&n.parent),route:!!(n!=null&&n.route),url:!!(n!=null&&n.url)}}c(Ze,"deserialize_uses");function xe(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const o=document.body,f=o.getAttribute("tabindex");o.tabIndex=-1,o.focus({preventScroll:!0,focusVisible:!1}),f!==null?o.setAttribute("tabindex",f):o.removeAttribute("tabindex");const l=getSelection();if(l&&l.type!=="None"){const g=[];for(let _=0;_<l.rangeCount;_+=1)g.push(l.getRangeAt(_));setTimeout(()=>{if(l.rangeCount===g.length){for(let _=0;_<l.rangeCount;_+=1){const E=g[_],w=l.getRangeAt(_);if(E.commonAncestorContainer!==w.commonAncestorContainer||E.startContainer!==w.startContainer||E.endContainer!==w.endContainer||E.startOffset!==w.startOffset||E.endOffset!==w.endOffset)return}l.removeAllRanges()}})}}}c(xe,"reset_focus");function Ge(n,o,f,l){var y,S;let g,_;const E=new Promise((d,C)=>{g=d,_=C});return E.catch(()=>{}),{navigation:{from:{params:n.params,route:{id:((y=n.route)==null?void 0:y.id)??null},url:n.url},to:f&&{params:(o==null?void 0:o.params)??null,route:{id:((S=o==null?void 0:o.route)==null?void 0:S.id)??null},url:f},willUnload:!o,type:l,complete:E},fulfil:g,reject:_}}c(Ge,"create_navigation");async function Ut(n,o,f){const l=Rt(n,o);nt({client:l}),f?await l._hydrate(f):l.goto(location.href,{replaceState:!0}),l._start_router()}c(Ut,"start");export{Ut as start};
