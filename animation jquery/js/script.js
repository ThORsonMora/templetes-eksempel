let currentIndex = 0;
const images = $('.rotating-images img');
const totalImages = images.length;

function rotateImages() {
    const currentImage = images.eq(currentIndex);
    const nextIndex = (currentIndex + 1) % totalImages;
    const nextImage = images.eq(nextIndex);
    
    currentImage.animate({
        opacity: 0,
        rotateY: '-90deg',
        translateY: '0%'
    }, {
        duration: 1000,
        step: function(now, fx) {
            if(fx.prop === "rotateY") {
                $(this).css('transform', `translateY(0%) rotateY(${now}deg)`);
            }
        }
    });

    nextImage.animate({
        opacity: 1,
        rotateY: '0deg',
        translateY: '0%'
    }, {
        duration: 1000,
        step: function(now, fx) {
            if(fx.prop === "rotateY") {
                $(this).css('transform', `translateY(0%) rotateY(${now}deg)`);
            }
        }
    });

    currentIndex = nextIndex;
}

// Spustit rotaci každé 3 sekundy
setInterval(rotateImages, 3000);

// Počáteční animace pro první obrázek
$('.rotating-images img.active').css({
    transform: 'translateY(100%) rotateY(0deg)',
    opacity: 0
}).animate({
    translateY: '0%',
    opacity: 1
}, {
    duration: 1000,
    step: function(now, fx) {
        if(fx.prop === "translateY") {
            $(this).css('transform', `translateY(${now}%) rotateY(0deg)`);
        }
    }
});