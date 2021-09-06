var glow = $('.pulse');
setInterval(function(){
    glow.hasClass('glow') ? glow.removeClass('glow') : glow.addClass('glow');
}, 100);