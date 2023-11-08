var Ot=Object.defineProperty;var c=(i,r)=>Ot(i,"name",{value:r,configurable:!0});var Y=(i,r,t)=>{if(!r.has(i))throw TypeError("Cannot "+t)};var e=(i,r,t)=>(Y(i,r,"read from private field"),t?t.call(i):r.get(i)),u=(i,r,t)=>{if(r.has(i))throw TypeError("Cannot add the same private member more than once");r instanceof WeakSet?r.add(i):r.set(i,t)},h=(i,r,t,s)=>(Y(i,r,"write to private field"),s?s.call(i,t):r.set(i,t),t);var d=(i,r,t)=>(Y(i,r,"access private method"),t);import{S as Ct,k as $,n as St,v as ft,q as pt,t as Ut,f as Qt,b as It,r as bt,a as mt,y as Ft,z as wt}from"./context.f1412b6d.js";import{r as Dt,d as Z}from"./index.e2fc19a5.js";import{q as Et}from"./scheduler.8c8bb1bf.js";var y,o,E,p,Q,T,v,k,A,M,I,F,U,w,D,x,_,tt,K,et,j,st,z,it,B,rt,W,nt,N,at,q,Rt,V,Tt=(V=class extends Ct{constructor(t,s){super();u(this,D);u(this,_);u(this,K);u(this,j);u(this,z);u(this,B);u(this,W);u(this,N);u(this,q);u(this,y,void 0);u(this,o,void 0);u(this,E,void 0);u(this,p,void 0);u(this,Q,void 0);u(this,T,void 0);u(this,v,void 0);u(this,k,void 0);u(this,A,void 0);u(this,M,void 0);u(this,I,void 0);u(this,F,void 0);u(this,U,void 0);u(this,w,void 0);h(this,o,void 0),h(this,E,void 0),h(this,p,void 0),h(this,w,new Set),h(this,y,t),this.options=s,h(this,v,null),this.bindMethods(),this.setOptions(s)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(e(this,o).addObserver(this),yt(e(this,o),this.options)&&d(this,D,x).call(this),d(this,z,it).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return ht(e(this,o),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return ht(e(this,o),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,d(this,B,rt).call(this),d(this,W,nt).call(this),e(this,o).removeObserver(this)}setOptions(t,s){const n=this.options,m=e(this,o);if(this.options=e(this,y).defaultQueryOptions(t),$(n,this.options)||e(this,y).getQueryCache().notify({type:"observerOptionsUpdated",query:e(this,o),observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=n.queryKey),d(this,N,at).call(this);const l=this.hasListeners();l&&gt(e(this,o),m,this.options,n)&&d(this,D,x).call(this),this.updateResult(s),l&&(e(this,o)!==m||this.options.enabled!==n.enabled||this.options.staleTime!==n.staleTime)&&d(this,_,tt).call(this);const f=d(this,K,et).call(this);l&&(e(this,o)!==m||this.options.enabled!==n.enabled||f!==e(this,U))&&d(this,j,st).call(this,f)}getOptimisticResult(t){const s=e(this,y).getQueryCache().build(e(this,y),t),n=this.createResult(s,t);return Mt(this,n)&&(h(this,p,n),h(this,T,this.options),h(this,Q,e(this,o).state)),n}getCurrentResult(){return e(this,p)}trackResult(t){const s={};return Object.keys(t).forEach(n=>{Object.defineProperty(s,n,{configurable:!1,enumerable:!0,get:()=>(e(this,w).add(n),t[n])})}),s}getCurrentQuery(){return e(this,o)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const s=e(this,y).defaultQueryOptions(t),n=e(this,y).getQueryCache().build(e(this,y),s);return n.isFetchingOptimistic=!0,n.fetch().then(()=>this.createResult(n,s))}fetch(t){return d(this,D,x).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),e(this,p)))}createResult(t,s){var dt;const n=e(this,o),m=this.options,l=e(this,p),f=e(this,Q),O=e(this,T),b=t!==n?t.state:e(this,E),{state:a}=t;let{error:C,errorUpdatedAt:ut,fetchStatus:L,status:S}=a,ct=!1,R;if(s._optimisticResults){const g=this.hasListeners(),X=!g&&yt(t,s),vt=g&&gt(t,n,s,m);(X||vt)&&(L=It(t.options.networkMode)?"fetching":"paused",a.dataUpdatedAt||(S="pending")),s._optimisticResults==="isRestoring"&&(L="idle")}if(s.select&&typeof a.data<"u")if(l&&a.data===(f==null?void 0:f.data)&&s.select===e(this,k))R=e(this,A);else try{h(this,k,s.select),R=s.select(a.data),R=bt(l==null?void 0:l.data,R,s),h(this,A,R),h(this,v,null)}catch(g){h(this,v,g)}else R=a.data;if(typeof s.placeholderData<"u"&&typeof R>"u"&&S==="pending"){let g;if(l!=null&&l.isPlaceholderData&&s.placeholderData===(O==null?void 0:O.placeholderData))g=l.data;else if(g=typeof s.placeholderData=="function"?s.placeholderData((dt=e(this,M))==null?void 0:dt.state.data,e(this,M)):s.placeholderData,s.select&&typeof g<"u")try{g=s.select(g),h(this,v,null)}catch(X){h(this,v,X)}typeof g<"u"&&(S="success",R=bt(l==null?void 0:l.data,g,s),ct=!0)}e(this,v)&&(C=e(this,v),R=e(this,A),ut=Date.now(),S="error");const G=L==="fetching",H=S==="pending",J=S==="error",lt=H&&G;return{status:S,fetchStatus:L,isPending:H,isSuccess:S==="success",isError:J,isInitialLoading:lt,isLoading:lt,data:R,dataUpdatedAt:a.dataUpdatedAt,error:C,errorUpdatedAt:ut,failureCount:a.fetchFailureCount,failureReason:a.fetchFailureReason,errorUpdateCount:a.errorUpdateCount,isFetched:a.dataUpdateCount>0||a.errorUpdateCount>0,isFetchedAfterMount:a.dataUpdateCount>b.dataUpdateCount||a.errorUpdateCount>b.errorUpdateCount,isFetching:G,isRefetching:G&&!H,isLoadingError:J&&a.dataUpdatedAt===0,isPaused:L==="paused",isPlaceholderData:ct,isRefetchError:J&&a.dataUpdatedAt!==0,isStale:ot(t,s),refetch:this.refetch}}updateResult(t){const s=e(this,p),n=this.createResult(e(this,o),this.options);if(h(this,Q,e(this,o).state),h(this,T,this.options),$(n,s))return;e(this,Q).data!==void 0&&h(this,M,e(this,o)),h(this,p,n);const m={},l=c(()=>{if(!s)return!0;const{notifyOnChangeProps:f}=this.options,O=typeof f=="function"?f():f;if(O==="all"||!O&&!e(this,w).size)return!0;const P=new Set(O??e(this,w));return this.options.throwOnError&&P.add("error"),Object.keys(e(this,p)).some(b=>{const a=b;return e(this,p)[a]!==s[a]&&P.has(a)})},"shouldNotifyListeners");(t==null?void 0:t.listeners)!==!1&&l()&&(m.listeners=!0),d(this,q,Rt).call(this,{...m,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&d(this,z,it).call(this)}},y=new WeakMap,o=new WeakMap,E=new WeakMap,p=new WeakMap,Q=new WeakMap,T=new WeakMap,v=new WeakMap,k=new WeakMap,A=new WeakMap,M=new WeakMap,I=new WeakMap,F=new WeakMap,U=new WeakMap,w=new WeakMap,D=new WeakSet,x=c(function(t){d(this,N,at).call(this);let s=e(this,o).fetch(this.options,t);return t!=null&&t.throwOnError||(s=s.catch(St)),s},"#executeFetch"),_=new WeakSet,tt=c(function(){if(d(this,B,rt).call(this),ft||e(this,p).isStale||!pt(this.options.staleTime))return;const s=Ut(e(this,p).dataUpdatedAt,this.options.staleTime)+1;h(this,I,setTimeout(()=>{e(this,p).isStale||this.updateResult()},s))},"#updateStaleTimeout"),K=new WeakSet,et=c(function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(e(this,o)):this.options.refetchInterval)??!1},"#computeRefetchInterval"),j=new WeakSet,st=c(function(t){d(this,W,nt).call(this),h(this,U,t),!(ft||this.options.enabled===!1||!pt(e(this,U))||e(this,U)===0)&&h(this,F,setInterval(()=>{(this.options.refetchIntervalInBackground||Qt.isFocused())&&d(this,D,x).call(this)},e(this,U)))},"#updateRefetchInterval"),z=new WeakSet,it=c(function(){d(this,_,tt).call(this),d(this,j,st).call(this,d(this,K,et).call(this))},"#updateTimers"),B=new WeakSet,rt=c(function(){e(this,I)&&(clearTimeout(e(this,I)),h(this,I,void 0))},"#clearStaleTimeout"),W=new WeakSet,nt=c(function(){e(this,F)&&(clearInterval(e(this,F)),h(this,F,void 0))},"#clearRefetchInterval"),N=new WeakSet,at=c(function(){const t=e(this,y).getQueryCache().build(e(this,y),this.options);if(t===e(this,o))return;const s=e(this,o);h(this,o,t),h(this,E,t.state),this.hasListeners()&&(s==null||s.removeObserver(this),t.addObserver(this))},"#updateQuery"),q=new WeakSet,Rt=c(function(t){mt.batch(()=>{t.listeners&&this.listeners.forEach(s=>{s(e(this,p))}),e(this,y).getQueryCache().notify({query:e(this,o),type:"observerResultsUpdated"})})},"#notify"),c(V,"QueryObserver"),V);function At(i,r){return r.enabled!==!1&&!i.state.dataUpdatedAt&&!(i.state.status==="error"&&r.retryOnMount===!1)}c(At,"shouldLoadOnMount");function yt(i,r){return At(i,r)||i.state.dataUpdatedAt>0&&ht(i,r,r.refetchOnMount)}c(yt,"shouldFetchOnMount");function ht(i,r,t){if(r.enabled!==!1){const s=typeof t=="function"?t(i):t;return s==="always"||s!==!1&&ot(i,r)}return!1}c(ht,"shouldFetchOn");function gt(i,r,t,s){return t.enabled!==!1&&(i!==r||s.enabled===!1)&&(!t.suspense||i.state.status!=="error")&&ot(i,t)}c(gt,"shouldFetchOptionally");function ot(i,r){return i.isStaleByTime(r.staleTime)}c(ot,"isStale");function Mt(i,r){return!$(i.getCurrentResult(),r)}c(Mt,"shouldAssignObserverCurrentProperties");function Pt(){return Ft()}c(Pt,"useIsRestoring");function Lt(i){return i||wt()}c(Lt,"useQueryClient");function xt(i){return"subscribe"in i&&typeof i.subscribe=="function"}c(xt,"isSvelteStore");function kt(i,r,t){const s=Lt(t),n=Pt(),m=xt(i)?i:Dt(i),l=Z([m,n],([b,a])=>{const C=s.defaultQueryOptions(b);return C._optimisticResults=a?"isRestoring":"optimistic",C}),f=new r(s,Et(l));l.subscribe(b=>{f.setOptions(b,{listeners:!1})});const O=Z(n,(b,a)=>{const C=b?()=>{}:f.subscribe(mt.batchCalls(a));return f.updateResult(),C}),{subscribe:P}=Z([O,l],([b,a])=>(b=f.getOptimisticResult(a),a.notifyOnChangeProps?b:f.trackResult(b)));return{subscribe:P}}c(kt,"createBaseQuery");function Wt(i,r){return kt(i,Tt,r)}c(Wt,"createQuery");export{Tt as Q,kt as a,Wt as c,xt as i,Lt as u};