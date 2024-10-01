document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');

    const polygon = document.querySelector('.polygon');
    if (polygon) {
        setTimeout(() => {
            polygon.style.transform = 'translateX(0)';
            polygon.style.opacity = '1';
        }, 100);
    }

    const prevPageLink = document.getElementById('prevPage');
    if (prevPageLink) {
        prevPageLink.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Fade out and slide the polygon
            polygon.style.opacity = '0';
            polygon.style.transform = 'translateX(-100%)';
            
            setTimeout(() => {
                document.body.classList.remove('fade-in');
                setTimeout(() => {
                    window.location.href = e.target.href;
                }, 250);
            }, 500);
        });
    }
});
