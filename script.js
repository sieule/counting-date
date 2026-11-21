/* =========================================================
 * counting-date - i18n (vi/en/ja)
 * Từ điển mặc định được nhúng trực tiếp (không cần lang.json)
 * ========================================================= */

const LOCALES = { vi: 'vi-VN', en: 'en-US', ja: 'ja-JP' };

/* ---------- TỪ ĐIỂN MẶC ĐỊNH (thay cho lang.json) ---------- */
const DEFAULT_TRANSLATIONS = {
  vi: {
    page_title: "Đếm ngày",
    button_home: "Về trang chủ",
    heading: "Đếm Ngày",
    lang_label: "Ngôn ngữ",
    label_startDate: "Ngày bắt đầu:",
    label_endDate: "Ngày kết thúc:",
    label_daysCount: "Số ngày:",
    button_reset: "Đặt lại",
    button_calculate: "Tính",
    placeholder_result: "Kết quả sẽ hiển thị ở đây",
    result_days: "Số ngày: {n}",
    result_endDate: "Ngày kết thúc: {date}",
    result_startDate: "Ngày bắt đầu: {date}",
    error_incomplete: "Vui lòng nhập đầy đủ thông tin."
  },
  en: {
    page_title: "Date Counter",
    button_home: "Back to Home",
    heading: "Date Counter",
    lang_label: "Language",
    label_startDate: "Start date:",
    label_endDate: "End date:",
    label_daysCount: "Number of days:",
    button_reset: "Reset",
    button_calculate: "Calculate",
    placeholder_result: "Result will appear here",
    result_days: "Days: {n}",
    result_endDate: "End date: {date}",
    result_startDate: "Start date: {date}",
    error_incomplete: "Please fill in the required fields."
  },
  ja: {
    page_title: "日数計算",
    button_home: "ホームに戻る",
    heading: "日数計算",
    lang_label: "言語",
    label_startDate: "開始日:",
    label_endDate: "終了日:",
    label_daysCount: "日数:",
    button_reset: "リセット",
    button_calculate: "計算",
    placeholder_result: "結果がここに表示されます",
    result_days: "日数: {n}",
    result_endDate: "終了日: {date}",
    result_startDate: "開始日: {date}",
    error_incomplete: "必要な項目を入力してください。"
  }
};

/* ---------- STATE ---------- */
let translations = {};
let currentLang = localStorage.getItem('lang') || 'vi';

/* Lấy chuỗi theo key + thay tham số {n}, {date}... */
function t(key, params = {}) {
    if (!translations[currentLang]) return key;
    let str = translations[currentLang][key];
    if (str == null) return key;
    return str.replace(/\{(\w+)\}/g, (_, k) => (params[k] != null ? params[k] : `{${k}}`));
}

/* Nạp từ điển mặc định (thay cho fetch lang.json) */
function loadLang() {
    translations = JSON.parse(JSON.stringify(DEFAULT_TRANSLATIONS));
    if (!translations[currentLang]) currentLang = 'vi';
}

/* Định dạng ngày theo locale hiện tại */
function formatDate(dateObj) {
    const loc = LOCALES[currentLang] || 'vi-VN';
    return dateObj.toLocaleDateString(loc);
}

/* Áp dụng ngôn ngữ cho UI */
function applyLanguage(lang) {
    if (!translations[lang]) lang = 'vi';
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    document.title = t('page_title');

    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
    });

    const sel = document.getElementById('langSelect');
    if (sel) sel.value = lang;
}

/* ====================== LOGIC TÍNH TOÁN ====================== */

function calculateDays() {
    const startDateInput = document.getElementById('startDate').value;
    const endDateInput   = document.getElementById('endDate').value;
    const daysCountInput = document.getElementById('daysCount').value;
    const resultInput    = document.getElementById('result');

    let startDate, endDate, daysCount;

    if (startDateInput && endDateInput) {
        startDate = new Date(startDateInput);
        endDate   = new Date(endDateInput);
        daysCount = (endDate - startDate) / (1000 * 60 * 60 * 24);
        resultInput.value = t('result_days', { n: daysCount });

    } else if (startDateInput && daysCountInput) {
        startDate = new Date(startDateInput);
        daysCount = parseInt(daysCountInput, 10);
        endDate   = new Date(startDate);
        endDate.setDate(startDate.getDate() + daysCount);
        resultInput.value = t('result_endDate', { date: formatDate(endDate) });

    } else if (endDateInput && daysCountInput) {
        endDate   = new Date(endDateInput);
        daysCount = parseInt(daysCountInput, 10);
        startDate = new Date(endDate);
        startDate.setDate(endDate.getDate() - daysCount);
        resultInput.value = t('result_startDate', { date: formatDate(startDate) });

    } else {
        resultInput.value = t('error_incomplete');
    }
}

function resetField(fieldId) {
    document.getElementById(fieldId).value = '';
}

/* ====================== KHỞI TẠO ====================== */
function init() {
    loadLang(); // đồng bộ, không cần await

    document.getElementById('calcButton').addEventListener('click', calculateDays);
    document.querySelectorAll('[data-reset]').forEach(btn => {
        btn.addEventListener('click', () => resetField(btn.dataset.reset));
    });
    document.getElementById('langSelect')
        .addEventListener('change', e => applyLanguage(e.target.value));

    applyLanguage(currentLang);
}

init();