var b=Object.defineProperty;var t=(s,r)=>b(s,"name",{value:r,configurable:!0});import{s as c}from"./parse.RgkxDUh4.js";import{ad as a,a8 as f,n as o,m as p,J as g}from"./runtime.DGYXNv_o.js";import{s as d}from"./entry.DClJONgv.js";function J(s,r,u){const e=u[r]??(u[r]={store:null,source:f(void 0),unsubscribe:o});if(e.store!==s)if(e.unsubscribe(),e.store=s??null,s==null)e.source.v=void 0,e.unsubscribe=o;else{var n=!0;e.unsubscribe=c(s,i=>{n?e.source.v=i:g(e.source,i)}),n=!1}return p(e.source)}t(J,"store_get");function S(){const s={};return a(()=>{for(var r in s)s[r].unsubscribe()}),s}t(S,"setup_stores");const l=t(()=>{const s=d;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},"getStores"),$={subscribe(s){return l().page.subscribe(s)}};export{J as a,$ as p,S as s};
