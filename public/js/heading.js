var za;

var headColor = document.getElementById('headColor')
var logoImg = document.getElementById('logoImg');
var reswhite = document.querySelectorAll('.reswhite')

function show(a) {
    if((document.documentElement.scrollTop > -10)) {
        logoImg.src = 'img/dark-logo.avif'
        headColor.style.backgroundColor = 'white';

        reswhite.forEach(function(element) {
            element.style.color = 'black';
          });
        
    }
    if(za == a){
        var k =document.getElementById(`mdrop${a}`);
        if(k.style.display == 'none'){
            k.style.display = 'block';
        }else{
            k.style.display = 'none'
        }
    }else{

        za = a;
        var k =document.getElementById(`mdrop${a}`);
            k.style.display = 'block';
        hide(a);
    }
}

function  hide(m) {

    for(i=1 ; i<= 5 ; i++){
        if(m!=i){
            var b = document.getElementById(`mdrop${i}`);
            b.style.display = 'none';
        }
    }
}


        var phoenixIsRTL = window.config.config.phoenixIsRTL;
        if (phoenixIsRTL) {
            var linkDefault = document.getElementById('style-default');
            var userLinkDefault = document.getElementById('user-style-default');
            linkDefault.setAttribute('disabled', true);
            userLinkDefault.setAttribute('disabled', true);
            document.querySelector('html').setAttribute('dir', 'rtl');
        } else {
            var linkRTL = document.getElementById('style-rtl');
            var userLinkRTL = document.getElementById('user-style-rtl');
            linkRTL.setAttribute('disabled', true);
            userLinkRTL.setAttribute('disabled', true);
        }