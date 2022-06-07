/* Funções são blocos de construção fundamentais em JavaScript. Uma função é um procedimento de JavaScript - um conjunto
de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve defini-la em algum lugar no escopo
do qual você quiser chamá-la. */

/*
    Declarando uma função

    A definição da função (também chamada de declaração de função) consiste no uso da palavra chave "function (en-US)", seguida por:

    1° - Nome da função;
    2° - Lista de argumentos para a função, entre parênteses e separados por vírgulas;
    3° - Declarações JavaScript que definem a função, entre chaves { };

*/

// Por exemplo, o código a seguir define uma função simples chamada square:

function square(numero) { // A função square recebe um argumento chamado "numero". 
    return numero * numero; /* A função consiste em uma instrução que indica para retornar o argumento da função (isto é, numero) multiplicado
    por si mesmo. */
};   

/* Funções também podem ser criadas por uma expressão de função. Tal função pode ser anônima; ou seja
não tem que ter um nome. Por exemplo, a função square poderia ter sido definida como: */

var square = function(numero) {return numero * numero}; 
var x = square(4);
console.log(x);

/* A definição de uma função não a executa. Definir a função é simplesmente normea a função e especificar o que fazer quando a função 
é chamada. Chamar a função executa realmente as ações especificadas como os parâmetros indicados. Por exemplo, se você definir a função 
square, você pode chamá-la do seguinte modo: */

square(5); // chamando uma função.

/* Escopo da função. 
    As variáveis definidas no interior de uma função não podem ser acessadas de nenhum lugar fora da função, porque a variável está definida
    apenas no escopo da função. Em outras palavras, a função definida no escopo global pode acessar todas as variáveis definidas no escopo global. 
    A função definida dentro de outra função também pode acessar todas as variáveis definidas na função hospedeira e outras variáveis ao qual a função 
    hospedeira tem acesso.
*/

// As seguintes variáveis são definidas no escopo global:
var num1 = 10;
    num2 = 3,
    nome = "Chamahk"

// Esta função é definida no escopo global:
function multiplica() {
    return num1 * num2;
};

multiplica(); // Irá retornar 30!

// Um exemplo de função aninhada
function getScore() {
 var num1 = 2;
     num2 = 3;

     function add() {
         return nome + "scored" + (num1 + num2);
     };

     return add();
};

getScore(); // Retorna "Chamahk scord 5";