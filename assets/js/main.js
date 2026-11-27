(() => {
 const header = document.querySelector('.site-header');
 const button = document.getElementById('toggle');
 const nav = document.getElementById('nav');
 if (!header || !button || !nav) return;
 const mq = matchMedia('(max-width:650px)');
 function sync() { button.hidden = !mq.matches; nav.hidden = mq.matches; button.setAttribute('aria-expanded', String(!nav.hidden)); }
 button.addEventListener('click', () => { nav.hidden = !nav.hidden; button.setAttribute('aria-expanded', String(!nav.hidden)); });
 mq.addEventListener('change', sync); sync();
 const measure = () => document.documentElement.style.setProperty('--header-height', `${Math.ceil(header.getBoundingClientRect().height)}px`);
 measure(); window.addEventListener('resize', measure);
 if ('ResizeObserver' in window) new ResizeObserver(measure).observe(header);
})();
