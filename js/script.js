$(function(){
    $('#hamburger').click(toggleMenu);
    $('.menu a').click(toggleMenu);
    function toggleMenu() {
            $('.menu').toggleClass('menu--active');
            $('#hamburger').toggleClass('is-active');
    }
    var project = $('.portfolio__project');
    project.click(function(){
        var node = $(this).find('.to-modal').html();
        createModal(node);
    })
    function removeModal() {
        $('.modal').remove();
    }
    function createModal(html) {
        var modal = '<div class="modal"><div class="modal__container"><div class="modal__inside"><span class="modal__close">X</span>' + html + '</div></div></div>';
        $('.wrapper').append(modal);
        $('.modal__close').click(function(){
            $('.modal').remove();
        })
    }
})