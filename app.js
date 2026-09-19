// ==========================================
// 1. إعدادات Google Sheets (جوجل شيت)
// ==========================================
const GOOGLE_SHEET_ID = '1O_Ye0YA-8F7WVRWJRi1ox8zFfJ5JI8tdJgxUjcUVbSY'; 
const GOOGLE_SHEET_NAME = 'Sheet1'; 
const GOOGLE_SHEET_API_URL = ''; 

// ترتيب الأقسام المطلوب
const CATEGORY_PRIORITY = [
  'الشاي والأعشاب',
  'قهوة ساخنة',
  'فرابيه وآيس كوفي',
  'موهيتو فيزي',
  'عصائر فريش',
  'زبادي وميلك شيك',
  'سموزي وكوكتيل',
  'مشروبات غازيه',
  'المأكولات - قريباً',
  'المأكولات',
  'الشيشة'
];

// الصور الجانبية الموزعة للأقسام
const sideImagesMap = [
  ['1.webp', '2.webp'],
  ['3.webp', '4.webp'],
  ['5.webp', '6.webp'],
  ['7.webp', '8.webp'],
  ['9.webp', '10.webp'],
  ['11.webp', '12.webp'],
  ['13.webp', '14.webp'],
  ['15.webp'],
  ['16.webp', '17.webp'],
  ['18.webp']
];

