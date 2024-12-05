// script.js
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour12: false });
    const milliseconds = now.getMilliseconds();
    document.getElementById('time').textContent = `${timeString}:${milliseconds}`;
}

function updateResolution() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById('resolution').textContent = `Resolution: ${width}x${height}`;
}

// Update time and resolution periodically
setInterval(updateTime, 10); // Update every 10ms for milliseconds accuracy
window.addEventListener('resize', updateResolution);

// Initialize on load
updateTime();
updateResolution();
