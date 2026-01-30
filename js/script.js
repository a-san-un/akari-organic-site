// グローバルナビゲーション
// const globalNav = document.querySelector('.l-header__nav');
const globalNavBtn = document.querySelector('.l-header__navBtn');
const globalNavCloseBtn = document.querySelector('.l-header__navClose');


globalNavBtn.addEventListener('click', () => {
    document.body.classList.add('is-open');
});
globalNavCloseBtn.addEventListener('click', () => {
    document.body.classList.remove('is-open');
});

// FAQアコーディオン
const faqToggles = document.querySelectorAll('.js-faqToggle');

faqToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        // ボタン自体に.is-openをトグル
        toggle.classList.toggle('is-open');
        
        // 次の兄弟要素（回答部分）を取得
        const answer = toggle.parentElement.nextElementSibling;
        
        // 回答部分に.is-openをトグル
        if (answer && answer.classList.contains('js-faqBody')) {
            answer.classList.toggle('is-open');
        }
    });
});

// // FAQアコーディオン
// document.addEventListener('click', e => {
//     if (e.target.closest('.js-faqToggle')) {
//         const toggle = e.target.closest('.js-faqToggle');
//         toggle.classList.toggle('is-open');
        
//         const answer = toggle.parentElement.nextElementSibling;
//         answer.classList.toggle('is-open');
//     }
// });

