$(document).ready(function(){

    $('.dropdown-menu li a').on('click', function(){    
        var key = $(this).get(0).id;
        
        $(".dropdown-toggle").text($(this).text())
        
        updateSheet(key);
    })

});

function updateSheet(key) {

    document.getElementById("state_id").innerHTML = getState(key);
    
    document.getElementById("state_img").src = "./res/state_img/" + getStateImg(key);
    
    //    document.getElementById("img").src = "./res/state_img/" + getOptImg(stateID); //uncomment this for the optional image
    document.getElementById("p_brief").innerHTML = getStateBrief(key);

    document.getElementById("p_briefCn").innerHTML = getStateBriefCn(key);

}