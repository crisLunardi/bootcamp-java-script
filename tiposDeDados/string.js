/*
    Descrição: Strings são úteis para guardar dados que podem ser representados em forma de texto. Uma das operações
    mais usadas nas strings é chegar seu tamanho, para construir e concatená-las usando os operadores + e +=, checando
    pela existência ou posição de substrings com o método indexOf(), ou extrair substring com o método substring.
*/

// Definindo variáveis do tipo String:

var string = "String";

var stringDois = 'String';

var stringChar = "String".charAt(4);

var stringCharDois = `${"String".charAt(5)}`;

/* Acesso ao caractere

    Há duas maneiras de acessar um caractere individual em uma string. A primeira é o método: charAt.
*/

console.log(string.charAt(0)); // S

console.log("String".charAt(1)); // t

console.log(`${'String'.charAt(2)}`); // r

console.log('String'.charAt(3)); // i

console.log(stringChar); // n

console.log(stringCharDois); // g

/*
    A outra maneira (introduzido no ECMAScript 5) consiste em tratar a string como um objeto Array-like onde os carácteres individuais
    correspodem a um índice númerico.
*/

console.log(`\n${string[0]}`);

console.log(string[1]);

console.log(string[2]);

console.log(string[3]);

console.log(string[4]);

console.log(string[5]);

/* Comparando strings
    
    No JavaScript, basta usar o operador maior que e menor que.
*/
