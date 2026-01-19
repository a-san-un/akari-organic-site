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

// ドキュメント全体にイベントリスナーを1つだけ設定
// document.addEventListener('click', e => {
//     // クリックされた要素のクラス名をチェック
//     if (e.target.className === 'l-header__navBtn') {
//         // 開くボタンがクリックされた場合
//         document.body.classList.add('is-open');
//     } else if (e.target.className === 'l-header__navClose') {
//         // 閉じるボタンがクリックされた場合
//         document.body.classList.remove('is-open');
//     }
// });
