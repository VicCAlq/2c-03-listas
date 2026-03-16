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

// Questão 1
const profissoes = [];
profissoes.push("programador(a)", "designer", "engenheiro(a)", "veterinário(a)", "administrador(a)");
export const resposta01 = profissoes;

// Questão 2
const profissaoRemovidaPop = profissoes.pop();
export const resposta02 = profissaoRemovidaPop;

// Questão 3
profissoes.unshift("músico(a)");
export const resposta03 = profissoes;

// Questão 4
const profissaoRemovidaShift = profissoes.shift();
export const resposta04 = profissaoRemovidaShift;

// Questão 5
const removidas = [profissaoRemovidaPop, profissaoRemovidaShift];
const profissoesConcatenadas = profissoes.concat(removidas);
// Atualizando a referência para as próximas questões conforme o enunciado sugere continuidade
profissoes.splice(0, profissoes.length, ...profissoesConcatenadas); 
export const resposta05 = profissoes;

// Questão 6
profissoes.reverse();
export const resposta06 = profissoes;

// Questão 7
const vertebrados = [];
const invertebrados = [];
const animais = [];
vertebrados.push("elefante", "leopardo", "porco-espinho");
invertebrados.push("polvo", "formiga", "caranguejo");
const listaAnimais = animais.concat(vertebrados, invertebrados);
export const resposta07 = listaAnimais;

// Questão 8 (Invertebrados na frente: polvo, formiga, caranguejo, elefante, leopardo, porco-espinho)
// Para mover os 3 últimos para a frente usando pop/unshift:
listaAnimais.unshift(listaAnimais.pop()); // caranguejo
listaAnimais.unshift(listaAnimais.pop()); // formiga
listaAnimais.unshift(listaAnimais.pop()); // polvo
export const resposta08 = listaAnimais;

// Questão 9
listaAnimais.reverse(); 
// Move 3 da frente para o final
listaAnimais.push(listaAnimais.shift());
listaAnimais.push(listaAnimais.shift());
listaAnimais.push(listaAnimais.shift());
export const resposta09 = listaAnimais;

// Questão 10
const animaisNovos = listaAnimais.concat("carcará", "morcego", "salmão");
animaisNovos.reverse();
const listaFinal = animaisNovos.concat("lesma", "borboleta", "ostra");
export const resposta10 = listaFinal;
*/
// Operações necessárias e resposta a partir da linha abaixo
export const resposta10 = false

/* Questão 11
Crie (usando const) uma lista vazia chamada "pedras", e use nela o método concat
para adicionar os itens "quartzo", "basalto" e "granito". Use o método
reverse nessa lista, e após isso use o método push para adicionar os itens
"calcário", "mármore" e "mica". Use o método reverse novamente, e envie a lista
final na resposta11.
*/
// Operações necessárias e resposta a partir da linha abaixo
export const resposta11 = false

/* Questão 12
Continuando com a lista criada na questão 11, use o método unshift para adicionar
os itens "jade", "obsidiana" e "zircônio", um de cada vez, na ordem informada na 
questão. Use o método "concat" para adicionar os itens "topázio", "lazurita" e 
"ônix" ao final desta lista, e retorne-a na resposta12.
*/
// Operações necessárias e resposta a partir da linha abaixo
export const resposta12 = false

/* Questão 13
Seguindo com a lista de pedras, use os métodos shift e pop para mover os três
primeiros itens para o final da lista. Após isso, aplique o método reverse, e
envie a lista na resposta13.
*/
// Operações necessárias e resposta a partir da linha abaixo
export const resposta13 = false

/* Questão 14
Finalizando com a lista de pedras, use o método pop para remover os 6 itens finais
da lista e armazene-os em uma lista nova. Envie esta lista nova na resposta 14.
*/
// Operações necessárias e resposta a partir da linha abaixo
export const resposta14 = false

