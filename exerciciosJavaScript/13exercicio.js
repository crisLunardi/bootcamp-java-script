// Localizar o maior valor dentro de um array de números.

function localizarValorMaior(array) {
    var valorMaior = array[0];

    for (i = 0; i < array.length; i++) {

        if (array[i] > valorMaior) {
            valorMaior = array[i];
        };
    };

    return valorMaior;
};

var array = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

console.log(`O valor maior do array é: ${localizarValorMaior(array)}.`);