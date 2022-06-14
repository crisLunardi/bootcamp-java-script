// Criar uma função que receba como parâmetro um array de números e retorne um array contendo somente números positivos.

function retornaNumerosPositivo(array) { /* Criação de uma função que receberá como parâmetro um array de números inteiros positivos e negativos */
    var arrayDois = [];

    for (i = 0; i < array.length; i++) { /* Criação do laço de repetição e definição de como o laço de repetição irá iterar.
    Explicação do for: Foi criado a variável "i", que será o nosso contador, em seguida definido a condição da iteração no for. Nesse caso enquanto o valor de i for menor que
    o comprimento da variável array. O laço de repetição continuará a iteração. E irá incrementa 1.
    */
     var guardaValoresDaIteracao = array[i];

     if (guardaValoresDaIteracao >= 0) {
         arrayDois.push(guardaValoresDaIteracao);
     };
    };

    return arrayDois;
};

var array = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

console.log(`Aqui está os número positivos: [${retornaNumerosPositivo(array)}]`);