function contato(){
    window.location.href="/contato/contato.html"
}
function maisInformacoes(){
    // window.location.href = "";
}
function contato(){
    // window.location.href = "";
}
function home(){
    // window.location.href = "";
}

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
    return opcoes.insertAdjacentHTML("afterbegin","<span id='span' style='color:white;list-style: none;background: #000010;height: 400px;transform-style: flat;justify-content: flex-end;' ><article id='opcoes'><li onclick='contato()' >Contato</li><li onclick='carreira()' >Carreira</li><li onclick='maisInformacoes()'>Mais informações</li></article></span>");
}
function apagar(){
    var sair= document.getElementById('span');
     return sair.remove();
}


// passa pelas linguagens
var posicao=1;
function linguagem(numero,fazerPadrao){
    if (fazerPadrao==0){
        //sempre mais ou menos 1
        posicao= posicao + numero;
    }
    else if(fazerPadrao==1){
        posicao=numero
    }
    //tags para remover/adicionar
    var tagInserir = document.getElementById("tagPrincipal");
    var tagImg = document.getElementById("imgLing");
    var tagText = document.getElementById("txtLing");
    //pular inicio-->fim
    if (posicao==5){
        posicao=1;
    }
    //pular fim-->inicio
    if (posicao==0){
        posicao=5;
    }
    //phyton
    if (posicao==1){
        lingPython(tagImg,tagText,tagInserir)
    }
    //js
    if (posicao==2){
        lingJs(tagImg,tagText,tagInserir)
    }
    //html
    if (posicao==3){
        lingHtml(tagImg,tagText,tagInserir)
    }
    //css
    if (posicao==4){
        lingCss(tagImg,tagText,tagInserir)
    }
}

function lingPython(img,text,conteudo){
    // deixa o fundo preto do selecionado
    inferior1=document.getElementById("ling1")
    inferior1.style.backgroundColor="#000010"

    inferior2=document.getElementById("ling2")
    inferior2.style.backgroundColor="#ffff"
    
    inferior3=document.getElementById("ling3")
    inferior3.style.backgroundColor="#ffff"

    inferior4=document.getElementById("ling4")
    inferior4.style.backgroundColor="#ffff"
    
    
    // atualiza os dados
    img.remove();
    text.remove();
    return conteudo.insertAdjacentHTML('beforeend','<img id="imgLing" class="imgLing" src="/initial/img/python.png"><h2 id="txtLing" class="texto">Python:<br>Conhecimento em desenvolvimento de aplicações com uso de bibliotecas como pandas e tkinter.</h2>');
}
function lingJs(img,text,conteudo){
    // deixa o fundo preto do selecionado 
    inferior1=document.getElementById("ling1")
    inferior1.style.backgroundColor="#ffff"

    inferior2=document.getElementById("ling2")
    inferior2.style.backgroundColor="#000010"

    inferior3=document.getElementById("ling3")
    inferior3.style.backgroundColor="#ffff"

    inferior4=document.getElementById("ling4")
    inferior4.style.backgroundColor="#ffff"


    // atualiza os dados
    img.remove();
    text.remove();
    return conteudo.insertAdjacentHTML('beforeend','<img id="imgLing" class="imgLing" src="/initial/img/js.png"><h2 id="txtLing" class="texto">Javascript:<br>Conhecimento da linguagem para desenvolvimeto de páginas web.</h2>');
}
function lingHtml(img,text,conteudo){
    // deixa o fundo preto do selecionado
    inferior1=document.getElementById("ling1")
    inferior1.style.backgroundColor="#ffffff"

    inferior2=document.getElementById("ling2")
    inferior2.style.backgroundColor="#ffff"

    inferior3=document.getElementById("ling3")
    inferior3.style.backgroundColor="#000010"

    inferior4=document.getElementById("ling4")
    inferior4.style.backgroundColor="#ffff"


    // atualiza os dados
    img.remove();
    text.remove();
    return conteudo.insertAdjacentHTML('beforeend','<img  id="imgLing" class="imgLing" src="/initial/img/html.png"><h2 id="txtLing" class="texto">HTML:<br>Conhecimento em construção de páginas web com HTML.</h2>');
}
function lingCss(img,text,conteudo){
    // deixa o fundo preto do selecionado
    inferior1=document.getElementById("ling1")
    inferior1.style.backgroundColor="#ffffff"
    
    inferior2=document.getElementById("ling2")
    inferior2.style.backgroundColor="#ffff"
    
    inferior3=document.getElementById("ling3")
    inferior3.style.backgroundColor="#ffff"

    inferior4=document.getElementById("ling4")
    inferior4.style.backgroundColor="#ffff"

    inferior4=document.getElementById("ling4")
    inferior4.style.backgroundColor="#000010"


    // atualiza os dados
    img.remove();
    text.remove();
    return conteudo.insertAdjacentHTML('beforeend','<img id="imgLing" class="imgLing" src="/initial/img/css.png"><h2 id="txtLing" class="texto">CSS:<br>Conhecimento em estilizar páginas web.</h2>')
}