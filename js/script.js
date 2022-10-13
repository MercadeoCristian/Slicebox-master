


$(document).ready(function() {
    $('.float-absol').hide();

    $('.mostrar').on('click', function() {
        $('.float-absol').slideToggle(500);
        $('.mostrar').addClass('no-ver');
        $('.ocultar').addClass('ocultar-no');
        $('#Whatsapp').addClass('Whatsapp-on');
        $('#Whatsapp').removeClass('Whatsapp-off');
    });

    $('.ocultar').on('click', function() {
        $('.float-absol').slideToggle(500);
        $('.mostrar').removeClass('no-ver');
        $('.ocultar').removeClass('ocultar-no');
        $('#Whatsapp').removeClass('Whatsapp-on');
        $('#Whatsapp').addClass('Whatsapp-off');
    });
});