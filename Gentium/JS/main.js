var sideMenu = document.getElementById('sideMenu');
var x = document.getElementById('xBtn');

function openMenu() {
    sideMenu.style.width = '100%';
    x.style.display = 'block';
}

function closeMneu() {
    sideMenu.style.width= '0';
    x.style.display = 'none';
}


$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 100) {
            $('#Header').addClass('active');
        }
        else{
            $('#Header').removeClass('active');
        }
    });
});


