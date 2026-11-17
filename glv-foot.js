/* GLV sito: script pie di pagina */
try{
(function(){var p=location.pathname;if(p.slice(-1)!=="/")p+="/";if(["/chi-sono/","/about/","/","/videomaker-matrimoni/","/wedding-videographer-italy/"].indexOf(p)<0)return;function f(){document.querySelectorAll('.main-body h5 a[href="/contatti/"],.main-body h5 a[href="/contact/"]').forEach(function(a){if(!/^(CONTATTI|CONTACT)$/.test(a.textContent.trim()))a.classList.add("glv-btn");});}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",f);else f();})();
}catch(e){console.error("GLV",e)}
try{
(function(){var m=[].map.call(document.querySelectorAll('form[data-success-message]'),function(f){return (f.getAttribute('data-success-message')||'').trim().slice(0,25)}).filter(Boolean);if(!m.length)return;var sent=0,t=0;function chk(){t=0;if(sent)return;var b=document.body.innerText||'';for(var i=0;i<m.length;i++){if(b.indexOf(m[i])>-1){sent=1;if(window._fbq&&typeof window.fbq==='function')window.fbq('track','Lead',{content_name:/preventivo|quote/.test(location.pathname)?'preventivo':'contatto'});return;}}}new MutationObserver(function(){if(!t)t=setTimeout(chk,300)}).observe(document.body,{childList:true,subtree:true,characterData:true});})();
}catch(e){console.error("GLV",e)}
try{
(function(){var p=location.pathname,it=document.documentElement.lang=='it'||p.indexOf('privacy-e-')==1,u=it?'/privacy-e-cookie-policy/':'/privacy-cookie-policy/',t=it?'Privacy e Cookie Policy':'Privacy & Cookie Policy',n=0,iv=setInterval(function(){var m=document.querySelector('.cc-window .cc-message');if(m&&!m.querySelector('a.glv-pl')){var a=document.createElement('a');a.className='glv-pl';a.href=u;a.textContent=t;a.style.textDecoration='underline';m.appendChild(document.createTextNode(' '));m.appendChild(a);}if(++n>20)clearInterval(iv);},400);[].forEach.call(document.querySelectorAll('form[data-success-message]'),function(f){var e=document.createElement('p');e.style.cssText='font-size:12px;opacity:.7;margin-top:14px;text-align:center';e.innerHTML=(it?'Inviando il modulo dichiari di aver letto la ':'By sending this form you confirm you have read the ')+'<a href="'+u+'" style="text-decoration:underline">'+t+'</a>.';f.appendChild(e);});})();
}catch(e){console.error("GLV",e)}
try{
document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest('a[href^="tel:"],a[href^="mailto:"],a[href*="wa.me/"]');if(a&&window.fbq)fbq("track","Contact",{content_name:/^tel:/.test(a.getAttribute("href"))?"telefono":/wa\.me/.test(a.getAttribute("href"))?"whatsapp":"email"})},true)
}catch(e){console.error("GLV",e)}
try{
document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll('a[href^="http"]').forEach(function(a){if(a.hostname.indexOf("giuseppeladisavideographer")<0){a.target="_blank";a.rel="noopener"}})})
}catch(e){console.error("GLV",e)}
try{
document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector('link[hreflang="en"]'),p=location.pathname;if(p.slice(-1)!=="/")p+="/";if(e&&new URL(e.href).pathname===p){document.querySelectorAll('[data-section="header"] a[href="/"]').forEach(function(a){a.setAttribute("href","/wedding-videographer-italy/")})}})
}catch(e){console.error("GLV",e)}
try{
document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".text__text p").forEach(function(p){if(p.querySelector("a"))return;var t=p.textContent.trim(),h=t=="+39 392 47 02 048"?"tel:+393924702048":/^info@giuseppeladisavideographer\.it$/.test(t)?"mailto:"+t:"";if(h)p.innerHTML='<a href="'+h+'" style="color:inherit;text-decoration:none">'+p.innerHTML+"</a>"})})
}catch(e){console.error("GLV",e)}
try{
(function(){var p=location.pathname;if(/^\/(contatti|contact|scrivimi|get-in-touch|preventivo|quote|privacy)/.test(p))return;var it=document.documentElement.lang=="it";var a=document.createElement("a");a.id="glv-sticky";a.href=it?"/contatti/":"/contact/";a.textContent=it?"Scegli il tuo film":"Choose your film";document.body.appendChild(a);function f(){var y=scrollY,h=innerHeight,H=document.documentElement.scrollHeight;var vis=[].some.call(document.querySelectorAll("a"),function(x){if(x===a)return false;if(!/scegli il tuo film|choose your film|scopri quanto costa|find out what your film/i.test(x.textContent))return false;var r=x.getBoundingClientRect();return r.height>0&&r.top<h&&r.bottom>0});a.classList.toggle("on",!vis&&y>h*.9&&y+h<H-h*.8)}addEventListener("scroll",f,{passive:true});f()})()
}catch(e){console.error("GLV",e)}
