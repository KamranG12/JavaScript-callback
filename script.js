var circle=document.getElementById('circle');
var img=document.getElementById('img');

circle.addEventListener('click', function() {
    border(image);
});

function border(callback){
    circle.style.borderColor='black';
    circle.style.borderStyle='solid';
    callback(250,250);
};

function image(w,h){
    setTimeout(function(){
    img.style.width=w+'px';
    img.style.height=h+'px';
    circle.style.borderStyle='none';
},2000)
}