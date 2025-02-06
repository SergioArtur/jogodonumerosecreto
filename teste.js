// let numero = parseInt(prompt('Informe um número:'));

// function verificarNumero() {
//      if (numero <0){
//         console.log(`Número ${numero} é negativo`);
//     } else if(numero >0){
//                      console.log(`Número ${numero} é positivo`);
//                      } else {
//                              console.log(`${numero} é um número Neutro`);
//                             }
// }alert(verificarNumero());

//-------------------------------
//Exercícios

// let nota1 = 7;
// let nota2 = 6;
// let nota3 = 3;
// let nota4 = 5;

// function calcularMedia(nota1, nota2, nota3, nota4) {
// //Retorna um valor que deve ser atribuido a uma variável para uso posterior.    
//     return (nota1 + nota2 + nota3 + nota4) / 4;
// }
// let media = calcularMedia(nota1, nota2, nota3, nota4);
//     console.log(media);

// function verificarAprovacao(media){
//     return media >= 5 ? 'Parabéns, você foi Aprovado' : 'Reprovado!';
// }
//     console.log(verificarAprovacao(media));

//---------------------------------------
//Desafio 3
// https://github.com/alura-cursos/js-curso-2/tree/desafio_3
let peso = parseInt(77); //em Kilogramas (númoero inteiro)
let altura = parseFloat(1.70); //em metro (número decimal)

function calculoIMC(peso, altura) {
   return peso / (altura * altura);
}
let imc = calculoIMC(peso, altura);
console.log(imc);
