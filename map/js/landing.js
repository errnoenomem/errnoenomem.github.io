$(document).ready(function(){
    // invoke the carousel
    $('#myCarousel').carousel({
        interval: 3000,
        pause: "false"
    });

    // scroll slides on mouse scroll 
    $('#myCarousel').bind('mousewheel DOMMouseScroll', function(e){

        if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            $(this).carousel('prev');

        }
        else{
            $(this).carousel('next');

        }
    });

    //scroll slides on swipe for touch enabled devices 

    $("#myCarousel").on("touchstart", function(event){

        var yClick = event.originalEvent.touches[0].pageY;
        $(this).one("touchmove", function(event){

            var yMove = event.originalEvent.touches[0].pageY;
            if( Math.floor(yClick - yMove) > 1 ){
                $(".carousel").carousel('next');
            }
            else if( Math.floor(yClick - yMove) < -1 ){
                $(".carousel").carousel('prev');
            }
        });
        $(".carousel").on("touchend", function(){
            $(this).off("touchmove");
        });
    });

    document.getElementById('submit-btn').addEventListener('click', function() {

        if ( $('#input-email').val().indexOf('@') > -1) {
            $('#label-email').css('color', 'white');
        }
        if ( ($('#input-number').val().length >= 10) ) {
            $('#label-number').css('color', 'white');
        }

        if ( ($('#input-email').val().indexOf('@') > -1) && $('#input-number').val().length >= 10 ) {
            $('#label-email').css('color', 'white');
            $('#label-number').css('color', 'white');
            $.ajax({
                type: 'POST',
                url: 'php/filewriter.php',
                data: $('#registryform').serialize(),
                success: function (data) {
                    closeOverlay();
                    $('#registryform')[0].reset();
                }
            });
        } else if ( !($('#input-email').val().indexOf('@') > -1) && !($('#input-number').val().length >= 10) ) {
            $('#label-email').css('color', 'red');
            $('#label-number').css('color', 'red');
        } else if ( !($('#input-email').val().indexOf('@') > -1) && ($('#input-number').val().length >= 10) ) {
            $('#label-email').css('color', 'red');
        } else {
            $('#label-number').css('color', 'red');
        }
    });
});

function openOverlay() {
    document.getElementById('lmy_overlay').style.width = "100%";
}

function closeOverlay() {
    document.getElementById('lmy_overlay').style.width = "0%";
}