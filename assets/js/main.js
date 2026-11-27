(() => {
 const header=document.querySelector('.site-header'), button=document.getElementById('toggle'), nav=document.getElementById('nav');
 if(!header||!button||!nav)return;
 const mq=matchMedia('(max-width:760px)'), groups=[...nav.querySelectorAll('details')];
 function closeGroups(){groups.forEach(g=>g.open=false)}
 function setMenu(open){nav.hidden=!open;button.setAttribute('aria-expanded',String(open));if(!open)closeGroups()}
 function sync(){button.hidden=!mq.matches;setMenu(!mq.matches);closeGroups()}
 button.addEventListener('click',()=>setMenu(nav.hidden));
 groups.forEach(g=>g.addEventListener('toggle',()=>{if(g.open)groups.forEach(other=>{if(other!==g)other.open=false})}));
 document.addEventListener('click',e=>{if(!header.contains(e.target)){closeGroups();if(mq.matches)setMenu(false)}});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){const open=groups.find(g=>g.open);if(open){open.open=false;open.querySelector('summary').focus()}else if(mq.matches&&!nav.hidden){setMenu(false);button.focus()}}});
 mq.addEventListener('change',sync);sync();
})();