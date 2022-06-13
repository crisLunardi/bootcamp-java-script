// Calcular a média de todos os números de um array.

function mediaArray(array) {

    var cumprimentoDoArray = array.length; /* Criação da variável cumprimentoDoArray que recebe como valor, o cumprimento do array. O que é a mesma coisa que falar que a variável 
   cumprimentoDoArray irá receber como valor, a quantidade de elementos que o array possui. Ex.: [5,8,9,10,15] esse array possui cinco (5) elementos ou seja o valor do cumprimentoDoArray 
   receberá o valor de cinco (5).*/
        
    var soma = 0; // Criação da variável soma com o valor de 0.

    for (i = 0; i < cumprimentoDoArray; i++) {
        soma += cumprimentoDoArray[i]; /* Incrementação do valor da posição do array em que está a iteração, na variável soma. Ex. soma = 5 irá atribuir (+=) posição da iteração 
        cumprimentoDoArray[2] 9 O que resultará a soma de 11 nessa iteração. */
    };

    return soma / cumprimentoDoArray;
};

var array = [1, 3, 9, 15, 90];

console.log(`A média aritmética do array é ${mediaArray(array)}`);