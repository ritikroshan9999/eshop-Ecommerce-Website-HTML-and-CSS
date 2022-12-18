//Header Scroll Color Change

let header=document.querySelector('header');

window.addEventListener('scroll',() =>{
    header.classList.toggle('shadow', window.scrollY > 0);
});

//menu 
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
//Remove menu on scroll
window.onscroll=()=>{
    navbar.classList.remove('bx-x');
    navbar.classList.remove('active');

}