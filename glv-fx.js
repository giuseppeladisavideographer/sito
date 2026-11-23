/* GLV – dissolvenza dei titoli dei film allo scorrimento (23/11/2026). Pagine attive: elenco PAGINE. */
(function(){
  var PAGINE=['/videomaker-matrimonio-roma/','/rome-wedding-videographer/'];
  var p=location.pathname.replace(/\/?$/,'/');
  if(PAGINE.indexOf(p)<0||!('IntersectionObserver' in window))return;
  if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  var st=document.createElement('style');
  st.textContent='.glv-fx{opacity:0;transform:translateY(14px);transition:opacity 1.4s ease,transform 1.4s ease}.glv-fx.glv-in{opacity:1;transform:none}';
  document.head.appendChild(st);
  function avvia(){
    var els=[];
    document.querySelectorAll('.main-body h2, .main-body h5').forEach(function(h){
      if(h.tagName==='H5'){var t=h.innerText||'';if(!/GUARDA LA STORIA|WATCH THE STORY/i.test(t))return;}
      var r=h.getBoundingClientRect();
      if(r.top<window.innerHeight*0.9)return; /* già visibile all'apertura: niente effetto */
      h.classList.add('glv-fx');els.push(h);
    });
    var io=new IntersectionObserver(function(en){
      en.forEach(function(e){if(e.isIntersecting){var h=e.target;setTimeout(function(){h.classList.add('glv-in');},h.tagName==='H5'?350:0);io.unobserve(h);}});
    },{rootMargin:'0px 0px -8% 0px'});
    els.forEach(function(h){io.observe(h);});
  }
  if(document.readyState==='complete')setTimeout(avvia,300);else window.addEventListener('load',function(){setTimeout(avvia,300);});
})();
