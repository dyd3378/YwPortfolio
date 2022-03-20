'use strict';


// navbar 스크롤이 올라가면 투명 내려가면 bg 변경
//getBoundingClientRect() element 높이 또는 넓이 값 받아옮 
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {

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

const navbarMenu = document.querySelector('.navbar__menu');

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
    scrollIntoView(link);
});

//Contact 클릭시 Contact로 스크롤 이동
const contact = document.querySelector('.home__contact');
contact.addEventListener('click',() =>{
    
    scrollIntoView("#contact");
});


// 스크롤 이동시 홈화면 투명 
const homeContainer = document.querySelector('.home__container');
const homeHeight =homeContainer.getBoundingClientRect().height;

document.addEventListener('scroll', () =>{
    //console.log(1 - window.scrollY/homeScollY);

    homeContainer.style.opacity = 1 - window.scrollY/homeHeight;

});

//스크롤 업 버튼 
const arrowUp = document.querySelector('.arrow-up');

document.addEventListener('scroll', ()=> {
    if(window.scrollY > homeHeight /2){
        //arrowUp.style.display ='block';
        arrowUp.classList.add('visible');
    }else {
        //arrowUp.style.display ='none';
        arrowUp.classList.remove('visible');
    }
});
arrowUp.addEventListener('click', () => {
    console.log( "scroll");
    scrollIntoView("#home");
    

});

//스크롤 함수 
function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}