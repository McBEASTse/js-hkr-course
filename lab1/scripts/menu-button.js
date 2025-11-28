const btn = document.getElementById("menu-button");
const menu = document.querySelector('nav');

btn.addEventListener('click', toggle);

function toggle() {
    menu.classList.toggle('active');
    btn.classList.toggle('active');
}