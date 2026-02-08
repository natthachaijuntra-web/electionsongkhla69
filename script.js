// --- CONFIG ---
const PARTY_CONFIG = { "พรรคเพื่อไทย": {color:"#E11D23",abbr:"PT"}, "พรรคประชาชน": {color:"#FF7F00",abbr:"PP"}, "พรรคประชาธิปัตย์": {color:"#00A1F1",abbr:"DEM"}, "พรรคภูมิใจไทย": {color:"#003087",abbr:"BJT"}, "พรรครวมไทยสร้างชาติ": {color:"#2D368D",abbr:"UTN"}, "พรรคพลังประชารัฐ": {color:"#203668",abbr:"PPRP"}, "พรรคกล้าธรรม": {color:"#6F42C1",abbr:"KT"}, "พรรคประชาชาติ": {color:"#006633",abbr:"PCC"}, "พรรคเศรษฐกิจ": {color:"#2E7D32",abbr:"ECO"}, "พรรคไทยภักดี": {color:"#FFD700",abbr:"TPD"}, "พรรคไทยก้าวใหม่": {color:"#607D8B",abbr:"TKM"}, "พรรคพลวัต": {color:"#333",abbr:"DYN"} };

const rawData = [
    { id: "d1", name: "เขต 1", badVotes:0, noVotes:0, totalEligible:100000, cands: [{no:1, name:"นายสักกพันธุ์ อนันต์พงค์", party:"พรรคประชาชน"}, {no:2, name:"นายสรรเพชญ บุญญามณี", party:"พรรคภูมิใจไทย"}, {no:3, name:"นายสำราญ บุญเส้ง", party:"พรรคเพื่อไทย"}, {no:4, name:"นายพิเชฏฐ พัฒนโชติ", party:"พรรคประชาธิปัตย์"}, {no:5, name:"ร.ต.ต. สมศักดิ์ แสงประดับ", party:"พรรคไทยก้าวใหม่"}, {no:6, name:"นายเทพมณตรี พรมเมือง", party:"พรรคเศรษฐกิจ"}] },
    { id: "d2", name: "เขต 2", badVotes:0, noVotes:0, totalEligible:100000, cands: [{no:1, name:"นายจูรี นุ่มแก้ว", party:"พรรคประชาธิปัตย์"}, {no:2, name:"พล.ต.ท. พัฒนวุธ อังคะนาวิน", party:"พรรคเศรษฐกิจ"}, {no:3, name:"นายศาสตรา ศรีปาน", party:"พรรคภูมิใจไทย"}, {no:4, name:"นายอรรถชาญ เชาวน์วานิชย์", party:"พรรคเพื่อไทย"}, {no:5, name:"นายสุภัทร ฮาสุวรรณกิจ", party:"พรรคประชาชน"}, {no:6, name:"นายมานพ เพ็งชุม", party:"พรรคกล้าธรรม"}, {no:7, name:"นายธนพล มะโน", party:"พรรคไทยภักดี"}, {no:8, name:"นายธาราดร พรหมสุทธิ์", party:"พรรคพลังประชารัฐ"}, {no:9, name:"นายประกอบ อ่ำปลอด", party:"พรรครวมไทยสร้างชาติ"}, {no:10, name:"พ.ต.อ. วิชัย วิชยานฤพล", party:"พรรคไทยก้าวใหม่"}] },
    { id: "d3", name: "เขต 3", badVotes:0, noVotes:0, totalEligible:100000, cands: [{no:1, name:"นายนวมินทร์ ปิ่นปฐมรัฐ", party:"พรรคประชาชน"}, {no:2, name:"นายทนายอาร์ม สุวรรณรักษา", party:"พรรคประชาธิปัตย์"}, {no:3, name:"นายสุภณัฏฐ์ ชุมภูทอง", party:"พรรครวมไทยสร้างชาติ"}, {no:4, name:"นายจิรันธนิน ตาลทรัพย์คุณ", party:"พรรคเพื่อไทย"}, {no:5, name:"นายสมยศ พลายด้วง", party:"พรรคภูมิใจไทย"}, {no:6, name:"พลตรี นิพนธ์ รองสวัสดิ์", party:"พรรคกล้าธรรม"}] },
    { id: "d4", name: "เขต 4", badVotes:0, noVotes:0, totalEligible:100000, cands: [{no:1, name:"นายสิทธิพัฒน์ เสนเนียม", party:"พรรคประชาธิปัตย์"}, {no:2, name:"นายชนนพัฒฐ์ นาคสั้ว", party:"พรรคกล้าธรรม"}, {no:3, name:"นายนุกูล อยู่ทอง", party:"พรรคเพื่อไทย"}, {no:4, name:"นายโยธิน ทองเนื้อแข็ง", party:"พรรคภูมิใจไทย"}, {no:5, name:"นายชัยวัฒน์ อินศรีไกร", party:"พรรคประชาชน"}, {no:6, name:"นายเนติศิลป์ พฤกษศรี", party:"พรรครวมไทยสร้างชาติ"}, {no:7, name:"นายชนาเมธ อักโขสุวรรณ", party:"พรรคเศรษฐกิจ"}] },
    { id: "d5", name: "เขต 5", badVotes:0, noVotes:0, totalEligible:100000, cands: [{no:1, name:"นายสะหาก หมุดตะเหล็บ", party:"พรรคเพื่อไทย"}, {no:2, name:"นายปรีชา สุขเกษม", party:"พรรคประชาธิปัตย์"}, {no:3, name:"นายวงศ์วชร ขาวทอง", party:"พรรคกล้าธรรม"}, {no:4, name:"นายอภิชาติ ลาพินี", party:"พรรคภูมิใจไทย"}, {no:5, name:"นายสุวรรณ อ่อนรักษ์", party:"พรรคประชาชน"}, {no:6, name:"นายวันอับดุลเลาะฮ์ หล๊ะติหมะ", party:"พรรคเศรษฐกิจ"}] },
    { id: "d6", name: "เขต 6", badVotes:0, noVotes:0, totalEligible:100000, cands: [{no:1, name:"ว่าที่ร้อยตรี สมพร แซ่ลิ่ม", party:"พรรคประชาชน"}, {no:2, name:"นางสาวจิรนาถ เหลาะเหม", party:"พรรคเพื่อไทย"}, {no:3, name:"นายอนุกูล พฤกษานุศักดิ์", party:"พรรคภูมิใจไทย"}, {no:4, name:"นางภัทรวดี ศรีศักดา", party:"พรรครวมไทยสร้างชาติ"}, {no:5, name:"นายพิพัฌย์ เจือละออง", party:"พรรคประชาธิปัตย์"}, {no:6, name:"นายบารมี ขาวทอง", party:"พรรคกล้าธรรม"}, {no:7, name:"นายสายัญ สวมทอง", party:"พรรคไทยก้าวใหม่"}] },
    { id: "d7", name: "เขต 7", badVotes:0, noVotes:0, totalEligible:100000, cands: [{no:1, name:"นายดุลยรัตน์ บูยูโส๊ะ", party:"พรรคประชาชาติ"}, {no:2, name:"นายณัฏฐ์ชนน ศรีก่อเกื้อ", party:"พรรคภูมิใจไทย"}, {no:3, name:"นายเพ็ชร อุ่นแดง", party:"พรรคกล้าธรรม"}, {no:4, name:"นายศิริโชค โสภา", party:"พรรคประชาธิปัตย์"}, {no:5, name:"นายสมาท สะอาดวารี", party:"พรรคเพื่อไทย"}, {no:6, name:"นายดัยลามี เบ็ญบาเห็ม", party:"พรรคประชาชน"}, {no:7, name:"นายสนิท วัฒนสุข", party:"พรรครวมไทยสร้างชาติ"}, {no:8, name:"ร.ต.อ. สมพงค์ ทองบริบูรณ์", party:"พรรคเศรษฐกิจ"}] },
    { id: "d8", name: "เขต 8", badVotes:0, noVotes:0, totalEligible:100000, cands: [{no:1, name:"นายฆอซาลี ดุสะเหม๊าะ", party:"พรรคภูมิใจไทย"}, {no:2, name:"นายปรีชา แดงหลี", party:"พรรคประชาชาติ"}, {no:3, name:"พล.ต.ต. สุรินทร์ ปาลาเร่", party:"พรรคกล้าธรรม"}, {no:4, name:"นายอธิวัตร ใบสะเม๊าะ", party:"พรรคเพื่อไทย"}, {no:5, name:"นายธีรพงศ์ ดนสวี", party:"พรรคประชาธิปัตย์"}, {no:6, name:"นายกรธัช พัชณี", party:"พรรคประชาชน"}, {no:7, name:"นายเกษม ขวัญแก้ว", party:"พรรครวมไทยสร้างชาติ"}, {no:8, name:"นายอำนาจ คงเอียง", party:"พรรคไทยภักดี"}] },
    { id: "d9", name: "เขต 9", badVotes:0, noVotes:0, totalEligible:100000, cands: [{no:1, name:"นายธนทร แก้วอนุรักษ์", party:"พรรคประชาชน"}, {no:2, name:"นายศักดิ์สิทธิ์ ขาวทอง", party:"พรรคประชาธิปัตย์"}, {no:3, name:"พ.ต.อ. พิทักษ์ พุทธวิโร", party:"พรรคภูมิใจไทย"}, {no:4, name:"พ.อ. สนิท บุญราศรี", party:"พรรคเพื่อไทย"}, {no:5, name:"นายสุชาติ หลำเบ็นหมุด", party:"พรรคพลวัต"}, {no:6, name:"นายรุจิกร จันทร (ไม่รับสมัคร)", party:"พรรคพลังประชารัฐ"}, {no:7, name:"นายสงขลา พอกันที", party:"พรรครวมไทยสร้างชาติ"}] }
];

