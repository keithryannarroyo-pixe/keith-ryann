const IMG=Array.from({length:10},(_,i)=>"public/bikes/"+i+".webp");
const CUR="₱",DELIVERY=2500;
const fmt=n=>CUR+n.toLocaleString("en",{maximumFractionDigits:0});
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const H={engine:"Engine size: bigger usually means more power.",power:"Power: how hard it pulls at speed.",torque:"Torque: the push you feel when accelerating.",weight:"Weight: lighter feels nimbler.",speed:"Top speed: the fastest it can go.",gear:"Gearbox: how power reaches the wheel."};
const LAB={engine:"Engine",power:"Power",torque:"Torque",weight:"Weight",speed:"Top speed",gear:"Gearbox"};
const B={Ducati:"Ducati · Bologna, Italy · founded 1926. Famous for V-twin and V4 superbikes and MotoGP racing.",KTM:"KTM · Mattighofen, Austria · founded 1953. Light, sharp-handling bikes with an orange racing look.",Suzuki:"Suzuki · Hamamatsu, Japan · founded 1909. Reliable, good-value bikes from small scooters to the Hayabusa.",TVS:"TVS Motor · Chennai, India · founded 1978. Affordable, sporty commuters like the Apache.",Yamaha:"Yamaha · Iwata, Japan · founded 1955. MotoGP-winning brand with sporty engines and smooth handling.",BMW:"BMW Motorrad · Berlin, Germany · founded 1923. Premium engineering and high-tech superbikes."};
const D=[
{b:"Ducati",m:"Panigale V4",c:"Superbike",p:1890000,d:"Italian flagship with a MotoGP-derived V4 engine, a 6-axis electronics package and a one-sided swingarm.",more:"Built for the track but fast on any road. Cornering ABS, traction and wheelie control, a quickshifter and Brembo brakes come standard.",best:"Experienced riders who want maximum performance.",f:["Desmosedici Stradale V4","6-axis IMU electronics","Quickshifter up/down","Brembo Stylema brakes"],s:{engine:"1,103 cc V4",power:"≈ 214 hp",torque:"≈ 124 Nm",weight:"≈ 195 kg",speed:"300+ km/h",gear:"6-speed"}},
{b:"KTM",m:"RC 390",c:"Sport",p:329000,d:"A small, light sportbike with a punchy single-cylinder engine and a full race-style fairing.",more:"A popular step up from 150–250cc bikes: sharp handling, strong brakes and a racing look at a friendly price.",best:"Riders moving up to their first real sportbike.",f:["Liquid-cooled single","Race-style fairing","Slipper clutch","Switchable ABS"],s:{engine:"373 cc single",power:"≈ 43 hp",torque:"≈ 35 Nm",weight:"≈ 172 kg",speed:"≈ 165 km/h",gear:"6-speed"}},
{b:"Suzuki",m:"Raider R150 Carb",c:"Underbone",p:99900,d:"A lightweight 150cc underbone with a high-revving liquid-cooled engine and a 6-speed gearbox.",more:"Quick, cheap to run and easy to maintain. A favorite for daily commuting and fun weekend rides.",best:"Daily commuters who want sporty looks and low running costs.",f:["Liquid-cooled DOHC","6-speed gearbox","Disc brakes","Lightweight frame"],s:{engine:"147 cc single",power:"≈ 17 hp",torque:"≈ 14 Nm",weight:"≈ 109 kg",speed:"≈ 140 km/h",gear:"6-speed"}},
{b:"Suzuki",m:"Burgman 400",c:"Maxi-scooter",p:450000,d:"A comfortable touring scooter with a big seat, a windscreen, under-seat storage and an automatic CVT.",more:"No gear changes, a relaxed riding position and plenty of room for a helmet and luggage make long trips easy.",best:"Commuters and tourers who want comfort and simplicity.",f:["Automatic CVT","Large under-seat storage","Wind-protecting screen","Comfortable two-up seat"],s:{engine:"400 cc single",power:"≈ 31 hp",torque:"≈ 36 Nm",weight:"≈ 215 kg",speed:"≈ 140 km/h",gear:"Automatic"}},
{b:"TVS",m:"Apache RTR 160",c:"Commuter sport",p:89900,d:"A sporty, air-cooled 160cc street bike with a light frame and good fuel economy.",more:"Simple, reliable and affordable to service. A strong choice for city riding and beginners.",best:"Beginners and city riders on a budget.",f:["Air-cooled 160cc","Sporty styling","Good fuel economy","Easy servicing"],s:{engine:"160 cc single",power:"≈ 15 hp",torque:"≈ 13 Nm",weight:"≈ 138 kg",speed:"≈ 115 km/h",gear:"5-speed"}},
{b:"Yamaha",m:"T-150 MotoGP Edition",c:"Underbone",p:119900,d:"A 150cc liquid-cooled sport underbone in Yamaha's blue MotoGP livery.",more:"Smooth power, sharp handling and light weight, with the same racing colors as Yamaha's factory MotoGP bike.",best:"Young riders who want style and a fun ride.",f:["Liquid-cooled 4-valve","MotoGP livery","Disc brakes","Light and nimble"],s:{engine:"150 cc single",power:"≈ 15 hp",torque:"≈ 14 Nm",weight:"≈ 119 kg",speed:"≈ 120 km/h",gear:"5-speed"}},
{b:"Yamaha",m:"YZF-R1",c:"Superbike",p:1199000,d:"Yamaha's racing flagship with a crossplane inline-4 that pulls like their MotoGP bike.",more:"Traction control, wheelie control, a quickshifter and a lightweight frame make it a serious track weapon that is still usable on the road.",best:"Experienced riders who enjoy track days.",f:["Crossplane inline-4","Traction & wheelie control","Quickshifter","Aluminum Deltabox frame"],s:{engine:"998 cc inline-4",power:"≈ 200 hp",torque:"≈ 112 Nm",weight:"≈ 199 kg",speed:"≈ 290 km/h",gear:"6-speed"}},
{b:"Suzuki",m:"Gladius SFV650",c:"Naked",p:389000,d:"A relaxed, stylish street bike with a torquey V-twin engine and a low seat.",more:"Friendly for newer riders, smooth to ride and comfortable enough for every day, with a sporty exhaust note.",best:"Newer riders moving up to a mid-size bike.",f:["645cc V-twin","Low seat height","ABS available","Upright riding position"],s:{engine:"645 cc V-twin",power:"≈ 72 hp",torque:"≈ 64 Nm",weight:"≈ 203 kg",speed:"≈ 200 km/h",gear:"6-speed"}},
{b:"BMW",m:"S 1000 RR",c:"Superbike",p:1299000,d:"A German superbike with a high-revving inline-4, ABS and selectable riding modes.",more:"Very fast and very stable at speed, with premium build quality and advanced electronics.",best:"Experienced riders who want a premium superbike.",f:["Inline-4 engine","Riding modes","ABS","Aerodynamic fairing"],s:{engine:"999 cc inline-4",power:"≈ 193 hp",torque:"≈ 112 Nm",weight:"≈ 206 kg",speed:"≈ 300 km/h",gear:"6-speed"}},
{b:"KTM",m:"390 Duke",c:"Naked",p:289000,d:"A lightweight street bike with an upright seat and a punchy single-cylinder engine.",more:"Fun in traffic and on twisty roads, with an aggressive look and strong brakes.",best:"City riders who want an exciting everyday bike.",f:["Liquid-cooled single","Trellis frame","Switchable ABS","Aggressive styling"],s:{engine:"373 cc single",power:"≈ 43 hp",torque:"≈ 37 Nm",weight:"≈ 172 kg",speed:"≈ 165 km/h",gear:"6-speed"}}
];
const ACC=[{id:"a0",n:"Full-face helmet",p:6500,e:"⛑️"},{id:"a1",n:"Riding gloves",p:2200,e:"🧤"},{id:"a2",n:"Riding jacket",p:9500,e:"🧥"},{id:"a3",n:"Disc lock",p:1800,e:"🔒"},{id:"a4",n:"Phone mount",p:950,e:"📱"},{id:"a5",n:"Chain care kit",p:1200,e:"🧴"}];
const $=id=>document.getElementById(id);
const item=id=>String(id)[0]==="a"?(a=>({id,n:a.n,p:a.p,e:a.e}))(ACC.find(x=>x.id===id)):{id,n:D[id].b+" "+D[id].m,p:D[id].p,img:IMG[id]};

