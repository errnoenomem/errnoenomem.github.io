function openOverlay(stateID) { //stateID is st_1 - 50
    document.getElementById("myNav").className = "navbar navbar-inverse navbar-fixed-top";
    document.getElementById("close_btn").style = "visibility: hidden;";
    $('#map-tip-us').hide();
    document.getElementById("state_id").innerHTML = getState(stateID);
    document.getElementById("state_img").src = "./res/state_img/" + getStateImg(stateID);
    //    document.getElementById("img").src = "./res/state_img/" + getOptImg(stateID); //uncomment this for the optional image
    document.getElementById("p_brief").innerHTML = getStateBrief(stateID);

    document.getElementById("p_briefCn").innerHTML = getStateBriefCn(stateID);

    document.getElementById('my_overlay').style.width = "100%"; /* this line opens the overlay */
}

function closeOverlay() {
    document.getElementById("myNav").className = "navbar navbar-inverse";
    document.getElementById("close_btn").style = "visibility: visible;";
    document.getElementById('my_overlay').style.width = "0%"; /* this line closes the overlay */
}