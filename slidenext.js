document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');

    const polygon = document.querySelector('.polygon');
    const nextPageLink = document.getElementById('nextPage');
    const  mainContent =document.querySelector('.main-content');

    if (polygon && nextPageLink && mainContent) {
        nextPageLink.addEventListener('click', (e) => {
            e.preventDefault();

            //hide the main content immediately
            mainContent.style.opacity = '0';
            mainContent.style.transition = 'opacity 1s easy-out';
            // Fade out and slide the polygon to the right
            polygon.style.opacity = '0';
            polygon.style.transform = 'translateX(100%)';
            
            setTimeout(() => {
                document.body.classList.remove('fade-in');
                setTimeout(() => {
                    window.location.href = e.target.href;
                }, 250);
            }, 500);
        });
    }
});