/* storage */
let cart={},wish=[],orders=[];
const ld=(k,f)=>{try{return JSON.parse(localStorage.getItem(k))||f}catch(e){return f}};
const sv=()=>{try{localStorage.setItem("mg",JSON.stringify({cart,wish,orders}))}catch(e){}};
{const s=ld("mg",{});cart=s.cart||{};wish=s.wish||[];orders=s.orders||[]}
function toast(t){const e=$("toast");e.textContent=t;e.style.display="block";clearTimeout(toast.t);toast.t=setTimeout(()=>e.style.display="none",2000)}
function counts(){$("cc").textContent=Object.values(cart).reduce((a,b)=>a+b,0);$("wc").textContent=wish.length;
 document.querySelectorAll("[data-heart]").forEach(h=>{const on=wish.includes(+h.dataset.heart);h.classList.toggle("on",on);h.textContent=on?"♥":"♡"});
 $("hwish").textContent=wish.includes(cur)?"♥ In wishlist":"♡ Wishlist"}
function addCart(id){cart[id]=(cart[id]||0)+1;sv();counts();toast("Added to cart 🛒")}
function togWish(id){const i=wish.indexOf(id);i<0?wish.push(id):wish.splice(i,1);sv();counts();toast(i<0?"Saved to wishlist ♥":"Removed from wishlist");if(panel==="wish")openPanel("wish")}
const subtotal=()=>Object.entries(cart).reduce((t,[id,q])=>t+item(isNaN(id)?id:+id).p*q,0);

