// Carrusel muy simple: cambia de slide cada 5 s y al hacer click en un dot
(function(){
  const slides = [...document.querySelectorAll('.slide')];
  const dots = [...document.querySelectorAll('.dot')];
  if (!slides.length) return;

  let i = 0, t;
  function go(k){
    i = (k+slides.length) % slides.length;
    slides.forEach((s,idx)=> s.classList.toggle('active', idx===i));
    dots.forEach((d,idx)=> d.classList.toggle('active', idx===i));
  }
  function loop(){
    clearInterval(t);
    t = setInterval(()=> go(i+1), 5000);
  }
  dots.forEach((d,idx)=> d.addEventListener('click', ()=>{ go(idx); loop(); }));
  go(0); loop();
})();