// البيانات الافتراضية بالترتيب الجديد
let categories = [
  {
    name: 'الشاي والأعشاب',
    sub: 'مشروبات دافئة',
    img: 'cat-tea.svg',
    items: [
      ['شاي أحمر', 20], ['شاي أخضر', 20], ['شاي باللبن', 30], ['شاي أحمد تي', 25],
      ['شاي كرك', 40], ['شاي بالنكهات', 30], ['قرفة', 25], ['جنزبيل', 25],
      ['شاي زارده بارد', 50], ['ينسون ونعناع وكركديه وليمون', 20], ['هوت سيدر', 45],
      ['كوكتيل أعشاب صيدلية', 50], ['هوت سحلب مكسرات', 60], ['هوت سحلب فاكهة', 80],
      ['قرفة باللبن', 45], ['شاي أحمر نعناع', 25]
    ]
  },
  {
    name: 'قهوة ساخنة',
    sub: 'Hot Coffee & Hot Espresso',
    img: 'cat-hotcoffee.svg',
    items: [
      ['قهوة تركي', 30, 'سنجل'], ['قهوة تركي', 40, 'دبل'], ['قهوة اسبشيل', 40, 'سنجل'],
      ['قهوة اسبشيل', 50, 'دبل'], ['قهوة فرنساوي', 50], ['قهوة بندق', 55], ['قهوة نوتيلا', 60],
      ['إسبريسو', 35, 'سنجل'], ['إسبريسو', 45, 'دبل'], ['ريستريتو', 35, 'سنجل'],
      ['ريستريتو', 45, 'دبل'], ['ميكاتو', 40, 'سنجل'], ['ميكاتو', 50, 'دبل'],
      ['أفوكاتو', 40, 'سنجل'], ['أفوكاتو', 50, 'دبل'], ['كون بانا', 40],
      ['كورتادو', 50, 'كلاسيك أو موكا'], ['كابتشينو', 75], ['لاتيه', 65],
      ['فلات وايت', 60], ['أمريكانو', 50, 'كلاسيك أو بلاك'], ['نسكافيه', 55, 'كلاسيك أو بلاك'],
      ['هوت شوكليت', 70, 'دارك أو وايت'], ['هوت شوكليت مارشميلو', 80], ['هوت موكا', 60, 'دارك أو وايت']
    ]
  },
  {
    name: 'فرابيه وآيس كوفي',
    sub: 'قهوة باردة ومشروبات مثلجة',
    img: 'cat-frappuccino.svg',
    items: [
      ['فرابيه كراميل', 85], ['فرابتشينو كلاسيك', 75], ['فرابيه موكاتشينو', 85],
      ['فرابيه لوتس ستروبري', 85], ['فانيلا فرابتشينو', 70], ['فرابيه بستشيو', 100],
      ['آيس موكا', 80, 'وايت أو دارك'], ['آيس أمريكان', 55], ['آيس كوفي', 65],
      ['آيس كراميل ميكاتو', 80], ['آيس سبينش لاتيه', 80], ['آيس ماتش لاتيه', 90],
      ['ستروبري ماتش لاتيه', 95], ['ماتش بستشيو', 110], ['إيكا آيس كوفي', 85], ['آيس نيكتو أرش', 75]
    ]
  },
  {
    name: 'موهيتو فيزي',
    sub: 'موهيتو وبوبا',
    img: 'cat-mojito.svg',
    items: [
      ['موهيتو كلاسيك', 65], ['موهيتو فراولة، خوخ، كيوي', 70], ['موهيتو بلوبيري، باشون فروت', 70],
      ['موهيتو أمري باشون', 70], ['موهيتو شيري بيري', 70], ['موهيتو ريد بول', 85],
      ['هامر ريد بول', 95], ['بوبا ستروبري', 70], ['بوبا بلوبيري', 70],
      ['بوبا باشون فروت', 70], ['بوبا كولا', 70], ['بوبا تفاح أخضر', 70],
      ['ميلك تشيك بوبا', 85, 'ستروبري، بلوبيري، باشون فروت']
    ]
  },
  {
    name: 'عصائر فريش',
    sub: 'عصائر طازجة',
    img: 'cat-juice.svg',
    items: [
      ['مانجو فريش', 65], ['جوافة فريش', 55], ['فراولة فريش', 60], ['برتقال فريش', 60],
      ['موز باللبن', 50], ['جوافة باللبن', 60], ['فراولة باللبن', 65], ['بلح موز باللبن', 65],
      ['بلح باللبن', 50], ['ليمون فريش', 40], ['ليمون نعناع فريش', 45], ['برتقال بالجزر', 60],
      ['بطيخ فريش', 60], ['بطيخ نعناع فريش', 65], ['جوافة نعناع فريش', 65], ['أناناس فريش', 70],
      ['كيوي فريش', 80], ['أفوكادو فريش', 90]
    ]
  },
  {
    name: 'زبادي وميلك شيك',
    sub: 'نكهات كريمية باردة',
    img: 'cat-milkshake.svg',
    items: [
      ['زبادي كلاسيك', 60], ['زبادي عسل', 65], ['زبادي فواكه', 80],
      ['زبادي', 75, 'مانجو، خوخ، فراولة، موز'], ['زبادي', 80, 'بلوبيري أو باشون فروت'],
      ['ميلك تشيك كلاسيك', 75, 'فانيلا، شوكولاتة، كراميل، مانجو، فراولة، كيوي'],
      ['ميلك تشيك ميجا', 80], ['ميلك تشيك كونو شيبس', 80],
      ['ميلك تشيك', 85, 'أوريو، كيت كات، لوتس، نوتيلا، سنيكرز'],
      ['ميلك تشيك بستشيو', 95], ['ميلك تشيز كيك', 135, 'شوكولاتة، كراميل، مانجو، فراولة']
    ]
  },
  {
    name: 'سموزي وكوكتيل',
    sub: 'سموزي ومكس فريش',
    img: 'cat-smoothie.svg',
    items: [
      ['سموزي مانجو', 65], ['سموزي فراولة', 60], ['سموزي ليمون', 50], ['سموزي ليمون نعناع', 55],
      ['سموزي بطيخ', 60], ['سموزي كيوي', 80], ['سموزي بلوبيري', 70], ['سموزي ميكس بيري', 70],
      ['سموزي باشون فروت', 70], ['سموزي بينا بول', 80], ['سموزي خوخ', 70], ['سموزي بطيخ نعناع', 65],
      ['سموزي بيري شيري', 80], ['البوم أفوكادو', 120, 'أفوكادو، كيوي، جريب فروت'],
      ['٦ بور أفوكادو', 135, 'أفوكادو وريد بول'], ['إيكا الخميس', 140, 'أفوكادو، كيوي، موز، ريد بول'],
      ['٦× باور', 120, 'أفوكادو، كيوي، موز، بلح'], ['إيكا كوكتيل', 90, 'كيوي، موز، تفاح، مانجو، فراولة'],
      ['فروت سلاد', 90, 'مانجو، موز، تفاح، فراولة'], ['فخفخينا', 85, 'أناناس، موز، كيوي، مانجو'],
      ['فلوريد فول', 70], ['مانجو كيوي', 85], ['مانجو خوخ', 85], ['كيوي ليمون نعناع', 85],
      ['موسكو', 85, 'موز، مانجو، باشون'], ['مالديف', 85, 'كيوي، فراولة، جوز هند']
    ]
  },
  {
    name: 'المأكولات - قريباً',
    sub: 'Food - Coming Soon',
    isComingSoon: true,
    items: [
      ['تشكيلة الساندوتشات والوجبات الخفيفة', 'قريباً', 'سيتم إطلاق قائمة أكلات ومأكولات مميزة قريباً']
    ]
  },
  {
    name: 'الشيشة',
    sub: 'Shisha Selection',
    items: [
      ['شيشة تفاحتين', 70, 'فاخر'], ['شيشة عنب نعناع', 75, 'مميز'],
      ['شيشة بلوبيري', 75, 'منعش'], ['شيشة فواكه ميكس', 80, 'خلطة خاصة'],
      ['شيشة كلاسيك', 65], ['شيشة فاخرة / ميكس', 85]
    ]
  }
];

