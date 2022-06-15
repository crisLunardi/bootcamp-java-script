/* 

1 - Exercício usando a sequência de Fibonacci

Imprimir os 10 primeiros números da sequência de Fibonacci sem usar recursividade

A sequência de Fibonacci é composta por uma sucessão de números descrita pelo famoso matemático italiano Leonardo de Pisa (1170-1250), mais conhecido como Fibonacci,
no final do século 12. O matemático percebeu uma regularidade matemática a partir de um problema criado por ele mesmo. Além disso, quando esses números são transformados em
quadrados e dispostos de mandeira geométrica, é possível traçar uma espiral, que curiosamente também pode ser vista em fenômenos naturais.

A fórmula usada para calcular a sequência de Fibonacci é a seguinte:

Fn = Fn - 1 + Fn - 2

(Fn = Fator Numeral)

Neste caso, repetimos o número 1 e somamos os dois, ou seja, 1 + 1 = 2. Em seguida, somamos o resultado com o número antecessor, ou seja, 2 + 1 = 3, e assim continuamente, em uma
sequência infinita. */

function sequenciaDeFibonacci() {

    var array = [];

    var numeroUm = 0;
      
    var numeroDois = 1;

    for (i = 2; i < 10; i++) {

        var somaNumeros = numeroUm + numeroDois;

        array.push(somaNumeros);

        numeroUm = numeroDois + somaNumeros;

        numeroDois = somaNumeros;
    };

    return array;
};

console.log(`Os dez primeiros números da sequência de Fibonacci: [${sequenciaDeFibonacci()}]`);

/* 

2 - Exercício usando a sequência de Fibonacci

Criar uma função para imprimir os 10 primeiros números da sequência de Fibonacci usando recursividade */

