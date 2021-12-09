if(window.outerWidth < window.outerHeight){
    document.getElementById('card').href = './css/card_big.css';
}
else if(window.outerWidth > window.outerHeight){
    document.getElementById('card').href = './css/card_small.css';
}
window.onresize = function(){
    if(window.outerWidth < window.outerHeight){
        document.getElementById('card').href = './css/card_big.css';
    }
    else if(window.outerWidth > window.outerHeight){
        document.getElementById('card').href = './css/card_small.css';
    }
}
