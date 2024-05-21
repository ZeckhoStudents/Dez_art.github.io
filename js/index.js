let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navlist.classList.remove('open');
}


let menu = document.querySelector('.hamburger');
let navbar = document.querySelector('.hamlist');

menu.onclick = () => {
  menu.classList.toggle('ri-menu-3-line');
  if(navbar.style.visiblity === 'visible') {
    navbar.style.visiblity = 'hidden';
  }else{
    navbar.style.visiblity = 'visible'
  }
}
