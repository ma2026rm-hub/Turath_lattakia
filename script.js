// واجهة تفاعلية تجريبية — يمكن ربطها لاحقاً بقاعدة بيانات وواجهة ذكاء اصطناعي حقيقية.
const menu=document.querySelector('.menu-btn'), nav=document.querySelector('.topbar nav');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
 document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
 document.querySelectorAll('.site-card').forEach(card=>card.style.display=(btn.dataset.filter==='all'||card.dataset.kind===btn.dataset.filter)?'block':'none');
}));
const input=document.getElementById('imageUpload'),preview=document.getElementById('preview'),analyze=document.getElementById('analyzeBtn'),result=document.getElementById('analysisResult');
input?.addEventListener('change',e=>{const f=e.target.files[0];if(!f)return;preview.src=URL.createObjectURL(f);preview.hidden=false;analyze.disabled=false;result.textContent='تم تحميل الصورة للمعاينة. اضغط على زر التحليل للحصول على مثال توضيحي.';});
analyze?.addEventListener('click',()=>{result.innerHTML='<b>نتيجة توضيحية:</b><br>• نوع الملف: صورة مبنى/عنصر معماري (اقتراح أولي).<br>• عناصر يمكن فحصها: الفتحات، الأقواس، الأعمدة، مواد الواجهة.<br>• يلزم إدخال الموقع والتاريخ ومراجعة مختص قبل اعتماد أي معلومة.';});
if(window.L){const map=L.map('map').setView([35.516,35.78],14);L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© OpenStreetMap'}).addTo(map);const marker=L.marker([35.5178,35.7722]).addTo(map);marker.bindPopup('<b>نقطة توضيحية</b><br>موقع المتحف الوطني — راجع الإحداثيات ميدانياً قبل اعتمادها.');}
