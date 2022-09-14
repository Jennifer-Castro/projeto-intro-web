/*SEMANA 1 = criando itens para manipulação futura

Escolhido: Lista de filmes

semana1 - 1. Para o item que você decidiu, pense nas características que são importantes para construí-lo. Vamos usar estas características para definir exemplos destes objetos usando o código.
Você precisará criar pelo menos:
  * uma característica String;
  * uma característica Number;
  * uma característica Boolean;
  
semana1 - 2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.
*/



const titulo = 'O estranho mundo de Jack (Nightmare before christmas)'
const sinopse = 'Jack Skellington, o Rei das Abóboras, se cansa de fazer o Dia das Bruxas todos os anos e deixa os limites da cidade. Por acaso, acaba atravessando o portal do Natal, onde vê a alegria do espírito natalino. Ao retornar para a Cidade do Halloween, sem ter compreendido o que viu, ele começa a convencer os cidadãos a sequestrarem o Papai Noel e fazerem seu próprio Natal. Apesar de sua leal namorada Sally ser contra, o Papai Noel é capturado e os fatos mostrarão que Sally estava certa o tempo todo.'
const anoDeLancamento = 1993
const genero = 'Fantasia/Musical'
const ehNacional = false
const elencoPrincipal = ["Catherine O' Hara (Sally)", "Chris Sarandon (Jack)", "Ed Ivory (Papai Noel)", "William Hickey (Doctor Finklestein)"]//Semana 2 = criando novos dados em forma de array para os itens anteriores

//semana2 - continuação
console.log(
`Título: ${titulo.toUpperCase()}\n
Sinopse: ${sinopse}\n
Ano de Lançamento: ${anoDeLancamento}\n
Gênero: ${genero}\n
Filme Nacional?: ${ehNacional}\n
Elenco principal: ${elencoPrincipal}`
)

const titulo1 = 'Adoráveis Mulheres (Little Women)'
const sinopse1 = 'Nos anos seguintes à Guerra de Secessão, Jo March e suas duas irmãs voltam para casa quando Beth, a tímida irmã caçula, desenvolve uma doença devastadora que muda para sempre a vida delas.'
const anoDeLancamento1 = 2020
const genero1 = 'Romance'
const ehNacional1 = false
const elencoPrincipal1 = ["Eliza Scanlen (Beth March)", "Emma Watson(Meg March)", "Florence Pugh (Amy March)", "Saoirse Ronan (Jo March)", "Timothée Chalamet (Laurie)"]//Semana 2 = criando novos dados em forma de array para os itens anteriores

//semana2 - continuação
console.log(
`Título: ${titulo1.toUpperCase()}\n
Sinopse: ${sinopse1}\n
Ano de Lançamento: ${anoDeLancamento1}\n
Gênero: ${genero}\n
Filme Nacional?: ${ehNacional1}\n
Elenco principal: ${elencoPrincipal1}`
)

const titulo2 = 'O Auto da Compadecida'
const sinopse2 = 'As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região.'
const anoDeLancamento2 = 2000
const genero2 = 'Comédia'
const ehNacional2 = true
const elencoPrincipal2 = ["Diogo Vilela (Eurico)", "Denise Fraga (Dora)", "Fernanda Montenegro (Nossa Senhora)", "Luis Melo (Diabo)", "Marco Nanini (Cangaceiro)", "Matheus Natchergaele (João Grilo)", "Maurício Gonçalves(Jesus)", "Selton Mello (Chicó)", "Virgínia Cavendish (Rosinha)"]//Semana 2 = criando novos dados em forma de array para os itens anteriores

//semana2 - continuação
console.log(
`Título: ${titulo2.toUpperCase()}\n
Sinopse: ${sinopse2}\n
Ano de Lançamento: ${anoDeLancamento2}\n
Gênero: ${genero2}\n
Filme Nacional?: ${ehNacional2}\n
Elenco principal: ${elencoPrincipal2}`
)

const titulo3 = 'Capitão Fantástico (Captain Fantastic)'
const sinopse3 = 'Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.'
const anoDeLancamento3 = 2016
const genero3 = 'Drama'
const ehNacional3 = false
const elencoPrincipal3 = ["Annalise Basso (Vespyr)", "Charlie Shotwell(Nai)", "George Mackay (Bo)", "Nicholas Hamilton (Rellian)", "Samantha Isler (Kielyr)", "Shree Crooks(Zaja)", "Viggo Mortensen (Ben)"]//Semana 2 = criando novos dados em forma de array para os itens anteriores

//semana2 - continuação
console.log(
`Título: ${titulo3.toUpperCase()}\n
Sinopse: ${sinopse3}\n
Ano de Lançamento: ${anoDeLancamento3}\n
Gênero: ${genero3}\n
Filme Nacional?: ${ehNacional3}\n
Elenco principal: ${elencoPrincipal3}`
)

const titulo4 = 'Bacurau'
const sinopse4 = 'Os moradores de Bacurau, um pequeno povoado do sertão brasileiro, descobrem que a comunidade não consta mais em qualquer mapa. Aos poucos, eles percebem algo estranho na região: enquanto drones passeiam pelos céus, estrangeiros chegam à cidade. Quando carros são baleados e cadáveres começam a aparecer, Teresa, Domingas, Acácio, Plínio, Lunga e outros habitantes chegam à conclusão de que estão sendo atacados. Agora, o grupo precisa identificar o inimigo e criar coletivamente um meio de defesa.'
const anoDeLancamento4 = 2019
const genero4 = 'Thriller'
const ehNacional4 = true
const elencoPrincipal4 = ["Bárbara Colen (Teresa)", "Silvero Pereira (Lunga)", "Sônia Braga (Domingas)", "Thomas Aquino (Acácio)", "Wilson Rabelo (Plínio)"]//Semana 2 = criando novos dados em forma de array para os itens anteriores

//semana2 - continuação
console.log(
`Título: ${titulo4.toUpperCase()}\n
Sinopse: ${sinopse4}\n
Ano de Lançamento: ${anoDeLancamento4}\n
Gênero: ${genero4}\n
Filme Nacional?: ${ehNacional4}\n
Elenco principal: ${elencoPrincipal4}`
)

// semana1 - 3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;

const media = (anoDeLancamento + anoDeLancamento1 + anoDeLancamento2 + anoDeLancamento3 + anoDeLancamento4) / 5
console.log(media)

// semana1 - 4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.

const ehNacionalVerificacao = ehNacional && ehNacional1 && ehNacional2 && ehNacional3 && ehNacional4
console.log(ehNacionalVerificacao) // false pois ehNacional; ehNacional1 e ehNacional4 são falses