/* slideshow */
let cur=0,timer=null,busy=false;const stage=$("stage"),show=$("show"),dots=$("dots");
D.forEach((_,i)=>{const b=document.createElement("button");b.setAttribute("aria-label","Show bike "+(i+1));b.onclick=()=>go(i);dots.appendChild(b)});
function mkImg(i,c){const im=new Image();im.src=IMG[i];im.alt=D[i].b+" "+D[i].m;im.className="bike "+c;return im}
function fillInfo(i){const x=D[i];
 $("brand").textContent=x.b;$("cat").textContent=x.c;$("model").textContent=x.m;$("price").textContent=fmt(x.p);$("about").textContent=B[x.b];$("desc").textContent=x.d+" "+x.more;
 $("count").textContent=String(i+1).padStart(2,"0")+" / "+D.length;
 $("specs").innerHTML=Object.keys(LAB).map(k=>`<div class="spec" title="${H[k]}"><b>${LAB[k]}</b><strong>${x.s[k]}</strong><small>${H[k].split(": ")[1]}</small></div>`).join("");
 [...$("info").children].forEach(e=>{e.classList.remove("anim");void e.offsetWidth;e.classList.add("anim")});
 [...dots.children].forEach((d,k)=>d.setAttribute("aria-current",k===i))}
function restart(){clearInterval(timer);const p=$("prog");p.classList.remove("run");void p.offsetWidth;p.classList.add("run");timer=setInterval(()=>go((cur+1)%D.length),5000)}
function go(i){if(busy||(i===cur&&stage.querySelector(".bike")))return;busy=true;
 const o=stage.querySelector(".bike.in");if(o){o.classList.replace("in","out");setTimeout(()=>o.remove(),950)}
 cur=i;fillInfo(i);stage.appendChild(mkImg(i,"in"));counts();setTimeout(()=>busy=false,500);restart()}
$("next").onclick=()=>go((cur+1)%D.length);$("prev").onclick=()=>go((cur-1+D.length)%D.length);
$("hadd").onclick=()=>addCart(cur);$("hwish").onclick=()=>togWish(cur);$("hdet").onclick=()=>details(cur);
show.onmouseenter=()=>{clearInterval(timer);show.classList.add("paused")};show.onmouseleave=()=>{show.classList.remove("paused");restart()};

