# Estrutura de dados do JavaScript

Como toda linguagem de programação. O JavaScript tem sua própria estrutura de dados. 

## Tipagem Dinâmica

JavaScript é uma linguagem de tipagem <em>dinâmica</em>. O que significa que não é necessário declarar o tipo de uma variável antes de sua atribuição. O tipo será automaticamente determinado quando o programa for processado. E isso também significa que você pode reatribuir uma mesma variável com um tipo diferente.

## Tipos de Dados

A última versão ECMAScript define sete tipos de dados 

<br>Sete tipos de dados (primitivos):</br>

<ul>
    <li>Boolean</li>
    <li>Null</li>
    <li>Undefined</li>
    <li>Number</li>
    <li>BigInt</li>
    <li>String</li>
    <li>Symbol</li>
    <li>Object</li>
<ul>

## Valores Primitivos

Todos os tipos, com a exeção de objetos, definem valores imutáveis (valores que são incapazes de mudar). Por exemplo na linguagem C, Strings são imutáveis. Nós nos referimos a valores desse tipo como "valores primitivos".

Tipo "Boolean"

Boolean representa uma entidade lógica e pode ter dois valores: verdadeiro*(true)* ou falso*(false)*.

Tipo "Null"

O tipo Null tem exatamente um valor: nulo*(null)*.


Tipo "Number"

De acordo com os padrões ECMAScript, existe somente um tipo numérico. O double-precision.

Tipo "String"

O tipo String JavaScript é usado para representar dados textuais. Isto é um conjunto de "elementos" de valores de 16-bits unsigned integer. Cada elemento na string ocupa uma posição na string. O primeiro elemento está no índice 0, o próximo no índice 1, e assim por diante. O comprimento de uma string é o número de elementos que ela possui.

Tipo "Symbol"

Symbols é um tipo novo de dados da edição ECMAScript edição 6. Um Symbol é um valor primitivo <br>único</br> e <br>imutável</br> e pode ser usado como chave de uma propriedade de Object. Uma curiosidade é que symbols em outras linguagens são chamados de otoms (átomos).

Tipo "Objetos"

Um objeto é um valor na memória que pode ser possivelmente referenciado por um identifier.

 Propriedades de um objeto

    No JavaScript, objetos podem ser vistos como uma coleção de propriedades. Como o object literal syntax, um conjunto limitado de propriedades podem ser inicializados. 

    As propriedades podem ser adicionadas e removidas. Estas propriedades podem assumir valores de qualquer tipo, incluindo outros objetos, o que permite construir estruturas de dados mais complexas. Propriedades são identificadas usando valores chave. Um valor chave pode ser uma String ou um valor Symbol.

    Existem dois tipos de propriedades de objetos que contém certos atributos: a propriedade de dados e a propriedade de acesso.

tipo "BigInt"

É um objeto nativo que fornece um modo de representar números inteiros maiores que 2⁵³, que é o maior número que o JavaScript consegue, com exatidão representar com o tipo primitivo Number.

tipo "Undefined"

O undefined é uma propriedade do objeto global. Uma variável que não teve um valor atribuído é do tipo undefined. Um método sentença também retorna undefined se a variável que está sendo avaliada não tem um valor atribuído. Uma função retorna undefined se um valor não for retornado.

Uma vez que undefined não é uma palavra reservada, ele pode ser usado como um identificador (nome de variável) em qualquer escopo que não seja o escopo global.