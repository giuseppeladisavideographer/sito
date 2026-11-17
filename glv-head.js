/* GLV sito: script intestazione (lingua, H1, menu GUIDE, schede film) */
try{
(function(){
var P=[['/wedding-videographer-italy/','/'],['/about/','/chi-sono/'],['/contact/','/contatti/'],['/get-in-touch/','/scrivimi/'],['/quote/','/preventivo/'],['/puglia-wedding-videographer/','/videomaker-matrimonio-puglia/'],['/calabria-wedding-videographer/','/videomaker-matrimonio-calabria/'],['/dolomites-wedding-videographer/','/videomaker-matrimonio-dolomiti/'],['/rome-wedding-videographer/','/videomaker-matrimonio-roma/'],['/giusy-jordan-wedding-masseria-papaperta-puglia/','/giusy-jordan-matrimonio-masseria-papaperta/'],['/milena-alex-wedding-masseria-potenti-puglia/','/milena-alex-matrimonio-masseria-potenti/'],['/antoinette-edward-wedding-masseria-grieco-ostuni-puglia/','/antoinette-edward-matrimonio-masseria-grieco-ostuni/'],['/julia-felipe-elopement-rome-frascati/','/julia-felipe-micro-wedding-frascati-roma/'],['/laura-valentin-castle-wedding-bolzano-dolomites/','/laura-valentin-matrimonio-castello-bolzano/'],['/lucia-andrew-wedding-soverato-calabria/','/lucia-andrew-matrimonio-soverato-calabria/'],['/alberto-maria-wedding-davoli-calabria/','/alberto-maria-matrimonio-davoli-calabria/'],['/peter-alexandra-love-story-rome/','/peter-alexandra-love-story-roma/'],['/alessio-valentina-wedding-san-marco-antico-bitonto-puglia/','/alessio-valentina-matrimonio-san-marco-antico-bitonto/'],['/andrea-elisabetta-wedding-borgo-del-convento-petrizzi-calabria/','/andrea-elisabetta-matrimonio-borgo-del-convento-petrizzi/'],['/marco-marie-wedding-la-melazza-rome/','/marco-marie-matrimonio-la-melazza-roma/'],['/luciana-simone-wedding-masseria-le-cerase-conversano-puglia/','/luciana-simone-matrimonio-masseria-le-cerase-conversano/'],['/blog/masseria-le-cerase-wedding-conversano-puglia/','/blog/matrimonio-masseria-le-cerase-conversano/'],['/blog/la-melazza-wedding-agriturismo-rome/','/blog/matrimonio-agriturismo-la-melazza-roma/'],['/blog/masseria-potenti-wedding-manduria-puglia/','/blog/matrimonio-masseria-potenti-manduria/'],['/blog/schloss-wangen-bellermont-wedding-bolzano/','/blog/matrimonio-schloss-wangen-bellermont-bolzano/'],['/blog/masseria-grieco-wedding-ostuni-puglia/','/blog/matrimonio-masseria-grieco-ostuni/'],['/venue-guides/','/guide-location/'],['/blog/borgo-del-convento-wedding-petrizzi-calabria/','/blog/matrimonio-borgo-del-convento-petrizzi/'],['/blog/wedding-film-artificial-intelligence/','/blog/video-matrimonio-intelligenza-artificiale/']];
var M={'/home/':'/'},R={'/videomaker-matrimoni/':'/wedding-videographer-italy/'};
P.forEach(function(x){M[x[0]]=x[1];R[x[1]]=x[0];});
var B='https://www.giuseppeladisavideographer.it';
var p=location.pathname;if(p.slice(-1)!=='/')p+='/';
var it=!!R[p];
var itUrl=it?(p==='/videomaker-matrimoni/'?'/':p):(M[p]||'/');
var enUrl=it?R[p]:p;
if(it)document.documentElement.lang='it';
if(it||M[p]){[['it',itUrl],['en',enUrl],['x-default',enUrl]].forEach(function(x){var l=document.createElement('link');l.rel='alternate';l.hreflang=x[0];l.href=B+x[1];document.head.appendChild(l);});}
function go(){
var hd=document.querySelector('[data-section="header"]');
if(!hd||document.getElementById('glv-bar'))return;
var bar=document.createElement('div');bar.id='glv-bar';
bar.innerHTML='<div id="glv-lang"><a href="'+itUrl+'" hreflang="it" lang="it"'+(it?' class="on"':'')+'>Italiano</a><span class="sep">&middot;</span><a href="'+enUrl+'" hreflang="en" lang="en"'+(it?'':' class="on"')+'>English</a></div>';
var mb=document.querySelector('.main-body');
if(mb)mb.insertBefore(bar,mb.firstChild);else hd.parentNode.insertBefore(bar,hd.nextSibling);
}
var CK={'.cc-message':'Questo sito usa i cookie per migliorare l\'esperienza di navigazione, personalizzare gli annunci e analizzare il traffico. È possibile accettare o rifiutare tutti i cookie non essenziali, oppure cliccare “Gestisci” per scegliere le preferenze.','#cookie-consent-accept-btn .cookie-btn-text':'Accetta tutti','#cookie-consent-deny-btn .cookie-btn-text':'Rifiuta tutti','#cookie-consent-manage-btn':'Gestisci','#cookie-consent-save-preferences':'Salva preferenze'};
var CL={'consent-necessary':'Essenziali – strettamente necessari al funzionamento del sito.','consent-personalization':'Personalizzazione – usati per migliorare l\'esperienza in base all\'interazione con il sito.','consent-analytics':'Statistiche – usati per misurare e analizzare le visite, per migliorare il sito.','consent-ads':'Pubblicità – usati per adattare gli annunci su questo e su altri siti.'};
function ck(n){
var w=document.querySelector('.cc-window');
if(!w){if(n<20)setTimeout(function(){ck(n+1)},250);return;}
for(var s in CK){var e=w.querySelector(s);if(e)e.textContent=CK[s];}
for(var id in CL){var b=document.getElementById(id);if(b&&b.parentNode.lastChild.nodeType===3)b.parentNode.lastChild.nodeValue=CL[id];}
}
var H1P={'/chi-sono/':'h2','/about/':'h2','/contatti/':'h2','/contact/':'h2','/scrivimi/':'p','/get-in-touch/':'p','/preventivo/':'p','/quote/':'p'};
function h1fix(){var s=H1P[p];if(!s||document.querySelector('.main-body h1'))return;var el=document.querySelector('.main-body '+s);if(!el)return;var cs=getComputedStyle(el);var h=document.createElement('h1');h.className=el.className.split(' ').filter(function(c){return c.indexOf('animatable')!==0;}).join(' ');h.innerHTML=el.innerHTML;['font-family','font-size','font-weight','font-style','letter-spacing','line-height','text-transform','color','margin-top','margin-bottom','text-align'].forEach(function(k){h.style.setProperty(k,cs.getPropertyValue(k));});el.parentNode.replaceChild(h,el);}
var SW=['/','/videomaker-matrimoni/','/wedding-videographer-italy/'];
function retag(el,tag){var cs=getComputedStyle(el);var n=document.createElement(tag);n.className=el.className.split(' ').filter(function(c){return c.indexOf('animatable')!==0;}).join(' ');n.innerHTML=el.innerHTML;['font-family','font-size','font-weight','font-style','letter-spacing','line-height','text-transform','color','margin-top','margin-bottom','text-align'].forEach(function(k){n.style.setProperty(k,cs.getPropertyValue(k));});el.parentNode.replaceChild(n,el);return n;}
function h1swap(){var a=document.querySelector('.main-body h1'),b=document.querySelector('.main-body h3');if(!a||!b)return;if(SW.indexOf(p)<0&&a.textContent.indexOf('&')<0)return;retag(a,'h2');retag(b,'h1');}
function gnav(){[['/contatti/','/guide-location/','GUIDE'],['/contact/','/venue-guides/','GUIDES']].forEach(function(x){if(p===x[1])return;var as=document.querySelectorAll('.main-body a[href="'+x[0]+'"]');for(var i=0;i<as.length;i++){var a=as[i];if(!/^(CONTATTI|CONTACT)$/.test(a.textContent.trim()))continue;var q=a.closest('p,h5,h6');if(!q||q.textContent.indexOf('·')<0||q.querySelector('a[href="'+x[1]+'"]'))continue;var c=a.cloneNode(true);c.setAttribute('href',x[1]);var t=c;while(t.firstElementChild)t=t.firstElementChild;t.textContent=x[2];a.parentNode.insertBefore(c,a);a.parentNode.insertBefore(document.createTextNode(' · '),a);}});}
function init(){go();try{gnav();}catch(e){}try{h1fix();}catch(e){}try{h1swap();}catch(e){}if(it)ck(0);}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
}catch(e){console.error("GLV",e)}
try{
addEventListener("click",e=>{var a,v=e.target.closest(".fb-element--video");v&&v.closest(".fb-block").querySelectorAll("a").forEach(x=>/stor[iy]/i.test(x.textContent)&&(a=x));a&&(e.stopPropagation(),location=a.href)},!0)
}catch(e){console.error("GLV",e)}
