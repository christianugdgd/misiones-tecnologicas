if('serviceWorker' in navigator){
navigator.serviceWorker.register('sw.js');
}

let progreso=parseInt(localStorage.getItem("prog")||0);
let total=parseInt(localStorage.getItem("total")||0);

actualizar();

function mostrar(id){
document.getElementById("estudiante").style.display="none";
document.getElementById("profesor").style.display="none";
document.getElementById(id).style.display="block";
}

function completar(){
progreso+=20;
total+=1;
localStorage.setItem("prog",progreso);
localStorage.setItem("total",total);
actualizar();
alert("Misión completada 🎉");
}

function actualizar(){
document.getElementById("barra").style.width=progreso+"%";
document.getElementById("stats").innerText=total;
}

function modoMayor(){
document.body.classList.toggle("big");
}

function tutor(){
let p=document.getElementById("pregunta").value.toLowerCase();
let r="No entendí, intenta otra pregunta.";

if(p.includes("llamada")) r="Abre Teléfono y presiona llamar.";
if(p.includes("whatsapp")) r="Abre WhatsApp y elige un contacto.";
if(p.includes("audio")) r="Mantén presionado el micrófono.";

document.getElementById("respuesta").innerText=r;
}
