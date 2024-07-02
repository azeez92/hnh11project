document.addEventListener('DOMContentLoaded', (event) => {
    function updateDateTime() {
        const currentTimeUTC = document.getElementById('currentTimeUTC');
        const currentDay = document.getElementById('currentDay');
        const now = new Date();

        currentTimeUTC.textContent = now.toUTCString();
        currentDay.textContent = now.toLocaleDateString('en-US', { weekday: 'long' });
    }

    updateDateTime();
    setInterval(updateDateTime, 60000);
});
