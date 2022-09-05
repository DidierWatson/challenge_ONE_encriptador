function focus() {
  var input = document.getElementById("input-texto");
  input.focus();
}

function value()  {
  var input = document.getElementById("input-texto");
  input.value = "";
}


function encriptar_o_desencriptar(flag) {
  var texto = document.getElementById("input-texto").value;
  if (texto.length === 0) {
    alert("No se registra nada, escriba una palabra");
  }
  texto = texto.toLowerCase();
  
  let letras = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  for (let i = 0; i < letras.length; i++) {
    if(flag === true){
      if (texto.includes(letras[i][0]))
        texto = texto.replaceAll(letras[i][0], letras[i][1]);
      } else {
          if (texto.includes(letras[i][0]))
            texto = texto.replaceAll(letras[i][1], letras[i][0]);
      }
    }
  
  document.getElementById("imagen").style.display = "none";
  document.getElementById("texto-contenedor-der").style.display = "none";
  document.getElementById("output-texto").style.display = "inline-block";
  document.getElementById("output-texto").innerHTML = texto;
  
  value();
}

 function copiar(){
    var contenido = document.querySelector("#output-texto"); 
    contenido.select();
    document.execCommand("copy");
    alert("Texto copiado");
  
    focus();
 }

focus();
value();