let electionData = [], partyLogoData = {};

function getPColor(p) { return PARTY_CONFIG[p]?.color || "#64748b"; }
function getPLogo(p) {
    if(partyLogoData[p] && partyLogoData[p].length > 5) return partyLogoData[p];
    const abbr = PARTY_CONFIG[p]?.abbr || 'P';
    return `https://ui-avatars.com/api/?name=${abbr}&background=${getPColor(p).replace('#','')}&color=fff&size=64&bold=true`;
}

// --- INIT ---
function init() {
    try {
        // Key: songkhla_ultimate_stable_v1 (Fresh Start)
        const sData = localStorage.getItem('songkhla_ultimate_stable_v1');
        const sLogos = localStorage.getItem('songkhla_ultimate_stable_v1_logos');
        
        if(sData) {
            electionData = JSON.parse(sData);
            if(!electionData[0] || electionData[0].totalEligible === undefined) throw "Update needed";
        } else {
            electionData = JSON.parse(JSON.stringify(rawData));
            electionData.forEach(d => d.cands.forEach(c => {
                c.score = 0;
                c.img = `https://ui-avatars.com/api/?name=${c.name.split(" ")[0]}&background=random&size=256&font-size=0.4`;
            }));
        }
        partyLogoData = sLogos ? JSON.parse(sLogos) : {};

        const sel = document.getElementById('districtSelect');
        if(sel.options.length === 1) {
            electionData.forEach(d => {
                let opt = document.createElement('option'); opt.value = d.id; opt.innerText = d.name; sel.appendChild(opt);
            });
        }
        renderDashboard();
        updatePartySummary();
        buildAdminForm();
    } catch(e) { 
        console.warn("System reset triggered for stability.");
        localStorage.removeItem('songkhla_ultimate_stable_v1');
        location.reload(); 
    }
}

