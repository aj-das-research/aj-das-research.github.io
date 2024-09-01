document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple slider functionality
const slider = (selector) => {
    const sliderContainer = document.querySelector(selector);
    let isDown = false;
    let startX;
    let scrollLeft;

    sliderContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        sliderContainer.classList.add('active');
        startX = e.pageX - sliderContainer.offsetLeft;
        scrollLeft = sliderContainer.scrollLeft;
    });

    sliderContainer.addEventListener('mouseleave', () => {
        isDown = false;
        sliderContainer.classList.remove('active');
    });

    sliderContainer.addEventListener('mouseup', () => {
        isDown = false;
        sliderContainer.classList.remove('active');
    });

    sliderContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - sliderContainer.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        sliderContainer.scrollLeft = scrollLeft - walk;
    });
};

slider('.collaborator-slider');
slider('.mentor-slider');
