﻿$(document).ready(function(){
  $('a').click(function() {
    if (this.classList.contains('not-smooth-scroll')) {
      return;
    } else{
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target
        || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
          var targetOffset = $target.offset().top - 10;
          $('html,body')
            .animate({scrollTop: targetOffset}, 1000);
          return false;
        }
      }
    }
  });
});