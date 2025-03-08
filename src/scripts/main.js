AOS.init();

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.nav-item');

    items.forEach(item => {
        item.addEventListener('click', () => {
            items.forEach(el => el.classList.remove('nav-item--is-active'));
            item.classList.add('nav-item--is-active');
        });
    });
});
