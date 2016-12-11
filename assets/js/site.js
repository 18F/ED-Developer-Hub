(function( $ ) {
  $( '.js-recruit-submit' ).on( 'click', function( event ) {
    var $form = $( this ).closest( '.recruit-form' );
    event.preventDefault();

    var recruitName = $form.find( '.js-recruit-name' ).val() || '';
    var recruitEmail = $form.find( '.js-recruit-email' ).val() || '';
    var discipline = $form.find( '.js-recruit-discipline' ).val() || '';
    var url = 'mailto:tech@cfpb.gov?subject=' +
              'Interested in working in tech at CFPB&body=' +
              'Full name: ' +
              recruitName +
              '%0D%0A%0D%0AEmail: ' +
              recruitEmail +
              '%0D%0A%0D%0ADiscipline: ' +
              discipline +
              '%0D%0A%0D%0ANote: Attaching your resume can help us identify ' +
              'openings you may be interested in.';

    window.location.href = url;
  } );

})( jQuery );

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $("#colorChange").addClass("scrolled");
        } else {
            $("#colorChange").removeClass("scrolled");
        }
    });
});

function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);
        });
}

function animationClick(element, animation){
    element = $(element);
    element.click(
        function() {
            element.addClass('animated ' + animation);
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);

        });
}
