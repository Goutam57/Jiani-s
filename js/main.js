const pages=['home','menu','events','story','community','popup','contact'],hd=document.getElementById('hd'),nl=document.getElementById('nl'),bg=document.getElementById('bg'),rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
document.getElementById('h1').innerHTML='Handcrafted Napoli‑Inspired Pizza'.split(' ').map((w,i)=>`<span class="w"><i style="--d:${i}" aria-hidden="true">${w}&nbsp;</i></span>`).join('');
document.querySelectorAll('.sw').forEach(h=>{h.innerHTML=h.textContent.split(' ').map((w,i)=>`<span class="wd"><i style="--i:${i}">${w}&nbsp;</i></span>`).join('')});
document.querySelectorAll('.strip>div,.glance>div').forEach(st=>st.innerHTML+=st.innerHTML);
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
function count(){document.querySelectorAll('.page.show [data-n]').forEach(el=>{if(el.dataset.d)return;el.dataset.d=1;const t=+el.dataset.n;let s=null;const f=ts=>{s=s||ts;const p=Math.min((ts-s)/1400,1);el.textContent=Math.round(t*p);p<1&&requestAnimationFrame(f)};requestAnimationFrame(f)})}
function route(){let p=location.hash.slice(1);if(!pages.includes(p))p='home';
document.querySelectorAll('.page').forEach(s=>s.classList.toggle('show',s.id==='p-'+p));
document.querySelectorAll('nav a:not(.btn)').forEach(a=>{const on=a.getAttribute('href')==='#'+p;a.classList.toggle('on',on);on?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current')});document.querySelectorAll('nav ul>li').forEach((l,i)=>l.style.setProperty('--k',i));
document.title=p==='home'?'Jiani’s | Napoli-inspired Pizza Catering in London':'Jiani’s | '+({menu:'Menu',events:'Events',story:'Our Story',community:'Community',popup:'Stanmore Pop-Up',contact:'Book Your Event'})[p];
nl.classList.remove('open');bg.setAttribute('aria-expanded','false');document.body.style.overflow='';scrollTo(0,0);
document.querySelectorAll('.page.show .rv,.page.show .sw').forEach(r=>{r.classList.remove('in');io.observe(r)});setTimeout(count,300)}
addEventListener('hashchange',route);route();
const it=document.getElementById('intro');setTimeout(()=>it.classList.add('go'),rm?200:1250);setTimeout(()=>it.classList.add('gone'),rm?400:2000);
const pr=document.getElementById('prog');
function tick(){const y=scrollY;document.querySelector('.sticky').classList.toggle('show',y>500);hd.classList.toggle('solid',y>40);pr.style.width=(y/(document.body.scrollHeight-innerHeight)*100)+'%';
if(!rm)document.querySelectorAll('.page.show [data-p]').forEach(i=>{i.style.transform=`translateY(${y*i.dataset.p}px)`})}
addEventListener('scroll',tick,{passive:true});
bg.onclick=()=>{const o=nl.classList.toggle('open');bg.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''};
if(!rm&&matchMedia('(hover:hover)').matches){document.querySelectorAll('.card,.ph').forEach(c=>{c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(800px) rotateY(${x*6}deg) rotateX(${-y*6}deg)`});c.addEventListener('mouseleave',()=>c.style.transform='')});
document.querySelectorAll('.btn').forEach(b=>{b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.18}px,${(e.clientY-r.top-r.height/2)*.25}px)`});b.addEventListener('mouseleave',()=>b.style.transform='')})}
document.getElementById('fm').addEventListener('submit',e=>{e.preventDefault();const f=e.target,er=document.getElementById('er');
if(f.website.value)return;const bad=[...f.querySelectorAll('[required]')].find(x=>!x.value.trim()||(x.type==='email'&&!/^\S+@\S+\.\S+$/.test(x.value)));
if(bad){er.textContent='Please complete: '+bad.closest('label').firstChild.textContent.replace('*','');bad.focus();return}
/* WordPress launch: replace with Fluent Forms / WPForms + SMTP */
f.style.display='none';document.getElementById('ok').style.display='block'});

(function(){const el=document.getElementById('lv');if(!el)return;function u(){const n=new Date(),d=(5-n.getDay()+7)%7,o=new Date(n);o.setDate(n.getDate()+d);o.setHours(17,30,0,0);const c=new Date(o);c.setHours(21,0,0,0);
if(n>=o&&n<c){el.textContent='Open now at Stanmore Place until 9pm';return}
let t=o;if(n>=c){t=new Date(o);t.setDate(o.getDate()+7)}const ms=t-n,dd=Math.floor(ms/864e5),hh=Math.floor(ms%864e5/36e5),mm=Math.floor(ms%36e5/6e4);
el.textContent='Next pop-up in '+(dd?dd+'d ':'')+hh+'h '+mm+'m (Fri 5:30pm)'}u();setInterval(u,6e4)})();
