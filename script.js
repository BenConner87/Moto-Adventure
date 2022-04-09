const next = document.getElementById('next');
const previous = document.getElementById('previous');
const images = document.querySelector('.medellin');

let current_img = 0;

next.addEventListener('click', () => {
    if (current_img < images.children.length - 1) {
        current_img++
        images.style.transitionDuration = '0.5s';
        images.style.transform = `translate(-${current_img * 70}vw)`;
        } else {
            return;
        }
});

previous.addEventListener('click', () => {
    if (current_img > 0) {
        current_img--
        images.style.transitionDuration = '0.5s';
        images.style.transform = `translate(-${current_img * 70}vw)`;
        } else {
            return;
        }
});