/* catalog */
let filt="All",q="";
const cats=["All",...new Set(D.map(d=>d.c))];
function tools(){$("tools").innerHTML=cats.map(c=>`<button class="chip" aria-pressed="${c===filt}" data-cat="${c}">${c}</button>`).join("")+`<input id="q" type="search" placeholder="Search brand or model" aria-label="Search" value="${esc(q)}">`;
 $("q").oninput=e=>{q=e.target.value;grid(true)}}
function grid(keep){$("grid").innerHTML=D.map((d,i)=>({d,i})).filter(({d})=>(filt==="All"||d.c===filt)&&(d.b+" "+d.m).toLowerCase().includes(q.toLowerCase())).map(({d,i})=>
 `<article class="card"><div class="ph" data-det="${i}"><button class="heart" data-heart="${i}" aria-label="Wishlist">♡</button><img src="${IMG[i]}" alt="${esc(d.b+" "+d.m)}"></div>
 <div class="cb"><span class="b">${d.b}</span><h3>${esc(d.m)}</h3><p>${esc(d.c)} · ${d.s.engine}</p><p>${esc(d.d)}</p>
 <div class="row"><strong>${fmt(d.p)}</strong><span><button class="btn o sm" data-det="${i}">Details</button> <button class="btn sm" data-add="${i}">Add</button></span></div></div></article>`).join("")||'<p class="empty">No bikes match your search.</p>';
 counts();if(!keep)tools()}

/* panels */
let panel="";
function openPanel(kind){panel=kind;const d=$("drawer");let h="";
 if(kind==="cart"){const ids=Object.keys(cart);
  h=`<div class="dh"><h3>Your cart</h3><button class="x" data-act="close" aria-label="Close">✕</button></div><div class="db">${ids.length?ids.map(id=>{const it=item(isNaN(id)?id:+id);return line(it,cart[id])}).join("")+`<h4 style="margin:16px 0 6px">Add more stuff</h4><div class="rec">${ACC.filter(a=>!cart[a.id]).slice(0,4).map(a=>`<div><div class="e">${a.e}</div><small>${a.n}</small><br><b>${fmt(a.p)}</b><br><button class="btn sm" data-add="${a.id}">Add</button></div>`).join("")}</div>`:'<p class="empty">Your cart is empty.</p>'}</div>
  ${ids.length?`<div class="df"><div class="tot"><span>Subtotal</span><span>${fmt(subtotal())}</span></div><button class="btn" style="width:100%" data-act="checkout">Checkout</button></div>`:""}`}
 if(kind==="wish"){h=`<div class="dh"><h3>Wishlist</h3><button class="x" data-act="close" aria-label="Close">✕</button></div><div class="db">${wish.length?wish.map(id=>{const it=item(id);return `<div class="li"><div class="t"><img src="${it.img}" alt=""></div><div><b>${esc(it.n)}</b><small>${fmt(it.p)}</small><button class="lk" data-heart="${id}">Remove</button></div><button class="btn sm" data-add="${id}">Add to cart</button></div>`}).join(""):'<p class="empty">No saved bikes yet. Tap ♡ on any bike.</p>'}</div>`}
 if(kind==="orders"){h=`<div class="dh"><h3>Your orders</h3><button class="x" data-act="close" aria-label="Close">✕</button></div><div class="db">${orders.length?orders.slice().reverse().map(o=>`<div class="li" style="grid-template-columns:1fr auto"><div><b>${o.no}</b><small>${o.date} · ${o.lines.reduce((a,l)=>a+l.q,0)} item(s)</small><small>${o.lines.map(l=>esc(l.n)).join(", ")}</small></div><div style="text-align:right"><b>${fmt(o.total)}</b><br><button class="lk" style="color:#111" data-rcpt="${o.no}">View</button></div></div>`).join(""):'<p class="empty">No orders yet.</p>'}</div>`}
 d.innerHTML=h;d.classList.add("open");$("ov").classList.add("open");counts()}
