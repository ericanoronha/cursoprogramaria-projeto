document.getElementById("enviar").addEventListener("click",validaFormulario)

function validaFormulario(){
  if (document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("telefone").value != "" ) {
    alert("Prontinho! Você receberá as novidades por email.")
    //console.log("Prontinho! Você receberá as novidades por email.")
  } else {
    alert("Por favor, preencha os campos nome e email!")
    //console.log("Por favor, preencha os campos nome e email!")
  }
}

