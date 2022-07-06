





var mark = document.querySelector('button')
mark.setAttribute('class','home');

function fem(){
    var make = mark.getAttribute('class')
    if (make==='home'){
    mark.setAttribute('class','away')}
    else{
        mark.setAttribute('class','home')
    }

    
}










var met = document.querySelector('#me');
var rame = document.querySelector('#fab')
rame.style.color = 'red';
                function funct(){
                 var val = met.getAttribute('type')
                if (val === 'password'){
                met.setAttribute('type','text');
                rame.style.color = 'black'
                }else if(val === 'text'){
                    met.setAttribute('type','password')
                   
                }
                };
            
var text = document.querySelector('#text');
var div = document.querySelector('#div');
function fun(){
    var me = text.value;
    split = me.split(' ');
    div.innerHTML= split.length
}