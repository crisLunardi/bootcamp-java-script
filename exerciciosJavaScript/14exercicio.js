// Calcular a soma de todos os dígitos de um numero inteiro positivo.

function somarNumeros(numeros) {

    var transformaOsNumerosEmString = numeros.toString();

    var soma = 0;

    for (var char of transformaOsNumerosEmString) {
        
         var digito = parseInt(char);

         soma += digito;
    };

    return soma;
};

var resultado = somarNumeros(1235231);

console.log("Soma de todos os dígitos: ", resultado);