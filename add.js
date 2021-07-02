const navbar = document.querySelector('#main-nav');
window.onscroll = () => {
    if (window.scrollY > 2) {
        navbar.classList.add('nav-colored');
        navbar.classList.remove('bg-transparent');
    } else {
        navbar.classList.remove('nav-colored');
        navbar.classList.add('bg-transparent');
    }
}


