/*
Assunto 01 - Listas e índices

Em quaisquer linguagens de programação nós encontramos o conceito de "Estruturas de dados":
são formas diversas de organizar um conjunto de informações, sejam valores primitivos
(como strings, números e booleanos), variáveis e constantes, e até mesmo valores mais
complexos como outras estruturas de dados.

A primeira que veremos (novamente) são as "listas" ou "arrays". Se tratam de uma estrutura
que permite agrupar um conjunto de valores atribuindo a cada um deles uma "posição", como
a posição de alunos em uma fila.

Para criar uma lista, basta criar uma variável e atribuir a ela um conjunto de valores
agrupados com colchetes:

const minhaLista = ["item 1", "segundo item", "3º", "item quatro"]

Na lista acima, temos 4 itens. Para acessarmos a lista completa, basta utilizar o nome
da lista como se faz para qualquer variável:

console.log(minhaLista)

E quando queremos acessar apenas um item da lista?

minhaLista[1]

Os índices começam em zero.

minhaLista[0]

Último item:

minhaLista[3]

Podemos descobrir o tamanho com:

minhaLista.length

E acessar o último item com:

minhaLista[minhaLista.length - 1]
*/

/* Questão 1
Crie uma lista (com const) chamado "frutas" com os itens: "maçã", "banana", "laranja", 
"uva", "pêra", "manga". Armazene na variável "resposta01" o segundo item dessa lista.
*/

// Array na linha abaixo
const frutas = ["maçã", "banana", "laranja", "uva", "pêra", "manga"]

// Operações necessárias e resposta a partir da linha abaixo
export const resposta01 = frutas[1]


/* Questão 2
Ainda utilizando o array criado na questão 1, armazene na variável "resposta02"
o último item da lista. Use a propriedade "length" para auxiliar a encontrar
o índice deste último item.
*/

// Operações necessárias e resposta a partir da linha abaixo
export const resposta02 = frutas[frutas.length - 1]


/* Questão 3
Continuando com o array criado na questão 1, altere o quarto item da lista para
a fruta "abacaxi". Na variável "resposta03" envie a lista completa com a nova fruta.
*/

// Operações necessárias e resposta a partir da linha abaixo
frutas[3] = "abacaxi"
export const resposta03 = frutas


/* Questão 4
Ainda com a lista da questão 1, acrescente a fruta "limão" no final da lista, e
envie a lista inteira na variável "resposta04".
*/

// Operações necessárias e resposta a partir da linha abaixo
frutas[frutas.length] = "limão"
export const resposta04 = frutas


/* Questão 5
Para finalizar com o array da questão 1, troque as posições dos itens "laranja"
e "manga", e armazene a lista modificada completa na variável "resposta05".
*/

// Operações necessárias e resposta a partir da linha abaixo
[frutas[2], frutas[5]] = [frutas[5], frutas[2]]
export const resposta05 = frutas


/* Questão 6
Crie um array (também com const ao invés de let) chamado "numeros" com os valores
7, 2, 4, 9, 8, 6, 1 nesta ordem. Armazene na variável "resposta06" o resultado do
número no índice zero multiplicado pelo item no penúltimo índice.
*/

// Array na linha abaixo
const numeros = [7, 2, 4, 9, 8, 6, 1]

// Operações necessárias e resposta a partir da linha abaixo
export const resposta06 = numeros[0] * numeros[numeros.length - 2]


/* Questão 7
Seguindo com a lista criada na questão 6, utilizando os índices de cada item,
avance eles em uma posição (e mande o último item para a primeira posição),
de modo que a lista se torne 1, 7, 2, 4, 9, 8, 6.
*/

// Operações necessárias e resposta a partir da linha abaixo
let temp = numeros[numeros.length - 1]

numeros[6] = numeros[5]
numeros[5] = numeros[4]
numeros[4] = numeros[3]
numeros[3] = numeros[2]
numeros[2] = numeros[1]
numeros[1] = numeros[0]
numeros[0] = temp

export const resposta07 = numeros


/* Questão 8
Continuando com a lista da questão 6, adicione no final da lista o resultado
da soma de todos os números anteriores da lista. Retorne a lista completa.
É proibido usar métodos de listas e funções.
*/

// Operações necessárias e resposta a partir da linha abaixo
let soma =
numeros[0] +
numeros[1] +
numeros[2] +
numeros[3] +
numeros[4] +
numeros[5] +
numeros[6]

numeros[numeros.length] = soma

export const resposta08 = numeros


/* Questão 9
Ainda com a lista da questão 6, mude:
- O segundo item para a quarta posição
- O quarto item para a sexta posição
- O sexto item para a segunda posição
*/

// Operações necessárias e resposta a partir da linha abaixo
let temp2 = numeros[1]
let temp4 = numeros[3]
let temp6 = numeros[5]

numeros[3] = temp2
numeros[5] = temp4
numeros[1] = temp6

export const resposta09 = numeros


/* Questão 10
Finalizando com a lista da questão 6, crie uma nova lista com três itens onde:
- O primeiro item da nova lista é o último da anterior
- O segundo item da nova lista é o penúltimo da anterior
- O terceiro item da nova lista é o antepenúltimo da anterior
*/

// Nova lista abaixo
const numeros2 = [
  numeros[numeros.length - 1],
  numeros[numeros.length - 2],
  numeros[numeros.length - 3]
]

// Operações necessárias e resposta a partir da linha abaixo
export const resposta10 = numeros2
