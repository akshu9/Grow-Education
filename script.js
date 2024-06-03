burger=document.querySelector('.burger');
navbar=document.querySelector('.navbar');
rightNav=document.querySelector('.rightNav');
navList=document.querySelector('.nav-list');

burger.addEventListener('click',()=>{
    navList.classList.toggle('v-class')
    rightNav.classList.toggle('v-class')
    navbar.classList.toggle('h-nav');

})

let subscribeButton = document.querySelector('.buttons .btn');

subscribeButton.addEventListener('click', () => { 
    subscribeButton.innerHTML = 'Subscribed';
});