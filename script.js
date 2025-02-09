const header =document.querySelector('.header');

const resumebtn =document.querySelector('.resume-popup-btn button');
const resumeContainer = document.querySelector('.resume-popup-container');
const resumeOverlay = document.querySelector('.resume-overlay');
const resumeBtnClose = document.querySelector('.resume-content button')
const main =document.querySelector('main');

document.addEventListener('scroll', function(){
    if (window.scrollY > 0) {
        header.classList.add('scroll');
    }else{
        header.classList.remove('scroll');
    }
})

resumebtn.addEventListener('click', function(){
    resumeContainer.classList.add('active')
    
})

resumeOverlay.addEventListener('click', function(){
    resumeContainer.classList.remove('active')
})

resumeBtnClose.addEventListener('click', function(){
    resumeContainer.classList.remove('active')
})