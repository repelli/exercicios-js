//FOR
//contando de 1 até N

/*
let n = parseInt(prompt("Digite um número: "))

for(let i = 1; i <=n; i++)
{
    console.log(i);
    
}


for(let i = n; i >= 0; i--)
    {
        console.log(i);
        
    }



//WHILE
//FAZER UMA SOMA

let soma =  0;
let i = 1;

while(i <= 10)
{
    soma +=  i;
    console.log("O resultado atual é: " + soma);
    i++;
}

console.log("A soma total dos 10 números é: "+ soma);



// DO / WHILE executa ao menos uma vez

let numero = 1

do{
    console.log("Número: " + numero );
    numero ++;
}while( numero <=5 )
*/

//FOREACH percorre um array


//array de números
let numeros = [1,2,3,4,5];
numeros.forEach(function(numero) //poderia ser qualquer coisa no interior de fuction, não necessariamente numero
{
    console.log("Número:   " + numero );
})

//array de string

let frutas =["maça","banana","uva","pera"];
frutas.forEach(function(fruta){
    console.log(fruta); //nome em cima e em baixo deve ser igual
})

for( let i = 0; i < numeros.length; i++)
{
    console.log("Número: " + numeros[i] + " posição: " + i);
}