// حالة السلايدر الحالية
let currentIndex = 0;

// دالة حماية النصوص من هجمات XSS
const escapeHtml = str => String(str ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

// تحويل الأرقام العربية المكتوبة بلغة لوحة المفاتيح العربية إلى أرقام إنجليزية
function normalizeDigits(str) {
  const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return String(str ?? '').replace(/[٠-٩]/g, d => arabicDigits.indexOf(d));
}

// دالة ترتيب الأقسام حسب الأولوية
function sortCategories(catList) {
  if (!Array.isArray(catList)) return catList;
  return catList.slice().sort((a, b) => {
    const idxA = CATEGORY_PRIORITY.findIndex(p => a.name && a.name.includes(p.replace(' - قريباً', '')));
    const idxB = CATEGORY_PRIORITY.findIndex(p => b.name && b.name.includes(p.replace(' - قريباً', '')));
    const posA = idxA !== -1 ? idxA : 99;
    const posB = idxB !== -1 ? idxB : 99;
    return posA - posB;
  });
}

// تحليل CSV من Google Sheets
function parseCSV(text) {
  if (!text) return [];
  text = text.replace(/^\uFEFF/, '');
  if (text.trim().startsWith('<') || text.includes('<!DOCTYPE')) return [];

  const lines = [];
  let row = [];
  let inQuotes = false;
  let current = '';

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    const next = text[i + 1];

    if (c === '"') {
      if (inQuotes && next === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (c === ',' && !inQuotes) {
      row.push(current.trim());
      current = '';
    } else if ((c === '\r' || c === '\n') && !inQuotes) {
      if (c === '\r' && next === '\n') i++;
      row.push(current.trim());
      if (row.length > 0 && row.some(cell => cell !== '')) {
        lines.push(row);
      }
      row = [];
      current = '';
    } else {
      current += c;
    }
  }

  if (current || row.length > 0) {
    row.push(current.trim());
    if (row.some(cell => cell !== '')) lines.push(row);
  }

  if (lines.length < 2) return [];

  const headers = lines[0].map(h => h.replace(/^"|"$/g, '').trim().toLowerCase());
  const data = [];

  for (let i = 1; i < lines.length; i++) {
    const rowData = lines[i];
    const item = {};
    headers.forEach((h, idx) => {
      let val = rowData[idx] ?? '';
      val = val.replace(/^"|"$/g, '').trim();
      item[h] = val;
    });
    data.push(item);
  }

  return data;
}

// تحويل البيانات القادمة من Google Sheets أو API إلى بنية أقسام المنيو
function transformSheetData(flatData) {
  if (!Array.isArray(flatData) || flatData.length === 0) return null;

  if (flatData[0].items && flatData[0].name) {
    return sortCategories(flatData);
  }

  const map = new Map();
  flatData.forEach(item => {
    const catName = item.category_name || item.category || item['القسم'] || item['اسم القسم'] || 'أخرى';
    if (!map.has(catName)) {
      map.set(catName, { name: catName, sub: '', items: [] });
    }

    const rawPrice = item.price ?? item['السعر'] ?? item['سعر'] ?? 0;
    const cleanPriceStr = normalizeDigits(rawPrice).replace(/[^0-9.]/g, '');
    const priceNum = Number(cleanPriceStr) || 0;

    const note = item.note || item.description || item['الملاحظات'] || item['ملاحظة'] || item['ملاحظات'] || '';
    const name = item.name || item['الصنف'] || item['اسم الصنف'] || item['المشروب'] || '';

    if (name) {
      map.get(catName).items.push([name, priceNum, note]);
    }
  });

  const result = Array.from(map.values());
  return result.length > 0 ? sortCategories(result) : null;
}

// 1. تحميل الذاكرة المحلية أولاً لفتح الموقع فوراً
function initMenu() {
  try {
    const cached = localStorage.getItem('tamr_henna_menu_cache');
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed) && parsed.length > 0) {
        categories = sortCategories(parsed);
      }
    }
  } catch (e) {}

  renderAll();
  renderCatNav();
  renderDots();
  setupControls();
  setupSwipeGestures();

  // ضبط الارتفاع المبدئي
  goToSection(0);

  // جلب التحديثات الجديدة من Google Sheets في الخلفية
  syncMenuFromSheets();
}

