/*
Tipo de variável
let 
var 
const
*/
/*
let nome = "Fernando"; //não obrigatório ;
let idade = 46;

console.log("Ola meu nome é " + nome + " tenho " + idade + "anos.")

let mensagem  = `Ola´, meu nome é  ${nome}`
alert(mensagem);

console.log(typeof mensagem); //imprime o tipo da variável retorna a string
console.log(typeof idade); //number

let profissao;
console.log(typeof profissao) //variavel sem valor armazenado undefined

let endereco = null; // ausencia de valor
console.log(typeof endereco);

// ESTRUTURA CONDICIONAL

//IF -ELSE


let temperatura = 12;

if (temperatura > 25){
    console.log("Esta calor!")
}
else{
    console.log("Está frio!")
}
     

//Entrada de dados pelo usuário

let nome_Usuario = prompt("Insira o seu nome: ");
alert("Seu nome é: " + nome_Usuario);

//IF /ELSE IF /ELSE

let nota = parseInt(prompt("Digite a nota: "))

if(nota > 6){
    console.log("Aprovado(a)!")
}else if (nota >= 5){
    console.log("Esta de recuperacao.!!")
} else{
    console.log("Esta reprovado!!")
}
    */
   // IF ternário

   let saldo = 90
   let podeComprar = saldo >=100? "Compra aprovada!":"Saldo insuficiente"
   console.log(podeComprar)

   /* =
   if(saldo >=100){
    podeComprar="Compra aprovada"
   }else {
    podeComprar="Saldo insulficiente"
   }
   console.log(podeComprar)
   */

   // CONDICIONAL ANINHADA 
   //MULTIPLAS VERIFICAÇÕES

   /*
   let hora=8
   let diaDaSemana = "terça"

   if(hora >= 6 && hora < 12)
   {
    console.log("Bom dia!")
   }else{
    if(hora >= 12 && hora < 18){
        if(diaDaSemana == "Segunda"){
            console.log("Boa tarde! Ótima semana!")
        }else{
            console.log("Boa tarde!")
        }
    }else{
        console.log("Boa noite")
    }
   }
    */
   //SWITCH CASE

   let dia = 3;

   switch(dia){
    case 1: 
        console.log("Domingo! ");
        break;
    case 2: 
       console.log("Segunda-feira");
       break;
    case 3: 
        console.log("Quarta-feira");
        break;
    case 4:
         console.log("Quinta-feira");
         break;
    case 5:
        console.log("Sexta-feira");
        break;
    default:
        console.log("Dia inválido!");
        break; // opcional no default
   }

   
