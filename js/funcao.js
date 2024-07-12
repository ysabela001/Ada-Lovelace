document.getElementById("enviarbotao").addEventListener("click", BotaoFormulario)

function BotaoFormulario(){
    if ( document.getElementById("nomeUsuario").value != "" && document.getElementById("emailUsuario").value != ""  && document.getElementById("telUsuario").value != ""){
        alert(" já já você receberá um email com mais informações!! :)")  
    }else{
        alert("Por favor preencha todos os campos necessários!")
    }
}




    // document.getelementByid = pega is ids que esta no html (no formulario)
    // value = mostra o vaor que está dentro do id
    // != - diferente de
    // " " = string vazia 
    // && = verifica se ambas as condiçoes sao verdadeiras
    // function = é uma funçao que ocorre apenas em momentos especificos (nesse caso = ao clicar no botao)