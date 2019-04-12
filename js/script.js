$(function(){
    $('#hamburger').click(toggleMenu);
    $('.menu a').click(toggleMenu);
    function toggleMenu() {
            $('.menu').toggleClass('menu--active');
            $('#hamburger').toggleClass('is-active');
    }

})