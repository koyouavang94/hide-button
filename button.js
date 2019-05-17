
function disappear() {
    var popUp = document.getElementById('popUp');
    var heading1=document.createElement('h1');
    heading1.innerHTML='The doctor has requested for your presence';
    popUp.appendChild(heading1);
    if(popUp.style.display == 'none') {
        popUp.style.display = 'block';
    }
    else if(popUp.style.display == 'block') {
        popUp.style.display = 'none';
    }
    document.getElementById('hide').style.visibility='hidden';
}



