$(function() {
    $('#newYorkCityBoroughs-map').LGMap({
        map: 'newYorkCityBoroughs',
    });
});


function openOverlay(boroughNum) {   
        
//    displayRes();
    document.getElementById("myNav").className = "navbar navbar-inverse navbar-fixed-top";
    document.getElementById('borough_id').innerHTML = getBorough(boroughNum);
    document.getElementById("back_btn").style = "visibility: hidden;";
    document.getElementById("borough_img").src = "./res/borough_img/" + getBoroughImg(boroughNum);
    document.getElementById('en_text').innerHTML = getBoroughBrief(boroughNum);
    document.getElementById('cn_text').innerHTML = getBoroughBriefCN(boroughNum);
    document.getElementById('my_overlay').style.width = "100%"; 
}

function closeOverlay() {
    document.getElementById("myNav").className = "navbar navbar-inverse";
    document.getElementById("back_btn").style = "visibility: visible;";
    document.getElementById('my_overlay').style.width = "0%"; 
}

function displayRes() {
    alert("width:" + screen.width + "   height:" + screen.height );
}