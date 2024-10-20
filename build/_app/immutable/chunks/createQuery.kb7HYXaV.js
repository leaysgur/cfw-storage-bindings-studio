var Ct=Object.defineProperty;var o=(i,r)=>Ct(i,"name",{value:r,configurable:!0});var X=(i,r,t)=>{if(!r.has(i))throw TypeError("Cannot "+t)};var e=(i,r,t)=>(X(i,r,"read from private field"),t?t.call(i):r.get(i)),u=(i,r,t)=>{if(r.has(i))throw TypeError("Cannot add the same private member more than once");r instanceof WeakSet?r.add(i):r.set(i,t)},c=(i,r,t,s)=>(X(i,r,"write to private field"),s?s.call(i,t):r.set(i,t),t);var d=(i,r,t)=>(X(i,r,"access private method"),t);import{S as St,d as Z,f as Qt,g as pt,h as bt,t as It,j as Ut,k as Ft,r as gt,n as Rt,l as wt,m as Dt}from"./context.qpJfU0IM.js";import{r as Et,d as Y,g as Lt}from"./parse.6b1VPbjQ.js";var v,a,x,b,I,D,O,A,E,L,U,F,S,M,w,T,_,$,j,tt,k,et,B,st,W,it,z,rt,N,nt,K,mt,V,Mt=(V=class extends St{constructor(t,s){super();u(this,w);u(this,_);u(this,j);u(this,k);u(this,B);u(this,W);u(this,z);u(this,N);u(this,K);u(this,v,void 0);u(this,a,void 0);u(this,x,void 0);u(this,b,void 0);u(this,I,void 0);u(this,D,void 0);u(this,O,void 0);u(this,A,void 0);u(this,E,void 0);u(this,L,void 0);u(this,U,void 0);u(this,F,void 0);u(this,S,void 0);u(this,M,new Set);this.options=s,c(this,v,t),c(this,O,null),this.bindMethods(),this.setOptions(s)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(e(this,a).addObserver(this),vt(e(this,a),this.options)?d(this,w,T).call(this):this.updateResult(),d(this,B,st).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return at(e(this,a),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return at(e(this,a),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,d(this,W,it).call(this),d(this,z,rt).call(this),e(this,a).removeObserver(this)}setOptions(t,s){const n=this.options,p=e(this,a);if(this.options=e(this,v).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");d(this,N,nt).call(this),e(this,a).setOptions(this.options),n._defaulted&&!Z(this.options,n)&&e(this,v).getQueryCache().notify({type:"observerOptionsUpdated",query:e(this,a),observer:this});const l=this.hasListeners();l&&yt(e(this,a),p,this.options,n)&&d(this,w,T).call(this),this.updateResult(s),l&&(e(this,a)!==p||this.options.enabled!==n.enabled||this.options.staleTime!==n.staleTime)&&d(this,_,$).call(this);const f=d(this,j,tt).call(this);l&&(e(this,a)!==p||this.options.enabled!==n.enabled||f!==e(this,S))&&d(this,k,et).call(this,f)}getOptimisticResult(t){const s=e(this,v).getQueryCache().build(e(this,v),t),n=this.createResult(s,t);return Tt(this,n)&&(c(this,b,n),c(this,D,this.options),c(this,I,e(this,a).state)),n}getCurrentResult(){return e(this,b)}trackResult(t,s){const n={};return Object.keys(t).forEach(p=>{Object.defineProperty(n,p,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(p),s==null||s(p),t[p])})}),n}trackProp(t){e(this,M).add(t)}getCurrentQuery(){return e(this,a)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const s=e(this,v).defaultQueryOptions(t),n=e(this,v).getQueryCache().build(e(this,v),s);return n.isFetchingOptimistic=!0,n.fetch().then(()=>this.createResult(n,s))}fetch(t){return d(this,w,T).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),e(this,b)))}createResult(t,s){var ft;const n=e(this,a),p=this.options,l=e(this,b),f=e(this,I),C=e(this,D),g=t!==n?t.state:e(this,x),{state:y}=t;let h={...y},ot=!1,m;if(s._optimisticResults){const R=this.hasListeners(),J=!R&&vt(t,s),Ot=R&&yt(t,n,s,p);(J||Ot)&&(h={...h,...Ft(y.data,t.options)}),s._optimisticResults==="isRestoring"&&(h.fetchStatus="idle")}let{error:ut,errorUpdatedAt:ct,status:Q}=h;if(s.select&&h.data!==void 0)if(l&&h.data===(f==null?void 0:f.data)&&s.select===e(this,A))m=e(this,E);else try{c(this,A,s.select),m=s.select(h.data),m=gt(l==null?void 0:l.data,m,s),c(this,E,m),c(this,O,null)}catch(R){c(this,O,R)}else m=h.data;if(s.placeholderData!==void 0&&m===void 0&&Q==="pending"){let R;if(l!=null&&l.isPlaceholderData&&s.placeholderData===(C==null?void 0:C.placeholderData))R=l.data;else if(R=typeof s.placeholderData=="function"?s.placeholderData((ft=e(this,L))==null?void 0:ft.state.data,e(this,L)):s.placeholderData,s.select&&R!==void 0)try{R=s.select(R),c(this,O,null)}catch(J){c(this,O,J)}R!==void 0&&(Q="success",m=gt(l==null?void 0:l.data,R,s),ot=!0)}e(this,O)&&(ut=e(this,O),m=e(this,E),ct=Date.now(),Q="error");const q=h.fetchStatus==="fetching",G=Q==="pending",H=Q==="error",lt=G&&q,dt=m!==void 0;return{status:Q,fetchStatus:h.fetchStatus,isPending:G,isSuccess:Q==="success",isError:H,isInitialLoading:lt,isLoading:lt,data:m,dataUpdatedAt:h.dataUpdatedAt,error:ut,errorUpdatedAt:ct,failureCount:h.fetchFailureCount,failureReason:h.fetchFailureReason,errorUpdateCount:h.errorUpdateCount,isFetched:h.dataUpdateCount>0||h.errorUpdateCount>0,isFetchedAfterMount:h.dataUpdateCount>g.dataUpdateCount||h.errorUpdateCount>g.errorUpdateCount,isFetching:q,isRefetching:q&&!G,isLoadingError:H&&!dt,isPaused:h.fetchStatus==="paused",isPlaceholderData:ot,isRefetchError:H&&dt,isStale:ht(t,s),refetch:this.refetch}}updateResult(t){const s=e(this,b),n=this.createResult(e(this,a),this.options);if(c(this,I,e(this,a).state),c(this,D,this.options),e(this,I).data!==void 0&&c(this,L,e(this,a)),Z(n,s))return;c(this,b,n);const p={},l=o(()=>{if(!s)return!0;const{notifyOnChangeProps:f}=this.options,C=typeof f=="function"?f():f;if(C==="all"||!C&&!e(this,M).size)return!0;const P=new Set(C??e(this,M));return this.options.throwOnError&&P.add("error"),Object.keys(e(this,b)).some(g=>{const y=g;return e(this,b)[y]!==s[y]&&P.has(y)})},"shouldNotifyListeners");(t==null?void 0:t.listeners)!==!1&&l()&&(p.listeners=!0),d(this,K,mt).call(this,{...p,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&d(this,B,st).call(this)}},v=new WeakMap,a=new WeakMap,x=new WeakMap,b=new WeakMap,I=new WeakMap,D=new WeakMap,O=new WeakMap,A=new WeakMap,E=new WeakMap,L=new WeakMap,U=new WeakMap,F=new WeakMap,S=new WeakMap,M=new WeakMap,w=new WeakSet,T=o(function(t){d(this,N,nt).call(this);let s=e(this,a).fetch(this.options,t);return t!=null&&t.throwOnError||(s=s.catch(Qt)),s},"#executeFetch"),_=new WeakSet,$=o(function(){if(d(this,W,it).call(this),pt||e(this,b).isStale||!bt(this.options.staleTime))return;const s=It(e(this,b).dataUpdatedAt,this.options.staleTime)+1;c(this,U,setTimeout(()=>{e(this,b).isStale||this.updateResult()},s))},"#updateStaleTimeout"),j=new WeakSet,tt=o(function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(e(this,a)):this.options.refetchInterval)??!1},"#computeRefetchInterval"),k=new WeakSet,et=o(function(t){d(this,z,rt).call(this),c(this,S,t),!(pt||this.options.enabled===!1||!bt(e(this,S))||e(this,S)===0)&&c(this,F,setInterval(()=>{(this.options.refetchIntervalInBackground||Ut.isFocused())&&d(this,w,T).call(this)},e(this,S)))},"#updateRefetchInterval"),B=new WeakSet,st=o(function(){d(this,_,$).call(this),d(this,k,et).call(this,d(this,j,tt).call(this))},"#updateTimers"),W=new WeakSet,it=o(function(){e(this,U)&&(clearTimeout(e(this,U)),c(this,U,void 0))},"#clearStaleTimeout"),z=new WeakSet,rt=o(function(){e(this,F)&&(clearInterval(e(this,F)),c(this,F,void 0))},"#clearRefetchInterval"),N=new WeakSet,nt=o(function(){const t=e(this,v).getQueryCache().build(e(this,v),this.options);if(t===e(this,a))return;const s=e(this,a);c(this,a,t),c(this,x,t.state),this.hasListeners()&&(s==null||s.removeObserver(this),t.addObserver(this))},"#updateQuery"),K=new WeakSet,mt=o(function(t){Rt.batch(()=>{t.listeners&&this.listeners.forEach(s=>{s(e(this,b))}),e(this,v).getQueryCache().notify({query:e(this,a),type:"observerResultsUpdated"})})},"#notify"),o(V,"QueryObserver"),V);function Pt(i,r){return r.enabled!==!1&&i.state.data===void 0&&!(i.state.status==="error"&&r.retryOnMount===!1)}o(Pt,"shouldLoadOnMount");function vt(i,r){return Pt(i,r)||i.state.data!==void 0&&at(i,r,r.refetchOnMount)}o(vt,"shouldFetchOnMount");function at(i,r,t){if(r.enabled!==!1){const s=typeof t=="function"?t(i):t;return s==="always"||s!==!1&&ht(i,r)}return!1}o(at,"shouldFetchOn");function yt(i,r,t,s){return(i!==r||s.enabled===!1)&&(!t.suspense||i.state.status!=="error")&&ht(i,t)}o(yt,"shouldFetchOptionally");function ht(i,r){return r.enabled!==!1&&i.isStaleByTime(r.staleTime)}o(ht,"isStale");function Tt(i,r){return!Z(i.getCurrentResult(),r)}o(Tt,"shouldAssignObserverCurrentProperties");function xt(){return wt()}o(xt,"useIsRestoring");function At(i){return Dt()}o(At,"useQueryClient");function _t(i){return"subscribe"in i&&typeof i.subscribe=="function"}o(_t,"isSvelteStore");function Nt(){}o(Nt,"noop");function jt(i,r,t){const s=At(),n=xt(),p=_t(i)?i:Et(i),l=Y([p,n],([g,y])=>{const h=s.defaultQueryOptions(g);return h._optimisticResults=y?"isRestoring":"optimistic",h}),f=new r(s,Lt(l));l.subscribe(g=>{f.setOptions(g,{listeners:!1})});const C=Y(n,(g,y)=>{const h=g?()=>{}:f.subscribe(Rt.batchCalls(y));return f.updateResult(),h}),{subscribe:P}=Y([C,l],([g,y])=>(g=f.getOptimisticResult(y),y.notifyOnChangeProps?g:f.trackResult(g)));return{subscribe:P}}o(jt,"createBaseQuery");function Vt(i,r){return jt(i,Mt)}o(Vt,"createQuery");export{Mt as Q,jt as a,Vt as c,_t as i,Nt as n,At as u};
