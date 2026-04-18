let menu = document.querySelector('#menu_icon');

let navbar = document.querySelector('.navbar');

let header = document.querySelector('header');



menu.onclick = () => {
    menu.classList.toggle('fa-bars');
    navbar.classList.toggle('active');
};


window.onscroll = () => {
    menu.classList.remove('fa-bars');
    navbar.classList.remove('active');
}

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});


const sr = ScrollReveal ({
    distance: '60px',
    duration:2500,
    deley:400,
    reset: true,
})


sr.reveal('.home_text, .home_img, .about_title, .about_text, .heading, .box, input, textarea',{delay:200, origin:'top'})
