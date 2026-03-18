/*
Assunto 02 - Métodos de listas

Para além de manipulação direta de listas utilizando índices, podemos modificá-las
de outras formas. Listas (também chamados de Arrays) são um tipo de "Objeto" para
a linguagem JavaScript. Isso significa que para além do valor que atribuímos a elas,
elas também possuem "propriedades" e "métodos".

Vimos no primeiro exercício sobre a propriedade "length", que nos informa a
quantidade de itens existentes na lista. Propriedades são simplesmente valores
associados a objetos.

"Métodos" por sua vez são "funções" que executam algo relacionado ao objeto. Lembram
de "console.log()"?

console é um objeto.
log() é um método do objeto console.

A forma de acessarmos o método de um objeto é justamente utilizando o nome do objeto
(no caso do exercício de agora, o nome da lista) seguido de um ponto, e então o
nome do método após o ponto, lembrando de abrir os parênteses após o nome do método
para que este seja executado.

Vamos aos métodos de lista que veremos hoje. Para os exemplos a seguir, considere
a lista de exemplo abaixo:

const listaExemplo = ["Este", "Esse", "Aquele", "Aqui", "Aí", "Alí"]

1. push: O método "push", do verbo "empurrar" em inglês, permite inserir um
         ou mais itens na lista, sempre no final dela:

listaExemplo.push("Acolá")
["Este", "Esse", "Aquele", "Aqui", "Aí", "Alí", "Acolá"]

listaExemplo.push("Isto", "Isso", "Aquilo")
["Este", "Esse", "Aquele", "Aqui", "Aí", "Alí", "Acolá", "Isto", "Isso", "Aquilo"]

 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

2. pop: O método "pop", do verbo "estourar" em inglês, remove o último item
        da lista, e retorna este item removido permitindo que ele seja armazenado
        em uma variável caso desejado:

listaExemplo.pop()
["Este", "Esse", "Aquele", "Aqui", "Aí", "Alí", "Acolá", "Isto", "Isso"]

const itemRemovido = listaExemplo.pop()
["Este", "Esse", "Aquele", "Aqui", "Aí", "Alí", "Acolá", "Isto"]
itemRemovido === "Isso"

 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

3. shift: O método "shift", do verbo "deslocar", funciona igual ao método "pop",
          mas ao invés de fazer isso  com o último item da lista, faz isso com
          o primeiro item:

listaExemplo.shift()
["Esse", "Aquele", "Aqui", "Aí", "Alí", "Acolá", "Isto", "Isso"]

const exPrimeiroItem = listaExemplo.shift()
["Aquele", "Aqui", "Aí", "Alí", "Acolá", "Isto", "Isso"]
exPrimeiroItem === ""Esse"

 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

4. unshift: O método "unshift", sem tradução direta, faz o "oposto" do que o
            "shift" faz, ou seja, ele funciona como o "push", mas para o começo
            da lista. Ele insere um ou mmais valores novos no início da lista:

listaExemplo.unshift("Meu")
["Meu", "Aquele", "Aqui", "Aí", "Alí", "Acolá", "Isto", "Isso"]

listaExemplo.unshift("Teu", "Nosso")
["Teu", "Nosso", "Meu", "Aquele", "Aqui", "Aí", "Alí", "Acolá", "Isto", "Isso"]

 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

5. concat: O método "concat", do verbo "concatenar" (ligar o final de um item ao
           começo de outro), faz justamente isso com listas: Une duas ou mais
           listas, na sequência que forem informadas:

const listaUm = ["a", "b", "c"]
const listaDois = [1, 2, 3]
const listaTres = ["#", "@", "&"]

listaUm.concat(listaDois)
["a", "b", "c", 1, 2, 3]

listaUm.concat(listaTres, ["nova", "lista", "criada", "na", "hora"])
["a", "b", "c", 1, 2, 3, "#", "@", "&", "nova", "lista", "criada", "na", "hora"]

 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

 6. reverse: O método "reverse", do verbo "inverter", faz exatamente isso: ele
             modifica a lista original invertendo a ordem dos itens:

const listaOriginal = [1, 2, 3, 4, 5, 6, 7, 8]
listaOriginal.reverse()
[8, 7, 6, 5, 4, 3, 2, 1]
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
------------------------------------------------------------------------------

Questões 01 a 14: Exercícios com métodos de listas

MÍNIMO NECESSÁRIO PARA NOTA MÁXIMA: 10 questões
*/

/* Questão 1 */
const profissoes = []
profissoes.push("programador(a)", "designer", "engenheiro(a)", "veterinário(a)", "administrador(a)")
export const resposta01 = profissoes

/* Questão 2 */
const removidoPop = profissoes.pop()
export const resposta02 = removidoPop

/* Questão 3 */
profissoes.unshift("músico(a)")
export const resposta03 = profissoes

/* Questão 4 */
const removidoShift = profissoes.shift()
export const resposta04 = removidoShift

/* Questão 5 */
const removidos = [removidoPop, removidoShift]
const listaConcat = profissoes.concat(removidos)
export const resposta05 = listaConcat

/* Questão 6 */
profissoes.reverse()
export const resposta06 = profissoes

/* Questão 7 */
const vertebrados = []
const invertebrados = []
const animais = []

vertebrados.push("elefante", "leopardo", "porco-espinho")
invertebrados.push("polvo", "formiga", "caranguejo")

const listaAnimais = animais.concat(vertebrados, invertebrados)
export const resposta07 = listaAnimais

/* Questão 8 */
const ultimoAnimal = listaAnimais.pop()
listaAnimais.unshift(ultimoAnimal)
export const resposta08 = listaAnimais

/* Questão 9 */
listaAnimais.reverse()

let a1 = listaAnimais.shift()
listaAnimais.push(a1)

let a2 = listaAnimais.shift()
listaAnimais.push(a2)

let a3 = listaAnimais.shift()
listaAnimais.push(a3)

export const resposta09 = listaAnimais

/* Questão 10 */
let lista10 = listaAnimais.concat(["carcará", "morcego", "salmão"])
lista10.reverse()
lista10 = lista10.concat(["lesma", "borboleta", "ostra"])
export const resposta10 = lista10

/* Questão 11 */
let pedras = []
pedras = pedras.concat(["quartzo", "basalto", "granito"])
pedras.reverse()
pedras.push("calcário", "mármore", "mica")
pedras.reverse()
export const resposta11 = pedras

/* Questão 12 */
pedras.unshift("jade")
pedras.unshift("obsidiana")
pedras.unshift("zircônio")

pedras = pedras.concat(["topázio", "lazurita", "ônix"])
export const resposta12 = pedras

/* Questão 13 */
for (let i = 0; i < 3; i++) {
  let item = pedras.shift()
  pedras.push(item)
}
pedras.reverse()
export const resposta13 = pedras

/* Questão 14 */
const removidosFinal = []

for (let i = 0; i < 6; i++) {
  removidosFinal.push(pedras.pop())
}

export const resposta14 = removidosFinal

