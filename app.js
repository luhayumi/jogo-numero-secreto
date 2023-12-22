let listaNumeros=[];
let numeroSecreto = gerarNumero();
let tentativas = 1;
let quantidadeTentativas = tentativas > 1 ? "tentativas" : "tentativa";

function exibirTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Femele', {rate:1.2});
}

function mensagemInicial(){
    exibirTextoTela("h1", "Número Secreto");
    exibirTextoTela("p", "Escolha um número entre 1 e 50");
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;

    if(chute == numeroSecreto) {
        exibirTextoTela("h1", "Acertou!");
        let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${quantidadeTentativas}!`;
        exibirTextoTela("p", mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {

        if(chute > numeroSecreto){
            exibirTextoTela("h1", "Errou!");
            exibirTextoTela("p", "O número secreto é menor");
        }else{
            exibirTextoTela("h1", "Errou!");
            exibirTextoTela("p", "O número secreto é maior");
        }tentativas++; 
        limparCampo();
    }
}

function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random()*50 + 1);

    if(listaNumeros==3){
        listaNumeros=[];
    }

    if(listaNumeros.includes(numeroEscolhido)){
        return gerarNumero;
    }else{
        listaNumeros.push(numeroEscolhido);
        console.log(listaNumeros);
        return numeroEscolhido;
    }
    
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}