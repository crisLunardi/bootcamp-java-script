// Criar uma função que converta uma temperatura de Fahrenheit para Celsius para

function fahrenheitParaCelsius(numero) {
    return Math.round((numero - 32) / 1.8); /* A função Math.round(x) retorna o valor de um número arredondado para o inteiro mais proximo. */
};

console.log(`Sua conversão deu ${fahrenheitParaCelsius(80)}° graus Celsius!`);