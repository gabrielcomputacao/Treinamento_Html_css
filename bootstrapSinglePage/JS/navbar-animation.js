/* usando jquery para pegar o elemento */

$('#collapse-navbar').on('show.bs.collapse',function(){
    $('.top-banner').css('transform','translate(-50%,10%');
});

$('#collapse-navbar').on('hide.bs.collapse',function(){
    $('.top-banner').css('transform','translate(-50%,-50%');
});