// --- RENDER ---
function updatePartySummary() {
    let seats = {};
    let hasVote = false;
    electionData.forEach(d => {
        let sorted = [...d.cands].sort((a,b)=>b.score-a.score);
        if(sorted[0].score > 0) {
            hasVote = true;
            seats[sorted[0].party] = (seats[sorted[0].party]||0) + 1;
        }
    });

    const bar = document.getElementById('partySummary');
    if(!hasVote) {
        bar.innerHTML = `<span class="text-muted small">รอผลการนับคะแนน...</span>`;
        return;
    }

    let html = '';
    Object.keys(seats).sort((a,b)=>seats[b]-seats[a]).forEach(p => {
        html += `
        <div class="summary-item animate__animated animate__fadeIn">
            <img src="${getPLogo(p)}" width="24" class="rounded-circle border">
            <span class="fw-bold small" style="color:#333">${p}</span>
            <span class="summary-count" style="color:${getPColor(p)}">${seats[p]}</span>
        </div>`;
    });
    bar.innerHTML = html;
}

function renderDashboard() {
    const container = document.getElementById('dashboard');
    const view = document.getElementById('districtSelect').value;
    const now = new Date();
    document.getElementById('lastTime').innerText = now.toLocaleTimeString('th-TH');
    container.innerHTML = '';

    if (view === 'All') { 
        electionData.forEach(d => {
            let sorted = [...d.cands].sort((a,b)=>b.score-a.score);
            let good = d.cands.reduce((a,b)=>a+b.score,0);
            let total = good + (d.badVotes||0) + (d.noVotes||0);
            let turnout = d.totalEligible > 0 ? (total/d.totalEligible*100).toFixed(1) : 0;
            let winner = sorted[0];

            container.insertAdjacentHTML('beforeend', `
            <div class="col-md-6 col-lg-4 animate__animated animate__fadeIn">
                <div class="card-custom v-card">
                    <div class="v-header">
                        <span class="v-title">${d.name}</span>
                        <span class="v-badge">ใช้สิทธิ์ ${turnout}%</span>
                    </div>
                    <div class="v-content">
                        <div class="v-img-wrapper">
                            <img src="${winner.img}" class="v-img">
                            <div class="v-rank-1">1</div>
                        </div>
                        <h5 class="fw-bold text-truncate mb-1" style="color:var(--primary)">${winner.name}</h5>
                        <div class="text-muted small mb-2 d-flex align-items-center justify-content-center gap-1">
                            <img src="${getPLogo(winner.party)}" width="16"> ${winner.party}
                        </div>
                        <div class="h3 fw-bold" style="color:${getPColor(winner.party)}">${winner.score.toLocaleString()}</div>
                    </div>
                    <div class="v-stats">
                        <div>ดี<span>${good.toLocaleString()}</span></div>
                        <div>เสีย<span>${(d.badVotes||0).toLocaleString()}</span></div>
                        <div>ไม่ลง<span>${(d.noVotes||0).toLocaleString()}</span></div>
                    </div>
                </div>
            </div>`);
        });
    } else { 
        let d = electionData.find(x => x.id === view);
        let sorted = [...d.cands].sort((a,b)=>b.score-a.score);
        let good = d.cands.reduce((a,b)=>a+b.score,0);
        let total = good + (d.badVotes||0) + (d.noVotes||0);
        let turnout = d.totalEligible > 0 ? (total/d.totalEligible*100).toFixed(2) : 0;
        let winner = sorted[0];

        container.innerHTML = `
        <div class="col-12 animate__animated animate__fadeIn">
            <div class="card-custom h-layout">
                <div class="h-left">
                    <div class="mb-4"><span class="v-badge fs-6 px-3 py-2" style="background:#eef2ff; color:${getPColor(winner.party)}">${d.name}</span></div>
                    <img src="${winner.img}" class="h-img">
                    <h2 class="fw-bold mb-1 text-dark">${winner.name}</h2>
                    <div class="text-muted mb-3 d-flex align-items-center gap-2">
                        <img src="${getPLogo(winner.party)}" width="28"> <span class="fw-bold" style="font-size:1.1rem; color:${getPColor(winner.party)}">${winner.party}</span>
                    </div>
                    <div class="h-score">${winner.score.toLocaleString()}</div>
                    <div class="h-label">คะแนนอันดับ 1</div>
                </div>
                <div class="h-right">
                    <div class="stats-grid">
                        <div class="stat-item"><span class="stat-num text-success">${good.toLocaleString()}</span><span class="stat-name">บัตรดี</span></div>
                        <div class="stat-item"><span class="stat-num text-danger">${(d.badVotes||0).toLocaleString()}</span><span class="stat-name">บัตรเสีย</span></div>
                        <div class="stat-item"><span class="stat-num text-warning">${(d.noVotes||0).toLocaleString()}</span><span class="stat-name">ไม่ประสงค์</span></div>
                        <div class="stat-item"><span class="stat-num">${turnout}%</span><span class="stat-name">ใช้สิทธิ์</span></div>
                    </div>
                    <div class="runner-list">
                        ${sorted.slice(1).map((c,i)=>`
                            <div class="runner-card">
                                <div class="runner-rank">${i+2}</div>
                                <img src="${c.img}" class="runner-img">
                                <div class="flex-grow-1">
                                    <div class="fw-bold text-dark">${c.name}</div>
                                    <div class="small text-muted d-flex align-items-center gap-1"><img src="${getPLogo(c.party)}" width="14"> ${c.party}</div>
                                </div>
                                <div class="fw-bold fs-5 text-dark">${c.score.toLocaleString()}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>`;
    }
}

// --- ADMIN ---
function openLogin() { document.getElementById('loginModal').style.display='block'; document.getElementById('adminPass').value=''; document.getElementById('adminPass').focus(); }
function closeModals() { document.getElementById('loginModal').style.display='none'; document.getElementById('adminModal').style.display='none'; }
function checkLogin() { if(document.getElementById('adminPass').value==='1234'){ closeModals(); document.getElementById('adminModal').style.display='block'; } else alert('รหัสผ่านไม่ถูกต้อง'); }

function buildAdminForm() {
    let html = '';
    electionData.forEach((d,di) => {
        html += `<div class="col-12 mb-3"><div class="card border bg-light shadow-sm"><div class="card-header bg-white fw-bold d-flex justify-content-between align-items-center flex-wrap"><span>${d.name}</span><div class="d-flex gap-1 mt-1"><input type="number" id="elig_${di}" value="${d.totalEligible||0}" class="form-control form-control-sm text-center" style="width:90px" placeholder="ผู้มีสิทธิ์"><input type="number" id="bad_${di}" value="${d.badVotes||0}" class="form-control form-control-sm text-center text-danger fw-bold" style="width:70px" placeholder="เสีย"><input type="number" id="no_${di}" value="${d.noVotes||0}" class="form-control form-control-sm text-center text-warning fw-bold" style="width:70px" placeholder="ไม่ลง"></div></div><div class="card-body p-2"><div class="row g-2">`;
        d.cands.forEach((c,ci) => {
            html += `<div class="col-md-6 col-lg-4"><div class="bg-white p-2 border rounded d-flex align-items-center"><span class="badge bg-dark me-2">${c.no}</span><div class="text-truncate flex-grow-1 small fw-bold">${c.name}</div><input type="number" id="s_${di}_${ci}" value="${c.score}" class="form-control form-control-sm fw-bold text-primary text-end" style="width:80px"><input type="text" id="i_${di}_${ci}" value="${c.img}" class="form-control form-control-sm ms-1 text-muted" style="width:30px" placeholder="Img"></div></div>`;
        });
        html += `</div></div></div></div>`;
    });
    document.getElementById('adminCandidates').innerHTML = html;

    let logoHtml = '';
    [...new Set(electionData.flatMap(d=>d.cands.map(c=>c.party)))].sort().forEach(p => {
        logoHtml += `<div class="col-md-6"><div class="input-group input-group-sm"><span class="input-group-text fw-bold" style="color:${getPColor(p)};width:120px;">${p}</span><input type="text" class="form-control logo-input" data-party="${p}" value="${partyLogoData[p]||''}"></div></div>`;
    });
    document.getElementById('adminLogos').innerHTML = logoHtml;
}

function saveData() {
    electionData.forEach((d,di) => {
        d.totalEligible = parseInt(document.getElementById(`elig_${di}`).value)||0;
        d.badVotes = parseInt(document.getElementById(`bad_${di}`).value)||0;
        d.noVotes = parseInt(document.getElementById(`no_${di}`).value)||0;
        d.cands.forEach((c,ci) => {
            c.score = parseInt(document.getElementById(`s_${di}_${ci}`).value)||0;
            let url = document.getElementById(`i_${di}_${ci}`).value.trim();
            if(url.length > 5) c.img = url;
        });
    });
    document.querySelectorAll('.logo-input').forEach(inp => { if(inp.value) partyLogoData[inp.dataset.party] = inp.value; });

    localStorage.setItem('songkhla_ultimate_stable_v1', JSON.stringify(electionData));
    localStorage.setItem('songkhla_ultimate_stable_v1_logos', JSON.stringify(partyLogoData));
    closeModals(); renderDashboard(); updatePartySummary(); buildAdminForm();
}

function toggleFullScreen() {
    if(!document.fullscreenElement) document.documentElement.requestFullscreen().then(()=>document.body.classList.add('fullscreen-mode'));
    else document.exitFullscreen().then(()=>document.body.classList.remove('fullscreen-mode'));
}

setInterval(() => {
    if(document.getElementById('adminModal').style.display !== 'block' && 
       document.getElementById('loginModal').style.display !== 'block') {
        const sData = localStorage.getItem('songkhla_ultimate_stable_v1');
        if(sData) {
            electionData = JSON.parse(sData);
            renderDashboard();
            updatePartySummary();
        }
    }
}, 20000);

window.onload = init;
</script>
</body>
</html>
