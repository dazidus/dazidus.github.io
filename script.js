// script.js

function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour12: false });
    const milliseconds = now.getMilliseconds().toString().padStart(3, '0'); // Ensures 3 digits
    document.getElementById('time').textContent = `${timeString}:${milliseconds}`;
}

function updateResolution() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById('resolution').textContent = `Resolution: ${width}x${height}`;
}

// Fullscreen toggle functionality
const fullscreenBtn = document.getElementById('fullscreen-btn');
fullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable fullscreen mode: ${err.message}`);
        });
    } else {
        document.exitFullscreen().catch(err => {
            console.error(`Error attempting to exit fullscreen mode: ${err.message}`);
        });
    }
});

// Update time and resolution periodically
setInterval(updateTime, 10); // Update every 10ms for milliseconds accuracy
window.addEventListener('resize', updateResolution);

// Initialize on load
updateTime();
updateResolution();
