'use strict';


// navbar 스크롤이 올라가면 투명 내려가면 bg 변경
//getBoundingClientRect() element 높이 또는 넓이 값 받아옮 
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {

    const scrollValue = document.documentElement.scrollTop;

    //navbar = document.getElementById("navbar");
    if(window.scrollY > navbarHeight   ){
        // navbar.style.backgroundColor = 'var(--color-purple)';
        navbar.classList.add('navbar--dark');
    }else{
        // navbar.style.backgroundColor = 'transparent';
        navbar.classList.remove('navbar--dark');
    }
});