function encriptar(){
    let mensaje = document.getElementById('mensajein').value;

    if (mensaje == "") {
        noMensaje();
    } else {

        mensaje = mensaje.replaceAll("e","enter");
        mensaje = mensaje.replaceAll("i","imes");
        mensaje = mensaje.replaceAll("a","ai");
        mensaje = mensaje.replaceAll("o","ober");
        mensaje = mensaje.replaceAll("u","ufat");

        document.getElementById("imglupa").style.display = "none";
        document.getElementById("txt1").style.display = "none";
        document.getElementById("txt2").style.display = "none";

        document.getElementById("txtsalida").style.display = "block";
        document.getElementById("copiar").style.display = "block";

        let elementoHTML = document.getElementById("txtsalida");
        elementoHTML.innerHTML = mensaje;
    }
}

function desencriptar(){
    let mensaje = document.getElementById('mensajein').value;

    if (mensaje == "") {
        noMensaje();
    } else {

        mensaje = mensaje.replaceAll("ai","a");
        mensaje = mensaje.replaceAll("enter","e");
        mensaje = mensaje.replaceAll("imes","i");
        mensaje = mensaje.replaceAll("ober","o");
        mensaje = mensaje.replaceAll("ufat","u");

        document.getElementById("imglupa").style.display = "none";
        document.getElementById("txt1").style.display = "none";
        document.getElementById("txt2").style.display = "none";

        document.getElementById("txtsalida").style.display = "block";
        document.getElementById("copiar").style.display = "block";

        let elementoHTML = document.getElementById("txtsalida");
        elementoHTML.innerHTML = mensaje;
    }
}

function noMensaje(){
    document.getElementById("txtsalida").style.display = "none";
    document.getElementById("copiar").style.display = "none";

    document.getElementById("imglupa").style.display = "block";
    document.getElementById("txt1").style.display = "block";
    document.getElementById("txt2").style.display = "block";
}

const copiar = async () => {
    let texto = document.getElementById("txtsalida").innerHTML;

    try {
        await navigator.clipboard.writeText(texto);
        console.log("contenido copiado");
    } catch (error) {
        console.error('Error al copiar: ',err);
    }
}

noMensaje();
