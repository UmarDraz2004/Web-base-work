const menuBtn = document.getElementById('menu-bar');
const crossBtn = document.getElementById('cross-bar');
const sideBar = document.getElementById('slide-nav-bar');

menuBtn.addEventListener('click', () => {
    sideBar.style.display = 'block';
    sideBar.style.animation = 'left-to-right 1s ease-in-out';
});

crossBtn.addEventListener('click', () => {
    sideBar.style.animation = 'right-to-left 1s ease-in-out';
    setTimeout(() => {
        sideBar.style.display = 'none';
    }, 900);
});