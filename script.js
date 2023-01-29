const menuIcon = document.querySelector('.fa-bars')
const navBar = document.querySelector('.aside-nav-bar')

function menuIconActionHandaler () {
    menuIcon.classList.toggle('fa-bars-open')
    navBar.classList.toggle('nav-btn')
}

console.log('maruf')

menuIcon.addEventListener('click',menuIconActionHandaler)