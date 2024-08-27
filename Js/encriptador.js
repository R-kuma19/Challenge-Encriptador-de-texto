
//Invocación de elementos con queryselector//
const btnEncriptar=document.querySelector(".botonEncriptar");
const txtEncriptar=document.querySelector(".textoEncriptar");
const aviso=document.querySelector(".textoIndicacion");
const respuesta=document.querySelector(".evaluar");
const contenido=document.querySelector(".contenedorDibujo");
const btnCopiar=document.querySelector(".botonCopiar");
const btnDesencriptar=document.querySelector(".botonDesencriptar");

// Definición de funciones //

//Definicion de función para ENCRIPTAR//
function encriptar(){
    let texto=txtEncriptar.value;
    let textoLimpio=texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if(texto==""){
        aviso.style.background="#0A3871";
        aviso.style.color="#FFFF";
        aviso.style.fontWeight="800";
        aviso.textContent="El campo de texto no debe estar vacío"

        setTimeout(()=>{
            aviso.removeAttribute("style")
        },1500);
    } else if(texto !== textoLimpio){
        aviso.style.background="#0A3871";
        aviso.style.color="#FFFF";
        aviso.style.fontWeight="800";
        aviso.textContent="Recuerda que el mensaje no debe contener acentos ni caracteres especiales";

        setTimeout(()=>{
            aviso.removeAttribute("style")
        },1500);
    } else if(texto !== texto.toLowerCase()){
        aviso.style.background="#0A3871";
        aviso.style.color="#FFFF";
        aviso.style.fontWeight="800";
        aviso.textContent="Recuerda que el mensaje debe estar todo en minúscula";

        setTimeout(()=>{
            aviso.removeAttribute("style")
        },1500);
    } else{
        texto=texto.replace(/e/mg,"enter");
        texto=texto.replace(/i/mg,"imes");
        texto=texto.replace(/a/mg,"ai");
        texto=texto.replace(/o/mg,"ober");
        texto=texto.replace(/u/mg,"ufat");

        respuesta.innerHTML=texto;
        contenido.remove();
        btnCopiar.style.visibility="inherit";
    }
}

//Definicion de función para DESENCRIPTAR//
function desencriptar(){
    let texto=txtEncriptar.value;
    let textoLimpio=texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if(texto==""){
        aviso.style.background="#0A3871";
        aviso.style.color="#FFFF";
        aviso.style.fontWeight="800";
        aviso.textContent="El campo de texto no debe estar vacío"

        setTimeout(()=>{
            aviso.removeAttribute("style")
        },1500);
    } else if(texto !== textoLimpio){
        aviso.style.background="#0A3871";
        aviso.style.color="#FFFF";
        aviso.style.fontWeight="800";
        aviso.textContent="El mensaje no debe contener acentos ni caracteres especiales";

        setTimeout(()=>{
            aviso.removeAttribute("style")
        },1500);
    } else if(texto !== texto.toLowerCase()){
        aviso.style.background="#0A3871";
        aviso.style.color="#FFFF";
        aviso.style.fontWeight="800";
        aviso.textContent="El mensaje debe estar todo en minúscula";

        setTimeout(()=>{
            aviso.removeAttribute("style")
        },1500);
    } else{
        texto=texto.replace(/enter/mg,"e");
        texto=texto.replace(/imes/mg,"i");
        texto=texto.replace(/ai/mg,"a");
        texto=texto.replace(/ober/mg,"o");
        texto=texto.replace(/ufat/mg,"u");

        respuesta.innerHTML=texto;
        btnCopiar.style.visibility="inherit"
        contenido.remove();
    }
}

//Definicion de función para COPIAR//
function copiarTexto(){
    let copiar=respuesta;
    copiar.select();
    document.execCommand("copy");
}
