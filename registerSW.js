if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/wannapo-content-game/sw.js', { scope: '/wannapo-content-game/' })})}