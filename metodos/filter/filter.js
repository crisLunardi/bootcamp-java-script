/* O método filter() cria um novo array com todos os elementos que passaram no teste implementando pela função fornecida.  */


const frutas = ["Maça", "Banana", "Laranja", "Limão", "Abacaxi", "Pêra"]; // Criação de um array contendo nomes de frutas;

console.log(frutas.filter((fruta) => fruta.includes("a"))); /* O método filter() irá realizar o filtro com base na expressão há ele 
fornecida. Nesse caso para toda fruta que tiver letra "a" retorne seu valor.
*/

function valor(value){
    return value <= 10;
}; // Criação de uma função que receberá um numero e ira retornar o número se for menor ou igual há 10.

var filtro = [12, 5, 8, 130, 44].filter(valor); 

console.log(filtro);