// 2. تحديث المنيو في الخلفية عند تغير الشيت
async function syncMenuFromSheets() {
  try {
    let rawData = null;

    if (GOOGLE_SHEET_ID.trim() !== '') {
      let sheetId = GOOGLE_SHEET_ID.trim();
      const match = sheetId.match(/\/d\/([a-zA-Z0-9-_]+)/);
      if (match) sheetId = match[1];

      const csvUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(GOOGLE_SHEET_NAME)}&_t=${Date.now()}`;
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);

      const response = await fetch(csvUrl, { cache: 'no-store', signal: controller.signal });
      clearTimeout(timeoutId);

      if (response.ok) {
        const csvText = await response.text();
        rawData = parseCSV(csvText);
      }
    } else if (GOOGLE_SHEET_API_URL.trim() !== '') {
      const response = await fetch(GOOGLE_SHEET_API_URL.trim(), { cache: 'no-store' });
      if (response.ok) rawData = await response.json();
    }

    if (rawData) {
      const formattedData = transformSheetData(rawData);
      if (formattedData && formattedData.length > 0) {
        categories = formattedData;
        try {
          localStorage.setItem('tamr_henna_menu_cache', JSON.stringify(formattedData));
        } catch (e) {}
        renderAll();
        renderCatNav();
        renderDots();
        goToSection(currentIndex);
      }
    }
  } catch (error) {
    console.log('يعمل المنيو بالبيانات المخزنة محلياً، جار التحديث عند استجابة الشبكة.');
  }
}

// بناء شريط التنقل العلوي للأقسام
function renderCatNav() {
  const nav = document.getElementById('cat-nav');
  if (!nav) return;

  nav.innerHTML = categories.map((c, i) =>
    `<button class="cat-btn${i === currentIndex ? ' active' : ''}" data-cat="${i}">${escapeHtml(c.name)}</button>`
  ).join('');

  nav.onclick = e => {
    const btn = e.target.closest('.cat-btn');
    if (!btn) return;
    const idx = +btn.dataset.cat;
    goToSection(idx);
  };
}

// بناء نقاط المؤشر السفلي
function renderDots() {
  const dotsContainer = document.getElementById('dot-indicators');
  if (!dotsContainer) return;

  dotsContainer.innerHTML = categories.map((_, i) =>
    `<span class="dot${i === currentIndex ? ' active' : ''}" data-dot="${i}"></span>`
  ).join('');

  dotsContainer.onclick = e => {
    const dot = e.target.closest('.dot');
    if (!dot) return;
    goToSection(+dot.dataset.dot);
  };
}

// بناء HTML لقسم واحد في السلايدر
function renderCategorySlide(c, i) {
  const imgs = sideImagesMap[i % sideImagesMap.length] || ['1.webp'];
  const isComingSoon = c.isComingSoon || (c.name && c.name.includes('قريباً'));

  return `
  <div class="category-slide${i === currentIndex ? ' active-slide' : ''}" id="slide-${i}" data-index="${i}">
    <div class="menu-layout">
      <div class="col-content">
        <div class="menu-category" id="cat-${i}">
          <div class="cat-header">
            <h2>${escapeHtml(c.name)}</h2>
            ${!isComingSoon ? '<span class="egp-label">ج.م</span>' : ''}
          </div>
          ${c.sub ? `<div class="cat-sub">${escapeHtml(c.sub)}</div>` : ''}
          <div class="cat-body">
            ${isComingSoon ? `
              <div class="coming-soon-card">
                <div class="cs-icon">⏳</div>
                <h3>قريباً جداً</h3>
                <p>نعمل حالياً على إعداد قائمة مأكولات وأكلات مميزة لخدمتكم قريباً!</p>
              </div>
            ` : `
              <div class="items-col">
                ${c.items.map((x, j) => `
                  <div class="drink-row" style="animation-delay:${j * 0.02}s">
                    <div class="drink-name">${escapeHtml(x[0])}${x[2] ? `<small class="drink-note">${escapeHtml(x[2])}</small>` : ''}</div>
                    <span class="dots"></span>
                    <b class="price">${typeof x[1] === 'number' ? Number(x[1]).toLocaleString('ar-EG') : escapeHtml(x[1])}</b>
                  </div>`).join('')}
              </div>
            `}
          </div>
        </div>
      </div>
      <div class="col-images">
        ${imgs.map(imgName => `<img src="media/${imgName}" class="side-img" alt="${escapeHtml(c.name)}" loading="lazy">`).join('')}
      </div>
    </div>
  </div>`;
}

// عرض جميع الأقسام في السلايدر الأفقي
function renderAll() {
  const track = document.getElementById('slider-track');
  if (!track) return;

  track.innerHTML = categories.map((c, i) => renderCategorySlide(c, i)).join('');
}

// الانتقال إلى قسم محدد
function goToSection(index) {
  if (!categories || categories.length === 0) return;

  // تقييد المؤشر داخل الحدود
  if (index < 0) index = 0;
  if (index >= categories.length) index = categories.length - 1;

  currentIndex = index;

  const track = document.getElementById('slider-track');
  if (track) {
    // في RTL: تحريك التراك أفقيًا برفع الإزاحة موجبًا بحسب العرض
    track.style.transform = `translateX(${currentIndex * 100}%)`;
  }

  // تحديث أزرار التنقل العلوي
  const nav = document.getElementById('cat-nav');
  if (nav) {
    nav.querySelectorAll('.cat-btn').forEach((btn, i) => {
      const isActive = i === currentIndex;
      btn.classList.toggle('active', isActive);
      if (isActive) {
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });
  }

  // تحديث المؤشرات النقطية
  const dots = document.getElementById('dot-indicators');
  if (dots) {
    dots.querySelectorAll('.dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  // تحديث حالة أسهم التنقل
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  if (prevBtn) prevBtn.disabled = currentIndex === 0;
  if (nextBtn) nextBtn.disabled = currentIndex === categories.length - 1;

  // تحديث حالة السلايدات
  document.querySelectorAll('.category-slide').forEach((slide, i) => {
    slide.classList.toggle('active-slide', i === currentIndex);
  });

  // ملاءمة ارتفاع الصفحة مع القسم النشط فوراً
  adjustHeight();
}

// ضبط ارتفاع الصفحة ليناسب نهاية القسم الحالي بالضبط
function adjustHeight() {
  const viewport = document.getElementById('slider-viewport');
  const activeSlide = document.getElementById(`slide-${currentIndex}`);
  if (viewport && activeSlide) {
    const height = activeSlide.offsetHeight;
    if (height > 0) {
      viewport.style.height = `${height}px`;
    }
  }
}

// إعداد أزرار الأسهم
function setupControls() {
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  if (prevBtn) {
    prevBtn.onclick = () => goToSection(currentIndex - 1);
  }
  if (nextBtn) {
    nextBtn.onclick = () => goToSection(currentIndex + 1);
  }

  // دعم أزرار الكيبورد (الأسهم)
  window.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') {
      goToSection(currentIndex + 1);
    } else if (e.key === 'ArrowLeft') {
      goToSection(currentIndex - 1);
    }
  });

  // ضبط الارتفاع عند إعادة تغيير حجم الشاشة
  window.addEventListener('resize', adjustHeight);
}

// إعداد التمرير باللمس (السحب يميناً ويساراً)
function setupSwipeGestures() {
  const viewport = document.getElementById('slider-viewport');
  if (!viewport) return;

  let startX = 0;
  let startY = 0;
  let distX = 0;
  let distY = 0;
  let isSwiping = false;

  viewport.addEventListener('touchstart', e => {
    const touch = e.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
    distX = 0;
    distY = 0;
    isSwiping = true;
  }, { passive: true });

  viewport.addEventListener('touchmove', e => {
    if (!isSwiping) return;
    const touch = e.touches[0];
    distX = touch.clientX - startX;
    distY = touch.clientY - startY;
  }, { passive: true });

  viewport.addEventListener('touchend', () => {
    if (!isSwiping) return;
    isSwiping = false;
    // حد التمرير الأفقي الأدنى (35 بكسل)
    if (Math.abs(distX) > Math.abs(distY) && Math.abs(distX) > 35) {
      if (distX > 0) {
        // السحب يميناً -> الانتقال للقسم التالي
        goToSection(currentIndex + 1);
      } else {
        // السحب يساراً -> الانتقال للقسم السابق
        goToSection(currentIndex - 1);
      }
    }
  });
}

// تشغيل المنيو فوراً عند الفتح
initMenu();
