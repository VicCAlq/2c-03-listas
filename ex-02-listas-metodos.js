/*
Assunto 02 - Métodos de listas
*/

/* Questão 1
Usando const ao invés de let, crie uma lista vazia chamada profissoes. Usando o
método push, adicione nesta lista as profissões "programador(a)", "designer",
"engenheiro(a)", "veterinário(a)" e "administrador(a)". Após adicionar os itens,
envie a lista com as profissões adicionadas na resposta01.
*/
// Array na linha abaixo
const profissoes = []

// Operações necessárias e resposta a partir da linha abaixo
profissoes.push("programador(a)", "designer", "engenheiro(a)", "veterinário(a)", "administrador(a)")
export const resposta01 = profissoes


/* Questão 2
Continuando com a lista de profissões da questão 1, use o método pop para remover
o último item da lista e armazená-lo em uma variável. Envie esta variável na
resposta02.
*/
// Operações necessárias e resposta a partir da linha abaixo
const removidoPop = profissoes.pop()
export const resposta02 = removidoPop


/* Questão 3
Seguindo com a mesma lista de profissões da questão 1, use o método unshift
para adicionar a profissão "músico(a)" no início da lista, e retorne
a lista completa na resposta03.
*/
// Operações necessárias e resposta a partir da linha abaixo
profissoes.unshift("músico(a)")
export const resposta03 = profissoes


/* Questão 4
Ainda com a lista da questão 1, crie uma nova variável e use o método "shift" 
na lista de profissões para remover o atual primeiro item da lista e guardá-lo
nesta variável. Envie a variável com a profissão removida na resposta04.
*/
// Operações necessárias e resposta a partir da linha abaixo
const removidoShift = profissoes.shift()
export const resposta04 = removidoShift


/* Questão 5
Continuando com a lista da questão 1, crie uma lista com as profissões removidas
pelos métodos "pop" e "shift" nas questões 2 e 4 (nesta exata ordem), e use o 
método "concat" na lista de profissões para adicionar esta nova lista no final 
da lista de profissões da questão 1. Envie a lista completa na resposta05
*/
// Operações necessárias e resposta a partir da linha abaixo
const removidas = [removidoPop, removidoShift]
const listaProfissoesConcat = profissoes.concat(removidas)
export const resposta05 = listaProfissoesConcat


/* Questão 6
Finalizando com a lista da questão 1, use nela o método reverse para inverter
a ordem da lista, e envie a lista com sua ordem invertida na resposta06.
*/
// Operações necessárias e resposta a partir da linha abaixo
profissoes.reverse()
export const resposta06 = profissoes


/* Questão 7
Crie três listas vazias (usando const e não let)
*/
// Operações necessárias e resposta a partir da linha abaixo
const vertebrados = []
const invertebrados = []
const animais = []

vertebrados.push("elefante", "leopardo", "porco-espinho")
invertebrados.push("polvo", "formiga", "caranguejo")

const listaAnimais = animais.concat(vertebrados, invertebrados)
export const resposta07 = listaAnimais


/* Questão 8
Seguindo com a lista "animais" criada na questão 7
*/
// Operações necessárias e resposta a partir da linha abaixo
let tempAnimal

tempAnimal = listaAnimais.pop()
listaAnimais.unshift(tempAnimal)

tempAnimal = listaAnimais.pop()
listaAnimais.unshift(tempAnimal)

tempAnimal = listaAnimais.pop()
listaAnimais.unshift(tempAnimal)

export const resposta08 = listaAnimais


/* Questão 9
Use reverse e depois mova três itens do começo para o final
*/
// Operações necessárias e resposta a partir da linha abaixo
listaAnimais.reverse()

let mover

mover = listaAnimais.shift()
listaAnimais.push(mover)

mover = listaAnimais.shift()
listaAnimais.push(mover)

mover = listaAnimais.shift()
listaAnimais.push(mover)

export const resposta09 = listaAnimais


/* Questão 10
Concat + reverse + concat
*/
// Operações necessárias e resposta a partir da linha abaixo
let listaTemp = listaAnimais.concat(["carcará", "morcego", "salmão"])

listaTemp.reverse()

listaTemp = listaTemp.concat(["lesma", "borboleta", "ostra"])

export const resposta10 = listaTemp


/* Questão 11
Lista pedras
*/
// Operações necessárias e resposta a partir da linha abaixo
const pedras = []

let pedrasTemp = pedras.concat(["quartzo", "basalto", "granito"])

pedrasTemp.reverse()

pedrasTemp.push("calcário", "mármore", "mica")

pedrasTemp.reverse()

export const resposta11 = pedrasTemp


/* Questão 12
Adicionar itens com unshift e concat
*/
// Operações necessárias e resposta a partir da linha abaixo
pedrasTemp.unshift("jade")
pedrasTemp.unshift("obsidiana")
pedrasTemp.unshift("zircônio")

pedrasTemp = pedrasTemp.concat(["topázio", "lazurita", "ônix"])

export const resposta12 = pedrasTemp


/* Questão 13
Mover três primeiros itens para o final
*/
// Operações necessárias e resposta a partir da linha abaixo
let pedraTemp

pedraTemp = pedrasTemp.shift()
pedrasTemp.push(pedraTemp)

pedraTemp = pedrasTemp.shift()
pedrasTemp.push(pedraTemp)

pedraTemp = pedrasTemp.shift()
pedrasTemp.push(pedraTemp)

pedrasTemp.reverse()

export const resposta13 = pedrasTemp


/* Questão 14
Remover 6 últimos itens e guardar em nova lista
*/
// Operações necessárias e resposta a partir da linha abaixo
const removidasPedras = []

removidasPedras.push(pedrasTemp.pop())
removidasPedras.push(pedrasTemp.pop())
removidasPedras.push(pedrasTemp.pop())
removidasPedras.push(pedrasTemp.pop())
removidasPedras.push(pedrasTemp.pop())
removidasPedras.push(pedrasTemp.pop())

export const resposta14 = removidasPedras
