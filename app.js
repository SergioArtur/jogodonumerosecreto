//lista de números sorteados
let listaDeNumerosSorteados = [];
//Quantidade de números disponíveis para o chute do jogo
let numeroLimite = 60;
//insere o número aleatorio na variável numeroSecreto.
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//Selecionando a tag h1 da index HTML
// let titulo = document.querySelector('h1');
//Inserindo o título dentro da tag h1 que é o título da página Web com a variável criada acima para esta finalidade.
// titulo.innerHTML = 'Jogo do Número Secreto!';
//"p" é o parágrado do documento e será inserido uma frase para o parágrado.
// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10.';

//Esse código é uma evolução do código acima.
//A função é lida e guardada pelo Java Script antes de executar as linhas, então não importa onde ela será inserida.
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
//Na linha 7 da página index, temos o reponsive voice para ser utilizado para leitura do nosso jogo, iremos utilizar 
//para realizar a leitura do texto em português feminino e na velocidade 1.2.
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
//Usando a função "exibirTextoNaTela()" declarada acima.
    exibirTextoNaTela('h1', 'Jogo do Número Secreto!');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 60.');
}
exibirMensagemInicial();


//Função (ela cria um ação) criada para verificar o chute no HTML.
function verificarChute() {//qual ação será executada?
    let chute = document.querySelector('input').value; //Comparação numérica é verificado como verdadeiro e falso (booleano).
    console.log(chute == numeroSecreto);

    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você acertou com ${tentativas} ${palavraTentativa}.`;

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Parabéns!');
        exibirTextoNaTela('p', mensagemTentativas);
//Pegar o segundo botão pelo ID (o que se encontra desativado) conforme abaixo:
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('h1', 'Tente novamente!');
            exibirTextoNaTela('p', 'O número é menor!');
        } else{
            exibirTextoNaTela('h1', 'Tente novamente!');
            exibirTextoNaTela('p', 'O número é maior!');
        }
         tentativas++;
         limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite +1); //retorna para a função o número aleatório.
//Identificar a quantidade de números sorteados na lista.
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
//Verificar se atingiu o número máximo inserido acima na variável "numeroLimite";
    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {//verifica se o elemento está na lista, dos números escolhidos.
        return gerarNumeroAleatorio();//Após os passos acima ele poderá retornar o número aleatório que desejamos.
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido) //adiciona no final da lista o número escolhido.
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
//Quero que no campo de inserir o valor "input" fique em branco.
    chute = document.querySelector('input');
//valor do campo fique em branco.
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}