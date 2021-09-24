var btn1 = document.getElementById("bt1");
var btn2 = document.getElementById("bt2");
var btn3 = document.getElementById("bt3");
var btn4 = document.getElementById("bt4");
var btn5 = document.getElementById("bt5");
const text = document.getElementById("text");

if(btn1){
    btn1.onclick = function() {changetext1()};
}

if(btn2){
    btn2.onclick = function() {changetext2()};
}

if(btn3){
    btn3.onclick = function() {changetext3()};
}

if(btn4){
    btn4.onclick = function() {changetext4()};
}

if(btn5){
    btn5.onclick = function() {changetext5()};
}



function changetext1(){
    text.innerHTML= "Revisa tu conexión y asegurate de que tu dispositivo se encuentre actualizado. Si es problema persiste contactanos."
}

function changetext2(){
    text.innerHTML= "Esta pagina maneja su sitema de cuentas con google. Te recomendamos contactarte con ellos si tienes problemas con tu correo."
}

function changetext3(){
    text.innerHTML= "Nuestro sistema de cuentas se encuentra conectado a google. Dirigirte a su sition web si tienes problemas para crear una."
}

function changetext4(){
    text.innerHTML= "Puedes comunicarnos cualquier error en la sección de contacto."
}

function changetext5(){
    text.innerHTML= "Aún no contamos con esa opción pero se encuentra en dessarollo."
}