/*SEMANA 1 = criando itens para manipulação futura

Escolhido: Lista de filmes

1. Para o item que você decidiu, pense nas características que são importantes para construí-lo. Vamos usar estas características para definir exemplos destes objetos usando o código.
Você precisará criar pelo menos:
  * uma característica String;
  * uma característica Number;
  * uma característica Boolean;
  
2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.
*/

const titulo = 'O estranho mundo de Jack (Nightmare before christmas)'
const sinopse = 'Jack Skellington, o Rei das Abóboras, se cansa de fazer o Dia das Bruxas todos os anos e deixa os limites da cidade. Por acaso, acaba atravessando o portal do Natal, onde vê a alegria do espírito natalino. Ao retornar para a Cidade do Halloween, sem ter compreendido o que viu, ele começa a convencer os cidadãos a sequestrarem o Papai Noel e fazerem seu próprio Natal. Apesar de sua leal namorada Sally ser contra, o Papai Noel é capturado e os fatos mostrarão que Sally estava certa o tempo todo.'
const anoDeLancamento = 1993
const genero = 'Fantasia/Musical'
const ehNacional = false

const titulo1 = 'Adoráveis Mulheres (Little Women)'
const sinopse1 = 'Nos anos seguintes à Guerra de Secessão, Jo March e suas duas irmãs voltam para casa quando Beth, a tímida irmã caçula, desenvolve uma doença devastadora que muda para sempre a vida delas.'
const anoDeLancamento1 = 2020
const genero1 = 'Romance'
const ehNacional1 = false

const titulo2 = 'O Auto da Compadecida'
const sinopse2 = 'As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região.'
const anoDeLancamento2 = 2000
const genero2 = 'Comédia'
const ehNacional2 = true

const titulo3 = 'Capitão Fantástico (Captain Fantastic)'
const sinopse3 = 'Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.'
const anoDeLancamento3 = 2016
const genero3 = 'Drama'
const ehNacional3 = false

const titulo4 = 'Bacurau'
const sinopse4 = 'Os moradores de Bacurau, um pequeno povoado do sertão brasileiro, descobrem que a comunidade não consta mais em qualquer mapa. Aos poucos, eles percebem algo estranho na região: enquanto drones passeiam pelos céus, estrangeiros chegam à cidade. Quando carros são baleados e cadáveres começam a aparecer, Teresa, Domingas, Acácio, Plínio, Lunga e outros habitantes chegam à conclusão de que estão sendo atacados. Agora, o grupo precisa identificar o inimigo e criar coletivamente um meio de defesa.'
const anoDeLancamento4 = 2019
const genero4 = 'Thriller'
const ehNacional4 = true

// 3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;

const media = (anoDeLancamento+anoDeLancamento1+anoDeLancamento2+anoDeLancamento3+anoDeLancamento4)/5
console.log(media)

// 4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.

const ehNacionalVerificacao = ehNacional && ehNacional1 && ehNacional2 && ehNacional3 && ehNacional4
console.log(ehNacionalVerificacao) // false pois ehNacional; ehNacional1 e ehNacional4 são falses



