'use strict'

const menuBar=document.querySelector('.menu-bar');
const mobileMenu=document.querySelector('.hidden-mobile-menu');
const closeBtn=document.querySelector('.close-btn');

let x=window.matchMedia("min-width:769px");
if(!x.matches){
  menuBar.addEventListener('click',function(){
    menuBar.classList.add('hidden');
mobileMenu.classList.remove('hidden');
closeBtn.classList.remove('hidden');
});

closeBtn.addEventListener('click',function(){
  mobileMenu.classList.add('hidden');
  menuBar.classList.remove('hidden');
  closeBtn.classList.add('hidden');
});
}
