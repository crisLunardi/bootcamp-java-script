// Calcular a soma dos números de um array.

function somaArray(array) {

    var soma = 0;

    for (i = 0; i < array.length; i++) {
        soma += array[i];
   };

   return soma;
};

var array = [2, 3, -1, 5, 7, 9, 10, 15, 95];

console.log(somaArray(array));