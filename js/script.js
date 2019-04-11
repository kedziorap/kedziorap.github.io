$(function(){
    $('#hamburger').click(function(){
        $('.menu').toggleClass('menu--active');
        $('#hamburger').toggleClass('is-active');
    });
})