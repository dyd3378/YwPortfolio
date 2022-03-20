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

//Handle scrolling when tapping  on the navbar menu
//   메뉴 클릭시 해당 탭으로 스크롤링 

const about = document.querySelector('#about');
const navbarMenu = document.querySelector('.navbar__menu');
const aboutT = about.getBoundingClientRect().top;
console.log ("aboutH::: "+aboutT);

navbarMenu.addEventListener('click', (event) =>{
     

     const target = event.target;
     const link = target.dataset.link;
     if( link == null){
         return;
     }
    //  console.log("about Click"+event.target.dataset.link);
    //  if(link == "#about"){
    //      console.log ("about!!!!!!!!"+aboutT);
    //      window.scrollTo(0,aboutT);
    //  }
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth"});
});
