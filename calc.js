var ispis = document.getElementById('ispis');

function pushBtn(object) {
    var pushed = object.innerHTML;

    if(pushed == '=') {
        ispis.innerHTML = eval(ispis.innerHTML);
    }  
    else if(pushed == 'AC') {
        ispis.innerHTML = '';
    }  
    else {
        if(ispis.innerHTML == '') {
            ispis.innerHTML = pushed;
        }
            else {
                ispis.innerHTML += pushed;

            }
    }
}
