var btn1 = document.getElementById("bt1");
var btn2 = document.getElementById("bt2");
const btn3 = document.getElementById("bt3");
const btn4 = document.getElementById("bt4");
const btn5 = document.getElementById("bt5");
const text = document.getElementById("text");

if(btn1){
    btn1.onclick = function() {changetext1()};
}

if(btn2){
    btn2.onclick = function() {changetext2()};
}

function changetext1(){
    text.innerHTML= "Alberto"
}

function changetext2(){
    text.innerHTML= "Tu identidad no puede ser robada, ya que no se presenta un servicio interno para crear cuentas, ni tampoco se pueden crear varias cuentas con el mismo correo. Si presenta algún problema pongase en contacto con nosotros en @ o @. Otra posibilidad existente es que su cuenta de Google haya sido hackeada, en tal caso, ya debe ponerse en contacto con Google"
}