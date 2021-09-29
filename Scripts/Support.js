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
    text.innerHTML= "Revisa tu conexión a internet y asegurate de que tu dispositivo se encuentre actualizado, si esto no funciona, reinicia tu modem wi-fi. Si el problema persiste comunicate con tu operador, o proveedor de servicio de internet."
}

function changetext2(){
    text.innerHTML= "Esta pagina maneja su sistema de inicio de sesión directamente con Google, por lo que cualquier problema debe manejarse directamente con dicha compañía. Te recomendamos contactarte con ellos si tienes problemas con tu correo."
}

function changetext3(){
    text.innerHTML= "El único requisito para poder ingresar es tener una cuenta de Google, pues se utiliza esta como medio de reconocimiento del usuario. Si no has creado una aún, dirigete a la página de Gmail y crea una, luego de esto puedes iniciar sesión sin ningún problema en nuestra página con dicha cuenta"
}

function changetext4(){
    text.innerHTML= "Cualquier tipo de fallo, glitch o bug puede ser reportado comodamente en la sección de contacto en esta página, o puedes escribirnos sobre ello directamente al correo mencionado en la sección mencionada anteriormente."
}

function changetext5(){
    text.innerHTML= "Por el momento no se pueden reportar usuarios directamente desde un módulo, pero puedes hacernoslo saber a través de la sección de contacto y nos encargaremos de ello."
}