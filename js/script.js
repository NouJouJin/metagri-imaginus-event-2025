document.addEventListener('DOMContentLoaded', function() {

    // --- カウントダウンタイマー機能 ---
    const countdownElement = document.getElementById('countdown');
    const eventDate = new Date('2025-09-13T13:00:00+09:00').getTime(); // 日本時間

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance < 0) {
            countdownElement.innerHTML = "イベント開催中！";
            clearInterval(countdownInterval);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `開催まであと ${days}日 ${hours}時間 ${minutes}分 ${seconds}秒`;
    };

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // 初期表示


    // --- スクロール時のフェードインアニメーション機能 ---
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // 一度表示したら監視を停止
            }
        });
    }, {
        threshold: 0.2 // 20%表示されたら実行
    });

    fadeInElements.forEach(el => {
        observer.observe(el);
    });

});
// ===== ▼▼▼ 追加するJavaScript (ミニゲームタブ機能) ▼▼▼ =====

document.addEventListener('DOMContentLoaded', function() {
    const gameTabs = document.querySelectorAll('.game-tab');
    const gameContents = document.querySelectorAll('.game-content');

    gameTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // すべてのタブからactiveクラスを削除
            gameTabs.forEach(t => t.classList.remove('active'));
            // クリックされたタブにactiveクラスを追加
            tab.classList.add('active');

            const targetGame = tab.dataset.gametab;

            // すべてのゲームコンテンツを非表示
            gameContents.forEach(content => {
                content.classList.remove('active');
            });
            // 対応するゲームコンテンツを表示
            document.getElementById(targetGame).classList.add('active');
        });
    });
});
