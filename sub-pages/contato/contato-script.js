//redirecionamentos
function contato(){
    window.location.href ='/sub-pages/contato/contato.html'
}
function carreira(){
    window.location.href = "/sub-pages/carreira/carreira.html";
}
function maisInformacoes(){
    window.location.href = "/sub-pages/mais info/maisInfo.html";
}
function home(){
    window.location.href = "https://gustavosutil.000webhostapp.com/";
}
function github(){
    window.open("https://github.com/gustavoSutil","_blank")
}
function discord(){
    alerta('Para jogar ou conversar. ID:','#3699')
}
function linkedin(){
    window.open("https://www.linkedin.com/in/gustavo-sutil-7132a4217/","_blank")
}
function gmail(){
    alerta('Este é o meu email:','gustavosutil242@gmail.com')
}


//label para copiar texto
var janelas=0
function alerta(doQueSeTrata,mensagemPraCopiar){
    janelas+=1
    if (janelas==1){
        localInserir=document.getElementById("divLabelAlerta")
        msgAlertaTitolo='<span id="spanAlerta"><div id="alertas"><article><h2>'
        msgAlertaTextArea='</h2><textarea id="textAreaCopiar" placeholder="Por que apagariam isso.🤔" cols="25" rows="1">'
        fim='</textarea><div id="aposCopiar"></div><button onclick="copiaTextoAlerta()">Copiar</button><button onclick="fechaAlerta()">Fechar</button></article></div></span>'
        msgcompleta=(msgAlertaTitolo+doQueSeTrata+msgAlertaTextArea+mensagemPraCopiar+fim)
        localInserir.insertAdjacentHTML('afterEnd',msgcompleta)
    }
}
function copiaTextoAlerta(){
    areaTextoEmail=document.getElementById("textAreaCopiar").value
    navigator.clipboard.writeText(areaTextoEmail)
}
function fechaAlerta(){
    apagarElemento=document.getElementById("spanAlerta")
    apagarElemento.remove()
    janelas=0
}

//navbar
var contagem=0;
function nav(numero){
    //ver se par ou nao
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
    return opcoes.insertAdjacentHTML("beforeend","<span id='span' style='color:white; list-style: none ;background: #000010;height: 400px;transform-style: flat;justify-content: flex-end;' ><article id='opcoes'><li onclick='contato()' >Contato</li><li onclick='carreira()' >Carreira</li><li onclick='maisInformacoes()'>Mais informações</li></article></span>");
}
function apagar(){
    var sair= document.getElementById('span');
     return sair.remove();
}