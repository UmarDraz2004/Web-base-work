// const textColor = document.querySelectorAll('.sticky-links');
// console.log(textColor);
// document.addEventListener('DOMContentLoaded', function () {
//     const navbar = document.getElementById('navbar-sticky');
//     window.addEventListener('scroll', function () {
//         if (window.scrollY > 50) {
//             navbar.classList.add('scrolled');
//             textColor.forEach(text => text.classList.add('sticky-links-color'));

//         } else {
//             navbar.classList.remove('scrolled');
//             textColor.forEach(text => text.classList.remove('sticky-links-color'));
//         }
//     });
// });
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar-sticky');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');

        } else {
            navbar.classList.remove('scrolled');
        }
    });
});