document.addEventListener("DOMContentLoaded",()=>{
const el=id=>document.getElementById(id);
const productCard=(p)=>`<article class="product-card" data-category="${p.category}"><img src="${location.pathname.includes('/products/')?'../assets/images/':'assets/images/'}${p.image}" alt="${p.name}"><div class="product-body"><span class="mini-label">${p.label}</span><h3>${p.name}</h3><p>${p.desc}</p><div class="card-meta"><span>🇵🇰 Pakistan</span><span>Export Grade</span></div><a class="text-link" href="${location.pathname.includes('/products/')?'../':''}products/${p.slug}.html">View Details →</a></div></article>`;
if(el("featured-products")) el("featured-products").innerHTML=PRODUCTS.slice(0,5).map(productCard).join("");
if(el("all-products")) {
 el("all-products").innerHTML=PRODUCTS.map(productCard).join("");
 document.querySelectorAll(".filter").forEach(btn=>btn.onclick=()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));btn.classList.add("active");const f=btn.dataset.filter;document.querySelectorAll(".product-card").forEach(c=>c.style.display=f==="all"||c.dataset.category===f?"":"none")});
}
if(el("features")) el("features").innerHTML=FEATURES.map(x=>`<article class="feature-card"><span class="feature-icon">${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join("");
if(el("values")) el("values").innerHTML=[["✓","Quality"],["↗","Reliability"],["◇","Transparency"],["◎","Integrity"],["♡","Customer Satisfaction"],["∞","Long-Term Partnerships"]].map(x=>`<article class="feature-card"><span class="feature-icon">${x[0]}</span><h3>${x[1]}</h3></article>`).join("");
const processHTML=PROCESS.map((x,i)=>`<div class="process-step"><span>${String(i+1).padStart(2,"0")}</span><b>${x}</b></div>`).join("");
["process","quality-process"].forEach(id=>{if(el(id))el(id).innerHTML=processHTML});
if(el("full-process")) el("full-process").innerHTML=PROCESS.map((x,i)=>`<div class="vertical-step"><span>${String(i+1).padStart(2,"0")}</span><div><h3>${x}</h3><p>${["Buyer sends product, quantity, packaging and destination requirements.","We review product and commercial specifications.","Price and commercial terms are prepared.","Quantity, packaging, destination and terms are finalized.","Products are sourced through selected suppliers.","Products are inspected according to agreed requirements.","Products are sorted and graded.","Products are packed according to buyer requirements.","Required export documentation is prepared.","Cargo is dispatched through the selected logistics channel.","Shipment reaches the agreed destination."][i]}</p></div></div>`).join("");
const marketHTML=MARKETS.map((x,i)=>`<article class="market-card"><span class="flag">${["🇸🇦","🇦🇪","🇶🇦","🇴🇲","🇰🇼","🇧🇭"][i]}</span><h3>${x}</h3><p>International B2B market</p></article>`).join("");
["markets","markets-page"].forEach(id=>{if(el(id))el(id).innerHTML=marketHTML});
if(el("packaging-grid"))el("packaging-grid").innerHTML=PACKAGING.map(x=>`<article class="pack-card"><div class="pack-icon">▦</div><h3>${x[0]}</h3><small>${x[1]}</small><p>${x[2]}</p></article>`).join("");
if(el("faq"))el("faq").innerHTML=FAQS.map((x,i)=>`<details ${i===0?"open":""}><summary>${x[0]}<span>+</span></summary><p>${x[1]}</p></details>`).join("");
if(el("quote-product"))el("quote-product").innerHTML+=PRODUCTS.map(p=>`<option value="${p.slug}">${p.name}</option>`).join("");
const params=new URLSearchParams(location.search);if(el("quote-product")&&params.get("product"))el("quote-product").value=params.get("product");
document.querySelectorAll(".menu-btn").forEach(b=>b.onclick=()=>document.querySelector(".nav nav").classList.toggle("open"));
const form=el("rfq-form");if(form)form.onsubmit=e=>{e.preventDefault();el("form-success").hidden=false;form.reset();window.scrollTo({top:document.querySelector(".success").offsetTop-120,behavior:"smooth"})};
const cf=el("contact-form");if(cf)cf.onsubmit=e=>{e.preventDefault();el("contact-success").hidden=false;cf.reset()};
});