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

/* Questão 1
Usando const ao invés de let, crie uma lista vazia chamada profissoes. Usando o
método push, adicione nesta lista as profissões "programador(a)", "designer",
"engenheiro(a)", "veterinário(a)" e "administrador(a)". Após adicionar os itens,
envie a lista com as profissões adicionadas na resposta01.
*/
// Array na linha abaixo

// Operações necessárias e resposta a partir da linha abaixo
export const resposta01 = false

/* Questão 2
Continuando com a lista de profissões da questão 1, use o método pop para remover
o último item da lista e armazená-lo em uma variável. Envie esta variável na
resposta02.
*/
// Operações necessárias e resposta a partir da linha abaixo
export const resposta02 = false

/* Questão 3
Seguindo com a mesma lista de profissões da questão 1, use o método unshift
para adicionar a profissão "músico(a)" no início da lista, e retorne
a lista completa na resposta03.
*/
// Operações necessárias e resposta a partir da linha abaixo
export const resposta03 = false

/* Questão 4
Ainda com a lista da questão 1, crie uma nova variável e use o método "shift" 
na lista de profissões para remover o atual primeiro item da lista e guardá-lo
nesta variável. Envie a variável com a profissão removida na resposta04.
*/
// Operações necessárias e resposta a partir da linha abaixo
export const resposta04 = false

/* Questão 5
Continuando com a lista da questão 1, crie uma lista com as profissões removidas
pelos métodos "pop" e "shift" nas questões 2 e 4 (nesta exata ordem), e use o 
método "concat" na lista de profissões para adicionar esta nova lista no final 
da lista de profissões da questão 1. Envie a lista completa na resposta05
*/
// Operações necessárias e resposta a partir da linha abaixo
export const resposta05 = false

/* Questão 6
Finalizando com a lista da questão 1, use nela o método reverse para inverter
a ordem da lista, e envie a lista com sua ordem invertida na resposta06.
*/
// Operações necessárias e resposta a partir da linha abaixo
export const resposta06 = false

/* Questão 7
Crie três listas vazias (usando const e não let), uma chamada "vertebrados", 
outra chamada "invertebrados", e a terceira chamada "animais". Use o método 
push para adicionar na lista de "vertebrados" os animais "elefante", "leopardo" 
e "porco-espinho", e na lista "invertebrados" use o mesmo método para adicionar 
os animais "polvo", "formiga" e "caranguejo". Por fim, use o método concat na 
lista "animais" para juntar o conteúdo das listas "vertebrado" e "invertebrado" 
dentro de si, nesta exata ordem, e retorne esta lista na resposta07.
*/
// Operações necessárias e resposta a partir da linha abaixo
export const resposta07 = false

/* Questão 8
Seguindo com a lista "animais" criada na questão 7, use os métodos pop e unshift
para fazer com que os animais inicialmente pertencentes a lista "invertebrados"
fiquem na frente dos animais inicialmente pertencentes a lista de "vertebrados".
Envie a lista animais modificada na resposta08.
*/
// Operações necessárias e resposta a partir da linha abaixo
export const resposta08 = false

/* Questão 9
Ainda utilizando a lista "animais" da questão 7, use o método reverse na lista,
e após isso use os métodos shift e push para mover os três itens da frente para
o final da fila, um de cada vez. Envie a lista animais modificada na resposta09.
*/
// Operações necessárias e resposta a partir da linha abaixo
export const resposta09 = false

/* Questão 10
Finalizando com a lista "animais" da questão 7, use o método concat na lista
para adicionar os animais "carcará", "morcego" e "salmão". Use o método reverse
na lista após adicionar estes animais, e use novamente o método concat para
adicionar os animais "lesma", "borboleta" e "ostra" no final da lista.
Envie a lista animais modificada na resposta10.
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

