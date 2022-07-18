const email = document.getElementById ("mail");
const parrafo = document.getElementById ("warnings");
const form=document.getElementById("formulario");
const simbolo=document.getElementById("imagenError");

form.addEventListener("submit",e=>{

e.preventDefault()
let warnings =""
let mensajeError = false
let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
parrafo.innerHTML = ""


if (!regexEmail.test(email.value)) {

warnings +=`Email adress is not formated correctly <br>`
mensajeError=true
simbolo.style.display="block"

}

if (email.value.length<1){

    warnings +=`There must be no empty field <br>`
    mensajeError=true
    simbolo.style.display="block"
    }

if(mensajeError){

parrafo.innerHTML=warnings

}

else {

parrafo.innerHTML = `Info has been sent`
simbolo.style.display="none"
}



})
 