function line(it,q){const k=it.id;return `<div class="li"><div class="t">${it.img?`<img src="${it.img}" alt="">`:it.e}</div><div><b>${esc(it.n)}</b><small>${fmt(it.p)} each</small><span class="qty"><button data-q="${k}" data-d="-1" aria-label="Less">−</button>${q}<button data-q="${k}" data-d="1" aria-label="More">+</button></span></div><div style="text-align:right"><b>${fmt(it.p*q)}</b><br><button class="lk" data-rm="${k}">Remove</button></div></div>`}
function closeAll(){panel="";$("drawer").classList.remove("open");$("ov").classList.remove("open");$("modal").classList.remove("open")}
function modal(h){$("mb").innerHTML=`<button class="x" data-act="mclose" aria-label="Close">✕</button>`+h;$("modal").classList.add("open");$("modal").scrollTop=0}
function details(i){const d=D[i];closeAll();modal(`<div class="dt"><div class="ph"><button class="heart" data-heart="${i}" aria-label="Wishlist">♡</button><img src="${IMG[i]}" alt="${esc(d.b+" "+d.m)}"></div><div class="tx"><span class="brand">${d.b}</span> <span class="tag">${d.c}</span><h2>${esc(d.m)}</h2><div class="price">${fmt(d.p)}</div><p>${esc(d.d)}</p><p style="margin-top:6px">${esc(d.more)}</p><h4>Best for</h4><p>${esc(d.best)}</p><h4>Key features</h4><ul>${d.f.map(x=>`<li>${esc(x)}</li>`).join("")}</ul><h4>About ${d.b}</h4><p class="note">${B[d.b]}</p><h4>Specifications</h4><table>${Object.keys(LAB).map(k=>`<tr><td>${LAB[k]}<br><small class="note">${H[k].split(": ")[1]}</small></td><td>${d.s[k]}</td></tr>`).join("")}</table><div class="acts" style="margin-top:16px"><button class="btn" data-add="${i}">Add to cart</button><button class="btn o" data-act="mclose">Keep browsing</button></div></div></div>`);counts()}
function checkout(){closeAll();const sub=subtotal();
 modal(`<form class="f" id="cf" novalidate><h2>Checkout</h2><p class="note">Order total updates with your delivery choice. No real payment is taken on this demo site.</p>
 <label>Full name<input name="name" required autocomplete="name"></label><div class="two"><label>Email<input name="email" type="email" required autocomplete="email"></label><label>Phone<input name="phone" type="tel" required autocomplete="tel"></label></div>
 <fieldset><legend>Delivery</legend><label><input type="radio" name="del" value="pickup" checked> Store pickup – free</label><label><input type="radio" name="del" value="home"> Home delivery – ${fmt(DELIVERY)}</label></fieldset>
 <label id="addr" style="display:none">Delivery address<textarea name="addr" rows="2"></textarea></label>
 <label>Payment<select name="pay"><option>Pay on pickup / delivery</option><option>Bank transfer</option><option>Credit / debit card (demo)</option></select></label>
 <div class="tot" style="margin-top:6px"><span>Total</span><span id="ctot">${fmt(sub)}</span></div><div class="err" id="err"></div>
 <button class="btn" type="submit">Place order</button></form>`);
 const f=$("cf");f.onchange=()=>{const h=f.del.value==="home";$("addr").style.display=h?"grid":"none";$("ctot").textContent=fmt(sub+(h?DELIVERY:0))};
 f.onsubmit=e=>{e.preventDefault();const v=Object.fromEntries(new FormData(f));
  if(!v.name.trim()||!/^\S+@\S+\.\S+$/.test(v.email)||v.phone.trim().length<6||(v.del==="home"&&!v.addr.trim())){$("err").textContent="Please fill in your name, a valid email, phone"+(v.del==="home"?" and address.":".");return}
  const lines=Object.entries(cart).map(([id,q])=>{const it=item(isNaN(id)?id:+id);return{n:it.n,p:it.p,q}});
  const ship=v.del==="home"?DELIVERY:0,o={no:"MG-"+Date.now().toString().slice(-7),date:new Date().toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"}),lines,sub,ship,total:sub+ship,name:v.name,email:v.email,phone:v.phone,del:v.del,addr:v.addr||"",pay:v.pay};
  orders.push(o);cart={};sv();counts();receipt(o,true)}}
function receipt(o,fresh){closeAll();const eta=o.del==="home"?"Delivery within 3–7 days":"Ready for pickup in 1–2 days";
 modal(`<div class="ok"><h2>${fresh?"Thank you, "+esc(o.name.split(" ")[0])+"! 🎉":"Order "+o.no}</h2><p>Order <b>${o.no}</b> · ${o.date}${fresh?" · a confirmation was sent to "+esc(o.email):""}</p></div>
 <div style="padding:22px 28px"><h4>What you purchased</h4><table class="sm-t"><tr><th>Item</th><th>Qty</th><th>Price</th></tr>${o.lines.map(l=>`<tr><td>${esc(l.n)}</td><td>${l.q}</td><td>${fmt(l.p*l.q)}</td></tr>`).join("")}<tr><td colspan="2">Subtotal</td><td>${fmt(o.sub)}</td></tr><tr><td colspan="2">${o.del==="home"?"Home delivery":"Store pickup"}</td><td>${o.ship?fmt(o.ship):"Free"}</td></tr><tr><th colspan="2">Total</th><th>${fmt(o.total)}</th></tr></table>
 <h4 style="margin-top:12px">Details</h4><p>${esc(o.name)} · ${esc(o.phone)} · ${esc(o.email)}</p><p>${o.del==="home"?"Deliver to: "+esc(o.addr):"Pickup at: MotoGarage showroom"}</p><p>Payment: ${esc(o.pay)}</p><p><b>${eta}</b></p>
 <h4 style="margin-top:12px">What happens next</h4><ul style="padding-left:1.1em"><li>We inspect your bike and prepare the papers.</li><li>We contact you to confirm the ${o.del==="home"?"delivery":"pickup"} time.</li><li>Bring a valid ID when you collect or receive it.</li></ul>
 <h4 style="margin-top:14px">More stuff you may need</h4><div class="rec">${ACC.map(a=>`<div><div class="e">${a.e}</div><small>${a.n}</small><br><b>${fmt(a.p)}</b><br><button class="btn sm" data-add="${a.id}">Add to cart</button></div>`).join("")}</div>
 <div class="acts" style="margin-top:18px"><button class="btn" data-act="mclose">Continue shopping</button><button class="btn o" data-act="cart">View cart</button></div></div>`)}

/* events */
document.addEventListener("click",e=>{const t=e.target.closest("button,[data-det]");if(!t)return;const ds=t.dataset;
 if(ds.act==="cart"||ds.act==="wish"||ds.act==="orders"){$("modal").classList.remove("open");return openPanel(ds.act)}
 if(ds.act==="close")return closeAll();if(ds.act==="mclose")return $("modal").classList.remove("open");if(ds.act==="checkout")return checkout();
 if(ds.cat){filt=ds.cat;return grid()}
 if(ds.heart!==undefined){e.stopPropagation();return togWish(+ds.heart)}
 if(ds.add!==undefined){const id=isNaN(ds.add)?ds.add:+ds.add;addCart(id);return panel==="cart"?openPanel("cart"):0}
 if(ds.det!==undefined)return details(+ds.det);
 if(ds.q!==undefined){const k=ds.q;cart[k]+=+ds.d;if(cart[k]<1)delete cart[k];sv();return openPanel("cart")}
 if(ds.rm!==undefined){delete cart[ds.rm];sv();return openPanel("cart")}
 if(ds.rcpt){return receipt(orders.find(o=>o.no===ds.rcpt),false)}});
$("ov").onclick=closeAll;$("modal").onclick=e=>{if(e.target.id==="modal")closeAll()};
addEventListener("keydown",e=>{if(e.key==="Escape")closeAll();if(!e.target.closest("input,textarea,select")){if(e.key==="ArrowRight")$("next").click();if(e.key==="ArrowLeft")$("prev").click()}});
tools();grid();go(0);
