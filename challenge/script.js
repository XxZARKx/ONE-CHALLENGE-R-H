const mensaje = document.getElementById('message');
const encriptar = document.getElementById('encrypt');
const desencriptar = document.getElementById('decrypt');
const panel = document.getElementById("info");
const mensajeEncriptado = document.getElementById('encryptedMessage');
const botonCopiar = document.getElementById('botonCopiar');
const reset = document.getElementById('reset')
const resetSecond = document.getElementById('resetSecond')

/* encriptar */

let mensajeInicial;

function guardarMensaje(){
  mensajeInicial = mensaje.value;
}

function borrarMensaje() {
  mensaje.value = "";
}

function colocarMensajeEncriptado(){
  let mensajeModificado = "";
  for(let i = 0; i < mensajeInicial.length; i++){
    let letras = ""
    letras = mensajeInicial.charAt(i);
    if(letras === "a"){
      letras = "ai"
    }
    if(letras === "e"){
      letras = "enter"
    }
    if(letras === "i"){
      letras = "imes"
    }
    if(letras === "o"){
      letras = "ober"
    }
    if(letras === "u"){
      letras = "ufat"
    }
    if(letras === " "){
      letras = " "
    }
    mensajeModificado = mensajeModificado + letras
  }

  mensajeEncriptado.textContent = mensajeModificado
  botonCopiar.classList.remove('hidden')
  if(mensajeEncriptado.textContent !== ""){
    panel.style.display = "none"
  }else{
    panel.style.display = "block"
  }
}

encriptar.onclick = function(){
  guardarMensaje()
  if(mensajeEncriptado.textContent === ""){
    borrarMensaje()
    colocarMensajeEncriptado()
  }else{
    alert("Tienes un mensaje escrito, si quieres escribir mas resetea el contenido")
  }
}


/* desencriptar mensaje */

let mensajeCodificado;

function guardarNuevoMensajeEncriptado(){
    mensajeCodificado = mensaje.value
}

function colocarMensajeDesencriptado(){
  let mensajeDesencriptado = mensajeCodificado;
  
  mensajeDesencriptado = mensajeDesencriptado.replace(/ai/g, "a");
  mensajeDesencriptado = mensajeDesencriptado.replace(/enter/g, "e");
  mensajeDesencriptado = mensajeDesencriptado.replace(/imes/g, "i");
  mensajeDesencriptado = mensajeDesencriptado.replace(/ober/g, "o");
  mensajeDesencriptado = mensajeDesencriptado.replace(/ufat/g, "u");
  mensajeEncriptado.textContent = mensajeDesencriptado;
  botonCopiar.classList.remove('hidden')
  if(mensajeEncriptado.textContent != ""){
    panel.style.display = "none";
  }else{
    panel.style.display = "block";
  }
}

desencriptar.onclick = function(){
        guardarNuevoMensajeEncriptado();
        colocarMensajeDesencriptado();
        borrarMensaje();
}

/* copiar mensaje */

function copiarMensaje(){
    let select = window.getSelection();
    let rango = document.createRange();
    rango.selectNodeContents(mensajeEncriptado);
    select.removeAllRanges();
    select.addRange(rango);
    document.execCommand('copy');
    console.log('copiado');
}

botonCopiar.onclick = copiarMensaje

/* recargar pagina */

function resetear(){
    location.reload()
}

reset.onclick = resetear

resetSecond.onclick = resetear