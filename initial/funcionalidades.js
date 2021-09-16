var contagem=0;
function nav(numero){
    contagem=contagem+numero
    if (contagem%2==0){
        apagar()
    }
    else{
        inserir()
    }
}
function inserir(){
    var opcoes= document.getElementById("menu"); 
    return opcoes.insertAdjacentHTML("afterbegin","<span id='span' style='color:white;list-style: none;background: #000010;height: 400px;transform-style: flat;justify-content: flex-end;' ><article id='opcoes'><li>Contato</li><li>Carreira</li><li>Mais informações</li></article></span>");
    }
function apagar(){
    var sair= document.getElementById('span');
     return sair.remove()
}