$(function(){
    $('#hamburger').click(toggleMenu);
    $('.menu a').click(toggleMenu);
    function toggleMenu() {
            $('.menu').toggleClass('menu--active');
            $('#hamburger').toggleClass('is-active');
    }
    var btnProject = $('.details');
    btnProject.click(function(){
        var project = $(this).closest('.portfolio__project');
        var title = project.find('.portfolio__title').text();
        var links = project.find('.icon-anchor');
        var html = project.find('.to-modal').html();
        createModal(title,html, links);
    })
    function removeModal() {
        $('.modal').remove();
    }
    function createModal(title,html, links) {
        var anchors = '';
        for (var i = 0; i < links.length; i++) {
            if (links[i].attributes['data-name'].nodeValue === 'code') anchors+='<a href="'+ links[i].lastChild.attributes['href'].value  +'" target="_blank">Kod</a>';
            if (links[i].attributes['data-name'].nodeValue === 'live') anchors+='<a href="'+ links[i].lastChild.attributes['href'].value  +'" target="_blank">Live</a>';
        }
        var modal = '<div class="modal"><div class="modal__container"><div class="modal__inside"><span class="modal__close">X</span><h3>' + title + '</h3>' + html + anchors + '</div></div></div>';
        $('.wrapper').append(modal);
        $('.modal__close').click(removeModal);
    }
    $('a[href*="#"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
})