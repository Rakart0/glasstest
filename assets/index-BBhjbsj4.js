var Y=Object.defineProperty;var j=(e,t,r)=>t in e?Y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var u=(e,t,r)=>j(e,typeof t!="symbol"?t+"":t,r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();function K(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;const r=document.implementation.createHTMLDocument(),n=r.createElement("base"),i=r.createElement("a");return r.head.appendChild(n),r.body.appendChild(i),t&&(n.href=t),i.href=e,i.href}const J=(()=>{let e=0;const t=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(e+=1,`u${t()}${e}`)})();function y(e){const t=[];for(let r=0,n=e.length;r<n;r++)t.push(e[r]);return t}let x=null;function L(e={}){return x||(e.includeStyleProperties?(x=e.includeStyleProperties,x):(x=y(window.getComputedStyle(document.documentElement)),x))}function B(e,t){const n=(e.ownerDocument.defaultView||window).getComputedStyle(e).getPropertyValue(t);return n?parseFloat(n.replace("px","")):0}function Q(e){const t=B(e,"border-left-width"),r=B(e,"border-right-width");return e.clientWidth+t+r}function Z(e){const t=B(e,"border-top-width"),r=B(e,"border-bottom-width");return e.clientHeight+t+r}function H(e,t={}){const r=t.width||Q(e),n=t.height||Z(e);return{width:r,height:n}}function ee(){let e,t;try{t=process}catch{}const r=t&&t.env?t.env.devicePixelRatio:null;return r&&(e=parseInt(r,10),Number.isNaN(e)&&(e=1)),e||window.devicePixelRatio||1}const d=16384;function te(e){(e.width>d||e.height>d)&&(e.width>d&&e.height>d?e.width>e.height?(e.height*=d/e.width,e.width=d):(e.width*=d/e.height,e.height=d):e.width>d?(e.height*=d/e.width,e.width=d):(e.width*=d/e.height,e.height=d))}function re(e,t={}){return e.toBlob?new Promise(r=>{e.toBlob(r,t.type?t.type:"image/png",t.quality?t.quality:1)}):new Promise(r=>{const n=window.atob(e.toDataURL(t.type?t.type:void 0,t.quality?t.quality:void 0).split(",")[1]),i=n.length,a=new Uint8Array(i);for(let s=0;s<i;s+=1)a[s]=n.charCodeAt(s);r(new Blob([a],{type:t.type?t.type:"image/png"}))})}function P(e){return new Promise((t,r)=>{const n=new Image;n.onload=()=>{n.decode().then(()=>{requestAnimationFrame(()=>t(n))})},n.onerror=r,n.crossOrigin="anonymous",n.decoding="async",n.src=e})}async function ne(e){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(t=>`data:image/svg+xml;charset=utf-8,${t}`)}async function ie(e,t,r){const n="http://www.w3.org/2000/svg",i=document.createElementNS(n,"svg"),a=document.createElementNS(n,"foreignObject");return i.setAttribute("width",`${t}`),i.setAttribute("height",`${r}`),i.setAttribute("viewBox",`0 0 ${t} ${r}`),a.setAttribute("width","100%"),a.setAttribute("height","100%"),a.setAttribute("x","0"),a.setAttribute("y","0"),a.setAttribute("externalResourcesRequired","true"),i.appendChild(a),a.appendChild(e),ne(i)}const f=(e,t)=>{if(e instanceof t)return!0;const r=Object.getPrototypeOf(e);return r===null?!1:r.constructor.name===t.name||f(r,t)};function ae(e){const t=e.getPropertyValue("content");return`${e.cssText} content: '${t.replace(/'|"/g,"")}';`}function se(e,t){return L(t).map(r=>{const n=e.getPropertyValue(r),i=e.getPropertyPriority(r);return`${r}: ${n}${i?" !important":""};`}).join(" ")}function oe(e,t,r,n){const i=`.${e}:${t}`,a=r.cssText?ae(r):se(r,n);return document.createTextNode(`${i}{${a}}`)}function F(e,t,r,n){const i=window.getComputedStyle(e,r),a=i.getPropertyValue("content");if(a===""||a==="none")return;const s=J();try{t.className=`${t.className} ${s}`}catch{return}const o=document.createElement("style");o.appendChild(oe(s,r,i,n)),t.appendChild(o)}function ue(e,t,r){F(e,t,":before",r),F(e,t,":after",r)}const U="application/font-woff",O="image/jpeg",ce={woff:U,woff2:U,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:O,jpeg:O,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function le(e){const t=/\.([^./]*?)$/g.exec(e);return t?t[1]:""}function T(e){const t=le(e).toLowerCase();return ce[t]||""}function fe(e){return e.split(/,/)[1]}function R(e){return e.search(/^(data:)/)!==-1}function he(e,t){return`data:${t};base64,${e}`}async function _(e,t,r){const n=await fetch(e,t);if(n.status===404)throw new Error(`Resource "${n.url}" not found`);const i=await n.blob();return new Promise((a,s)=>{const o=new FileReader;o.onerror=s,o.onloadend=()=>{try{a(r({res:n,result:o.result}))}catch(c){s(c)}},o.readAsDataURL(i)})}const D={};function de(e,t,r){let n=e.replace(/\?.*/,"");return r&&(n=e),/ttf|otf|eot|woff2?/i.test(n)&&(n=n.replace(/.*\//,"")),t?`[${t}]${n}`:n}async function V(e,t,r){const n=de(e,t,r.includeQueryParams);if(D[n]!=null)return D[n];r.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+new Date().getTime());let i;try{const a=await _(e,r.fetchRequestInit,({res:s,result:o})=>(t||(t=s.headers.get("Content-Type")||""),fe(o)));i=he(a,t)}catch(a){i=r.imagePlaceholder||"";let s=`Failed to fetch resource: ${e}`;a&&(s=typeof a=="string"?a:a.message),s&&console.warn(s)}return D[n]=i,i}async function me(e){const t=e.toDataURL();return t==="data:,"?e.cloneNode(!1):P(t)}async function ge(e,t){if(e.currentSrc){const a=document.createElement("canvas"),s=a.getContext("2d");a.width=e.clientWidth,a.height=e.clientHeight,s==null||s.drawImage(e,0,0,a.width,a.height);const o=a.toDataURL();return P(o)}const r=e.poster,n=T(r),i=await V(r,n,t);return P(i)}async function pe(e,t){var r;try{if(!((r=e==null?void 0:e.contentDocument)===null||r===void 0)&&r.body)return await E(e.contentDocument.body,t,!0)}catch{}return e.cloneNode(!1)}async function ye(e,t){return f(e,HTMLCanvasElement)?me(e):f(e,HTMLVideoElement)?ge(e,t):f(e,HTMLIFrameElement)?pe(e,t):e.cloneNode(M(e))}const ve=e=>e.tagName!=null&&e.tagName.toUpperCase()==="SLOT",M=e=>e.tagName!=null&&e.tagName.toUpperCase()==="SVG";async function xe(e,t,r){var n,i;if(M(t))return t;let a=[];return ve(e)&&e.assignedNodes?a=y(e.assignedNodes()):f(e,HTMLIFrameElement)&&(!((n=e.contentDocument)===null||n===void 0)&&n.body)?a=y(e.contentDocument.body.childNodes):a=y(((i=e.shadowRoot)!==null&&i!==void 0?i:e).childNodes),a.length===0||f(e,HTMLVideoElement)||await a.reduce((s,o)=>s.then(()=>E(o,r)).then(c=>{c&&t.appendChild(c)}),Promise.resolve()),t}function Se(e,t,r){const n=t.style;if(!n)return;const i=window.getComputedStyle(e);i.cssText?(n.cssText=i.cssText,n.transformOrigin=i.transformOrigin):L(r).forEach(a=>{let s=i.getPropertyValue(a);a==="font-size"&&s.endsWith("px")&&(s=`${Math.floor(parseFloat(s.substring(0,s.length-2)))-.1}px`),f(e,HTMLIFrameElement)&&a==="display"&&s==="inline"&&(s="block"),a==="d"&&t.getAttribute("d")&&(s=`path(${t.getAttribute("d")})`),n.setProperty(a,s,i.getPropertyPriority(a))})}function be(e,t){f(e,HTMLTextAreaElement)&&(t.innerHTML=e.value),f(e,HTMLInputElement)&&t.setAttribute("value",e.value)}function we(e,t){if(f(e,HTMLSelectElement)){const r=t,n=Array.from(r.children).find(i=>e.value===i.getAttribute("value"));n&&n.setAttribute("selected","")}}function Be(e,t,r){return f(t,Element)&&(Se(e,t,r),ue(e,t,r),be(e,t),we(e,t)),t}async function Pe(e,t){const r=e.querySelectorAll?e.querySelectorAll("use"):[];if(r.length===0)return e;const n={};for(let a=0;a<r.length;a++){const o=r[a].getAttribute("xlink:href");if(o){const c=e.querySelector(o),h=document.querySelector(o);!c&&h&&!n[o]&&(n[o]=await E(h,t,!0))}}const i=Object.values(n);if(i.length){const a="http://www.w3.org/1999/xhtml",s=document.createElementNS(a,"svg");s.setAttribute("xmlns",a),s.style.position="absolute",s.style.width="0",s.style.height="0",s.style.overflow="hidden",s.style.display="none";const o=document.createElementNS(a,"defs");s.appendChild(o);for(let c=0;c<i.length;c++)o.appendChild(i[c]);e.appendChild(s)}return e}async function E(e,t,r){return!r&&t.filter&&!t.filter(e)?null:Promise.resolve(e).then(n=>ye(n,t)).then(n=>xe(e,n,t)).then(n=>Be(e,n,t)).then(n=>Pe(n,t))}const $=/url\((['"]?)([^'"]+?)\1\)/g,Ee=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,De=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function Re(e){const t=e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,"g")}function Te(e){const t=[];return e.replace($,(r,n,i)=>(t.push(i),r)),t.filter(r=>!R(r))}async function Ve(e,t,r,n,i){try{const a=r?K(t,r):t,s=T(t);let o;return i||(o=await V(a,s,n)),e.replace(Re(t),`$1${o}$3`)}catch{}return e}function Fe(e,{preferredFontFormat:t}){return t?e.replace(De,r=>{for(;;){const[n,,i]=Ee.exec(r)||[];if(!i)return"";if(i===t)return`src: ${n};`}}):e}function q(e){return e.search($)!==-1}async function k(e,t,r){if(!q(e))return e;const n=Fe(e,r);return Te(n).reduce((a,s)=>a.then(o=>Ve(o,s,t,r)),Promise.resolve(n))}async function S(e,t,r){var n;const i=(n=t.style)===null||n===void 0?void 0:n.getPropertyValue(e);if(i){const a=await k(i,null,r);return t.style.setProperty(e,a,t.style.getPropertyPriority(e)),!0}return!1}async function Ue(e,t){await S("background",e,t)||await S("background-image",e,t),await S("mask",e,t)||await S("-webkit-mask",e,t)||await S("mask-image",e,t)||await S("-webkit-mask-image",e,t)}async function Oe(e,t){const r=f(e,HTMLImageElement);if(!(r&&!R(e.src))&&!(f(e,SVGImageElement)&&!R(e.href.baseVal)))return;const n=r?e.src:e.href.baseVal,i=await V(n,T(n),t);await new Promise((a,s)=>{e.onload=a,e.onerror=t.onImageErrorHandler?(...c)=>{try{a(t.onImageErrorHandler(...c))}catch(h){s(h)}}:s;const o=e;o.decode&&(o.decode=a),o.loading==="lazy"&&(o.loading="eager"),r?(e.srcset="",e.src=i):e.href.baseVal=i})}async function Ae(e,t){const n=y(e.childNodes).map(i=>W(i,t));await Promise.all(n).then(()=>e)}async function W(e,t){f(e,Element)&&(await Ue(e,t),await Oe(e,t),await Ae(e,t))}function Ce(e,t){const{style:r}=e;t.backgroundColor&&(r.backgroundColor=t.backgroundColor),t.width&&(r.width=`${t.width}px`),t.height&&(r.height=`${t.height}px`);const n=t.style;return n!=null&&Object.keys(n).forEach(i=>{r[i]=n[i]}),e}const A={};async function C(e){let t=A[e];if(t!=null)return t;const n=await(await fetch(e)).text();return t={url:e,cssText:n},A[e]=t,t}async function z(e,t){let r=e.cssText;const n=/url\(["']?([^"')]+)["']?\)/g,a=(r.match(/url\([^)]+\)/g)||[]).map(async s=>{let o=s.replace(n,"$1");return o.startsWith("https://")||(o=new URL(o,e.url).href),_(o,t.fetchRequestInit,({result:c})=>(r=r.replace(s,`url(${c})`),[s,c]))});return Promise.all(a).then(()=>r)}function G(e){if(e==null)return[];const t=[],r=/(\/\*[\s\S]*?\*\/)/gi;let n=e.replace(r,"");const i=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const c=i.exec(n);if(c===null)break;t.push(c[0])}n=n.replace(i,"");const a=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,s="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",o=new RegExp(s,"gi");for(;;){let c=a.exec(n);if(c===null){if(c=o.exec(n),c===null)break;a.lastIndex=o.lastIndex}else o.lastIndex=a.lastIndex;t.push(c[0])}return t}async function ze(e,t){const r=[],n=[];return e.forEach(i=>{if("cssRules"in i)try{y(i.cssRules||[]).forEach((a,s)=>{if(a.type===CSSRule.IMPORT_RULE){let o=s+1;const c=a.href,h=C(c).then(l=>z(l,t)).then(l=>G(l).forEach(m=>{try{i.insertRule(m,m.startsWith("@import")?o+=1:i.cssRules.length)}catch(g){console.error("Error inserting rule from remote css",{rule:m,error:g})}})).catch(l=>{console.error("Error loading remote css",l.toString())});n.push(h)}})}catch(a){const s=e.find(o=>o.href==null)||document.styleSheets[0];i.href!=null&&n.push(C(i.href).then(o=>z(o,t)).then(o=>G(o).forEach(c=>{s.insertRule(c,s.cssRules.length)})).catch(o=>{console.error("Error loading remote stylesheet",o)})),console.error("Error inlining remote css file",a)}}),Promise.all(n).then(()=>(e.forEach(i=>{if("cssRules"in i)try{y(i.cssRules||[]).forEach(a=>{r.push(a)})}catch(a){console.error(`Error while reading CSS rules from ${i.href}`,a)}}),r))}function Ge(e){return e.filter(t=>t.type===CSSRule.FONT_FACE_RULE).filter(t=>q(t.style.getPropertyValue("src")))}async function Ie(e,t){if(e.ownerDocument==null)throw new Error("Provided element is not within a Document");const r=y(e.ownerDocument.styleSheets),n=await ze(r,t);return Ge(n)}function X(e){return e.trim().replace(/["']/g,"")}function Le(e){const t=new Set;function r(n){(n.style.fontFamily||getComputedStyle(n).fontFamily).split(",").forEach(a=>{t.add(X(a))}),Array.from(n.children).forEach(a=>{a instanceof HTMLElement&&r(a)})}return r(e),t}async function He(e,t){const r=await Ie(e,t),n=Le(e);return(await Promise.all(r.filter(a=>n.has(X(a.style.fontFamily))).map(a=>{const s=a.parentStyleSheet?a.parentStyleSheet.href:null;return k(a.cssText,s,t)}))).join(`
`)}async function _e(e,t){const r=t.fontEmbedCSS!=null?t.fontEmbedCSS:t.skipFonts?null:await He(e,t);if(r){const n=document.createElement("style"),i=document.createTextNode(r);n.appendChild(i),e.firstChild?e.insertBefore(n,e.firstChild):e.appendChild(n)}}async function Me(e,t={}){const{width:r,height:n}=H(e,t),i=await E(e,t,!0);return await _e(i,t),await W(i,t),Ce(i,t),await ie(i,r,n)}async function $e(e,t={}){const{width:r,height:n}=H(e,t),i=await Me(e,t),a=await P(i),s=document.createElement("canvas"),o=s.getContext("2d"),c=t.pixelRatio||ee(),h=t.canvasWidth||r,l=t.canvasHeight||n;return s.width=h*c,s.height=l*c,t.skipAutoScale||te(s),s.style.width=`${h}`,s.style.height=`${l}`,t.backgroundColor&&(o.fillStyle=t.backgroundColor,o.fillRect(0,0,s.width,s.height)),o.drawImage(a,0,0,s.width,s.height),s}async function I(e,t={}){const r=await $e(e,t);return await re(r)}var qe=`struct VSOut {\r
  @builtin(position) position: vec4<f32>,\r
  @location(0) uv: vec2<f32>,\r
  @location(1) vPos : vec2<f32>,\r
  @location(2) scale : f32\r
}

@group(0) @binding(0)\r
var<uniform> screenData : vec2<f32>;

@group(0) @binding(1)\r
var<uniform> positionData: vec2<f32>;

    \r
@vertex\r
fn main(\r
        @location(0) in_pos: vec3<f32>,\r
        @location(1) uv: vec2<f32>\r
      ) -> VSOut {\r
       \r
        var vsOut: VSOut;\r
        var testSize = 512.0;\r
        vsOut.scale = testSize;

        var screenWidth = screenData.x;\r
        var screenHeight = screenData.y;

        var halfWidth = screenWidth / 2.0;\r
        var halfHeigth = screenHeight / 2.0;\r
        \r
        var mx = (positionData.x -halfWidth) / halfWidth;\r
        var my = (positionData.y -halfHeigth) / halfHeigth;

        var x = (in_pos.x / screenWidth * testSize) + mx;\r
        var y = (in_pos.y / screenHeight * testSize) - my;

        vsOut.position = vec4<f32>( x, y,0, 1.0);\r
        vsOut.vPos = vec2<f32>(in_pos.x,in_pos.y);\r
        var u = (x + 1.0) / 2;\r
        var v = (y + 1.0) / 2;

        
        vsOut.uv = vec2<f32>(u,-v) ;

        return vsOut;\r
      }

fn UVToWorld(inUV : vec2<f32>) -> vec2<f32>\r
{\r
  return inUV;\r
}`,ke=`struct VSIn {\r
  @builtin(position) position: vec4<f32>,\r
  @location(0) uv: vec2<f32>,\r
  @location(1) vPos : vec2<f32>,\r
  @location(2) scale : f32

}

@group(0) @binding(0) var<uniform> screenData : vec2<f32>;\r
@group(0) @binding(1) var<uniform> positionData: vec2<f32>;\r
@group(0) @binding(2) var<uniform> intensityValue: i32;\r
@group(0) @binding(3) var<uniform> shapeSizeNSmooth: vec3<f32>;\r
@group(0) @binding(4) var<uniform> height: vec3<f32>;\r

@group(1) @binding(0) var mySampler: sampler;\r
@group(1) @binding(1) var myTexture: texture_2d<f32>;

  @fragment\r
  fn main(vsIn: VSIn) -> @location(0) vec4f {\r
    \r
    var inpos = vsIn.vPos;

    var boxSize2 = vec3f(0.5,0.25,0.5);\r
    var debugSize = shapeSizeNSmooth.x;\r
    var eye = vec3f(0.0,0.0,-1.0);\r
    var refractI = 1.51;

    var sp = getShape(vec3f(inpos/debugSize,1.0),boxSize2);\r
    if(sign(sp) <= 0.0)\r
    {\r
     discard;\r
    }\r
    \r
    var normal = getNormal(inpos/debugSize,vsIn.scale,boxSize2) ;

    var refracted = refract(eye,normal,1/refractI);\r
    var dotV = dot(eye, refracted);\r
    var h =sp;   \r
    var length = h / dotV;\r
    var coordModifier =  refracted.xy * (length+height.y);

    var coord1 = vsIn.uv - coordModifier ;\r
    var blurred = gaussianBlur(2*intensityValue,coord1);

    var center = screenData * 0.5;\r
    var light = vec3f(normalize(center),0.0);\r
    var lightValue = dot(normal, light);\r
    var lightInt = 0.025;

    var reflected = reflect(eye,normal);\r
    var c = clamp(abs(reflected.x - reflected.y), 0.0, 1.0);\r
    var reflect_color = vec4f(c,c,c, 0.0);

    
    
    
    
    
    
    
    var finalColor = mix(blurred,reflect_color,(1.0 - normal.z) * 2.0);\r
    return finalColor;\r
    return blurred + lightValue*lightInt;\r
  }

  fn getShape(p : vec3f, b : vec3f) -> f32\r
  {\r
    var position = p;\r
    var maxSteps = 128;\r
    var epsilon = 0.000005;

    for(var i = 0; i < maxSteps; i++)\r
    {\r
       var d = rounded_box_final(position,b,b.y,clamp(shapeSizeNSmooth.y,0.0,b.y/2.0));

      if(d < epsilon)\r
      {\r
        break;\r
      }

      if(position.z < 0.0)\r
      {\r
        return 0.0;\r
      }

      position.z-= d;

    }\r
    let yRange = vec2f(0.0,b.z);\r
    let normalizedHeight = (position.z) / (yRange.y);\r
    return normalizedHeight;\r
  }

  fn rounded_box_final(p: vec3<f32>, size: vec3<f32>, radius_side: f32, radius_z: f32) -> f32 {\r
    let radius_xy = radius_side - radius_z;

    let q = vec3<f32>(\r
        abs(p.x) - size.x + radius_z,\r
        abs(p.y) - size.y + radius_z,\r
        abs(p.z) - size.z\r
    );

    let q_xy = q.xy + vec2<f32>(radius_xy, radius_xy);\r
    let dist_2d = min(max(q_xy.x, q_xy.y), 0.0) + length(max(q_xy, vec2<f32>(0.0, 0.0))) - radius_xy;

    let dist_z = q.z + radius_z;

    let d = vec2<f32>(dist_2d, dist_z);\r
    return min(max(d.x, d.y), 0.0) + length(max(d, vec2<f32>(0.0, 0.0))) - radius_z;\r
}\r

  fn boxBlur(size : i32, uv : vec2f) -> vec4f {\r
    var scale = 500;\r
    var oneOver = vec2f(1/screenData.x,1/screenData.y);\r
    var count = 0.0;\r
    var blurred = vec4f(0.0);

    for(var y = -size; y <= size; y++) {\r
      for(var x = -size; x <= size; x++) {\r
        var offset = vec2f(f32(x) * oneOver.x,f32(y)*oneOver.y);\r
        blurred += textureSample(myTexture, mySampler, uv + offset);\r
        count+=1.0;\r
      }\r
    }

    blurred /= count;\r
    return blurred;\r
  }

  fn gaussianBlur(size : i32, uv : vec2f) -> vec4f {\r
    var oneOver = vec2f(1/screenData.x,1/screenData.y);\r
    var blurred = vec4f(0.0);

    for(var y = -size; y <= size; y++) {\r
      for(var x = -size; x <= size; x++) {\r
        var offset = vec2f(f32(x) * oneOver.x,f32(y)*oneOver.y);\r
        blurred += textureSample(myTexture, mySampler, uv + offset) * gaussianValue(x,y);\r
      }\r
    }\r
    blurred.w = 1.0;\r
    return blurred;\r
  }

  fn gaussianValue(i32x : i32, i32y : i32) -> f32\r
  {\r
    var forss = f32(intensityValue);\r
    var pi = radians(180.0);\r
    var x = f32(i32x);\r
    var y = f32(i32y);\r
    var stdDev = 0.84089642 * forss;

    var a = 1.0/(2.0*pi*(stdDev * stdDev));

    var eNum = x*x+y*y;\r
    var eDen = 2 * stdDev * stdDev;

    var b = exp(-(eNum / eDen ));\r
    return a*b;\r
  }

  fn getNormal(inpos:vec2f, scale : f32, boxSize:vec3f) -> vec3f\r
  {

    var boxCorner = vec4f(0.22);\r
    var debugSize = shapeSizeNSmooth.x;\r
    
    
    

    var ratioBase = 0.5;\r
    var oneOver = vec2f(ratioBase/scale,ratioBase/scale);

    
     var aOffset = inpos + vec2f(oneOver.x,  oneOver.y);\r
     var bOffset = inpos + vec2f( oneOver.x,  -oneOver.y);\r
     var cOffset = inpos + vec2f( -oneOver.x, -oneOver.y);\r
     var dOffset = inpos + vec2f(-oneOver.x,oneOver.y);\r
 \r
    var aH = getShape(vec3f(aOffset,1.0),boxSize);\r
    var bH = getShape(vec3f(bOffset,1.0),boxSize);\r
    var cH = getShape(vec3f(cOffset,1.0),boxSize);\r
    var dH = getShape(vec3f(dOffset,1.0),boxSize);

    var hA = aH*height.x;\r
    var hB = bH*height.x;\r
    var hC = cH*height.x;\r
    var hD = dH*height.x;\r
    \r
    var apoint = ((vec3f(aOffset.x,aOffset.y,hA))); \r
    var bpoint = ((vec3f(bOffset.x,bOffset.y,hB)));\r
    var cpoint = ((vec3f(cOffset.x,cOffset.y,hC)));\r
    var dpoint = ((vec3f(dOffset.x,dOffset.y,hD)));\r
    \r
    var normalAB =getNormalFromPoints(apoint,bpoint);\r
    var normalBC =getNormalFromPoints(bpoint,cpoint);\r
    var normalCD =getNormalFromPoints(cpoint,dpoint);\r
    var normalDA =getNormalFromPoints(dpoint,apoint);\r
 \r
    var n = normalize(normalAB+normalBC+normalCD+normalDA);\r
      n.z = -n.z;\r
      n.y = -n.y;\r
    return n;\r
    
  }\r
 

  fn getNormalFromPoints(current : vec3f, next : vec3f) -> vec3f\r
  {\r
      var normal =vec3f(0.0,0.0,0.0);\r
      
      normal.x = (current.y - next.y) * (current.z/512.0 + next.z/512.0); \r
      
      normal.y = (current.z/512.0 - next.z/512.0) * (current.x + next.x); \r
      
      normal.z = (current.x - next.x) * (current.y + next.y);

      return normal;

  }`;const p=(e,t,r)=>{let n={size:e.byteLength+3&-4,usage:t,mappedAtCreation:!0},i=r.createBuffer(n),a;switch(!0){case e instanceof Uint16Array:a=new Uint16Array(i.getMappedRange());break;case e instanceof Int32Array:a=new Int32Array(i.getMappedRange());break;case e instanceof Float32Array:a=new Float32Array(i.getMappedRange());break;case e instanceof Uint32Array:a=new Uint32Array(i.getMappedRange());break}return a.set(e),i.unmap(),i};class We{constructor(){u(this,"target");u(this,"mouseX",0);u(this,"mouseY",0);u(this,"isDirty",!1)}initialize(){this.target=document.querySelector("#capture"),this.target.addEventListener("mousemove",t=>this.updateMousePosition(t),!1)}updateMousePosition(t){this.mouseX=t.pageX,this.mouseY=t.pageY,this.isDirty=!0}forceMousePosition(){this.mouseX=document.body.clientWidth/2+50,this.mouseY=document.body.clientHeight/2-300,this.isDirty=!0}}class Xe{constructor(t){u(this,"gpu");u(this,"adapter");u(this,"device");u(this,"queue");u(this,"canvas");u(this,"context");u(this,"commandEncoder");u(this,"module");u(this,"pipeline");u(this,"descriptor");u(this,"colorTextureAttachment");u(this,"mouseHandler");u(this,"positionBuffer");u(this,"indicesBuffer");u(this,"uvBuffer");u(this,"sampler");u(this,"textureBingGroupLayout");u(this,"textureBindGroup");u(this,"texture");u(this,"view");u(this,"textureBlob");u(this,"currentView");u(this,"screenBindGroupLayout");u(this,"screenBindGroup");u(this,"screenBuffer");u(this,"mouseBuffer");u(this,"intensityBuffer");u(this,"shapeNSmoothBuffer");u(this,"heightBuffer");u(this,"blurIntensityValue",1);u(this,"shapeValue",1);u(this,"smoothValue",1);u(this,"smoothRadiusValue",1);u(this,"heightValue",1);u(this,"proximityValue",1);u(this,"scalarValue",1);u(this,"dirtyBlur",!1);u(this,"dirtyShapeOrSmooth",!1);u(this,"dirtyHeight",!1);this.canvas=t,this.gpu=navigator.gpu,this.mouseHandler=new We}async initialize(){if(!this.gpu){console.error("WebGPU non supporté.");return}this.mouseHandler.initialize(),this.adapter=await this.gpu.requestAdapter(),this.device=await this.adapter.requestDevice(),this.queue=this.device.queue,this.context=this.canvas.getContext("webgpu"),this.context.configure({device:this.device,format:navigator.gpu.getPreferredCanvasFormat(),alphaMode:"premultiplied"}),await this.loadTexture(),this.createPassData()}createPassData(){const r={attributes:[{shaderLocation:0,offset:0,format:"float32x3"}],arrayStride:4*3,stepMode:"vertex"};let i={attributes:[{shaderLocation:1,offset:0,format:"float32x2"}],arrayStride:4*2,stepMode:"vertex"};const a={code:qe},o={module:this.device.createShaderModule(a),entryPoint:"main",buffers:[r,i]},c={code:ke},m={module:this.device.createShaderModule(c),targets:[{format:"bgra8unorm"}]};this.createBindGroups();const g={bindGroupLayouts:[this.screenBindGroupLayout,this.textureBingGroupLayout]},v={layout:this.device.createPipelineLayout(g),vertex:o,fragment:m};this.pipeline=this.device.createRenderPipeline(v),this.currentView=this.context.getCurrentTexture().createView(),this.colorTextureAttachment={view:this.currentView,clearValue:[0,0,0,0],loadOp:"clear",storeOp:"store"},this.descriptor={colorAttachments:[this.colorTextureAttachment]},this.setData()}async loadTexture(){var t=await createImageBitmap(this.textureBlob);this.texture=this.device.createTexture({label:"kek",size:[t.width,t.height,1],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT}),this.device.queue.copyExternalImageToTexture({source:t},{texture:this.texture},[t.width,t.height]),this.canvas.width=t.width,this.canvas.height=t.height,this.view=this.texture.createView()}createBindGroups(){this.sampler=this.device.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"}),this.textureBingGroupLayout=this.device.createBindGroupLayout({label:"textureData",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}}]}),this.textureBindGroup=this.device.createBindGroup({layout:this.textureBingGroupLayout,entries:[{binding:0,resource:this.sampler},{binding:1,resource:this.texture.createView()}]}),this.createScreenBindgroup()}createScreenBindgroup(){this.screenBindGroupLayout=this.device.createBindGroupLayout({label:"screenData",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT|GPUShaderStage.VERTEX,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT|GPUShaderStage.VERTEX,buffer:{type:"uniform"}},{binding:2,visibility:GPUShaderStage.FRAGMENT|GPUShaderStage.VERTEX,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT|GPUShaderStage.VERTEX,buffer:{type:"uniform"}},{binding:4,visibility:GPUShaderStage.FRAGMENT|GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});var t=new Float32Array([this.texture.width,this.texture.height]),r=new Float32Array([this.texture.width/2,this.texture.height/2]),n=new Int32Array([1]),i=new Float32Array([0,0,0]),a=new Float32Array([0,0,0]);this.screenBuffer=p(t,GPUBufferUsage.UNIFORM,this.device),this.mouseBuffer=p(r,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,this.device),this.intensityBuffer=p(n,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,this.device),this.shapeNSmoothBuffer=p(i,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,this.device),this.heightBuffer=p(a,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,this.device),this.screenBindGroup=this.device.createBindGroup({label:"screen",layout:this.screenBindGroupLayout,entries:[{binding:0,resource:{buffer:this.screenBuffer}},{binding:1,resource:{buffer:this.mouseBuffer}},{binding:2,resource:{buffer:this.intensityBuffer}},{binding:3,resource:{buffer:this.shapeNSmoothBuffer}},{binding:4,resource:{buffer:this.heightBuffer}}]})}setData(){var t=new Float32Array([1,-1,0,-1,-1,0,-1,1,0,1,1,0]);this.positionBuffer=p(t,GPUBufferUsage.VERTEX,this.device);var r=new Uint16Array([0,1,2,2,3,0]);this.indicesBuffer=p(r,GPUBufferUsage.INDEX,this.device);var n=new Float32Array([1,1,0,1,0,0,1,0]);this.uvBuffer=p(n,GPUBufferUsage.VERTEX,this.device)}async render(){if(await this.updateTextureView(),this.mouseHandler.isDirty){var t=new Float32Array([this.mouseHandler.mouseX,this.mouseHandler.mouseY]);this.device.queue.writeBuffer(this.mouseBuffer,0,t)}if(this.dirtyBlur){var r=new Int32Array([this.blurIntensityValue]);this.device.queue.writeBuffer(this.intensityBuffer,0,r),this.dirtyBlur=!1}if(this.dirtyShapeOrSmooth){var n=new Float32Array([this.shapeValue,this.smoothValue,this.smoothRadiusValue]);this.device.queue.writeBuffer(this.shapeNSmoothBuffer,0,n),this.dirtyShapeOrSmooth=!1}if(this.dirtyHeight){var n=new Float32Array([this.heightValue,this.proximityValue,this.scalarValue]);this.device.queue.writeBuffer(this.heightBuffer,0,n),this.dirtyHeight=!1}this.draw()}async updateTextureView(){var t=await createImageBitmap(this.textureBlob);this.device.queue.copyExternalImageToTexture({source:t},{texture:this.texture},[t.width,t.height])}draw(){this.colorTextureAttachment.view=this.context.getCurrentTexture().createView();const t=this.device.createCommandEncoder({}),r=t.beginRenderPass(this.descriptor);r.setPipeline(this.pipeline),r.setBindGroup(0,this.screenBindGroup),r.setBindGroup(1,this.textureBindGroup),r.setVertexBuffer(0,this.positionBuffer),r.setVertexBuffer(1,this.uvBuffer),r.setIndexBuffer(this.indicesBuffer,"uint16"),r.drawIndexed(6),r.end();const n=t.finish();this.device.queue.submit([n])}setBlurIntensity(t){this.blurIntensityValue=t,this.dirtyBlur=!0}setShape(t){console.log(t),this.shapeValue=t,this.dirtyShapeOrSmooth=!0}setSmooth(t){this.smoothValue=t,this.dirtyShapeOrSmooth=!0}setSmoothRadius(t){this.smoothRadiusValue=t,this.dirtyShapeOrSmooth=!0}setHeight(t){this.heightValue=t,this.dirtyHeight=!0}setProx(t){this.proximityValue=t,this.dirtyHeight=!0}setScalar(t){this.scalarValue=t,this.dirtyHeight=!0}}window.addEventListener("load",async()=>{const e=new Ne;await e.initialize(),e.update()});class Ne{constructor(){u(this,"renderer");u(this,"target");u(this,"imageBlob");u(this,"time");u(this,"isDirty",!1);u(this,"isDirtySecondFrame",!1);var t=document.getElementById("canvas");this.renderer=new Xe(t);var r=.82,n=.11,i=5,a=.46,s=67,o=1;this.target=document.querySelector("#capture");var c=document.querySelector("#textBox"),h=document.querySelector("#slider"),l=document.querySelector("#shapeSlider"),m=document.querySelector("#smoothSlider"),g=document.querySelector("#radiusSlider"),b=document.querySelector("#heightSlider"),v=document.querySelector("#proxSlider"),w=document.querySelector("#scalar");m.value=n.toString(),g.value=r.toString(),l.value=o.toString(),b.value=s.toString(),v.value=a.toString(),w.value=i.toString(),c.oninput=()=>this.isDirty=!0,h.oninput=()=>{this.renderer.setBlurIntensity(parseInt(h.value)),this.isDirty=!0},l.oninput=()=>{console.log(l.value),this.renderer.setShape(parseFloat(l.value)),this.isDirty=!0},m.oninput=()=>{this.renderer.setSmooth(parseFloat(m.value)),this.isDirty=!0},g.oninput=()=>{this.renderer.setSmoothRadius(parseFloat(g.value)),this.isDirty=!0},b.oninput=()=>{this.renderer.setHeight(parseFloat(b.value)),this.isDirty=!0},v.oninput=()=>{this.renderer.setProx(parseFloat(v.value)),this.isDirty=!0},w.oninput=()=>{this.renderer.setScalar(parseFloat(w.value)),this.isDirty=!0},this.renderer.setScalar(parseFloat(w.value)),this.renderer.setShape(parseFloat(l.value)),this.renderer.setSmooth(parseFloat(m.value)),this.renderer.setSmoothRadius(parseFloat(g.value)),this.renderer.setHeight(parseFloat(b.value)),this.renderer.setProx(parseFloat(v.value)),document.addEventListener("keydown",N=>{this.handleKeyDown(N)})}async initialize(){this.imageBlob=await I(this.target),this.renderer.textureBlob=this.imageBlob,await this.renderer.initialize(),this.renderer.createPassData()}async update(){(this.isDirty||this.isDirtySecondFrame)&&(this.imageBlob=await I(this.target),this.renderer.textureBlob=this.imageBlob,this.isDirtySecondFrame&&(this.isDirtySecondFrame=!1),this.isDirty&&(this.isDirty=!1,this.isDirtySecondFrame=!0)),this.renderer.render(),requestAnimationFrame(async()=>await this.update())}handleKeyDown(t){t.key=="a"&&(console.log(`Radius : ${this.renderer.smoothRadiusValue} - Smooth ${this.renderer.smoothValue} `),console.log(`scalar : ${this.renderer.scalarValue} - Prox:${this.renderer.proximityValue} - Heigt:${this.renderer.heightValue} `)),t.key=="z"&&console.log(`${this.renderer.mouseHandler.mouseX} - ${this.renderer.mouseHandler.mouseY} `)}}
