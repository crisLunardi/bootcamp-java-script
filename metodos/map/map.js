/* O método .map() invoca uma função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado. */

const arrayDePessoas = [{
    nome: "Cristian Lunardi de Oliveira",
    idade: "21",
    nascionalidade: "Brasileiro",
    sexo: "Masculino"
},{
    nome: "Gabriel Alves de Oliveira",
    idade: "21",
    nascionalidade: "Argentino",
    sexo: "Masculino"
},{
    nome: "Cristian Lunardi de Oliveira",
    idade: "22",
    nascionalidade: "Chileno",
    sexo: "Masculino"
},{
    nome: "Gustavo Oliveira Tomé",
    idade: "22",
    nascionalidade: "Brasileiro",
    sexo: "Indefinido"
}];

console.log(arrayDePessoas.map(pessoa => { 
    if (pessoa.idade === "22") {
        return pessoa;
}}));