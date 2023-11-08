#!/usr/bin/env node
"use strict";import{parseArgs as l}from"node:util";import{access as m,writeFile as g}from"node:fs/promises";import{createReadStream as a}from"node:fs";import{createServer as u}from"node:http";import{join as r,extname as f,dirname as h}from"node:path";import{fileURLToPath as w}from"node:url";const s={default:"application/octet-stream",html:"text/html; charset=UTF-8",css:"text/css",js:"application/javascript"},p=h(w(import.meta.url)),n=p.endsWith("/bin")?r(process.cwd(),"./build"):p;(async()=>{const{values:e}=l({args:process.argv.slice(2),options:{"bridge-origin":{type:"string",default:"http://127.0.0.1:8787"},"studio-port":{type:"string",default:"3000"}}});await g(r(n,"settings.json"),JSON.stringify({bridgeOrigin:e["bridge-origin"]})),u(async(c,t)=>{const i=r(n,String(c.url));if(!i.startsWith(n))return t.writeHead(403).end();const o=f(i).substring(1).toLowerCase();if(!o||o==="html")return t.writeHead(200,{"Content-Type":s.html}),a(r(n,"index.html")).pipe(t);if(!await m(i).then(()=>!0).catch(()=>!1))return t.writeHead(404).end();const d=s[o]??s.default;return t.writeHead(200,{"Content-Type":d}),a(i).pipe(t)}).listen(e["studio-port"]),console.log(`Server running on http://127.0.0.1:${e["studio-port"]}`),console.log(`  with bridge running on ${e["bridge-origin"]}`)})();
