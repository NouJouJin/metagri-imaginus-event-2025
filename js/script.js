document.addEventListener('DOMContentLoaded', function() {

    // ------------------------------------
    // --- カウントダウンタイマー機能 ---
    // ------------------------------------
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) { // 要素が存在する場合のみ実行
        const eventDate = new Date('2025-09-13T13:00:00+09:00').getTime();

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
        updateCountdown();
    }


    // --------------------------------------------
    // --- スクロール時のフェードインアニメーション機能 ---
    // --------------------------------------------
    const fadeInElements = document.querySelectorAll('.fade-in');
    if (fadeInElements.length > 0) { // 要素が存在する場合のみ実行
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });

        fadeInElements.forEach(el => {
            observer.observe(el);
        });
    }


    // ------------------------------------
    // --- ミニゲームタブ機能 ---
    // ------------------------------------
    const gameTabs = document.querySelectorAll('.game-tab');
    const gameContents = document.querySelectorAll('.game-content');

    if (gameTabs.length > 0) { // 要素が存在する場合のみ実行
        gameTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                gameTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                const targetGame = tab.dataset.gametab;

                gameContents.forEach(content => {
                    content.classList.remove('active');
                });
                document.getElementById(targetGame).classList.add('active');
            });
        });
    }

}); // ここでDOMContentLoadedのリスナーが閉じる
