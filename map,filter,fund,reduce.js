/* filter
filtrar números maiores que 2 

const numeros = [1,2,3,4,5,6];

const maioresQueDois  = numeros.filter(numero => numero > 2 )  //cria uma função

console.log(maioresQueDois)



 filtrar nome 

let nomes=["ana","Bruno","Carlos","Eva","Fernanda"];
let nomesLongos = nomes.filter(nome => nome.length > 5)  //nome é uma variavel auxiliar

console.log(nomesLongos)



//filtra números pares

let numeros =[1,2,3,4,5,6,7,8,9,10];
let pares = numeros.filter( numero => numero % 2 === 0 )
console.log(pares)


//filtra um objeto
//com objeto conseguimos trazer o par chave valor

let pessoas = [
{nome: "Lucas", idade: 17},
{nome: "Mariana", idade: 22},
{nome: "Ana Catarina",  idade: 15},
{nome: "Juliana", udade: 30}
]

let adultos = pessoas.filter(pessoa => pessoa.idade >= 18 )
console.log(adultos)


//FIND 
//traz o primeiro resultado que encontrar correspondente a condição


//procurar um produto pelo preço

const produtos = [
{id:1, nome: "Teclado" , preco: 100},
{id:2, nome: "Mouse", preco: 50},
{id:3, nome: "Monitor", preco: 700}
]
 const produtoCaro = produtos.find(produto => produto.preco > 600) //produto é um auxiliar para percorrer a lista
 console.log(produtoCaro)



 //Encontrar o primeiro número maior que 10

 let numeros = [5,8,12,20,3,15];

 let encotrado = numeros.find(numero => numero > 10)
 console.log(encotrado)



 let nomes =["Ana","Bruno","Carlos","Eva","Catia" ]
let nomeEncontrado = nomes.find( nome => nome.startsWith("C")) // startWith nomes que comecem com o valor no ()
console.log(nomeEncontrado)


 

// MAP percorre todo o array e conseguimos transformar com base na condição

const nueros = [1,2,3,4,5]
const numerosDobrados = numeros.map(numero => numero * 2)
console.log(numerosDobrados)


//criando um array a partir de objetos

let pessoas = [
    {nome: "Lucas", idade: 17},
    {nome: "Mariana", idade: 22},
    {nome: "Ana Catarina",  idade: 15},
    {nome: "Juliana", udade: 30}
    ]

    let nomes = pessoas.map(pessoa => 

    console.log(nomes)

    let mensagem = pessoas.map(pessoa =>
        `${pessoa.nome} tem ${pessoa.idade} anos.`
    )

   //Deixar nomes em maiusculos e adicioar um sufixo

   const nomes = ["ana","bruno","ricardo"]
   const nomesMaiusclo = nomes.map(nome => "Colaborador: " + nome.toLocaleUpperCase())
   console.log(nomesMaiusclo)
   
   

   //REDUCE 

   //Reduz um array a um único valor com ajuda de um acumulador

   //somar todos os números do array

   //reduce(acumulador, auxiliar)

   const numeros =[1,2,3,4,5]
   const soma =  numeros.reduce((acumulador, numero) => 
    acumulador + numero, 0 // acumulador começa em 0
)
   console.log(soma)


// verificar o maior número do array

const numeros = [10,5,8,20,3]
const maiorNumero = numeros.reduce((max,numero) => {
    if(numero >  max){
        return numero
    }else{
        return max
    }
}, numeros[0]
)
console.log(maiorNumero)

//FILTER
//contar a frequência de palavras
const palavras = ["maça" ,"banana", "maça", "laranja","banana","maça"]

const contagem = palavras.reduce((acumulador, palavra)=> {
    acumulador[palavra] = (acumulador[palavra] || 0) + 1
    return acumulador
},{ }) 

console.log(contagem)



//CALCULAR A MÉDIA DE NOTAS

const notas = [7,8,9,6,10]
const media = notas.reduce((total,nota) => total + nota,0) / notas.length
console.log(media)



//USO COMBINADO
const usuarios = [ 
    {id:1, nome:"Alice",idade: 25 },
    {id:2, nome:"Bob",idade: 30 },
    {id:3, nome:"Carol",idade: 20 }
]

//Filtrar usuários com idade maior que 21

const maioresDeIdade = usuarios.filter(usuario => usuario.idade > 21)
console.log(maioresDeIdade)

//Encontrar o primeiro usuário com idade maior que 21

const usuario = usuarios.find(usuario => usuario.idade > 21)
console.log(usuario)


//Criar um array apenas com nomes de usuários

const nomeUsuarios = usuarios.map( usuario => usuario.nome)
console.log(nomeUsuarios)


//Somar todas as idades  usando o recduce
const somaIdades = usuarios.reduce((total,usuario) => total + usuario.idade,0)
console.log(somaIdades)


//EXERCÍCIOS 09/09/2025

//FILTER

//EXERCÍCIO 1

const notas = [4,7,9,3,10,5];
const notasMaiores = notas.filter(nota => nota >= 7)
console.log(notasMaiores)

//EXERCÍCIO 2

const palavras = ["sola","mar","computador","lua","codigo"]
const palavrasMaior =  palavras.filter(palavra => palavra.length >=4)
console.log(palavrasMaior)

//EXERCÍCIO 3

const animais = ["gato","cachorro","peixe","elefante","abelha"]
const animaisComc = animais.filter(animal => animal[0] == 'c')
console.log(animaisComc)

//FIND

//EXERCÍCIO 1

const filmes = ["Avatar","Batman","Vingadores","Matrix","Barbie"]
const filme = filmes.find(filme => filme.startsWith("B"))
console.log(filme)

//EXERCÍCIO 2

const numeros = [2,4,6,9,12,15]
const impar = numeros.find( numero => numero % 2 !=0 )
console.log(impar)

//EXERCÍCIO 3

const alunos = [
    {nome:"Ana",nota: 8.0},
    {nome:"Carlos",nota: 5.0},
    {nome:"Beatriz",nota: 9.0},
]
const notaMaior = alunos.find( aluno => aluno.nota >=7)
console.log(notaMaior)

//MAP

//EXERCÍCIO 1

const temperaturas = [20,25,30,15]
const fahen = temperaturas.map( temperatura => temperatura * 1.8 +32)
console.log(fahen)


//EXERCÍCIO 2

const produtos = ["camisa","calça","sapato" ]
const maiuscula = produtos.map( produto => produto.toUpperCase(produto))
for(let i = 0 ; i < produtos.length; i++ ){
   console.log("Produto: "  + maiuscula[i])
}


//EXERCÍCIO 3

const numeros =[1,2,3,4]
const quadrado =numeros.map(numero => Math.pow(numero,2))
console.log(quadrado)


//REDUCE

//EXERCÍCIO 1

const valores = [ 100,200,50,150]
const soma = valores.reduce((acum,valor) => acum + valor, 0)
console.log(soma)
*/

//EXERCÍCIO 2

const palavras = [ "JS", "é","muito","legal"]
const juntar = palavras.reduce((junto, palavra) => junto + " " + palavra)
console.log(juntar)

//EXERCÍCIO 3  ****

const numeros = [1,2,3,4,5]
const media = numeros.reduce((total,numero) => total + numero,0)/(numeros.lenght)
console.log(media)


//DESÁFIOS

const livros = [
{titulo:"Dom Casmurro", paginas:300},
{titulo:"O Hobbit", paginas:295},
{titulo:"A revolução dos bichos", paginas:112},
]
let mais = livros.filter( livro => livro.paginas > 200)
console.log(mais)

let nomes = livros.map(livro => `${livro.titulo}` )
console.log(nomes)

const totalPaginas = livros.reduce((cont, livro) => {
    return cont + livro.paginas;
  }, 0);
  
  console.log("Total de páginas:", totalPaginas);