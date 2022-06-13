// Calcular a soma dos números impares maiores que 10 e menores que 30.

function somaImpares() {

    var soma = 0;

    for (i = 11; i < 30; i++) {
        soma += i;
    };

    return soma;
};

console.log(somaImpares());