let burguer = document.getElementById('burger');
let nav = document.getElementById('nav-menu');

const toggleMenu = () => {
    nav.classList.toggle('active');
}

burguer.addEventListener('click', toggleMenu)