// loader
// fuente: https://www.youtube.com/watch?v=nq0vAO6SDlI
// window.onload = function(){
//     $('body').removeClass('hidden');
//     $('#navBar').removeClass('hidden');
// }

// var loader;
// function loadNow(opacity){
//     if(opacity <=0){
//         displayContent();
//     }
//     else{
//         loader.style.opacity = opacity;
//         window.setTimeout(function(){
//             loadNow(opacity - 0.03)
//         },100);
//     }
// }

// function displayContent(){
//     loader.style.display = 'none';
//     Document.getElementById('content').style.display = 'block';
// }

// document.addEventListener("DOMContentLoaded", function(){
//     loader = document.getElementById('loader');
//     loadNow(1);
// })

// SCROLL down: no navbar
// SCROLL up: si navbar
// fuente: https://www.youtube.com/watch?v=OqSRBkEZJow&t=246s
let theEnd =0,
    navbar = document.getElementById('navBar');

window.addEventListener('scroll', function(){
    var scrollTop = window.pageXOffset || document.
    documentElement.scrollTop;
    if(scrollTop > theEnd){
        navbar.style.top = '-70px';
    }       
    else{
        navbar.style.top = '0'
    }
    theEnd = scrollTop;
})