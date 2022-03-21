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

//my project 버튼 클릭 fillter
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click',(e) => {
    //카운트 클릭시  parentNode를 이용해 부모요소를 받아온다
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null){
        return;
    }

    // 셀렉션되어 있는 이전에 선택 버튼은 삭제하고 선택되어진 버튼으로 셀렉션
    const active = document.querySelector('.categories__btn.selected');
    active.classList.remove('selected');
    console.log(e.target.nodeName);
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  
    target.classList.add('selected');

    projectContainer.classList.add('anime-out');
    setTimeout(() => {

        projects.forEach((project) =>{
            // console.log(project.dataset.type);
             if(filter === '*' || filter === project.dataset.type){
                 project.classList.remove('invisible');
             }else {
                 project.classList.add('invisible');
             }
         });

        projectContainer.classList.remove('anime-out');
    }, 300);

});

//스크롤 함수 
function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}