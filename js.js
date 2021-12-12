function FormataData(campo){

    var tmp = campo.value.length; //quantidade de caracteres digitado

    if (tmp==2 || tmp==5)
        campo.value += "/";
}


function validar(form){

    //como obter informacoes do formulario pela propriedade name ou id do input
    /*alert(form.nome.value); //pegando do formulario o conteudo do campo nome pela tag 'name'
    alert(form.email.value);//pegando do formulario o conteudo do campo email pela tag 'email'
    alert(document.getElementById('idade').value); ////pegando do formulario o conteudo do campo idade pelo Id
    alert(document.getElementById('idade').value.length); //diz a quantidade de caracteres*/

    caixa_erro_nome = document.querySelector('.msg-nome');
    caixa_erro_nome.style.display='none';

    if (document.getElementById('nome').value.length<5){
        caixa_erro_nome.innerHTML = "Favor preencher seu nome";
        caixa_erro_nome.style.display='block';
        document.getElementById('nome').focus();
        return false;
    }


    if (document.getElementById('email').value==""){
        alert("Email não informado");
        document.getElementById('email').focus();
        return false;
    } 
}

