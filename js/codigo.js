window.onload = function(){
    // $('#onload').fadeOut();
    // $('#nav').addClass('fixed');
    $('body').removeClass('hidden');
    $('#navBar').removeClass('hidden');

}

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

var loader;
function loadNow(opacity){
    if(opacity <=0){
        displayContent();
    }
    else{
        loader.style.opacity = opacity;
        window.setTimeout(function(){
            loadNow(opacity - 0.05)
        },100);
    }
}

function displayContent(){
    loader.style.display = 'none';
    Document.getElementById('content').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function(){
    loader = document.getElementById('loader');
    loadNow(1);
})