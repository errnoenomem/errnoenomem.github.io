$( document ).ready(function() {
 
    $('.img-wrapper').click(function() {
        var $image = $(this);
        
        openOverlay( $image.find('img').attr('src') );
        
    });
    
    $('#my_overlay').click(function() {
        closeOverlay();
    });
    
});
                            
function openOverlay(fileName) {
        document.getElementById('overlay-img').src=fileName;
        
        document.getElementById('my_overlay').style.width = "100%"; /* this line opens the overlay */
}

function closeOverlay()
{
    document.getElementById('my_overlay').style.width = "0%"; /* this line opens the overlay */
}